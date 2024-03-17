// @ts-check
import React, { useState } from 'react';
import DogImage from './DogImage.jsx';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  async function callDogUrl() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const resDogUrl = response.json();
    console.log(response);
    console.log(resDogUrl);
    resDogUrl.then((result) => setDogUrl(result.message))
  }

  return (
    <>
      <h1>犬の画像を表示するサイトです</h1>
        <DogImage imageUrl={dogUrl} ></DogImage>
        <button onClick={() => callDogUrl()}>
          Click me
        </button>
    </>
  )
}

export default Description
