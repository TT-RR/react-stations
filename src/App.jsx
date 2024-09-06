// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  let [dogUrl, setdogUrl] = useState('https://images.dog.ceo/breeds/terrier-westhighland/n02098286_4120.jpg');

  function upDatedogUrl() {
    setdogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg');
  }

  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt='dog' />
      <br />
      <button onClick={upDatedogUrl}>更新</button>
    </div>
  )
}
