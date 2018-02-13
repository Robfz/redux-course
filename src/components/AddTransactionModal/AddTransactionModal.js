import React, { Component } from 'react';
import Modal from 'react-modal';
import TransactionForm from './TransactionForm';

Modal.setAppElement('#root');

class AddTransactionModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  setIsModalOpen(isModalOpen) {
    this.setState({ isModalOpen });
  }

  handleNewTransactionClick = () => {
    this.setIsModalOpen(true);
  }

  handleCloseButtonClick = () => {
    this.setIsModalOpen(false);
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <button onClick={this.handleNewTransactionClick}>
          New transaction
        </button>
        <Modal
          isOpen={isModalOpen}
        >
          <div>
            Modal
          </div>
          <TransactionForm />
          <button onClick={this.handleCloseButtonClick}>
            Close
          </button>
        </Modal>
      </div>
    ); 
  }
}

export default AddTransactionModal;
