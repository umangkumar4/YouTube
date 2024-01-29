import {useState, useEffect, createContext} from "react";
import { fetchDataFromApi } from '../Utils/API';


export const context = createContext();

const AppContext = (props) => {
    const[loading, setLoading] = useState(false);
    const[searchResult, setSearchResult] = useState(false);
    const[selectCategory, setSelectCategory] = useState("New");
    const[mobileMenu, setMobileMenu] = useState(false);

   useEffect(()=>{
    fetchSelectedCategoryData(selectCategory)
   },[selectCategory]);

  function fetchSelectedCategoryData(query){
    setLoading(true);
    const res = fetchDataFromApi(`search/?q=${query}`);
    console.log(res)
    setSearchResult(res);
    setLoading(false);
  }

    
  return (
    <context.Provider value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu
    }} >
        {props.children}
    </context.Provider>
  )
}

export default AppContext;
