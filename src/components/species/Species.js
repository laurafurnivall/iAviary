import { useState, useEffect } from "react"
import "./Species.css"
import { SpeciesCard } from "./SpeciesCard"
import { useNavigate } from "react-router-dom"

export const Species = ({ searchTermState }) => {

    const [species, setSpecies] = useState([])
    const [filteredSpecies, setFilteredSpecies] = useState([])

    const getAllSpecies = () => {
        fetch(`http://localhost:8088/species`)
            .then(response => response.json())
            .then((speciesArray) => {
                setSpecies(speciesArray)
            })
    }

    useEffect(
        () => {
            setFilteredSpecies(species)
        },
        [species]
    )
    useEffect(
        () => {
            getAllSpecies()
        },
        []
    )

    useEffect(
        () => {
            const searchedSpecies = species.filter(oneSpecies => {
                return oneSpecies.commonName.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFilteredSpecies(searchedSpecies)
        },
        [searchTermState]
    )


    return <>
        <article className="species">
            {
                filteredSpecies.map((singularSpecies) => <SpeciesCard key={singularSpecies.id}
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