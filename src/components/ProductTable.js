import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    const { products,fillterText,inStockOnly } = props
    // console.log(products)

    const rows = [];
    let lastCategory = null;
    // products.forEach((product) => {
    //     if (
    //         product.name.toLowerCase().indexOf(
    //             fillterText.toLowerCase()
    //         ) === -1
    //       ) {
    //         return;
    //     }
    //     if (inStockOnly && !product.stocked) {
    //         return;
    //     }
    //     if (product.category !== lastCategory) {
    //         rows.push(
    //             <ProductCategoryRow
    //                 category={product.category}
    //                 key={product.category} />
    //         );
    //     }
    //     rows.push(
    //         <ProductRow
    //             product={product}
    //             key={product.name} />
    //     );
    //     lastCategory = product.category;
    // });


    const myFilter = products.filter( el => {
        let output = 
        (el.name.toLowerCase().indexOf(fillterText.toLowerCase()) !== -1) &&
        (inStockOnly && el.stocked) ||
        (el.name.toLowerCase().indexOf(fillterText.toLowerCase()) !== -1) &&
        (!inStockOnly)
        return output
    })
    //console.log(myFilter)

    const finallist = myFilter.reduce((a,c) =>{
        if(c.category !== a.lastCategory){
            a.output = [...a.output,<ProductCategoryRow category={c.category} key={c.category}/>]
            a.lastCategory = c.category
        }
        a.output = [...a.output,<ProductRow product={c} key={c.name} />]
        return a
    },{lastCategory:null,output:[]})
    console.log(finallist.output)
    
    return (
        <table className="prodect-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {finallist.output}
            </tbody>
        </table>
    )
}

export default ProductTable 