// @ts-check
import React, { useState } from 'react';

export const BreedsSelect = ({ breeds }) => {
  const [selectedBreeds, setSelectedBreeds] = useState(["https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"]);
  const [selectedBreed, setSelectedBreed] = useState("african");

  async function selectDog(s) {
    console.log("selectedBreed:", selectedBreed)
    const reqUrl ="https://dog.ceo/api/breed/" + selectedBreed + "/images/random/5"
    const response = await fetch(reqUrl);
    const resDogUrl = response.json();
    console.log(response);
    console.log(resDogUrl);
    resDogUrl.then((result) => setSelectedBreeds(result.message))
  }

  return (
    <>
      <select name="breed" value={selectedBreed} >
        {breeds.map(breed => (
            <option  key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      <button onClick={selectDog} >表示</button>
      {selectedBreeds.map(breed => (
          <p><img src={breed} alt="サンプル画像"/></p>
      ))}
    </>
  )
}

export default BreedsSelect
