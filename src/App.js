import React from 'react'
import './App.css'
import Mainpage from './components/Mainpage'
import News from './components/News'
import Favorites from './components/Favorites'

export default class App extends React.Component{
// bring back the new fav with call back function
// bug, quand je clique pour fav, cela fetch 6 articles news a nouveau. si je ne ramene pas le new fav dans la main page le bug disparait ??

state = {
  favorites: []
}

setFavoritesMP = (newfav) => {
  this.setState({favorites: [...this.state.favorites, newfav]})
  
}


  render(){
  return (
    <div className="main">
      <div className='newsfeed'>
        <h1>New feed</h1>
        <News />
        </div>
      <div className='mainpage'>
          <h1>Cryptodirect</h1>
          <p className='navbar'>navbar</p>
      
          <Mainpage setFavoritesMP={this.setFavoritesMP} /> 
          
      </div>
        <div className="fav">
          <h1>Favorite crypto</h1>
          <Favorites favorites={this.state.favorites}/>
          {/* <button onClick={this.testons}></button> */}
        </div>
    </div>
  )
}}



