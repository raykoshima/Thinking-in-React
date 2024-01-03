import React from "react";

function ProductRow(props) {
    const {product:{name,price,stocked}} = props
    return (
        <tr className="prodect-row">
                <td className={stocked ? "text-green" : "text-red"}>{name}</td>
                <td>{price}</td>
        </tr>
    )
}

export default ProductRow