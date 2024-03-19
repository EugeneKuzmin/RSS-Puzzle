import './welcomeStyles.css';
import BaseHTMLElementClass from '../BaseHTMLElementClass.ts';
import ImageManager from '../components/img/imgClass.ts';
import LocalStorageManager from '../utils/localStorageWorkflow.ts';

const ABOUT_GAME =
  'Learn English with our fun game of juggling puzzles and making sentences. You need to place words in the proper order from the given words and make a correct sentence.';
export default function createWelcomeForm(): HTMLFormElement {
  const gameName = new BaseHTMLElementClass(
    'div',
    ['text-center', 'game-name', 'caprasimo-regular'],
    'RSS Puzzle'
  );
  const gameDescription = new BaseHTMLElementClass(
    'div',
    ['text-center', 'caprasimo-regular', 'game-description'],
    ABOUT_GAME
  );

  const playersName = LocalStorageManager.get('rss_puzzle__user');

  const welcomeGreeting = new BaseHTMLElementClass(
    'div',
    ['text-center', 'greeting-welcome'],
    'Welcome'
  );

  const personalGreeting = new BaseHTMLElementClass(
    'div',
    ['text-center', 'greeting-name'],
    `${playersName.name} ${playersName.surname}`
  );

  // const imageManager = new ImageManager(
  //   ['image-class'],
  //   '../../assets/44d1160cd4dfc914270ba22f2edcf2cf.png',
  //   'puzzle game'
  // );
  const form = new BaseHTMLElementClass('div', ['welcome-form']);
  form.appendChilds([
    gameName.getElement(),
    gameDescription.getElement(),
    welcomeGreeting.getElement(),
    personalGreeting.getElement()
    // imageManager.getElement()
  ]);

  return form.getElement() as HTMLFormElement;
}
