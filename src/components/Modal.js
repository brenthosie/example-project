import React from 'react'
import { Modal } from 'react-bootstrap'

const OurModal = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Body>
      hello world
    </Modal.Body>
  </Modal>
)

export default OurModal
