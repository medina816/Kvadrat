import React, { useState } from 'react';
import { useCreateBannerMutation } from '../../app/services/bannerApi'; 
import "../modalPage/modalPage.scss"

function ModalPage({ onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [createBanner, { isLoading }] = useCreateBannerMutation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!title || !imageFile) {
      alert('Заполните заголовок и загрузите изображение.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', imageFile);

    try {
      await createBanner(formData).unwrap();
      alert('Баннер успешно добавлен');
      setTitle('');
      setDescription('');
      setImageFile(null);
      setPreview(null);
      onClose();
    } catch (err) {
      console.error('Ошибка при добавлении баннера:', err);
      alert('Ошибка при добавлении');
    }
  };

  return (
    <div className="modalka">
      <div className="inside">
        <div className="close-icon" onClick={onClose}>
          &#10005;
        </div>

        <div className="top">
          <div className="top-text">
            <h2>Добавить баннер</h2>
          </div>
          <div className="top-icon">
            {preview ? (
              <img src={preview} alt="preview" className="preview-image" />
            ) : (
              <h2>Превью изображения</h2>
            )}
          </div>
        </div>

        <div className="bottom">
          <h3>Информация</h3>
          <div className="blocks">
            <div className="left">
              <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                className="btn1"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Добавление...' : 'Добавить баннер'}
              </button>
            </div>

            <div className="right">
              <label className="upload-button">
                Загрузить изображение
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
              {preview && (
                <img src={preview} alt="Preview" className="preview-image" />
              )}
              {!preview && (
                <h2>Выберите изображение для баннера</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPage; 