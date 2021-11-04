# ts-rollup-npm-vite-boilerplate

Boilerplate for building a TypeScript + Rollup + Vite module that can be published to NPM.

## ⭐️ Included Packages

| Package Name                | Version                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TypeScript                  | [![TypeScript Badge](https://img.shields.io/badge/typescript-v4.4.4-blue)](https://www.npmjs.com/package/typescript/v/4.4.4)                                                        |
| Preact                      | [![Preact Badge](https://img.shields.io/badge/preact-v10.5.15-blue)](https://www.npmjs.com/package/preact/v/10.5.15)                                                                |
| Htm                         | [![Htm Badge](https://img.shields.io/badge/htm-v3.1.0-blue)](https://www.npmjs.com/package/htm/v/3.1.0)                                                                             |
| Jest                        | [![Jest Badge](https://img.shields.io/badge/jest-v27.3.1-blue)](https://www.npmjs.com/package/jest/v/27.3.1)                                                                        |
| Rollup                      | [![Rollup Badge](https://img.shields.io/badge/rollup-v2.59.0-blue)](https://www.npmjs.com/package/rollup/v/2.59.0)                                                                  |
| Rollup-plugin-dts           | [![Rollup-plugin-dts Badge](https://img.shields.io/badge/rollup--plugin--dts-v4.0.0-blue)](https://www.npmjs.com/package/rollup-plugin-dts/v/4.0.0)                                 |
| Rollup-plugin-typescript2   | [![Rollup-plugin-typescript2 Badge](https://img.shields.io/badge/rollup--plugin--typescript2-v0.30.0-blue)](https://www.npmjs.com/package/rollup-plugin-typescript2/v/0.30.0)       |
| Rollup-plugin-uglify        | [![Rollup-plugin-uglify Badge](https://img.shields.io/badge/rollup--plugin--uglify-v6.0.4-blue)](https://www.npmjs.com/package/rollup-plugin-uglify/v/6.0.4)                        |
| @rollup/plugin-node-resolve | [![@rollup-plugin-node-resolve Badge](https://img.shields.io/badge/@rollup/plugin--node--resolve-v13.0.6-blue)](https://www.npmjs.com/package/@rollup/plugin-node-resolve/v/13.0.6) |
| Vite                        | [![Vite Badge](https://img.shields.io/badge/vite-v2.6.13-blue)](https://www.npmjs.com/package/vite/v/2.6.13)                                                                        |
| Eslint                      | [![Eslint Badge](https://img.shields.io/badge/eslint-v8.1.0-blue)](https://www.npmjs.com/package/eslint/v/8.1.0)                                                                    |
| Prettier                    | [![Prettier Badge](https://img.shields.io/badge/prettier-v2.4.1-blue)](https://www.npmjs.com/package/prettier/v/2.4.1)                                                              |

## 🚀 Installation

### 1. Fork this Repo

After visiting [this link](https://github.com/Gumball12/ts-rollup-npm-vite-boilerplate), Fork the repository.

### 2. Clone your Repo

```sh
git clone https://github.com/<YOUR_GITHUB_NAME>/ts-rollup-npm-vite-boilerplate
cd ts-rollup-npm-vite-boilerplate
```

### 3. Edit the Package name, Version and Description

<p align="center">
  <img src="https://i.imgur.com/5VG8dWU.png" alt="Edit package.json fields" with="480">
</p>

### 4. Set `CODECOV_TOKEN` (Optional)

> If you don't need [CodeCov CI](https://about.codecov.io/), you should delete the [.github/workflows/ci.yml](./.github/workflows/ci.yml) file.

**Step 1**: Visite [CodeCov CI](https://about.codecov.io/) and get `CODECOV_TOKEN` for your repository.

<p align="center">
  <img src="https://i.imgur.com/dYEG19e.png" alt="Get the CODECOV_TOKEN" with="480">
</p>

Copy the `Upload Token` text.

**Step 2**: Enter the token with the name `CODECOV_TOKEN` in the **Secrets** of your GitHub repository.

<p align="center">
  <img src="https://i.imgur.com/ExwaJ63.png" alt="Enter the token" with="480">
</p>

### 5. Set `NPM_TOKEN` (Optional)

> If you don't need to Deploy with NPM, you should delete the [.github/workflows/publish.yml](./.github/workflows/publish.yml) file.

**Step 1**: Visite [NPM](https://www.npmjs.com/) and get `NPM_TOKEN` for your repository.

<p align="center">
  <img src="https://i.imgur.com/ZhEbOov.png" alt="Get the NPM_TOKEN - 1" with="480">
</p>

Click the `Generate New Token` Button

<p align="center">
  <img src="https://i.imgur.com/T7cyjmA.png" alt="Get the NPM_TOKEN - 2" with="480">
</p>

When generating a token, it must be created as an `automation` token.

<p align="center">
  <img src="https://i.imgur.com/IDmyTZr.png" alt="Get the NPM_TOKEN - 3" with="480">
</p>

Copy the `NPM Token` text.

**Step 2**: Enter the token with the name `NPM_TOKEN` in the **Secrets** of your GitHub repository.

<p align="center">
  <img src="https://i.imgur.com/OOVqaHO.png" alt="Enter the token" with="480">
</p>

**Step 3**: Edit the NPM account name in the [publish.yml](./.github/workflows/publish.yml) file

<p align="center">
  <img src="https://i.imgur.com/cBJXNgq.png" alt="Edit NPM account name" with="480">
</p>

Don't forget the `@`.

## 🛠 Usage

### Scripts

```sh
pnpm install # or (yarn|npm) install
pnpm test # unit tests
pnpm lint
pnpm build # production build
pnpm build:watch # for debug modules only
pnpm build:sandbox # for debug modules with sandbox (alias `pnpm start`)
```

### Publish to NPM

First, you need to deploy module with a Tag on GitHub using the [`npm version patch`](https://docs.npmjs.com/cli/v7/commands/npm-version) command.

```sh
# Update module version (This command changes `package.json`)
npm version patch

# Push to GitHub
git push origin main
git push origin <VERSION> # <VERSION> = vX.X.X
```

Then Create and Publish a new release on GitHub.

<p align="center">
  <img src="https://i.imgur.com/Lf4bjZN.png" alt="Publish a new release" with="480">
</p>

After completing the above process, you will see the NPM module deploy to `@npm-account-name/<PACKAGE_NAME>`.
