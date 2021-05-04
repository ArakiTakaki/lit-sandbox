import {LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import litMarkdown from '../components/litMarkdown';

@customElement("markdown-content")
export class MyElement extends LitElement {
  @property() content = "";
  render() {
    return html`
      <div>
        ${litMarkdown(this.content)}
      </div>
    `;
  }
}
