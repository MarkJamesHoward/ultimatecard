import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("ultimate-card")
class UltimateCard extends LitElement {
  @property({ type: Boolean }) NonResponsive = false;

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .CSSContainerQueryDiv {
        contain: layout inline-size;
      }

      .container {
        display: flex;
        flex-direction: column;
      }

      @container (min-width: 140ch) {
        .container {
          flex-direction: row;
        }
      }

      .title,
      .description {
        text-align: center;
      }

      .TextArea {
        flex-basis: 0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: 1px solid green;
      }

      .image {
        flex-basis: 0;
        flex-grow: 1;
      }

      ::slotted(img) {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `;
  }
  render() {
    return html`
      <div class="${this.NonResponsive ? '' : 'CSSContainerQueryDiv'}">
        <div class="container">
          <div class="TextArea">
            <div part="title" class="title">
              <slot name="title">Default Title</slot>
            </div>
            <div class="description">
              <slot name="description">Default Description</slot>
            </div>
          </div>

          <div class="image">
            <slot name="image">Image goes here!</slot>
          </div>
        </div>
      </div>
    `;
  }
}
