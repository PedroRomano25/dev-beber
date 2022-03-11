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
  CardDrinkOptionsSemResultado,
} from "../../Data/allDatas";
import { axiosAppServer } from "../../Service/axiosAppServer";
import {
  ConvertToDrinks,
  ConvertToOptionsAlcoholic,
  ConvertToOptionsCategory,
  ConvertToOptionsGlass,
  ConvertToOptionsIngredients,
} from "../../Service/convertToOptions";
import { GerarAlfabeto } from "../../Service/gerarAlfabeto";
import { CardDrinkOptions } from "../../Types/allTypes";

const PaginaInicial = () => {
  const [LetraSelecionada, setLetraSelecionada] = useState<string>("A");
  const [SearchWord, setSearchWord] = useState<string>("");
  const [DrinksShow, setDrinksShow] = useState<CardDrinkOptions[]>([
    ...CardDrinkOptionsDefault,
  ]);
  const [Filters, setFilters] = useState<CardDrinkOptions>(
    CardDrinkOptionsFilter
  );
  const contexto = useApiCocktailContext();

  const getDatabyLetterSelected = useCallback(async (letra: string) => {
    let dados = await axiosAppServer
      .get("/api/json/v1/1/search.php?f=" + letra)
      .then((i: any) => {
        setDrinksShow(i.data.drinks);
      })
      .catch((i) => console.log("Falha ao coletar dados"));
    return dados;
  },[LetraSelecionada])

  const getDatabySearch = useCallback(async (pesquisa: string) => {
    let dados = await axiosAppServer
      .get("/api/json/v1/1/search.php?s=" + pesquisa)
      .then((i: any) => {
        if (i.data.drinks != null) {
          setDrinksShow(i.data.drinks);
        }
        if (i.data.drinks === null) {
          setDrinksShow(CardDrinkOptionsSemResultado);
        }
      })
      .catch((i) => console.log("Falha ao coletar dados" + i));
    return dados;
  },[SearchWord]) 

  useEffect(() => {
    setDrinksShow(contexto.FirstLetter);
  }, []);

  useEffect(() => {
    getDatabyLetterSelected(LetraSelecionada);
  }, [LetraSelecionada]);

  useEffect(() => {
    getDatabySearch(SearchWord);
  }, [SearchWord]);
  const dadoMemo = useMemo(() => {
    return DrinksShow.filter((i) =>
      Filters.strGlass === undefined || Filters.strGlass === null
        ? i === i
        : i.strGlass === Filters.strGlass
    )
      .filter((i) =>
        Filters.strCategory === undefined || Filters.strCategory === null
          ? i === i
          : i.strCategory === Filters.strCategory
      )
      .filter((i) =>
        Filters.strAlcoholic === undefined || Filters.strAlcoholic === null
          ? i === i
          : i.strAlcoholic === Filters.strAlcoholic
      )
      .filter((i) =>
        Filters.strIngredients === undefined ||
        Filters.strIngredients === null ||
        Object.values(i).includes(Filters.strIngredients)
          ? i === i
          : null
      );
  }, [DrinksShow, Filters]);

  const SearchDrink =  (palavra: string) => {
    setSearchWord(palavra);
  }

  return (
    <>
      <HorizontalAlign>
        <TextField
          size="small"
          onChange={(x) => SearchDrink(x.target.value)}
          sx={{ width: "15vw", backgroundColor: "var(--nav-bg)" }}
          label="Pesquise"
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            setFilters((e: CardDrinkOptions) => {
              return { ...e, strIngredients: a?.text as string | null };
            });
          }}
          options={ConvertToOptionsIngredients(contexto.Ingredients)}
          sx={{ width: "15vw", backgroundColor: "var(--nav-bg)" }}
          renderInput={(params) => (
            <TextField {...params} label="Ingrediente" />
          )}
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            setFilters((e: CardDrinkOptions) => {
              return { ...e, strGlass: a?.text as string | null };
            });
          }}
          options={ConvertToOptionsGlass(contexto.Glass)}
          sx={{ width: "15vw", backgroundColor: "var(--nav-bg)" }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de Copo" />
          )}
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            setFilters((e: CardDrinkOptions) => {
              return { ...e, strCategory: a?.text as string | null };
            });
          }}
          options={ConvertToOptionsCategory(contexto.Category)}
          sx={{ width: "15vw", backgroundColor: "var(--nav-bg)" }}
          renderInput={(params) => <TextField {...params} label="Categoria" />}
        />
        <Autocomplete
          size="small"
          disablePortal
          onChange={(x, a) => {
            setFilters((e: CardDrinkOptions) => {
              return { ...e, strAlcoholic: a?.text as string | null };
            });
          }}
          options={ConvertToOptionsAlcoholic(contexto.Alcoholic)}
          sx={{ width: "15vw", backgroundColor: "var(--nav-bg)" }}
          renderInput={(params) => (
            <TextField {...params} label="Categoria de Alcool" />
          )}
        />
      </HorizontalAlign>

      <GridCardContainer>
        <CardDrink value={ConvertToDrinks(dadoMemo)} />
      </GridCardContainer>

      <SelectLetter
        data={GerarAlfabeto()}
        value={LetraSelecionada}
        onClick={(e) => {
          setLetraSelecionada(e);
        }}
      />
    </>
  );
};

export default PaginaInicial;
