import { useState } from "react";
import { SpeciesSearch } from "./SpeciesSearch";
import { Species } from "./Species";
import { Modal, Button } from 'react-bootstrap'

export const SpeciesContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    const [isShow, invokeModal] = useState(false)
    const handleClose = () => invokeModal(false)
    const handleOpen = () => invokeModal(true)

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

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
            handleClose()
        })

    }

    return <>
        <h2>Species Database</h2>
        <div className="addSpeciesButtonAndSearch">
            {
                aviaryUserObject.admin
                    ? <Button className="button addbutton" variant="success" onClick={handleOpen}>Add Species</Button>
                    : ""
            }
            <SpeciesSearch setterFunction={setSearchTerms} />
        </div>
        <Species searchTermState={searchTerms} />

        <Modal show={isShow} onHide={handleClose} dialogClassName="modal-50w">
          <Modal.Header closeButton>
            <Modal.Title>Add a New Species</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form className="addBirdForm">
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdName">Common Name:</label>
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
                    <label className="ModalFormLabels" htmlFor="birdName">Scientific Name:</label>
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
                    <label className="ModalFormLabels" htmlFor="birdImg">Image:</label>
                    <input
                        type="text"
                        className="birdFormControl"
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
                    <label className="ModalFormLabels" htmlFor="birdIdentifiers">Description:</label>
                    <textarea
                        maxLength={23}
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
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="closeProfileButton" variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button className="editProfileButton" variant="dark" onClick={handleAddSpeciesClick}>
              Add Species
            </Button>
          </Modal.Footer>
        </Modal>    
    </>
}