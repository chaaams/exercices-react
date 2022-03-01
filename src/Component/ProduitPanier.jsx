import React from "react";

function ProduitPanier(props){


    return   <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td><span className="btn btn-secondary" onClick={() => {props.moins(1)}}>-</span>{props.quantity}<span className="btn btn-secondary" onClick={() => {props.plus(1)}}>+</span></td>
        <td>{props.price}</td>
            </tr>
}
export default ProduitPanier