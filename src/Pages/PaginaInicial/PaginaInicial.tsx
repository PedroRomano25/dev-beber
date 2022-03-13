import { Autocomplete, TextField } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import CardDrink from "../../Components/Card/Card";
import GridCardContainer from "../../Components/GridCardContainer/GridCardContainer";
import HorizontalAlign from "../../Components/HorizontalAlign/HorizontalAlign";
import SelectLetter from "../../Components/SelectLetter/SelectLetter";
import { useApiCocktailContext } from "../../Context/ApiCocktailDbContext";
import {
  CardDrinkOptionsDefault,
  CardDrinkOptionsFilter,  
  syleInput,
} from "../../Data/allDatas";
import {
  ConvertToDrinks,
  ConvertToOptionsAlcoholic,
  ConvertToOptionsCategory,
  ConvertToOptionsGlass,
  ConvertToOptionsIngredients,
} from "../../Service/convertToOptions";
import { GerarAlfabeto } from "../../Service/gerarAlfabeto";
import { useGetData } from "../../Service/getData";
import { CardDrinkOptions } from "../../Types/allTypes";

const PaginaInicial = () => {  
  const [DrinksShow, setDrinksShow] = useState<CardDrinkOptions[]>([
    ...CardDrinkOptionsDefault,
  ]);

  const [Filters, setFilters] = useState<CardDrinkOptions>(
    CardDrinkOptionsFilter
  );
    const DrinkShowMemo = useMemo(() => ({
      DrinksShow, setDrinksShow
    }), [DrinksShow]);

    const FiltersMemo = useMemo(() => ({
      Filters, setFilters
    }), [Filters]);

    
    
  const contexto = useApiCocktailContext();

  const getData = useGetData()

  const OptionsIngredientsMemo = useMemo(() => ConvertToOptionsIngredients(contexto.Ingredients),[contexto.Ingredients])
  const OptionsGlassMemo = useMemo(() => ConvertToOptionsGlass(contexto.Glass),[contexto.Glass])
  const OptionsCategoryMemo = useMemo(() => ConvertToOptionsCategory(contexto.Category),[contexto.Category])
  const OptionsAlcoholicMemo = useMemo(() => ConvertToOptionsAlcoholic(contexto.Alcoholic),[contexto.Alcoholic])
  const Alfabeto = useMemo(() => GerarAlfabeto(),[])  

  useEffect(() => {
    DrinkShowMemo.setDrinksShow(contexto.FirstLetter);
  }, [contexto]);  

  const dadoDrinksMemo = useMemo(() => { 
    return ConvertToDrinks(
      DrinkShowMemo.DrinksShow.filter((i) =>
      FiltersMemo.Filters.strGlass === undefined || FiltersMemo.Filters.strGlass === null
        ? i === i
        : i.strGlass === FiltersMemo.Filters.strGlass
    )
      .filter((i) =>
      FiltersMemo.Filters.strCategory === undefined || FiltersMemo.Filters.strCategory === null
          ? i === i
          : i.strCategory === FiltersMemo.Filters.strCategory
      )
      .filter((i) =>
      FiltersMemo.Filters.strAlcoholic === undefined || FiltersMemo.Filters.strAlcoholic === null
          ? i === i
          : i.strAlcoholic === FiltersMemo.Filters.strAlcoholic
      )
      .filter((i) =>
      FiltersMemo.Filters.strIngredients === undefined ||
      FiltersMemo.Filters.strIngredients === null ||
        Object.values(i).includes(FiltersMemo.Filters.strIngredients)
          ? i === i
          : null
      ));
  }, [DrinkShowMemo.DrinksShow, FiltersMemo.Filters]);    
  
  return (
    <>
      <HorizontalAlign>
        <TextField
          size="small"
          onChange={async (x) => DrinkShowMemo.setDrinksShow(await getData.Data("/api/json/v1/1/search.php?s=",x.target.value,[...contexto.FirstLetter]))}
          sx={syleInput}
          label="Pesquise"
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            FiltersMemo.setFilters((e: CardDrinkOptions) => {
              return { ...e, strIngredients: a?.text as string | null };
            });
          }}
          options={OptionsIngredientsMemo}
          sx={syleInput}
          renderInput={(params) => (
            <TextField {...params} label="Ingrediente" />
          )}
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            FiltersMemo.setFilters((e: CardDrinkOptions) => {
              return { ...e, strGlass: a?.text as string | null };
            });
          }}
          options={OptionsGlassMemo}
          sx={syleInput}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de Copo" />
          )}
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            FiltersMemo.setFilters((e: CardDrinkOptions) => {
              return { ...e, strCategory: a?.text as string | null };
            });
          }}
          options={OptionsCategoryMemo}
          sx={syleInput}
          renderInput={(params) => <TextField {...params} label="Categoria" />}
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            FiltersMemo.setFilters((e: CardDrinkOptions) => {
              return { ...e, strAlcoholic: a?.text as string | null };
            });
          }}
          options={OptionsAlcoholicMemo}
          sx={syleInput}
          renderInput={(params) => (
            <TextField {...params} label="Categoria de Alcool" />
          )}
        />
      </HorizontalAlign>
      <GridCardContainer>
        <CardDrink value={dadoDrinksMemo} />
      </GridCardContainer>
      <SelectLetter
        data={Alfabeto}        
        onClick={async (e) => DrinkShowMemo.setDrinksShow(await getData.Data("/api/json/v1/1/search.php?f=",e,[...contexto.FirstLetter]))}
      />
    </>
  );
};
export default PaginaInicial;
