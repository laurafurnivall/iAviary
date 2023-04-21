import { useState, useEffect } from "react"
import "./Species.css"
import { SpeciesCard } from "./SpeciesCard"
import { useNavigate } from "react-router-dom"

export const Species = () => {

    const [species, setSpecies] = useState([])

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    const navigate = useNavigate()

    const getAllSpecies = () => {
        fetch(`http://localhost:8088/species`)
        .then(response => response.json())
        .then((speciesArray) => {
            setSpecies(speciesArray)
        })
    }
    useEffect(
        () =>{
        getAllSpecies()
        },
        []
    )



    return <>
    <h2>Species in iAviary</h2>
    <>
    {
        aviaryUserObject.admin
        ? <button className="buttons" onClick={() => { navigate("addSpecies")}}>Add Species</button>
        : ""
    }
    
    </>
    <article className="species">
        {
            species.map((singularSpecies) => <SpeciesCard key={singularSpecies.id}
            id={singularSpecies.id}
            img={singularSpecies.img}
            commonName={singularSpecies.commonName}
            scientificName={singularSpecies.scientificName}
            description={singularSpecies.description}
            getAllSpecies={getAllSpecies}
            speciesObject={singularSpecies} />
            )
        }
    </article>
    </>
}