import React from 'react'

class Personne extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
        };
        
    }
    changeName = (e) =>{
        this.setState({name: e.target.value})
    }
   
    render(){
        return <div>
            <p className='text-start fs-1'>the name is: {this.state.name}</p>
            <input className='form-control' type="text" onChange={this.changeName}  />
        </div>
    }
}

export default Personne