import { useState} from "react";
import { BirdSearch } from "./BirdSearch"
import { Birds } from "./Birds"
import "./Birds.css"


//container holding bird searh field and birds function so that
//the two functions can intermingle
export const BirdsContainer = () => {
    const [searchTerms, setSearchTerms] = useState("") 
    //observe state, which in the search field it will set what ever is typed within,
    //seeking the search terms within the bird cards located within Birds function

    return <>
    <h2>Collection Management</h2>
    <BirdSearch setterFunctionTwo={setSearchTerms}/> 
    <Birds searchTermState={searchTerms}/> 
    </>
}