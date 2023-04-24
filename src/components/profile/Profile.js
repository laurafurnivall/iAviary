import { useEffect,  useState } from "react"
import { Modal, Button } from 'react-bootstrap'
import "./Profile.css"

export const Profile = () => {

    const [editProfile, updateProfile] = useState({
        name: "",
        aviaryName: "",
        aboutInfo: "",
        interests: "",
        address: "",  
        email: "" 
    })

    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)

    const [isShow, invokeModal] = useState(false)
    const handleClose = () => invokeModal(false)
    const handleOpen = () => invokeModal(true)


    useEffect(
        () =>{
        fetch(`http://localhost:8088/users?id=${aviaryUserObject.id}`)
        .then(response => response.json())
        .then((userData) => {
            const userObject = userData[0]
            updateProfile(userObject)
        })
        },
        []
    )

    const handleSaveProfile = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users/${editProfile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editProfile)
        })
        .then(response => response.json())
        .then(() => {
            handleClose()
        })
    }
    
    
    return <>
        <section className="userProfile">
            <h4 className="userName">{editProfile.name}</h4>
            <h5 className="userAviary">{editProfile.aviaryName}</h5>
            <div className="userFacts">About: {editProfile.aboutInfo}</div>
            <div className="userFacts">Interests: {editProfile.interests}</div>
            <div className="userFacts">Address: {editProfile.address}</div>
            <div className="userFacts">Email: {editProfile.email}</div>
        </section>

        <Button className="editProfileButton" variant="success" onClick={handleOpen}>
         Edit Profile
        </Button>
        <Modal show={isShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                <fieldset>
                    <div className="ModalForm">
                    <label className="ModalFormLabels">Name:</label>
                    <input
                        type="text"
                        className="profileFormControl"
                        value={editProfile.name}
                        onChange={
                            (event) => {
                                const copy = { ...editProfile }
                                copy.name = event.target.value
                                updateProfile(copy)
                            }
                        } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="ModalForm">
                    <label className="ModalFormLabels">Aviary Name:</label>
                    <input
                        type="text"
                        className="profileFormControl"
                        value={editProfile.aviaryName}
                        onChange={
                            (event) => {
                                const copy = { ...editProfile }
                                copy.aviaryName = event.target.value
                                updateProfile(copy)
                            }
                        } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="ModalForm">
                    <label className="ModalFormLabels">About Info:</label>
                    <textarea
                        type="text"
                        className="profileFormControl"
                        value={editProfile.aboutInfo}
                        onChange={
                            (event) => {
                                const copy = { ...editProfile }
                                copy.aboutInfo = event.target.value
                                updateProfile(copy)
                            }
                        } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="ModalForm">
                    <label className="ModalFormLabels">Interests:</label>
                    <textarea
                        type="text"
                        className="profileFormControl"
                        value={editProfile.interests}
                        onChange={
                            (event) => {
                                const copy = { ...editProfile }
                                copy.interests = event.target.value
                                updateProfile(copy)
                            }
                        } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="ModalForm">
                    <label className="ModalFormLabels">Address:</label>
                    <input
                        type="text"
                        className="profileFormControl"
                        value={editProfile.address}
                        onChange={
                            (event) => {
                                const copy = { ...editProfile }
                                copy.address = event.target.value
                                updateProfile(copy)
                            }
                        } />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="ModalForm">
                    <label className="ModalFormLabels">Email:</label>
                    <input
                        type="text"
                        className="profileFormControl"
                        value={editProfile.email}
                        onChange={
                            (event) => {
                                const copy = { ...editProfile }
                                copy.email = event.target.value
                                updateProfile(copy)
                            }
                        } />
                    </div>
                </fieldset>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="closeProfileButton" variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button className="saveProfileButton" variant="dark" onClick={handleSaveProfile}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

}