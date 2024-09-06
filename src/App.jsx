// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
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

  return (
    <>
      <header className='header'>
        <h1>Dogアプリ</h1>
      </header>
      <div className='container'>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogUrl} alt='dog' className='dog' />
      </div>
      <div className='btn-container'>
        <button onClick={upDatedogUrl} className='btn'>更新</button>
      </div>
    </>
  )
}
