import React, { useEffect, useState } from 'react';
import {
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  useGetBannersQuery
} from '../../app/services/bannerApi';
import "../modalPage/modalPage.scss";

function ModalPage({ onClose, isEdit = false, editableBanner = null }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [reminder, setReminder] = useState({ type: '', message: '' });

  const [createBanner, { isLoading: isCreating }] = useCreateBannerMutation();
  const [updateBanner, { isLoading: isUpdating }] = useUpdateBannerMutation();
  const [deleteBanner] = useDeleteBannerMutation();
  const { refetch } = useGetBannersQuery();

  useEffect(() => {
    if (isEdit && editableBanner) {
      setTitle(editableBanner.title || '');
      setDescription(editableBanner.description || '');
      setPreview(editableBanner.image);
    }
  }, [isEdit, editableBanner]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageFile(null);
    setPreview(null);
  };

  const showReminder = (type, message) => {
    setReminder({ type, message });
    setTimeout(() => setReminder({ type: '', message: '' }), 3000);
  };

  const handleCreateSubmit = async () => {
    if (!title || !imageFile) {
      showReminder('error', 'Заполните заголовок и загрузите изображение.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', imageFile);

    try {
      await createBanner(formData).unwrap();
      showReminder('success', 'Баннер успешно добавлен');
      resetForm();
      refetch();
      onClose();
    } catch (err) {
      console.error('Ошибка при добавлении баннера:', err);
      showReminder('error', 'Ошибка при добавлении');
    }
  };

  const handleEditSubmit = async () => {
    if (!title || (!imageFile && !preview)) {
      showReminder('error', 'Заполните заголовок и загрузите изображение.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (imageFile) formData.append('image', imageFile);

    try {
      await updateBanner({ id: editableBanner._id, formData }).unwrap();
      showReminder('success', 'Баннер успешно обновлён');
      resetForm();
      refetch();
      onClose();
    } catch (err) {
      console.error('Ошибка при обновлении баннера:', err);
      showReminder('error', 'Ошибка при обновлении');
    }
  };

  const handleDelete = async () => {
    if (!editableBanner?._id) return;
    try {
      await deleteBanner(editableBanner._id).unwrap();
      showReminder('success', 'Баннер удалён');
      refetch();
      onClose();
    } catch (err) {
      console.error('Ошибка при удалении баннера:', err);
      showReminder('error', 'Ошибка при удалении');
    }
  };

  const handleSubmit = () => {
    if (isEdit) {
      handleEditSubmit();
    } else {
      handleCreateSubmit();
    }
  };

  return (
    <div className="modalka">
      {reminder.message && (
        <div className={`reminder-bar ${reminder.type}`}>
          {reminder.message}
        </div>
      )}
      <div className="inside">
        <div className="close-icon" onClick={onClose}>
          &#10005;
        </div>

        <div className="top">
          <div className="top-text">
            <h2>{isEdit ? 'Редактировать баннер' : 'Добавить баннер'}</h2>
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
                disabled={isCreating || isUpdating}
              >
                {isCreating || isUpdating
                  ? isEdit ? 'Сохранение...' : 'Добавление...'
                  : isEdit ? 'Сохранить изменения' : 'Добавить баннер'}
              </button>
              {isEdit && (
                <button className="btn2" onClick={handleDelete}>
                  Удалить баннер
                </button>
              )}
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
              {preview ? (
                <img src={preview} alt="Preview" className="preview-image" />
              ) : (
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
