import { useState, useEffect } from "react"
import { Bird } from "./BirdCard"
import "./Birds.css"
import { Modal, Button } from 'react-bootstrap'

export const Birds = ({ searchTermState }) => {

    const [birds, setBirds] = useState([])
    const [filteredBirds, setFilteredBirds] = useState([])

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)


    const getAllBirds = () => {
        fetch(`http://localhost:8088/birds/?_expand=species&_expand=gender`)
        .then(response => response.json())
        .then((birdArray) => {
            setBirds(birdArray)
        })
    }

    useEffect(
        () =>{
            getAllBirds()
        },
        []
    )

    const getMyBirds = () => {
        fetch(`http://localhost:8088/birds/?_expand=species&_expand=gender`)
        .then(response => response.json())
        .then((birdArray) => {
            const myBirds = birdArray.filter(bird => bird.userId === aviaryUserObject.id)
            setFilteredBirds(myBirds)
        })
    }
    useEffect(
        () =>{
        getMyBirds()
        },
        [birds]
    )

    useEffect(
        () =>{ 
        if (searchTermState === "") {
            getMyBirds()
        } else {
        const searchedBirds = filteredBirds.filter(oneBird => {
            return oneBird.name.toLowerCase().startsWith(searchTermState.toLowerCase()) 
        })
        setFilteredBirds(searchedBirds)}
        },
        [searchTermState]
    )

    const [isShow, invokeModal] = useState(false)
    const handleClose = () => invokeModal(false)
    const handleOpen = () => invokeModal(true)

    const [species, setSpecies] = useState([])
    const [genders, setGenders] = useState([])
    const [newBird, setNewBird] = useState({
        userId: 0,
        speciesId: 0,
        img: "",
        name: "",
        genderId: 0,
        identifiers: "",
        isEgg: false,
        isDeceased: false,
        hatchDay: ""
    })

    useEffect(
        () => {
            fetch(`http://localhost:8088/species`)
                .then(response => response.json())
                .then((species) => {
                    setSpecies(species)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/genders`)
                .then(response => response.json())
                .then((genders) => {
                    setGenders(genders)
                })
        },
        []
    )

    const handleSaveBirdClick = (event) => {
        event.preventDefault()

        const birdToSaveToAPI = {
            userId: aviaryUserObject.id,
            speciesId: parseInt(newBird.speciesId),
            img: newBird.img,
            name: newBird.name,
            genderId: newBird.genderId,
            identifiers: newBird.identifiers,
            isEgg: newBird.isEgg,
            isDeceased: false,
            hatchDay: newBird.hatchDay
        }

        return fetch(`http://localhost:8088/birds`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(birdToSaveToAPI)
        })
            .then(response => response.json())
            .then(() => {
                handleClose(getMyBirds())
            })

    }

    return <>
    <Button className="button addbutton" onClick={handleOpen}>Add Bird or Egg</Button>
    <Button className="button addbutton" onClick={getAllBirds}>Get All Birds</Button>
    <article className="birds">
        {
            filteredBirds.map((bird) => <Bird key={bird.id}
            id={bird.id}
            img={bird.img}
            name={bird.name}
            species={bird?.species?.commonName}
            sex={bird?.gender?.gender}
            identifiers={bird.identifiers}
            getAllBirds={getAllBirds}
            birdObject={bird}
            hatchDay={bird.hatchDay} />
            )
        }
    </article>

    <Modal show={isShow} onHide={handleClose} dialogClassName="modal-40w">
          <Modal.Header closeButton>
            <Modal.Title>Add to your Aviary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form className="addBirdForm">
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdName">Name:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        placeholder="Name of new bird"
                        value={newBird.name}
                        onChange={
                            (event) => {
                                const copy = { ...newBird }
                                copy.name = event.target.value
                                setNewBird(copy)
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
                        value={newBird.img}
                        placeholder="Image URL"
                        onChange={
                            (event) => {
                                const copy = { ...newBird }
                                copy.img = event.target.value
                                setNewBird(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdSpecies">Species:</label>
                    <select
                    className="birdFormControl"
                        onChange={
                            (event) => {
                                const copy = { ...newBird }
                                copy.speciesId = event.target.value
                                setNewBird(copy)
                            }
                        }>
                        <option key={0}>Choose a Species</option>
                        {
                            species.map(
                                (birdSpecies) => {
                                    return (
                                        <option key={birdSpecies.id} value={birdSpecies.id}>{birdSpecies.commonName}</option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdGender">Gender:</label>
                    {
                        genders.map(
                            (birdGender) => {
                                return <div className="addbirdRadio" key={birdGender.id + "gender"}>
                                    <input
                                        type="radio"
                                        name="birdGenderButtons"
                                        key={birdGender.gender + birdGender.id}
                                        value={birdGender.id}
                                        onChange={
                                            (event) => {
                                                const copy = { ...newBird }
                                                copy.genderId = parseInt(event.target.value)
                                                setNewBird(copy)
                                            }
                                        } />
                                    <label htmlFor="genderName" key={"gender--" + birdGender.id}>{birdGender.gender}</label>
                                </div>
                            }
                        )
                    }
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdIdentifiers">Identifiers:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        placeholder="Bands or unique identifiers"
                        value={newBird.identifiers}
                        onChange={
                            (event) => {
                                const copy = { ...newBird }
                                copy.identifiers = event.target.value
                                setNewBird(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdEgg">Is it an Egg?</label>
                    <input 
                    className="eggcheck"
                    type="checkbox"
                        value={newBird.isEgg}
                        onChange={
                            (event) => {
                                const copy = { ...newBird }
                                copy.isEgg = event.target.checked
                                setNewBird(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdGender">Hatch Day:</label>
                    <input 
                    className="birdFormControl"
                    type="date"
                        value={newBird.hatchDay}
                        onChange={
                            (event) => {
                                const copy = { ...newBird }
                                copy.hatchDay = event.target.value
                                setNewBird(copy)
                            }
                        } />
                </div>
            </fieldset>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="closeBirdButton" variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button className="button" variant="dark" onClick={handleSaveBirdClick}>
              Add to Collection
            </Button>
          </Modal.Footer>
        </Modal>
    </>
}