import React from 'react'

const produits = [{
    
}, {
    id:2,
    title:'tiger',
    description: 'big pink tiger',
    price:150
}]

class Produits extends React.Component{
    constructor(){
        super();
        this.state = {
             id:1,
            title:'Fish',
            description: 'big pink fish',
            price:15 
        }
    }
    render(){
        if(produits.length === 0){
            return <div>
                <h2>La liste est vide</h2>
            </div>
        }
        else{
            return <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.id} </td>
                        <td>{this.state.title} </td>
                        <td>{this.state.description} </td>
                        <td>{this.state.price} </td>
                    </tr>
                    {/* <tr>
                        <th>{produits[0].id}</th>
                        <th>{produits[0].title}</th>
                        <th>{produits[0].description}</th>
                        <th>{produits[0].price}</th>
                    </tr> */}
                </tbody>
            </table>
        }
    }
}
export default Produits