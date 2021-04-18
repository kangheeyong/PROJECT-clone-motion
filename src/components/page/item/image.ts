import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
             <div class="image__holder"><img class="image__thombnail"></div>
             <p class="image__title"></p>
           </section>`);

    const imageElement = this.element.querySelector(
      ".image__thombnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElemnt = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElemnt.textContent = title;
  }
}
