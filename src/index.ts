import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './index.proxy.css';
import './sections/markdown';

@customElement("my-element-2")
export class Hoge extends LitElement {
  render() {
    return html`<div>my-element-2</div>`;
  }
}

const content = `
# markdown

markdown content
`

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = styles;

  @property() greeting = "Hello";
  @property() planet = "World";

  render() {
    return html`
<span @click=${this.togglePlanet}>
  ${this.greeting}
  <h2>buzzz bar</h2>a
  <my-element-2></my-element-2>
  <markdown-content content=${content}></markdown-content>
  <span class="planet">${this.planet}</span>
</span>
`;
  }

  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}
