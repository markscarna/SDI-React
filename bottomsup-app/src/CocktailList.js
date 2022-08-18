import React from "react";

const CocktailList = (arrayOfCocktails) => {

// addToFavorites = () => {
//     ({favoritesList:  })
//   }


    let tempArray = [];
    arrayOfCocktails.map((element) => {
        tempArray.push( <div>
                        <img src={element.strDrinkThumb} width="200" height="300" alt={element.idDrink}></img>
                        <h2>{element.strDrink}</h2>
                        </div>
                    )
    })
    return tempArray;
}

export default CocktailList