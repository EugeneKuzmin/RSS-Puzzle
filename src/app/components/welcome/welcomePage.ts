import './welcomeStyles.css';
import BaseHTMLElementClass from '../../BaseHTMLElementClass.ts';
import LocalStorageManager from '../../utils/localStorageWorkflow.ts';
import createMainPage from '../mainPage/mainPage.ts';

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

  const name = playersName ? playersName.name : '';
  const surname = playersName ? playersName.surname : '';

  const welcomeGreeting = new BaseHTMLElementClass(
    'div',
    ['text-center', 'greeting-welcome'],
    'Welcome'
  );

  const personalGreeting = new BaseHTMLElementClass(
    'div',
    ['text-center', 'greeting-name'],
    `${name} ${surname}`
  );

  const buttonBlock = new BaseHTMLElementClass('div', [
    'flex',
    'justify-content-center'
  ]);

  const buttonStart = new BaseHTMLElementClass(
    'button',
    ['button-start'],
    `START`
  );

  buttonStart.addEventListener('click', (event: Event) => {
    event.preventDefault();
    document.body.innerHTML = '';
    const mainPage = createMainPage();
    document.body.appendChild(mainPage);
  });

  buttonBlock.appendChilds([buttonStart.getElement()]);
  const form = new BaseHTMLElementClass('div', ['welcome-form']);
  form.appendChilds([
    gameName.getElement(),
    gameDescription.getElement(),
    welcomeGreeting.getElement(),
    personalGreeting.getElement(),
    buttonBlock.getElement()
  ]);

  return form.getElement() as HTMLFormElement;
}
