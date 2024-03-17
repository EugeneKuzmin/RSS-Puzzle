import './LoginStyles.css';
import validateInput from '../utils/validation'
import BaseHTMLElementClass from '../BaseHTMLElementClass';
const errorMsg = {
    textName: 'Please write a name in latin 3 letters minimum starting with capital letter. Hyphen alowed',
    textSurname: 'Please write a surname in latin 4 letters minimum starting with capital letter. Hyphen alowed',
};

export default function createLoginForm(): HTMLFormElement {
    const nameBlock = new BaseHTMLElementClass('div', [] );
    const nameLabel = new BaseHTMLElementClass('label', [], 'Name:');
    const nameInput = new BaseHTMLElementClass('input', ['name-input']);
    const errorNameBlock = new BaseHTMLElementClass('div', ['error-msg'], errorMsg.textName);
    nameBlock.appendChilds([nameLabel.getElement(), nameInput.getElement(),errorNameBlock.getElement()])
    
    const surnameBlock = new BaseHTMLElementClass('div', [] );
    const surnameLabel = new BaseHTMLElementClass('label', [], 'Surname:');
    const surnameInput = new BaseHTMLElementClass('input', ['name-input']);
    const errorSurnameBlock = new BaseHTMLElementClass('div', ['error-msg'], errorMsg.textSurname );
    surnameBlock.appendChilds([surnameLabel.getElement(), surnameInput.getElement(),errorSurnameBlock.getElement()]);

    const submitButton = new BaseHTMLElementClass('button', ['submit-button'], 'Login');

    const form = new BaseHTMLElementClass('div', ['login-form']);
    form.appendChilds([nameBlock.getElement(), nameInput.getElement(), surnameBlock.getElement(), submitButton.getElement()]);

    submitButton.addEventListener('click', (event: Event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const name = (nameInput.getElement() as HTMLInputElement).value;
        const surname = (surnameInput.getElement() as HTMLInputElement).value;

        if(validateInput(name,2) && validateInput(surname,3)){
            console.log(name);
            console.log(surname);
            
        }else{
            console.log('Invalid input. Name and surname must start with capital letters and have a minimum length of 3 characters.');
        }
  
    });

    return form.getElement() as HTMLFormElement;
  
}