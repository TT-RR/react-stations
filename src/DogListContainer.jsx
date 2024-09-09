import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([""]);
  const [selectedBreed, setSelectedBreed] = useState("akita");
  const [selectedBreedImages, setSelectedBreedImages] = useState([]);

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
  // console.log(selectedBreed)

  const fetchSelectedBreed = () => {
    let url = `https://dog.ceo/api/breed/` + selectedBreed + `/images/random/3`
    if (selectedBreed === "") {
      return  // 何もしない
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedBreedImages(data.message)
      })
      .catch((error) => {
        console.error('エラー:', error);
      })
  }

  console.log(selectedBreedImages)

  return (
    <>
      <div className="breedsList">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          changBreed={changBreed} />
        <button className='btn' onClick={fetchSelectedBreed}>表示</button>
      </div>
      <div className="imagesContainer">
        {selectedBreedImages.map((url, index) => (
          <li className='breedList'>
            <img key={index} src={url} alt="dog" className='selectBreedImage' />
          </li>
        ))}
      </div>
    </>
  )
}

export default DogListContainer
