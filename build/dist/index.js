var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {LitElement, html, css} from "../_snowpack/pkg/lit.js";
import {customElement, property} from "../_snowpack/pkg/lit/decorators.js";
export let MyElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.greeting = "Hello";
    this.planet = "World";
  }
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }
  togglePlanet() {
    this.planet = this.planet === "World" ? "Mars" : "World";
  }
};
MyElement.styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
      cursor: pointer;
    }
  `;
__decorate([
  property()
], MyElement.prototype, "greeting", 2);
__decorate([
  property()
], MyElement.prototype, "planet", 2);
MyElement = __decorate([
  customElement("my-element")
], MyElement);
