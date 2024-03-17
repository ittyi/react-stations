// DO NOT DELETE

import './App.css'
import React, { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  return (
    <div>      
      <h1>犬の画像を表示するサイトです</h1>
      <p><img src={dogUrl} alt="サンプル画像"/></p>
      <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")}>
        Click me
      </button>
    </div>
  )
}
