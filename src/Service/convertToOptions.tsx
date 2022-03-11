import {
  AlcoholicTypes,
  CardDrinkOptions,
  CategoryType,
  GlassTypes,
  IngredientsType,
} from "../Types/allTypes";

export const ConvertToOptionsAlcoholic = (array: AlcoholicTypes[]) => {
  return array.map((i) => {
    return { label: i.strAlcoholic, text: i.strAlcoholic };
  });
};

export const ConvertToOptionsCategory = (array: CategoryType[]) => {
  return array.map((i) => {
    return { label: i.strCategory, text: i.strCategory };
  });
};

export const ConvertToOptionsGlass = (array: GlassTypes[]) => {
  return array.map((i) => {
    return { label: i.strGlass, text: i.strGlass };
  });
};

export const ConvertToOptionsIngredients = (array: IngredientsType[]) => {
  return array.map((i) => {
    return { label: i.strIngredient1, text: i.strIngredient1 };
  });
};

export const ConvertToDrinks = (array: CardDrinkOptions[]) => {
  return array.map((i) => {
    return {
      strDrink: i.strDrink,
      strDrinkThumb: i.strDrinkThumb,
      strCategory: i.strCategory,
      strAlcoholic: i.strAlcoholic,
      strGlass: i.strGlass,
      strIngredient1: i.strIngredient1,
      strIngredient2: i.strIngredient2,
      strIngredient3: i.strIngredient3,
      strIngredient4: i.strIngredient4,
      strIngredient5: i.strIngredient5,
      strIngredient6: i.strIngredient6,
      strIngredient7: i.strIngredient7,
      strIngredient8: i.strIngredient8,
      strIngredient9: i.strIngredient9,
      strIngredient10: i.strIngredient10,
      strIngredient11: i.strIngredient11,
      strIngredient12: i.strIngredient12,
      strIngredient13: i.strIngredient13,
      strIngredient14: i.strIngredient14,
      strIngredient15: i.strIngredient15,
      strMeasure1: i.strMeasure1,
      strMeasure2: i.strMeasure2,
      strMeasure3: i.strMeasure3,
      strMeasure4: i.strMeasure4,
      strMeasure5: i.strMeasure5,
      strMeasure6: i.strMeasure6,
      strMeasure7: i.strMeasure7,
      strMeasure8: i.strMeasure8,
      strMeasure9: i.strMeasure9,
      strMeasure10: i.strMeasure10,
      strMeasure11: i.strMeasure11,
      strMeasure12: i.strMeasure12,
      strMeasure13: i.strMeasure13,
      strMeasure14: i.strMeasure14,
      strMeasure15: i.strMeasure15,
    };
  });
};
