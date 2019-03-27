import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

function ReactModalAdapter({
  className, contentClassName, onClose, ...props
}) {
  const overClassName = `${className}__overlay columns`;
  return (
    <ReactModal
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
      overlayClassName={overClassName}
      className={contentClassName}
      {...props}
    />
  );
}

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    z-index: 1000;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    align-items: center;
    justify-content: center;
    outline: none;
    bottom: 0px;
    background-color: rgba(0,0,0, 0.5);

    .ReactModal__Content { 
      outline: none;  
    }

  }
`;

export default StyledModal;
