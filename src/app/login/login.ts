import './LoginStyles.css';
import validateInput from '../utils/validation'
import BaseHTMLElementClass from '../BaseHTMLElementClass';
const errorMsg = {
    textName: 'The name can contain only Latin letters or a hyphen. At least 3 characters that start with capital letter',
    textSurname: 'Please write a surname in latin 4 letters minimum starting with capital letter.',
};

type nameObj = {nameBlock:HTMLFormElement,nameInput:HTMLFormElement,errorBlock:BaseHTMLElementClass}

function createNameInputBlock(nameStr:string): nameObj{

    const nameBlock = new BaseHTMLElementClass('div', [] );
    const nameLabel = new BaseHTMLElementClass('label', [], nameStr);
    const nameInput = new BaseHTMLElementClass('input', ['name-input']);
    const errorNameBlock = new BaseHTMLElementClass('div', ['error-msg']);
    nameBlock.appendChilds([nameLabel.getElement(), nameInput.getElement(),errorNameBlock.getElement()]);
    return {nameBlock:nameBlock.getElement() as HTMLFormElement,nameInput:nameInput.getElement() as HTMLFormElement,errorBlock:errorNameBlock as BaseHTMLElementClass};

}

export default function createLoginForm(): HTMLFormElement {
    
    const nameBlockObj:nameObj = createNameInputBlock('Name:');
    const surnameBlockObj:nameObj = createNameInputBlock('Surname:');
    
    const submitButton = new BaseHTMLElementClass('button', ['submit-button'], 'Login');

    const form = new BaseHTMLElementClass('div', ['login-form']);
    form.appendChilds([nameBlockObj.nameBlock, surnameBlockObj.nameBlock, submitButton.getElement()]);

    submitButton.addEventListener('click', (event: Event) => {
        event.preventDefault(); 
        const name = (nameBlockObj.nameInput).value;
        const surname = (surnameBlockObj.nameInput).value;

        if(validateInput(name,2)){
            console.log(name);
            console.log(surname);
            nameBlockObj.errorBlock.setTextContent('');
        }else{
            
            nameBlockObj.errorBlock.setTextContent(errorMsg.textName);
        }

        if(validateInput(surname,3)){
            surnameBlockObj.errorBlock.setTextContent('');
        }else{
            surnameBlockObj.errorBlock.setTextContent(errorMsg.textSurname);
        }
  
    });

    return form.getElement() as HTMLFormElement;
  
}