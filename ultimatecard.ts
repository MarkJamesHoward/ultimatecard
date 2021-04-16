import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("ultimate-card")
class UltimateCard extends LitElement {
  @property({ type: Boolean }) NonResponsive = false;
  @property({ type: Boolean }) flipped = false;

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

      .image {
        perspective: 800px;
      }

      .back {
        background: red;
        transform: rotateY(180deg);
      }

      .front,
      .back {
        backface-visibility: hidden;
        grid-area: overlap;
      }

      .flip {
        transform: rotateY(180deg);
      }

      .flipcontainer {
        transform-style: preserve-3d;
        grid-template-areas: "overlap";
        display: grid;
        transition: 1s all ease-in-out;
      }
    `;
  }
  _handleImageClick() {
    this.flipped = !this.flipped;
    console.log("flip");
  }
  render() {
    return html`
      <div class="${this.NonResponsive ? "" : "CSSContainerQueryDiv"}">
        <div class="container">
          <div class="TextArea">
            <div part="title" class="title">
              <slot name="title">Default Title</slot>
            </div>
            <div class="description">
              <slot name="description">Default Description</slot>
            </div>
          </div>

          <div class="image" @click="${this._handleImageClick}">
            <div
              class="${!this.flipped ? "flip flipcontainer " : "flipcontainer"}"
            >
              <div class="back"> <slot name="back">back text here</slot></div>
              <div class="front">
                <slot name="image">Image goes here!</slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
