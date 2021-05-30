import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
             <div class="image__holder"><img class="image__thombnail"></div>
             <h2 class="page-item__title image__title"></h2>
           </section>`);

    const imageElement = this.element.querySelector(
      ".image__thombnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElemnt = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadElement;
    titleElemnt.textContent = title;
  }
}
