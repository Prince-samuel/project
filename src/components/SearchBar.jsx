const SearchBar = ({placeholder,data}) => {
    return ( 
        <div className="search">
            <input type="text" placeholder={placeholder}/> 
           <div className="search__icon"></div>
        </div>
     );
}
 
export default SearchBar;