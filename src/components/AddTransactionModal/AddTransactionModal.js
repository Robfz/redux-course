import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import TransactionForm from './TransactionForm';
import transactionModalActions from '../../actions/transactionModal';

Modal.setAppElement('#root');

const AddTransactionModal = (props) => {
  const {
    isModalOpen,
    hideTransactionModal,
  } = props;

  return (
    <Modal
      isOpen={isModalOpen}
    >
      <div>
        Modal
      </div>
      <TransactionForm />
      <button onClick={() => hideTransactionModal()}>
        Close
      </button>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  const { isModalOpen } = state.transactionModal;

  return {
    isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { hideTransactionModal } = transactionModalActions.creators;

  return bindActionCreators({
    hideTransactionModal,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionModal);
