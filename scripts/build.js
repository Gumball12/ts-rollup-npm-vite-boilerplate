const ts = require('rollup-plugin-typescript2');
const pkg = require('../package.json');
const { uglify } = require('rollup-plugin-uglify');
const resolve = require('@rollup/plugin-node-resolve').default;
const dts = require('rollup-plugin-dts').default;
const rollup = require('rollup');
const chalk = require('chalk');
const { createServer } = require('vite');
const path = require('path');

const inputOptions = {
  input: 'src/index.ts',
  plugins: [
    resolve({
      browser: true,
    }),
    ts({
      tsconfig: './tsconfig.json',
    }),
  ],
};

const outputOptions = {
  file: pkg.main,
  format: 'es',
};

const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
  watch: {
    include: 'src/**',
  },
};

const typeInputOptions = {
  input: 'src/index.ts',
  plugins: [dts()],
};

const typeOutputOptions = {
  file: 'dist/index.d.ts',
  format: 'es',
};

const typeWatchOptions = {
  ...typeInputOptions,
  output: [typeOutputOptions],
  watch: {
    include: 'src/**',
  },
};

const typeBuild = async () => {
  const bundle = await rollup.rollup(typeInputOptions);
  await bundle.write(typeOutputOptions);
  await bundle.close();
};

const productionBuild = async () => {
  inputOptions.plugins.push(uglify());

  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);
  await bundle.close();

  await typeBuild();

  console.log(
    chalk.green.bold(' Rollup '),
    'Bundling has been completed successfully.',
  );
};

const watchBuild = () =>
  new Promise((resolve, reject) => {
    console.log(
      chalk.green.bold(' Rollup '),
      'Rollup observes changes to the source code in the src directory.',
    );

    let watcher;
    let typeWatcher;
    let isBootstrapPhase = true;

    watcher = rollup
      .watch(watchOptions)
      .on('change', async fileName =>
        console.log(
          chalk.blue.bold(' Rollup :: Rebuilt '),
          fileName.split('video-canvas')[1],
        ),
      )
      .on('event', ({ code, error }) => {
        if (code === 'END') {
          isBootstrapPhase = false;
          resolve();
        } else if (code === 'ERROR') {
          if (isBootstrapPhase) {
            watcher.close();
            typeWatcher.close();
          }

          reject(error);
        }
      });

    typeWatcher = rollup.watch(typeWatchOptions);
  });

const runViteServer = async () => {
  const server = await createServer({
    root: path.resolve(__dirname, '..', 'sandbox'),
  });

  await server.listen();

  const { address: host, port } = server.httpServer.address();
  console.log(
    chalk.green(' Vite '),
    'Server is now available on',
    `http://${host}:${port}`,
  );
};

if (process.env.NODE_ENV === 'production') {
  productionBuild();
} else if (process.env.NODE_ENV === 'watch') {
  watchBuild();
} else if (process.env.NODE_ENV === 'sandbox') {
  watchBuild().then(runViteServer).catch(console.error);
} else {
  console.log(
    chalk.yellow.bold(' Rollup '),
    'NODE_ENV detection failed. Run production build.',
  );

  productionBuild();
}
