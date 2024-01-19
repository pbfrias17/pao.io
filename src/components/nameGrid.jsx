import { fetchLetterWords } from '@/data/queries';
  
export default async function NameGrid({ placeholder }) {
  if (placeholder) {
    const placeholderData = [
      {key: 0, letter: " ", word: " "},
      {key: 1, letter: " ", word: " "},
      {key: 2, letter: " ", word: " "},
      {key: 3, letter: " ", word: " "},
      {key: 4, letter: " ", word: " "},
    ]
    return renderGrid(placeholderData);
  }

  const gridData = [];
  const words = [];
  for (const letter of "paolo") {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const letterWords = await fetchLetterWords(letter);
    const word = getRandomWordFromList(letterWords.words, words);
    gridData.push({ key: letter + word, letter, word })
  }
  return renderGrid(gridData);

}

function renderGrid(gridData) {
  return (
    <div className="flex w-full md:w-auto 2xl:max-w-[50%] grow flex-col">
      {
        gridData.map(({ key, letter, word }) => (
          <div className="flex justify-between" key={key}>
            <div className="flex flex-col w-[6.5rem] h-[6.5rem] justify-center bg-purple m-2 rounded-full"><p className="text-5xl text-whitesmoke text-center">{letter.toUpperCase()}</p></div>
            <div className="flex flex-1 flex-col bg-bluegreen justify-center m-2 rounded-2xl"><p className="text-lg text-whitesmoke text-center">{word}</p></div>
          </div>
        ))
      }
    </div>
  )
}

function getRandomWordFromList(list, blacklist) {
  const randomIndex = Math.floor(Math.random() * list.length)
  const cand = list[randomIndex]
  if (blacklist.includes(cand)) {
    return getRandomWordFromList(list, blacklist)
  } else {
    blacklist.push(cand)
    return cand
  }
}
