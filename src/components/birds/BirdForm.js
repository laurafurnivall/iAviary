import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const BirdForm = () => {
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
    const navigate = useNavigate()

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

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

        return fetch(`http://localhost:8088/birdsAndEggs`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(birdToSaveToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/birds")
            })

    }
    return (
        <form className="addBirdForm">
            <h2 className="addBirdFormTitle">Add a Bird or Egg to your Aviary</h2>
            <fieldset>
                <div className="birdFormGroup">
                    <label htmlFor="birdName">Name:</label>
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
                    <label htmlFor="birdImg">Image:</label>
                    <input
                        type="text"
                        className="birdImage"
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
                    <label htmlFor="birdSpecies">Species:</label>
                    <select
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
                                        <option key={birdSpecies.id} value={birdSpecies.id}>{birdSpecies.commonName}, {birdSpecies.scientificName}</option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label htmlFor="birdGender">Gender:</label>
                    {
                        genders.map(
                            (birdGender) => {
                                return <div key={birdGender.id + "gender"}>
                                    <input
                                        type="radio"
                                        className="birdFormControl"
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
                    <label htmlFor="birdIdentifiers">Identifiers:</label>
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
                    <label htmlFor="birdEgg">Is it an Egg?</label>
                    <input type="checkbox"
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
                    <label htmlFor="birdGender">Hatch Day:</label>
                    <input type="date"
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
            <button
                onClick={(clickEvent) => handleSaveBirdClick(clickEvent)}
                className="btn btn-primary">
                Add to Aviary
            </button>
        </form>
    )
}