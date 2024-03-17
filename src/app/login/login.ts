import './LoginStyles.css';
import BaseHTMLElementClass from '../BaseHTMLElementClass';

export default function createLoginForm(): HTMLFormElement {
    const nameBlock = new BaseHTMLElementClass('div', [] );
    const nameLabel = new BaseHTMLElementClass('label', [], 'Name:');
    const nameInput = new BaseHTMLElementClass('input', ['name-input']);
    nameBlock.appendChilds([nameLabel.getElement(), nameInput.getElement()])
    
    const surnameBlock = new BaseHTMLElementClass('div', [] );
    const surnameLabel = new BaseHTMLElementClass('label', [], 'Surname:');
    const surnameInput = new BaseHTMLElementClass('input', ['name-input']);
    surnameBlock.appendChilds([surnameLabel.getElement(), surnameInput.getElement()]);

    const submitButton = new BaseHTMLElementClass('button', ['submit-button'], 'Login');

    const form = new BaseHTMLElementClass('div', ['login-form']);
    form.appendChilds([nameBlock.getElement(), nameInput.getElement(), surnameBlock.getElement(), submitButton.getElement()]);

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const name = (nameInput.getElement() as HTMLInputElement).value;
        const surname = (surnameInput.getElement() as HTMLInputElement).value;
  
    });

    return form.getElement() as HTMLFormElement;
  
}