import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../data/data";

function FilterableProductTable() {
    const [fillterText,setFillterText] = useState("");
    const [inStockOnly,setinStockOnly] = useState(false);
    return (
        <center>
        <h1>Supakorn Navamavad</h1>
        <div className="filter-table">
            <SearchBar 
            fillterText={fillterText} 
            setFillterText={setFillterText}
            inStockOnly={inStockOnly}
            setinStockOnly={setinStockOnly}
            />
            <ProductTable products={PRODUCTS}
            fillterText={fillterText}
            inStockOnly={inStockOnly}/>
        </div>
        </center>
    )
}

export default FilterableProductTable