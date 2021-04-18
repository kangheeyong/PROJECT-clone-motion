export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
        <div class="image__holder"><img class="image__thombnail"></div>
        <p class="image__title"></p>
    </section>`;

    this.element = template.content.firstElementChild! as HTMLElement;

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

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
