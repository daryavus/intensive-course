// отображение модального окна с использованием compound components - с подкомпонентами (Header, Body, Footer)

import React from 'react';
import { ModalContext } from './ModalContext';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div 
        className={styles.overlay} 
        onClick={onClose}
      >
        <div 
          className={styles.modal}
          onClick={(e) => e.stopPropagation()} 
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.header}>
    <h3 className={styles.title}>{children}</h3>
  </div>
);

Modal.Body = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.body}>{children}</div>
);

Modal.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);