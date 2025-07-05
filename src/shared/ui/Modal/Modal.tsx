import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        padding: '20px',
        background: 'var(--modal-bg, white)',
        color: 'var(--text-color, black)',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%',
      }}>
        {children}
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>,
    document.body
  );
};