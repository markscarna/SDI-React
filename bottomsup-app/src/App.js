import './App.css';
import React from 'react';
import CocktailList from './CocktailList';
// import Background from './background';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      defaultCocktails: [],
      searchedCocktails: [],
      searchInput: ''

    }
  } 
  
  componentDidMount() {
    fetch("http://localhost:3001/")
          .then(res => res.json())
          .then(data => {
            // this.setState({returnedDrinks: })
            this.setState({defaultCocktails: CocktailList(data.drinks) })
            
          }) 
          .catch((err) => {
            this.setState({
              errMessage: err
            })
          })
        
        // let tempArray = CocktailList(this.state.returnedDrinks)
        // this.setState({formattedDrinks : tempArray})
        

  }

    handleChange = (e) => {
    this.setState({
      searchInput : e.target.value
    })
  }

  handleSubmit = () => {
    fetch(`http://localhost:3001/search/${this.state.searchInput}`)
    .then(res => res.json())
    .then(data => {
      // this.setState({returnedDrinks: })
      this.setState({searchedCocktails: CocktailList(data.drinks) })
      
    }) 
    .catch((err) => {
      this.setState({
        errMessage: err
      })
    })
  }

  render() {
    
      if(this.state.searchedCocktails.length === 0) {
        return (
          <fragment id="bg_image">
          <header id='home-page'>
            <nav id="search-bar">
                <input type="search" name="" value={this.state.searchInput} onChange={this.handleChange}></input>
                <input type="button" name="" value="Search" onClick={this.handleSubmit}></input>
            </nav>
          </header>
          
              <body id="bg_image">
              <label id="defaultTop">Default Drinks</label>
                <div id="default">            
                  <ul>{this.state.defaultCocktails[0]}</ul>
                  <ul>{this.state.defaultCocktails[1]}</ul>
                  <ul>{this.state.defaultCocktails[2]}</ul>
                  <ul>{this.state.defaultCocktails[3]}</ul>
                  <ul>{this.state.defaultCocktails[4]}</ul>
                  <ul>{this.state.defaultCocktails[5]}</ul>
                  <ul>{this.state.defaultCocktails[6]}</ul>
                  <ul>{this.state.defaultCocktails[7]}</ul>
                </div>            
          </body>
          </fragment>     
         )
      } else {
        return (
          <div>
          <input type="search" name="" value={this.state.searchInput} onChange={this.handleChange} ></input>
          <input type="button" name="" value="Search" onClick={this.handleSubmit}></input>
          <label id="defaultTop">Search Results</label>
          <ul>{this.state.searchedCocktails}</ul>
          </div>
        )
      }      
  }

 
       
}
        

export default App;


