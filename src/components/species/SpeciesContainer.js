import { useState } from "react";
import { SpeciesSearch } from "./SpeciesSearch";
import { Species } from "./Species";
import { Modal, Button } from 'react-bootstrap'

export const SpeciesContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <h2>Species Database</h2>   
        <SpeciesSearch setterFunction={setSearchTerms} />
        <Species searchTermState={searchTerms} />
    </>
}