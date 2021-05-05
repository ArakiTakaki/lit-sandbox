import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { asyncReplace } from 'lit/directives/async-replace.js';
import styles from './index.proxy.css';
import { ResetCSS } from '../css';
import '../sections/markdown';

async function *getArticle(): AsyncIterable<string> {
  yield 'loading';
  const articleURL = (await import('./markdown.md')).default;
  if (typeof articleURL !== 'string') yield 'not found article';
  const response = await fetch(articleURL);
  yield 'fetched';
  const result = await response.text();
  yield result;
}

@customElement("my-article")
export class MyElement extends LitElement {
  static styles = [
    ResetCSS,
    styles,
  ];
  @state() textContent: (AsyncIterable<string> | null) = null;

  constructor() {
    super();
    this.textContent = getArticle();
  }

  render() {
    return html`
<div>
  <markdown-content content=${asyncReplace(this.textContent)}>
    # hoge
  </markdown-content>
</dvi>
`;
  }
}
