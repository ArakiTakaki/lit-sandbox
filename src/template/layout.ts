import { html } from "lit";
import '../pages/'

export const layout = () => {
  return html`
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script type="module" src="/dist/index.js" defer></script>
      </head>
      <body>
      <div id="app">
        <page-index></page-index>
      </div>
      </body>
    </html>
  `
};
