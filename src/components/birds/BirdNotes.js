import { useParams } from "react-router-dom"
import "./BirdNote.css"
import { useState, useEffect } from "react"
import { BirdNoteCard } from "./BirdNoteCard"

export const BirdNotes = () => {


    const { birdId } = useParams()
    const [notes, setNotes] = useState([])
    const [filteredNotes, setFilteredNotes] = useState([])
    const [newNote, addNewNote] = useState({
        birdId: birdId,
        typeId: 0,
        note: "",
        date: ""
    })


    useEffect(
        () => {
            fetch(`http://localhost:8088/notes`)
                .then(response => response.json())
                .then((noteData) => {
                    setNotes(noteData)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/notes/?_expand=bird&_expand=type&birdId=${birdId}`)
                .then(response => response.json())
                .then((singleBirdNotes) => {
                    setFilteredNotes(singleBirdNotes)
                })
        },
        [notes]
    )

    return<>
        <section className="birdnotesContainer">
            <div className="notesContent">
                {
                    filteredNotes.map((note) => <BirdNoteCard key={note.id}
                        note={note.note}
                        date={note.date}
                        type={note.type.type} />
                    )
                }
            </div>
            <div className="addNotesContent">Add a Note</div>
        </section>
        </>
}