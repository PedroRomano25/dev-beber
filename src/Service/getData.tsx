import { useMemo } from "react";
import { CardDrinkOptionsSemResultado } from "../Data/allDatas";
import { CardDrinkOptions } from "../Types/allTypes";
import { axiosAppServer } from "./axiosAppServer";


class getData {       
    async Data( rota: string,valorPesquisado:string,contexto: CardDrinkOptions[]) {      
        const result = await axiosAppServer
          .get(rota + valorPesquisado)
          .then((i) => {        
            if (i.data.drinks != null  ) {
              return i.data.drinks
            } else {
                console.log(2)
              return CardDrinkOptionsSemResultado
            }})
          .catch((i) => {
            console.log("Falha ao coletar dados")
            console.log(3)
            return contexto
        });   
        return result 
      }
}
export default getData;

export const useGetData = () => {    
    return useMemo(() => new getData(), []);
}

