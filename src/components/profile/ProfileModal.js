import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

export const ProfileModal = () => {
    const [isShow, invokeModal] = useState(false)
    const initModal = () => {
        return invokeModal(!false)
    }

    return (
        <>
        <Modal show={isShow}>
          <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>React Modal Popover Example</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={initModal}>
              Close
            </Button>
            <Button variant="dark" onClick={initModal}>
              Store
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}