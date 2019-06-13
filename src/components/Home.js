import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import ConnectedModal from './ConnectedModal'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../actions/connected-modal'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {
    localModalMounted: false,
    showModal: false
  }

  componentDidMount () {
    const oldDiv = document.getElementById('modal-div')
    if (oldDiv) {
      oldDiv.parentElement.removeChild(oldDiv)
      console.log('old modal div removed')
    }

    const newDiv = document.createElement('div')
    newDiv.id = 'modal-div'
    document.body.appendChild(newDiv)
    console.log('new modal div added')
  }

  mountLocalModal = () => {
    this.setState({ localModalMounted: true })
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  addModal = () => {
    ReactDOM.render(
      <Modal show={this.state.show} onHide={this.closeModal} />,
      document.getElementById('modal-div')
    )
  }

  addReduxConnectedModal = () => {
    ReactDOM.render(
      <Provider store={window.store}>
        <ConnectedModal />
      </Provider>,
      document.getElementById('modal-div')
    )
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          {
            this.state.localModalMounted && (
              <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Body>
                  a local modal
                </Modal.Body>
              </Modal>
            )
          }
          <Button variant="primary" onClick={this.mountLocalModal}>Mount local Modal</Button>
          <Button variant="secondary" onClick={this.openModal}>Open local Modal</Button>
        </div>
        <hr />
        <div>
          <Button variant="primary" onClick={this.addReduxConnectedModal}>Mount new connected modal</Button>
          <Button variant="secondary" onClick={this.props.openConnectedModal}>Open connected Modal</Button>
          <Button variant="secondary" onClick={this.props.closeConnectedModal}>Close connected Modal</Button>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  openConnectedModal: openModal,
  closeConnectedModal: closeModal
}
export default connect(null, mapDispatchToProps)(Home)
