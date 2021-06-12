import axios from "axios";
import React, { useContext, useEffect, useState } from "react";


const CocktailsContext = React.createContext();

export const CocktailsProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    const [singleCocktail, setSingleCocktail] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setLoading(true);
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        axios.get(`${url}${searchTerm}`).then((res) => {
            if (res.data.drinks) {
                const newCocktail = res.data.drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
                        item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    };
                });
                setCocktails(newCocktail);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        });
    }, [searchTerm]);

    const getSingleCocktail = async (url) => {
        setLoading(true)
        await axios
            .get(url)
            .then(res => {
                console.log(res.data)
                if (res.data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = res.data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                   
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setSingleCocktail(newCocktail)
                    setLoading(false)
                } else {
                    setSingleCocktail([])
                    setLoading(false)
                }
            });
    }
    return (
        <CocktailsContext.Provider value={
            { cocktails, loading, searchTerm, setSearchTerm, singleCocktail, getSingleCocktail }
        } >
            { children}
        </CocktailsContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(CocktailsContext);
};