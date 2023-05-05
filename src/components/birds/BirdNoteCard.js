import "./BirdNote.css"

//small function show notes adding about a specific bird, called in BirdNotes
export const BirdNoteCard = ({ getAllNotes, id, note, type, date }) => {

    //button to delete note    
    const deleteNote = () => {
        return <button className="button2"
            onClick={() => {
                fetch(`http://localhost:8088/notes/${id}`, {
                    method: "DELETE"
                })
                    .then(response => response.json())
                    .then(getAllNotes()

                        )
            }}
        >Delete</button>
    }

    return <><section className="birdNoteCard">
            <div><b>Date: </b> {date}</div>
            <div><b>Category: </b> {type}</div>
            <div><b>Note: </b>{note}</div>
            {deleteNote()}
            </section>
           
    </>
}