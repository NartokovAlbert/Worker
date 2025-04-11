/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header>
        <div className="menu">
          <a>Обо мне</a>
          <a>Услуги</a>
          <a>Портфолио</a>
          <a>Отзывы</a>
          <a>Гарантия</a>
        </div>
        <button onClick={handleOpenModal} className="btn">
          Связаться
        </button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
          <p style={{ fontSize: "22px" }}>
            Вы можете связаться со мной в Телеграм👇
            <br />
            или в ВК
          </p>
        </ModalWindow>
        <a
          href="http://t.me/AlbertNartokov"
          target="_blank"
          className="icon telegram"
          rel="noreferrer"
        ></a>
        <a
          href="https://vk.com/nart091"
          target="_blank"
          className="icon VK"
          rel="noreferrer"
        ></a>
        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>

      <div className="welcom-block">
        <div className="first-block">
          <h1>
            Веб-дизайнер<span className="title">Workford</span>
          </h1>
          <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
            Создаю{" "}
            <span style={{ color: "#4824ff" }}>
              <span>продаваемый</span>и
              <span style={{ color: "#4824ff" }}></span> уникальный
            </span>{" "}
            дизайн под ваши запросы
          </h2>
          <h3>
            Занимаюсь веб-дизайном
            <br />
            на протяжении<span style={{ color: "#4824ff" }}> 5 лет</span>
          </h3>
        </div>
        <div className="main-image-box">
          <img
            className="first-image-layer"
            alt="img"
            src="/develop.png"
            draggable="false"
          ></img>
        </div>
      </div>
      <div className="service-block" draggable="false">
        <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
        <p style={{ fontSize: "27px" }}>
          Создаю <span style={{ color: "#4824ff" }}>статический дизайн</span> по
          следующим направлениям
        </p>
        <div style={{ display: "flex" }}>
          <p className="tag">
            <p className="tag-icon" />
            Рекламные банеры
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Превью для видео Youtube
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Оформление Youtube каналов
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Оформление логотипа
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Инфографика
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "16px" }}>
          <p className="tag">
            <p className="tag-icon" />
            Оформление для Instagram
          </p>
          <p className="tag">
            <p className="tag-icon" />
            Оформление для Facebook
          </p>
        </div>
        <p style={{ fontSize: "27px" }}>
          Открыт для обсуждения создания веб-сайта по вашему макету.
          <br />
          Детальнее готов обсудить в <br />
          <span
            style={{ color: "#4824ff", cursor: "pointer" }}
            onClick={handleOpenModal}
          >
            личной переписке
          </span>
          .
        </p>

        <div className="portfolio-block">
          <div className="portfolio-content">
            <img className="portfolio-arrow" alt="arrow" src="/arrow.png" draggable='false'/>
            <h1 className="portfolio-title">Портфолио</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
