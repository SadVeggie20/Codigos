export const Searchbar = ({ handleSearchChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Searchbar
