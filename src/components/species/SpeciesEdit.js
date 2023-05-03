import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditSpecies = () => {
    
    const navigate = useNavigate()
    const {speciesId} = useParams() //only viewing edit page based on one species

    const [oneSpecies, updateOneSpecies] = useState({ //object that will update species edits
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
        [speciesId] //watching for speciesId, will pinpoint that one object that will be edited
    )

    const handleSaveSpeciesClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/species/${oneSpecies.id}`, {
            method: "PUT", //place new info into object
            headers:  {
                "Content-type": "application/json"
            },
            body: JSON.stringify(oneSpecies)
        }
        )
        .then(response => response.json())
        .then(() => {
            navigate("/species") //navigate back to species page
        })
    }

    //form to edit selected species, will autopopulate selected species
    return (<> 
        <h2 className="editSpeciesFormTitle">Edit Species Information</h2>
        <form className="editSpeciesForm">
            <fieldset>
                <div className="speciesFormGroup">
                    <label htmlFor="speciesCommonName"><b>Common Name:</b></label>
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
                    <label htmlFor="speciesScientificName"><b>Scientific Name:</b></label>
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
                    <label htmlFor="speciesImg"><b>Image URL:</b></label>
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
                    <label htmlFor="speciesDescription"><b>Description:</b></label>
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
                className="button" id="buttonSpecies">
                Save Edits
            </button>
        </form>
        </>
    )
}