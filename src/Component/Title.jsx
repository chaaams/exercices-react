import React from 'react'

class  Title extends React.Component{
    render(){
        return <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.message}</p>
            <img src={this.props.img}/>
        </div>
    }
}

export default Title