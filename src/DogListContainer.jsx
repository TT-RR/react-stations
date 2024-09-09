// @ts-check
import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([""]);

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

  console.log(breeds)

  return <></>
}

export default DogListContainer
