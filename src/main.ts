import createLoginForm from './app/components/login/login.ts';
import createWelcomeForm from './app/components/welcome/welcomePage.ts';
import LocalStorageManager from './app/utils/localStorageWorkflow.ts';

const user = LocalStorageManager.get('rss_puzzle__user');

let form;

if (user.name.length) {
  form = createWelcomeForm();
} else {
  form = createLoginForm();
}

document.body.appendChild(form);
