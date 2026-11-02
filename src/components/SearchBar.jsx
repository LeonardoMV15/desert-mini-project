function SearchBar({
  allRecipes,
  searchValue,
  setSearchValue,
  setFilteredRecipes,
}) {
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);


    
    //For Ainhoa --> comparamos la lista que la pasamos a minicula con lo que introducimos en el telado que a si mismo es pasado a minuscula
    const filtered = allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredRecipes(filtered);
  };   









  return (
    <div className="search-bar container">
      <h2>Search Bar</h2>

      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search recipes..."
      />
    </div>
  );
}

export default SearchBar;
