import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import litMarkdown from './components/litMarkdown';
import rawCss from './index.proxy.css';

@customElement("my-element-2")
export class Hoge extends LitElement {
  render() {
    return html`<div>my-element-2</div>`;
  }
}

@customElement("my-element")
export class MyElement extends LitElement {
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  // static styles = css`${unsafeCSS(rawCss)}`;
  static styles = rawCss;


  // Define reactive properties--updating a reactive property causes
  // the component to update.
  @property() greeting = "Hello";
  @property() planet = "World";

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, proeprty values, event handlers,
  // and child nodes/text.
  render() {
    const bar = litMarkdown(`
## buzz

bar
bizz

markdown text

<my-element-2></my-element-2>

`)
    console.log(rawCss);

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

  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render
  togglePlanet() {
    console.log('raw', rawCss);
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
}
