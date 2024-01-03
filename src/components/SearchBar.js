import React from "react";

function SearchBar(props){
    const {fillterText,setFillterText,inStockOnly,setinStockOnly} = props
    return(
        <form className="search-bar">
                <input type="text" placeholder="Search..." value={fillterText}
                onChange={e => setFillterText(e.target.value)}/>
                <label>
                    <input type="checkbox" value={inStockOnly}
                    onChange={e => setinStockOnly(e.target.checked)}/>
                    {' '}
                    Only show products in stock
                </label>
        </form>
    )
}

export default SearchBar