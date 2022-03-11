import { AlcoholicTypes, CardDrinkOptions, CategoryType, GlassTypes, IngredientsType } from "../Types/allTypes"

export const ConvertToOptionsAlcoholic = ( array: AlcoholicTypes[]) => {
    return(
      array.map((i) => { return ( { label: i.strAlcoholic, text: i.strAlcoholic})})
    )
  }

  export const ConvertToOptionsCategory = ( array: CategoryType[]) => {
    return(
      array.map((i) => { return ( { label: i.strCategory, text: i.strCategory})})
    )
  }

  export const ConvertToOptionsGlass = ( array: GlassTypes[]) => {
    return(
      array.map((i) => { return ( { label: i.strGlass, text: i.strGlass})})
    )
  }

  export const ConvertToOptionsIngredients = ( array: IngredientsType[]) => {
    return(
      array.map((i) => { return ( { label: i.strIngredient1, text: i.strIngredient1})})
    )
  }

  
  export const ConvertToDrinks = (array:CardDrinkOptions[]) => {
    return(
      array.map((i) => {
        return(
          {
            strDrink: i.strDrink,
            strDrinkThumb: i.strDrinkThumb,
            strCategory: i.strCategory,
            strAlcoholic: i.strAlcoholic,
            strGlass: i.strGlass
          }
        )
      })
    )
  }
