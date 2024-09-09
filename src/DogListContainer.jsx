import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([""]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const breedList = Object.keys(data.message)
        setBreeds(breedList)
      })
      .catch((error) => {
        console.error('エラー:', error);
      })
  }, []);

  const changBreed = (event) => {
    setSelectedBreed(event.target.value)
  }

  // console.log(breeds)
  console.log(selectedBreed)

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        changBreed={changBreed} />
    </>
  )
}

export default DogListContainer
