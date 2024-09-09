// @ts-check
import { useState } from 'react'
import { DogImage } from './DogImage'

export function Description() {
  let [dogUrl, setdogUrl] = useState('https://images.dog.ceo/breeds/terrier-westhighland/n02098286_4120.jpg');

  function upDatedogUrl() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setdogUrl(data.message);
      })
      .catch((error) => {
        console.error('エラー:', error);
      })
  }

  return <>
    <div className='container'>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
    </div>
    <div className='btn-container'>
      <button onClick={upDatedogUrl} className='btn'>更新</button>
    </div>
  </>
}

export default Description
