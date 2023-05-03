import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Birds.css"

export const BirdInfo = () => {

    const { birdId } = useParams() //watch for birdId
    const [oneSpecies, setSpecies] = useState([])
    const [genders, setGenders] = useState([])
    const [oneBird, updateBird] = useState({ //add bird object
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

    useEffect( //fetch bird object with species and gender, watching for param birdId
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

    useEffect( //set species state
        () => {
            fetch(`http://localhost:8088/species`)
                .then(response => response.json())
                .then((species) => {
                    setSpecies(species)
                })
        },
        []
    )

    useEffect( //set gender state
        () => {
            fetch(`http://localhost:8088/genders`)
                .then(response => response.json())
                .then((genders) => {
                    setGenders(genders)
                })
        },
        []
    )

    //handle for editing bird info
    const handleSaveBirdClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/birds/${oneBird.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(oneBird)
        }
        )
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/birds/${oneBird.id}`)
                .then(response => response.json())
                .then()
            })
            
    }

    return <article className="birdInfoContainer">
        <section className="birdInfo">
        <img className="bird_img2" src={oneBird.img} alt="Image of Bird" />
        <div className="bird_info_body">
            <h5 className="bird_info">{oneBird.name}</h5>
            <h6 className="bird_info">{oneBird?.species?.commonName}</h6>
            <ul className="bird_infolist">
                <li className="bird_info">Identifiers: {oneBird.identifiers}</li>
                <li className="bird_info">Gender: {oneBird?.gender?.gender}</li>
                <li className="bird_info">Hatch Day: {oneBird.hatchDay}</li>
            </ul>
        </div>
    </section>
    <section>
    <form className="editBirdForm">
            <h5 className="editBirdFormTitle">Edit Information?</h5>
            <fieldset>
                <div className="birdFormGroup">
                    <label className="ModalFormLabels" htmlFor="birdName">Name:</label>
                    <input
                        type="text"
                        className="birdFormControl"
                        value={oneBird.name}
                        onChange={
                            (event) => {
                                const copy = { ...oneBird }
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
                        value={oneBird.img}
                        placeholder="Image URL"
                        onChange={
                            (event) => {
                                const copy = { ...oneBird }
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
                                const copy = { ...oneBird }
                                copy.speciesId = event.target.value
                                updateBird(copy)
                            }
                        }>
                        <option key={0}>Choose a species...</option>
                        {
                            oneSpecies.map(
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
                                                const copy = { ...oneBird }
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
                        value={oneBird.identifiers}
                        onChange={
                            (event) => {
                                const copy = { ...oneBird }
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
                        value={oneBird.isEgg}
                        onChange={
                            (event) => {
                                const copy = { ...oneBird }
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
                        value={oneBird.hatchDay}
                        onChange={
                            (event) => {
                                const copy = { ...oneBird }
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
    </section></article>
}