export type CardDrinkOptions = {
  strDrink: string | null | undefined;
  strDrinkThumb: string | null | undefined;
  strCategory: string | null | undefined;
  strAlcoholic: string | null | undefined;
  strGlass:string | null | undefined;
  strIngredients?:string | null | undefined;

};

export type CardDrinkProps = {
  value: CardDrinkOptions[];
};
export type OptionsProps = {
    text:string,
    label:string
}
export type ChildrenProps = {
  children: any;
};

export type MenuOptions = {
  nome: string;
  link: string;
};
export type MenuProps = {
  value: MenuOptions[];
};

export type selectedValue = {
    letra: string;
  };
  
export type MenuSelectLetter = {
    data: string[];
    value: string;
    onClick: (value: string) => void;
  };

export type AlcoholicTypes = {
    strAlcoholic: string;
};
export type GlassTypes = {
    strGlass: string;
};

export type IngredientsType = {
    strIngredient1: string
}

export type CategoryType = {
    strCategory: string
}

export type ApiDrinks = {
    Alcoholic: AlcoholicTypes[],
    Ingredients: IngredientsType[],
    Glass: GlassTypes[],
    Category: CategoryType[],
    Random: DrinksType[],
    FirstLetter: DrinksType[],

};

export type DrinksType = {
    idDrink: string,
    strDrink: string,
    strDrinkAlternate: string,
    strTags: string,
    strVideo: string,
    strCategory: string,
    strIBA: string,
    strAlcoholic: string,
    strGlass: string,
    strInstructions: string,
    strInstructionsES: string,
    strInstructionsDE: string,
    strInstructionsFR: string,
    strInstructionsIT: string,
    strDrinkThumb: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strImageSource: string,
    strImageAttribution: string,
    strCreativeCommonsConfirmed: string,
    dateModified: string,
}

