import BaseHTMLElementClass from '../../BaseHTMLElementClass';
export default class ImageManager extends BaseHTMLElementClass {
    constructor(classes: string[] = [], src: string = '', alt: string = '') {
        super('img', classes);
        this.setSource(src);
        this.setAlt(alt);
    }

    setSource(src: string): void {
        this.element.setAttribute('src', src);
    }

    setAlt(alt: string): void {
        this.element.setAttribute('alt', alt);
    }
}