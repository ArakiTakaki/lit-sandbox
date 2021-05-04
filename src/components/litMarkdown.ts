import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import marked from 'marked';
const litMarkdown = (text: string) => unsafeHTML(marked(text));
export default litMarkdown;
