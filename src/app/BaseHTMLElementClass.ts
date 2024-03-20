export default class BaseHTMLElementClass {
  element: HTMLElement;

  constructor(
    tagName: string,
    classes: string[] = [],
    textContent: string = ''
  ) {
    this.element = document.createElement(tagName);
    this.attachClasses(classes);
    this.setTextContent(textContent);
  }

  appendChilds(childElements: HTMLElement[]): void {
    childElements.forEach((child) => {
      this.element.appendChild(child);
    });
  }

  private attachClasses(classes: string[]): void {
    classes.forEach((className) => {
      this.element.classList.add(className);
    });
  }

  addClass(className: string): void {
    this.element.classList.add(className);
  }

  removeClass(className: string): void {
    this.element.classList.remove(className);
  }

  toggleClass(className: string): void {
    this.element.classList.toggle(className);
  }

  setTextContent(textContent: string): void {
    this.element.textContent = textContent;
  }

  addEventListener(
    eventType: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.element.addEventListener(eventType, listener, options);
  }

  removeEventListener(
    eventType: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void {
    this.element.removeEventListener(eventType, listener, options);
  }

  getElement(): HTMLElement {
    return this.element;
  }
}
