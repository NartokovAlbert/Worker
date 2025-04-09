import React, { useCallback, useEffect, useState } from "react";
import "./ModalWindow.css";

const ModalWindow = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Обработчик нажатия клавиши Escape
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Эффект для управления видимостью модального окна
  useEffect(() => {
    if (show) {
      setIsVisible(true); // Показываем модальное окно
      document.addEventListener("keydown", handleKeyDown); // Добавляем слушатель клавиш
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false); // Скрываем модальное окно после анимации
      }, 800); // Задержка для завершения анимации

      return () => {
        clearTimeout(timer); // Очищаем таймер при размонтировании
        document.removeEventListener("keydown", handleKeyDown); // Удаляем слушатель клавиш
      };
    }
  }, [show, handleKeyDown]);
  useEffect(() => {
    document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={`modal-backdrop ${show ? "show" : ""}`}
      style={{ display: isVisible }}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-button"
          aria-label="Close modal"
        ></button>
        {children}
        <div style={{ display: "flex" }}>
          <a
            href="http://t.me/AlbertNartokov"
            target="_blank"
            className="social-button"
          >
            <div className="social telegram"></div>
            Telegram
          </a>
          <a
            href="https://vk.com/nart091"
            target="_blank"
            className="social-button"
          >
            <div className="social VK"></div>
            VK
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
