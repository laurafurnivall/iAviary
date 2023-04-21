import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditSpecies = () => {
    
    const navigate = useNavigate()
    const {speciesId} = useParams()

    const [oneSpecies, updateOneSpecies] = useState({
        id: speciesId,
        img: "",
        commonName: "",
        scientificName: "",
        description: ""
    })

    useEffect(
        () =>{
        fetch(`http://localhost:8088/species/?id=${speciesId}`)
        .then(response => response.json())
        .then((speciesData) => {
            const singleSpecies = speciesData[0]
            updateOneSpecies(singleSpecies)
        })
        },
        [speciesId]
    )

    const handleSaveSpeciesClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/species/${oneSpecies.id}`, {
            method: "PUT",
            headers:  {
                "Content-type": "application/json"
            },
            body: JSON.stringify(oneSpecies)
        }
        )
        .then(response => response.json())
        .then(() => {
            navigate("/species")
        })
    }

    return (
        <form className="editSpeciesForm">
            <h2 className="editSpeciesFormTitle">Edit Species Information</h2>
            <fieldset>
                <div className="speciesFormGroup">
                    <label htmlFor="speciesCommonName">Common Name:</label>
                    <input
                        type="text"
                        className="speciesFormControl"
                        value={oneSpecies.commonName}
                        onChange={
                            (event) => {
                                const copy = { ...oneSpecies }
                                copy.commonName = event.target.value
                                updateOneSpecies(copy)
                            }
                        }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="speciesFormGroup">
                    <label htmlFor="speciesScientificName">Scientific Name:</label>
                    <input
                        type="text"
                        className="speciesFormControl"
                        value={oneSpecies.scientificName}
                        onChange={
                            (event) => {
                                const copy = { ...oneSpecies }
                                copy.scientificName = event.target.value
                                updateOneSpecies(copy)
                            }
                        }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="speciesFormGroup">
                    <label htmlFor="speciesImg">Image URL:</label>
                    <input
                        type="text"
                        className="speciesFormControl"
                        value={oneSpecies.img}
                        onChange={
                            (event) => {
                                const copy = { ...oneSpecies }
                                copy.img = event.target.value
                                updateOneSpecies(copy)
                            }
                        }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="speciesFormGroup">
                    <label htmlFor="speciesDescription">Description:</label>
                    <textarea
                        type="text"
                        className="speciesFormControl"
                        value={oneSpecies.description}
                        onChange={
                            (event) => {
                                const copy = { ...oneSpecies }
                                copy.description = event.target.value
                                updateOneSpecies(copy)
                            }
                        }/>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveSpeciesClick(clickEvent)}
                className="button">
                Save Edits
            </button>
        </form>
    )
}