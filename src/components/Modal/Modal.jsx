import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

const modalRootContainer = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ESCpress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ESCpress);
  }

  ESCpress = e => {
    if (e.code === `Escape`) {
      return this.props.close();
    }
  };

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.props.state}>
        <ModalWindow className="modal">{this.props.children}</ModalWindow>
      </Overlay>,
      modalRootContainer
    );
  }
}
