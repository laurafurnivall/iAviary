import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AddSpecies = () => {

    const navigate = useNavigate()    
    const [newSpecies, addNewSpecies] = useState({
        commonName: "",
        scientificName: "",
        img: "",
        description: ""
    })

    const handleAddSpeciesClick = (event) => {
        event.preventDefault()

        const speciesToSaveToAPI = {
            commonName: newSpecies.commonName,
            scientificName: newSpecies.scientificName,
            img: newSpecies.img,
            description: newSpecies.description
        }
        fetch(`http://localhost:8088/species`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(speciesToSaveToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/species")
        })

    }

    return (
        <form className="addBirdForm">
            <h2 className="addBirdFormTitle">Add a new Species into the Database</h2>
            <fieldset>
                <div className="birdFormGroup">
                    <label htmlFor="birdName">Common Name:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        placeholder="Turkey Vulture"
                        value={newSpecies.commonName}
                        onChange={
                            (event) => {
                                const copy = { ...newSpecies }
                                copy.commonName = event.target.value
                                addNewSpecies(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label htmlFor="birdName">Scietific Name:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        placeholder="Cathartes aura"
                        value={newSpecies.scientificName}
                        onChange={
                            (event) => {
                                const copy = { ...newSpecies }
                                copy.scientificName = event.target.value
                                addNewSpecies(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label htmlFor="birdImg">Image:</label>
                    <input
                        type="text"
                        className="birdImage"
                        value={newSpecies.img}
                        placeholder="Image URL"
                        onChange={
                            (event) => {
                                const copy = { ...newSpecies }
                                copy.img = event.target.value
                                addNewSpecies(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label htmlFor="birdIdentifiers">Description:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        placeholder="Brief species description..."
                        value={newSpecies.description}
                        onChange={
                            (event) => {
                                const copy = { ...newSpecies}
                                copy.description = event.target.value
                                addNewSpecies(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleAddSpeciesClick(clickEvent)}
                className="btn btn-primary">
                Add Species
            </button>
        </form>
    )
}