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
            let tempArray = [];
            for(let i = 0; i < 16; i++){
            tempArray.push(data.drinks[i])
            }
            // this.setState({defaultCocktails: CocktailList(data.drinks) })
            this.setState({defaultCocktails: CocktailList(tempArray) })
            
          }) 
          .catch((err) => {
            this.setState({
              errMessage: err
            })
          })             
        
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
    if(this.state.searchedCocktails.length === 0){

      return (<body>
                <nav id="search-bar">
                  <input type="search" name="" value={this.state.searchInput} onChange={this.handleChange}></input>
                  <input type="button" name="" value="Search" onClick={this.handleSubmit}></input>
                </nav>
                <label className='labels'>Famous Drinks</label>
                <ul className='default-drinks'>{this.state.defaultCocktails}</ul>
              </body>
             )

    }
    else{
      return (<body>
                <nav id="search-bar">
                  <input type="search" name="" value={this.state.searchInput} onChange={this.handleChange}></input>
                  <input type="button" name="" value="Search" onClick={this.handleSubmit}></input>
                </nav>
                <label className='labels'>Cocktails that contain {this.state.searchInput}</label>
                <ul className='default-drinks'>{this.state.searchedCocktails}</ul>
              </body>
               )
    }  
      
  }

 
       
}
        

export default App;


