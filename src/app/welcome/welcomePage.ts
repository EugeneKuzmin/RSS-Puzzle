import './welcomeStyles.css';
import BaseHTMLElementClass from '../BaseHTMLElementClass.ts';

const ABOUT_GAME =
  'Learn English with our fun game of juggling puzzles and making sentences. You need to place words in the proper order from the given words and make a correct sentence.';
export default function createWelcomeForm(): HTMLFormElement {
  const gameName = new BaseHTMLElementClass(
    'div',
    ['flex', 'justify-content-center', 'game-name', 'caprasimo-regular'],
    'RSS Puzzle'
  );
  const gameDescription = new BaseHTMLElementClass(
    'div',
    ['flex', 'justify-content-center', 'caprasimo-regular', 'game-description'],
    ABOUT_GAME
  );
  const form = new BaseHTMLElementClass('div', ['welcome-form']);
  form.appendChilds([gameName.getElement(), gameDescription.getElement()]);

  return form.getElement() as HTMLFormElement;
}
