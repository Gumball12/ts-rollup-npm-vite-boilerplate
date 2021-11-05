import { html, render } from 'htm/preact';
import { useState } from 'preact/hooks';
import { hello } from '../src/index.ts';

const App = () => {
  const [count, setCount] = useState(0);

  setInterval(setCount, 1000, count + 1);

  return html`
    <main>
      <p>
        ${hello} from boilerplate!<br />
        count: ${count}
      </p>
    </main>
  `;
};

render(html`<${App} />`, document.body);
