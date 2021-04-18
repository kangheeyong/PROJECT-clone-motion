export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "this is page components";
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
