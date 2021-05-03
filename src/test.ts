import {render} from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {html} from 'lit';
import Stream, { Readable } from 'stream';
import './pages'
export const myTemplate = (id: string) => {
  return html`
    <div uid=${id}>
      <div>hoge</div>
      <page-index uid=${id} />
    </div>
  `
};

const generator = render(myTemplate('bar'));
async function readAll(stream: Readable) {
  let data = ''
  for await (const chunk of stream) {
    data += chunk
  }
  return data
}
const iterator = Stream.Readable.from(generator);
readAll(iterator).then(console.log)
