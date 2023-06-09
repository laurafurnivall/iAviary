import { useState, useEffect } from "react"
import "./Species.css"
import { SpeciesCard } from "./SpeciesCard"
import { Button, Modal } from "react-bootstrap"

export const Species = ({ searchTermState }) => { 

    const [species, setSpecies] = useState([]) //initial state of species
    const [filteredSpecies, setFilteredSpecies] = useState([]) //changeable state of species, filtered by criteria
    
    const [isShow, invokeModal] = useState(false) //modal control
    const handleClose = () => invokeModal(false)
    const handleOpen = () => invokeModal(true)

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    const [newSpecies, addNewSpecies] = useState({ //add new species empty object
        commonName: "",
        scientificName: "",
        img: "",
        description: ""
    })

    const getAllSpecies = () => { //fetch species, sort by commonName
        fetch(`http://localhost:8088/species?_sort=commonName&_order=asc`)
            .then(response => response.json())
            .then((speciesArray) => {
                setSpecies(speciesArray)
            })
    }

    // function to handle the add of species 
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(speciesToSaveToAPI)
        })
            .then(response => response.json())
            .then(() => {
                handleClose(getAllSpecies())

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
            if (searchTermState === "") { //if search field is cleared, all species will show
                getAllSpecies()
            } else { //else search by commonName
            const searchedSpecies = filteredSpecies.filter(oneSpecies => { 
                return oneSpecies.commonName.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFilteredSpecies(searchedSpecies)}
        },
        [searchTermState] //watching for search field to be typed in
    )


    return <>
        {
            aviaryUserObject.admin //if admin, can add species
                ? <>
                    <Button className="button addbutton" variant="success" onClick={handleOpen}>Add Species</Button>
                </>
                : "" //if not admin, can only view species
        }
        {/* <Button className="button allSpeciesButton" variant="success" onClick={getAllSpecies}>All Species</Button> */}
        <article className="species">
            { //props establish for SpeciesCard
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
        {/* modal for adding species */}
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
                                maxLength={250}
                                type="text"
                                className="birdFormControl"
                                placeholder="Brief species description..."
                                value={newSpecies.description}
                                onChange={
                                    (event) => {
                                        const copy = { ...newSpecies }
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