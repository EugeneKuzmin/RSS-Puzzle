import createLoginForm from './app/components/login/login.ts';
import createWelcomeForm from './app/components/welcome/welcomePage.ts';
import LocalStorageManager from './app/utils/localStorageWorkflow.ts';

const playersName = LocalStorageManager.get('rss_puzzle__user');

const name = playersName ? playersName.name : '';
const surname = playersName ? playersName.surname : '';

let form;

if (name.length&&surname.length) {
  form = createWelcomeForm();
} else {
  form = createLoginForm();
}

document.body.appendChild(form);
