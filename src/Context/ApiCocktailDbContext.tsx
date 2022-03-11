import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ApiDrinksDefault } from "../Data/allDatas";
import { axiosAppServer } from "../Service/axiosAppServer";
import { ApiDrinks } from "../Types/allTypes";


const Context = createContext<ApiDrinks>(ApiDrinksDefault)

export const ApiCocktailProvider = (props: any) => {
    
    const [Data, setData] = useState<ApiDrinks>(ApiDrinksDefault)

    const getDataIngredient = async () => {
        let dados = await axiosAppServer.get('/api/json/v1/1/list.php?i=list')
            .then((i: any) => {
                setData((e: ApiDrinks) => {
                    return { ...e, Ingredients: i.data.drinks }
                });
            })
            .catch((i) => console.log("Lista Ingredients - Falha ao coletar dados"))
        return dados
    }

    const getDataAlcoholic = async () => {
        let dados = await axiosAppServer.get('/api/json/v1/1/list.php?a=list')
            .then((i: any) => {
                setData((e: ApiDrinks) => {
                    return { ...e, Alcoholic: i.data.drinks }
                });
            })
            .catch((i) => console.log("Lista Alcoholic - Falha ao coletar dados"))
        return dados
    }

    const getDataGlass = async () => {
        let dados = await axiosAppServer.get('/api/json/v1/1/list.php?g=list')
            .then((i: any) => {
                setData((e: ApiDrinks) => {
                    return { ...e, Glass: i.data.drinks }
                });
            })
            .catch((i) => console.log("Lista Glass - Falha ao coletar dados"))
        return dados
    }

    const getDatastrCategory = async () => {
        let dados = await axiosAppServer.get('/api/json/v1/1/list.php?c=list')
            .then((i: any) => {
                setData((e: ApiDrinks) => {
                    return { ...e, Category: i.data.drinks }
                });
            })
            .catch((i) => console.log("Lista Category - Falha ao coletar dados"))
        return dados
    }

    const getDatastrRandom = async () => {
        let dados = await axiosAppServer.get('/api/json/v1/1/random.php')
            .then((i: any) => {
                setData((e: ApiDrinks) => {
                    return { ...e, Random: i.data.drinks }
                });
            })
            .catch((i) => console.log("Lista Random - Falha ao coletar dados"))
        return dados
    }

    const getDatastrByLetter = async () => {
        let dados = await axiosAppServer.get('/api/json/v1/1/search.php?f=a')
            .then((i: any) => {
                setData((e: ApiDrinks) => {
                    return { ...e, FirstLetter: i.data.drinks }
                });
            })
            .catch((i) => console.log("Lista Random - Falha ao coletar dados"))
        return dados
    }

   

    useEffect(() => {
        getDataAlcoholic()
        getDataIngredient()
        getDataGlass()
        getDatastrCategory()
        getDatastrRandom()
        getDatastrByLetter()
    }, [])


    return <Context.Provider value={Data}>{props.children}</Context.Provider>
}

export const useApiCocktailContext = () => {
    if (typeof Context === 'undefined') {
        throw new Error("You have to use useApiCocktailContext inside <ApiCocktailProvider/> || Você deve usar o useApiCocktailContext dentro do <ApiCocktailProvider/>")
    }
    return useContext(Context) as ApiDrinks
};



