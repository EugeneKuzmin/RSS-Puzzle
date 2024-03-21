import './mainPageStyle.css';
import BaseHTMLElementClass from '../../BaseHTMLElementClass.ts';
// import '../../../assets/sentences/wordCollectionLevel1.json'

const URL:string = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json'

interface Word {
    audioExample: string;
    textExample: string;
    textExampleTranslate: string;
    id: number;
    word: string;
    wordTranslate: string;
}

interface LevelData {
    id: string;
    name: string;
    imageSrc: string;
    cutSrc: string;
    author: string;
    year: string;
}

interface Round {
    levelData: LevelData;
    words: Word[];
}

interface ObjectWithLevelDataAndWords {
    rounds: Round[];
}

function transformArray(array: ObjectWithLevelDataAndWords): { words: string[] }[] {
 
    return array.rounds.map((round:Round)  => ({
        words: round.words.map((word:Word) => word.textExample)
    }));
}

async function fetchData(url: string): Promise<ObjectWithLevelDataAndWords> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return {rounds:[]}; 
    }
}

async function fetchDataAndTransform(url: string): Promise<{ words: string[] }[]> {
    const data = await fetchData(url);
    
    return transformArray(data);
}


function getPuzzleContainer():HTMLFormElement{
    const puzzleContainer = new BaseHTMLElementClass(
        'div',
        ['puzzle-container']);
        

    return puzzleContainer.getElement() as HTMLFormElement;
  };
function getPickWordContainer():HTMLFormElement{
    const pickWordContainer = new BaseHTMLElementClass(
        'div',
        ['pickword-container',
        'container']);

        fetchDataAndTransform(URL)
        .then(transformedData => {
            let sentence:string = transformedData[0].words[0]
            sentence = sentence.split(' ').sort(() => Math.floor(Math.random() * Math.floor(3)) - 1).join(' ')
            sentence.split(' ').forEach(
                word => {

                    const wordButton = new BaseHTMLElementClass(
                        'button',
                        ['word-button'],
                        word)
                        pickWordContainer.appendChilds([wordButton.getElement()])

                }
            )
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return pickWordContainer.getElement() as HTMLFormElement;
  };

export default function createMainPage(): HTMLFormElement {
  const wrapper = new BaseHTMLElementClass(
    'div',
    ['flex', 
    'align-items-center',
    'flex-column',
    ],
    'English puzzle'
  );

  const puzzleConrainer = getPuzzleContainer();

  const pickWordConrainer = getPickWordContainer();

  wrapper.appendChilds([
    puzzleConrainer,
    pickWordConrainer
]);
  const form = new BaseHTMLElementClass('div');
  form.appendChilds([wrapper.getElement(),
    ]
);

  return form.getElement() as HTMLFormElement;
}
