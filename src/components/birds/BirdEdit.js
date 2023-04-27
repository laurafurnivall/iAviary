import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Birds.css"
import { BirdInfo } from "./BirdInfo"


export const BirdEdit = () => {

    const navigate = useNavigate()
    const { birdId } = useParams()
    
    const [oneSpecies, setSpecies] = useState([])
    const [genders, setGenders] = useState([])
    const [bird, updateBird] = useState({
        id: birdId,
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


    useEffect(
        () => {
            fetch(`http://localhost:8088/birds/?_expand=species&_expand=gender&id=${birdId}`)
                .then(response => response.json())
                .then((birdData) => {
                    const singleBird = birdData[0]
                    updateBird(singleBird)
                })
        },
        [birdId]
    )

    const handleSaveBirdClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/birds/${bird.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bird)
        }
        )
            .then(response => response.json())
            .then(() => {
                navigate("/birds")
            })
    }

    return <>
        <form className="editBirdForm">
            <h4 className="editBirdFormTitle">Edit your Bird's Information?</h4>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdName">Name:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        value={bird.name}
                        onChange={
                            (event) => {
                                const copy = { ...bird }
                                copy.name = event.target.value
                                updateBird(copy)
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
                        value={bird.img}
                        placeholder="Image URL"
                        onChange={
                            (event) => {
                                const copy = { ...bird }
                                copy.img = event.target.value
                                updateBird(copy)
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
                                const copy = { ...bird }
                                copy.speciesId = event.target.value
                                updateBird(copy)
                            }
                        }>
                        <option key={0}>{bird?.species?.commonName}, {bird?.species?.scientificName}</option>
                        {
                            oneSpecies.map(
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
                                                const copy = { ...bird }
                                                copy.genderId = parseInt(event.target.value)
                                                updateBird(copy)
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
                    <textarea
                        type="text"
                        className="birdFormControl"
                        placeholder="Bands or unique identifiers"
                        value={bird.identifiers}
                        onChange={
                            (event) => {
                                const copy = { ...bird }
                                copy.identifiers = event.target.value
                                updateBird(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdEgg">Is it an Egg?</label>
                    <input type="checkbox"
                        className="eggcheck"
                        value={bird.isEgg}
                        onChange={
                            (event) => {
                                const copy = { ...bird }
                                copy.isEgg = event.target.checked
                                updateBird(copy)
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
                        value={bird.hatchDay}
                        onChange={
                            (event) => {
                                const copy = { ...bird }
                                copy.hatchDay = event.target.value
                                updateBird(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveBirdClick(clickEvent)}
                className="button">
                Save Edits
            </button>
        </form>
    </>
}