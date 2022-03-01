import React from "react";
import ProduitPanier from "./ProduitPanier";
const panier = [{
    id:1,
    title:'pomme',
    description: 'fruit vert',
    price:2
}]

class Panier extends React.Component{
    constructor(){
        super();
        this.state=({
            produitPanier: [{
                id: 1,
                title: '',
                price: 0.0,
                quantity: 0
            }]
        })
    }
 incrementerQuantite = (id) =>{  
        this.setState({
            produitPanier: this.state.produitPanier.map((produit)=>{
                if(produit.id === id){
                    return {id : produit.id,
                            title: produit.title,
                            price: produit.price,
                            quantity: produit.quantity +1,
                    }
                }else{
                    return produit
                }
            })
        })
    }

decrementerQuantite = (id) =>{  
        this.setState({
            produitPanier: this.state.produitPanier.map((produit)=>{
                if(produit.id === id){
                    return {id : produit.id,
                            title: produit.title,
                            price: produit.price,
                            quantity: produit.quantity -1,
                    }
                }else{
                    return produit
                }
            })
        })
    }
    render(){
        if(panier.length === 0){
           return <>
                <h1>La liste est vide</h1>
            </>
        }else{ return <div>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProduitPanier id={0} quantity= {this.state.produitPanier[0].quantity} plus={this.incrementerQuantite} moins={this.decrementerQuantite}/>
                    </tbody>
                </table>
        </div>
        }
       
    }
}

export default Panier