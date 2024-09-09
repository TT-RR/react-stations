export const BreedsSelect = ({ breeds, selectedBreed, changBreed }) => {
  return (
    <div className="breedsList">
      <p>犬種を選択：</p>
      <select value={selectedBreed} onChange={changBreed}>
        <option value=""></option>
        {breeds.map((breeds) => (
          <option key={breeds} value={breeds}>
            {breeds}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BreedsSelect
