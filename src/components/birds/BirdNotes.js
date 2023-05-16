import { useParams } from "react-router-dom"
import "./BirdNote.css"
import { useState, useEffect } from "react"
import { BirdNoteCard } from "./BirdNoteCard"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const BirdNotes = () => {

    const { birdId } = useParams()
    const [notes, setNotes] = useState([])
    const [types, setTypes] = useState([])
    const [filteredNotes, setFilteredNotes] = useState([])
    const [newNote, addNewNote] = useState({
        birdId: birdId,
        typeId: 0,
        note: "",
        date: ""
    })

    const getAllNotes = () => {
        fetch(`http://localhost:8088/notes`)
            .then(response => response.json())
            .then((noteData) => {
                setNotes(noteData)
            })
    }

    useEffect( //fetch notes
        () => {
            getAllNotes()
        },
        []
    )

    useEffect( //fetch types
        () => {
            fetch(`http://localhost:8088/types`)
                .then(response => response.json())
                .then((typeData) => {
                    setTypes(typeData)
                })
        },
        []
    )

    useEffect( //watch state for notes, filter to only single birds notes by param
        () => {
            fetch(`http://localhost:8088/notes/?_expand=bird&_expand=type&birdId=${birdId}`)
                .then(response => response.json())
                .then((singleBirdNotes) => {
                    setFilteredNotes(singleBirdNotes)
                })
        },
        [notes]
    )

    //function to handle adding new note  
    const handleSaveNoteClick = (event) => {
        event.preventDefault()

        const noteToSaveToAPI = {
            birdId: birdId,
            typeId: newNote.typeId,
            note: newNote.note,
            date: newNote.date
        }

        return fetch(`http://localhost:8088/notes/`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(noteToSaveToAPI)
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/notes/?_expand=type&birdId=${birdId}`)
                    .then(response => response.json())
                    .then((newNoteData) => {
                        setFilteredNotes(newNoteData)
                    })
            })
    }

    return <>
        <section className="birdnotesContainer">
            <div className="notesContent">
                <h5 className="noteTitle">Notes</h5>
                {
                    filteredNotes.map((note) => <BirdNoteCard key={note.id}
                        id={note.id}
                        note={note.note}
                        date={note.date}
                        type={note?.type?.type}
                        getAllNotes={getAllNotes} />
                    )
                }
            </div>
            <div className="addNotesContent">
                <h5 className="noteTitle">Add a New Note</h5>
                <Form className="addBirdNote">
                    <Form.Label>Date: </Form.Label>
                    <Form.Control className="addNoteFormControl"
                        type="date"
                        value={newNote.date}
                        onChange={
                            (event) => {
                                const copy = { ...newNote }
                                copy.date = event.target.value
                                addNewNote(copy)
                            }
                        } />
                    <Form.Label>Type: </Form.Label>
                    <Form.Select
                        className="addNoteFormControl"
                        value={newNote.typeId}
                        onChange={
                            (event) => {
                                const copy = { ...newNote }
                                copy.typeId = event.target.value
                                addNewNote(copy)
                            }
                        }>
                        <option key={0}>Choose a Note Category</option>
                        {
                            types.map(
                                (type) => {
                                    return (
                                        <option key={type.id} value={type.id}>{type.type}</option>
                                    )
                                }
                            )
                        }
                    </Form.Select>
                    <Form.Label>Note: </Form.Label>
                    <Form.Control
                        className="addNoteFormControl"
                        as="textarea"
                        rows={3}
                        value={newNote.note}
                        onChange={
                            (event) => {
                                const copy = { ...newNote }
                                copy.note = event.target.value
                                addNewNote(copy)
                            }
                        } />
                </Form>
                <Button className="button"
                    onClick={(clickEvent) => handleSaveNoteClick(clickEvent)}>
                    Save
                </Button>
            </div>
        </section>
    </>
}