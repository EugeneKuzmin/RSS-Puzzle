import './LoginStyles.css';
import validateInput from '../utils/validation'
import BaseHTMLElementClass from '../BaseHTMLElementClass';
import LocalStorageManager from '../utils/localStorageWorkflow';
const errorMsg = {
    textName: 'The name can contain only Latin letters or a hyphen. At least 3 characters that start with capital letter.',
    textSurname: 'The surname can contain only Latin letters or a hyphen. At least 4 characters that start with capital letter.',
};

type nameObj = {nameBlock:HTMLFormElement,nameInput:HTMLFormElement,nameInputElement:BaseHTMLElementClass,errorBlock:BaseHTMLElementClass}
type namesType = {name:string, surname:string}

function createNameInputBlock(nameStr:string): nameObj{

    const nameBlock = new BaseHTMLElementClass('div', ['name-container'] );

    const labelBlock = new BaseHTMLElementClass('div', [] );
    const nameLabel = new BaseHTMLElementClass('label', [], nameStr);
    labelBlock.appendChilds([nameLabel.getElement()]);

    const nameInput = new BaseHTMLElementClass('input', ['name-input']);
    const errorNameBlock = new BaseHTMLElementClass('div', ['error-msg']);

    nameBlock.appendChilds([labelBlock.getElement(), nameInput.getElement(),errorNameBlock.getElement()]);
    return {nameBlock:nameBlock.getElement() as HTMLFormElement,nameInput:nameInput.getElement() as HTMLFormElement,nameInputElement:nameInput as BaseHTMLElementClass,errorBlock:errorNameBlock as BaseHTMLElementClass};
}

function saveToLocalstorage(namesObj:namesType):void {
    const localStorageManager = new LocalStorageManager();
    localStorageManager.save('rss_puzzle__user',namesObj);
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
            nameBlockObj.errorBlock.setTextContent('');
            nameBlockObj.nameInputElement.removeClass('error');
        }else{
            nameBlockObj.errorBlock.setTextContent(errorMsg.textName);
            nameBlockObj.nameInputElement.addClass('error');
        }
        
        if(validateInput(surname,3)){
            surnameBlockObj.errorBlock.setTextContent('');
            surnameBlockObj.nameInputElement.removeClass('error');
        }else{
            surnameBlockObj.errorBlock.setTextContent(errorMsg.textSurname);
            surnameBlockObj.nameInputElement.addClass('error');
        }
        if(validateInput(name,2)&&validateInput(surname,3)){
            saveToLocalstorage({name:name,surname:surname});
        }
  
    });

    return form.getElement() as HTMLFormElement;
  
}