import './mainPageStyle.css';
import BaseHTMLElementClass from '../../BaseHTMLElementClass';

export default function createMainPage(): HTMLFormElement {
  const nameBlock = new BaseHTMLElementClass(
    'div',
    ['flex', 'justify-content-center'],
    'RSS Puzzle'
  );

  const form = new BaseHTMLElementClass('div');
  form.appendChilds([nameBlock.getElement()]);

  return form.getElement() as HTMLFormElement;
}
