import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <button onClick={() => setIsOpen(true)}>О проекте</button>
        <ThemeSwitcher />
      </header>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>О проекте</h3>
        <p>Информация о проекте</p>
      </Modal>
    </>
  );
};

export default Header;