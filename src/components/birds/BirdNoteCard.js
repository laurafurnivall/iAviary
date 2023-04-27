import "./BirdNote.css"

export const BirdNoteCard = ({ note, type, date }) => {
    return <><section className="birdNoteCard">
            <div><b>Date: </b> {date}</div>
            <div><b>Category: </b> {type}</div>
            <div><b>Note: </b>{note}</div>
            </section>
    </>
}