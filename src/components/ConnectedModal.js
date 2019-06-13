import Modal from './Modal'
import { isModalOpen } from '../reducers/connected-modal'
import { closeModal } from '../actions/connected-modal'
import { connect } from 'react-redux'

const mapStateToProps = state => (
  {
    show: isModalOpen(state)
  }
)
const mapDispatchToProps = {
  onHide: closeModal
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
