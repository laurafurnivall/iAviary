//imports
import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

//export function to display messages
export const AdminUpdates = () => {

    //initial state of messages
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState({
        subjectId: 5,
        userId: 0,
        message: ""
    })

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    //modal control
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

    //handle for Add buttonClick
    const handleAddMessageClick = (event) => {
        event.preventDefault()

        const messageToAddToAPI = {
            userId: aviaryUserObject.id,
            subjectId: 5, //auto set message as admin type
            message: newMessage.message
        }

        fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(messageToAddToAPI)
        })
            .then(response => response.json())
            .then(() => {
                handleClose(getAllMessages()) //close modal and then getAllMessages again
            })
    }


    //return .map of messages, css
    return <><h5 className='messageTitle2'>Updates</h5>
        <section>
            {
                messages.map((message) => {
                    if (message.subject.adminType === true) { //check that message is an admin update
                    return <div className="singleMessage2" key={message.id}>
                        <p>{message.message}</p>
                            {
                                aviaryUserObject.id === message.userId || aviaryUserObject.admin ? //check for admin authentication
                                    < Button className='button2 deleteMessage2' onClick={() =>
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
                    </div>}
                })
            }
        </section >
        {
        aviaryUserObject.admin ?
        <Button className='button' onClick={handleOpen}>Add Message</Button> //check is user is admin
        : ""
        }
        <Modal show={isShow} onHide={handleClose} dialogClassName="modal-40w">
            <Modal.Header closeButton>
                <Modal.Title>Message Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='addMessageForm'>
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