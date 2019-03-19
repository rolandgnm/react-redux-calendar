import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content columns`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
    //   portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
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
    bottom: 0px;
    background-color: rgba(0,0,0, 0.5);
  }

  &__content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledModal;
