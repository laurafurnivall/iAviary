//Imports
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./BirdWeight.css"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import { BirdGraph } from "./Graph";

//Export Function BirdWeights
export const BirdWeights = () => {
    
    const { birdId } = useParams() //observe for specific birdId
    const [weights, setWeights] = useState([]) //initial state
    const [filteredWeights, setFilteredWeights] = useState([])
    const [newWeight, setNewWeight] = useState({ //object to add new weight
        birdId: birdId,
        weight: 0,
        date: ""
    })

    //modal control
    const [isShow, invokeModal] = useState(false)
    const handleClose = () => invokeModal(false)
    const handleOpen = () => invokeModal(true)

    //function of fetch call to get all weights, will be used later
    const getAllWeights = () => {
        fetch(`http://localhost:8088/weights`)
            .then(response => response.json())
            .then((weightData) => {
                setWeights(weightData) //establish request
            })
    }

    useEffect(
        () => {
            getAllWeights() // establish state
        },
        []
    )

    //Filter weights down to param of birdId

    const getOneBirdsWeights = () => {
        fetch(`http://localhost:8088/weights/?_sort=date&birdId=${birdId}`)
            .then(response => response.json())
            .then((singleBirdData) => {
                setFilteredWeights(singleBirdData)
            })
    }

    useEffect(
        () => {
            getOneBirdsWeights()
        },
        [weights]
    )
    
    //function to handle adding weight into databasegit branch
    const handleAddWeightClick = (event) => {
        event.preventDefault()

        const weightToAddToAPI = {
            birdId: parseInt(birdId),
            weight: newWeight.weight,
            date: newWeight.date
        }

        return fetch(`http://localhost:8088/weights`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(weightToAddToAPI)
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/weights/?_sort=date&birdId=${birdId}`)
                    .then(response => response.json())
                    .then((newWeight) => {
                        setFilteredWeights(newWeight)
                    })
            })
    }

    // handle Function for addWeight button
    return <>
        {/* Three sections:
            1. List of weights (left top quadrant)
                    .map, filter by bird
            2. Add a weight (left  bottom quadrant)
                    small form to add weight, button with handleFunction
            3. Weights graph (right side)
                    graph?!?! */}
        <article className="mainWeightsContainer">
            <section className="listAndAddWeights">
                <h5>Weights</h5>
                <div className="listWeights">
                    {
                        filteredWeights.map((weight) => {
                            return <section className="singleWeightContainer" key={`weight--${weight.id}`}><div className="singleWeight" key={weight.id}>{weight.weight} grams on {weight.date}</div>
                                <Button className="button2"
                                    onClick={() => {
                                        fetch(`http://localhost:8088/weights/${weight.id}`, {
                                            method: "DELETE"
                                        })
                                            .then(response => response.json())
                                            .then(getAllWeights())
                                    }}>Delete</Button></section>
                        })
                    }
                </div>
            </section>
            <section className="addWeight">
                <h5>Add New Weight</h5>
                <Form className="addBirdWeight">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control className="addWeightFormControl"
                        type="date"
                        value={newWeight.date}
                        onChange={
                            (event) => {
                                const copy = { ...newWeight }
                                copy.date = event.target.value
                                setNewWeight(copy)
                            }
                        } />
                    <Form.Label>Weight:</Form.Label>
                    <Form.Control className="addWeightFormControl"
                        type="number"
                        value={newWeight.weight}
                        onChange={
                            (event) => {
                                const copy = { ...newWeight }
                                copy.weight = event.target.value
                                setNewWeight(copy)
                            }
                        } />
                </Form>
               
                <Button className="button"
                    onClick={(clickEvent) => handleAddWeightClick(clickEvent)}>
                    Add Weight</Button>
                <Button className="button" onClick={handleOpen}>Show Weight Trends</Button>
                <Modal show={isShow} onHide={handleClose} dialogClassName="modal-40w">
                    <Modal.Header closeButton>
                        <Modal.Title>Weight Trends</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                    <BirdGraph />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="closeBirdButton" variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </article>
    </>
}