import React, { createContext, useContext, useEffect, useState } from "react";
import { searchCep } from "../services/viaCep";

const AppContext = createContext({});

const AppProvider = ({children}) => {
    const [resultList, setResultList] = useState([]);

    async function getCep(cep) {
        if (cep) {
            let result = await searchCep(cep);
            if (Object.keys(result).length > 0)
            {   
                //console.log(temp);
                let temp = [];
                temp.push(result);
                setResultList(temp);
            }   
        }
    }

    return (
        <AppContext.Provider value={{
            resultList,
            getCep,
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) throw new Error("Context error")
    return context;
};

export { AppProvider, useAppContext};