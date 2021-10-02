import React, { Component } from 'react';
import { Modal } from './Modal';
import Button from './Button';
import { SendData } from './hook/useSendData';
export class Container extends Component {
  state = { isShown: false };
  id = this.props.id;
  onSubmit = (data) => {
        SendData(data);
  };

  showModal = () => {
        this.setState({ isShown: true }, () => {
        this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.Button.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        <Button
          showModal={this.showModal}
          buttonRef={(n) => (this.Button = n)}
          buttonText={this.props.buttonText}
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            id={this.props.id}
            reserved='true'
            meat='false'
            salad='false'
            desserts='false'
            cocktails='false'
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
