import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './index.proxy.css';
import '../sections/markdown';
import { ResetCSS } from '../css';

const content = `
# hoge

hoge text

## article

article text

### Articles per Day

hogehoge

### Comments per Day

bar buzz

### Spam per Day

test text aiueo
`;

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = [
    ResetCSS,
    styles,
  ];

  @property() greeting = "Hello";
  @property() planet = "World";

  render() {
    return html`
<div @click=${this.togglePlanet}>
  ${this.greeting}
  <h2>buzzz bar</h2>a
  <span class="planet">${this.planet}</span>
  <markdown-content>
    ${content}
  </markdown-content>
  <button>hoghoge</button>
  <p>
    <a href="https://google.co.jp" target="_blank">bar buzz</a>
  </p>
</div>
`;
  }

  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}
