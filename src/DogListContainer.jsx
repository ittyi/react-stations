// @ts-check
import React, { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect.jsx';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(["african"]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        const l = data.message
        setBreeds(Object.keys(l))
      })
  }, []);

  return (
    <>
      <BreedsSelect breeds={breeds}/>
    </>
  )
}

export default DogListContainer
