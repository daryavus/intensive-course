import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <div className={styles.button}>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>,
    document.body
  );
};