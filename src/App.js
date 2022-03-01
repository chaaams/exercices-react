import React from 'react'
import Produits from './Component/Produits'
import Aliments from './Component/Aliments'
import Personne from './Component/Personne'
class App extends React.Component{
  render(){
    return <div className='container text-center text-white bg-dark pb-3'>
      {/* <Produits/>
      <Aliments/> */}
      <Personne/>
    </div>
  }
}

export default App