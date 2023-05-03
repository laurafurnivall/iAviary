//imports
import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

//export function to display messages
export const Messages = () => {

    //initial state of messages
    const [messages, setMessages] = useState([])
    const [subjects, setSubjects] = useState([])
    const [newMessage, setNewMessage] = useState({
        subjectId: 0,
        userId: 0,
        message: ""
    })

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    const [isShow, invokeModal] = useState(false)
    const handleClose = () => invokeModal(false)
    const handleOpen = () => invokeModal(true)

    //function to getMessages, fetch call
    const getAllMessages = () => {
        fetch(`http://localhost:8088/messages?_expand=subject&_expand=user`)
            .then(response => response.json())
            .then((messageData) => {
                setMessages(messageData)
            })
    }
    //set state, useEffect
    useEffect(
        () => {
            getAllMessages()
        },
        []
    )

    //set state of subjects
    useEffect(
        () => {
            fetch(`http://localhost:8088/subjects`)
                .then(response => response.json())
                .then((subjectData) => {
                    setSubjects(subjectData)
                })
        },
        []
    )

    //handle for Add buttonClick
    const handleAddMessageClick = (event) => {
        event.preventDefault()

        const messageToAddToAPI = {
            userId: aviaryUserObject.id,
            subjectId: newMessage.subjectId,
            message: newMessage.message
        }

        fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(messageToAddToAPI)
        })
            .then(response => response.json())
            .then(() => {
                handleClose(getAllMessages())
            })
    }


    //return .map of messages, css
    return <><h5>Messages</h5>
        <section>
            {
                messages.map((message) => {
                    if (message.subject.adminType === false) {
                    return <div className="singleMessage" key={message.id}>
                        <h6>{message.subject.subject} by {message.user.name}</h6>
                        <p>{message.message}</p>
                        <footer>Reply to: <Link className='button2'>{message.user.email}</Link>
                            {
                                aviaryUserObject.id === message.userId || aviaryUserObject.admin ?
                                    < Button className='button2 deleteMessage' onClick={() =>
                                        fetch(`http://localhost:8088/messages/${message.id}`, {
                                            method: "DELETE"
                                        })
                                            .then(response => response.json())
                                            .then(() => {
                                                getAllMessages()
                                            })
                                    }>Delete</Button>
                                    : ""
                            }
                        </footer>
                    </div> }
                })
            }
        </section >
        <Button className='button' onClick={handleOpen}>Add Message</Button>

        <Modal show={isShow} onHide={handleClose} dialogClassName="modal-40w">
            <Modal.Header closeButton>
                <Modal.Title>Message Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='addMessageForm'>
                    <Form.Label className="addMessageFormLabel">Choose Your Subject</Form.Label>
                    <Form.Select
                        className="addMessageControl"
                        value={newMessage.subjectId}
                        onChange={
                            (event) => {
                                const copy = { ...newMessage }
                                copy.subjectId = event.target.value
                                setNewMessage(copy)
                            }
                        }>
                        <option key={0}>Choose a Message Subject</option>
                        {
                            subjects.map(
                                (subject) => {
                                    if (subject.adminType === false)
                                    return (
                                        <option key={subject.id} value={subject.id}>{subject.subject}</option>
                                    )
                                }
                            )
                        }
                    </Form.Select>
                    <Form.Label className="addMessageFormLabel">Message:</Form.Label>
                    <Form.Control className='addMessageControl'
                        as="textarea"
                        row={3}
                        value={newMessage.message}
                        onChange={
                            (event) => {
                                const copy = { ...newMessage }
                                copy.message = event.target.value
                                setNewMessage(copy)
                            }
                        } />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="closeBirdButton" variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button className="button" variant="dark" onClick={handleAddMessageClick}>
                    Add Message
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}