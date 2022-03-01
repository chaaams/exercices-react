import React from 'react'



class Aliments extends React.Component{
    constructor(){
        super();
        this.state ={
           aliments: ["rice ","pasta ","garlic ","eggs"]
        }
    }
    render(){
        return <div>
            {this.state.aliments}
        </div>
    }
}

export default Aliments