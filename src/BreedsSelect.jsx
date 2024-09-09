export const BreedsSelect = ({ breeds, selectedBreed, changBreed }) => {
  return (
    <>
      <p>犬種を選択：</p>
      <select value={selectedBreed} onChange={changBreed}>
        <option value=""></option>
        {breeds.map((breeds) => (
          <option key={breeds} value={breeds}>
            {breeds}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
