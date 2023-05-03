//import Species and SpeciesSearch so that the search function can be utilized with the species cards
import { useState } from "react";
import { SpeciesSearch } from "./SpeciesSearch";
import { Species } from "./Species";

export const SpeciesContainer = () => { //container so that species and search can intermingle
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <h2>Species Database</h2>   
        <SpeciesSearch setterFunction={setSearchTerms} />
        <Species searchTermState={searchTerms} />
    </>
}