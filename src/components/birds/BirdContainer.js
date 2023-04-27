import { useState} from "react";
import { BirdSearch } from "./BirdSearch"
import { Birds } from "./Birds"
import "./Birds.css"

export const BirdsContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    

    return <>
    <h2>Collection Management</h2>
    <BirdSearch setterFunctionTwo={setSearchTerms}/>
    <Birds searchTermState={searchTerms}/> 
    </>
}