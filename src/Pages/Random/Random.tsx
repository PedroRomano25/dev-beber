import { useEffect, useMemo, useState } from "react";
import CardDrink from "../../Components/Card/Card";
import GridCardContainer from "../../Components/GridCardContainer/GridCardContainer";
import { useApiCocktailContext } from "../../Context/ApiCocktailDbContext";
import { CardDrinkOptionsDefault } from "../../Data/allDatas";

import { ConvertToDrinks } from "../../Service/convertToOptions";

import { CardDrinkOptions } from "../../Types/allTypes";

const RandomDrink = () => {
  const [DrinksShow, setDrinksShow] = useState<CardDrinkOptions[]>([
    ...CardDrinkOptionsDefault,
  ]);

  const contexto = useApiCocktailContext();

  useEffect(() => {
    setDrinksShow(contexto.Random);
  }, []);

  const dadoMemo = useMemo(() => {
    return DrinksShow;
  }, [DrinksShow]);

  return (
    <>
      <GridCardContainer>
        <CardDrink value={ConvertToDrinks(dadoMemo)} />
      </GridCardContainer>
    </>
  );
};

export default RandomDrink;
