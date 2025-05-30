import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../EditBanner/EditBanner.scss";

function EditBanner({ banner, onClose, onSave }) {
  const [title, setTitle] = useState(banner.title || "");
  const [description, setDescription] = useState(banner.description || "");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    banner.image?.startsWith("http")
      ? banner.image
      : `${import.meta.env.VITE_PUBLIC_URL}${banner.image}`
  );
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Размер изображения не должен превышать 5MB.");
      setMessageType("error");
      return;
    }

    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setMessage("Пожалуйста, заполните все поля.");
      setMessageType("error");
      return;
    }

    const updatedData = {
      id: banner.id,
      title: title.trim(),
      description: description.trim(),
      image,
    };

    onSave(updatedData);
    setMessage("Баннер успешно обновлён!");
    setMessageType("success");
  };

  return (
    <div className="modalka">
      <FaTimes className="close-icon" onClick={onClose} />

      <form className="inside" onSubmit={handleSubmit}>
        <div className="top">
          <div className="top-text">
            <h2>Редактировать баннер</h2>
          </div>
          <div className="top-icon">
            {previewUrl ? (
              <img src={previewUrl} alt="preview" />
            ) : (
              <h2>Загрузите изображение</h2>
            )}
          </div>
        </div>

        <div className="bottom">
          <h3>Информация</h3>
          <div className="blocks">
            <div className="left">
              <input
                type="text"
                placeholder="Введите заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Введите описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                type="submit"
                className="btn1"
                disabled={!title.trim() || !description.trim()}
              >
                Сохранить
              </button>

              {message && (
                <div className={`message ${messageType}`}>
                  {message}
                </div>
              )}
            </div>

            <div className="right">
              <label className="upload-button">
                Загрузить изображение
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              {previewUrl && (
                <img
                  src={previewUrl}
                  className="preview-image"
                  alt="preview"
                />
              )}
              <h2>Максимальный размер 5MB</h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditBanner;
