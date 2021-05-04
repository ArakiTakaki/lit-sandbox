import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import litMarkdown from './components/litMarkdown';
import styles from './index.proxy.css';

@customElement("my-element-2")
export class Hoge extends LitElement {
  render() {
    return html`<div>my-element-2</div>`;
  }
}

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = styles;

  @property() greeting = "Hello";
  @property() planet = "World";
  render() {
    const bar = litMarkdown(`
## buzz

bar
bizz

markdown text

<my-element-2></my-element-2>

`)
    return html`
<span @click=${this.togglePlanet}>
  ${this.greeting}
  ${bar}
  <h2>buzzz bar</h2>a
  <my-element-2></my-element-2>
  <span class="planet">${this.planet}</span>
</span>
`;
  }

  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}
