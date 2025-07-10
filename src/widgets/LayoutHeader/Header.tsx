import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          <p>Информация о проекте</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};