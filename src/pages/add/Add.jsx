import React, { useState } from "react";
import {
  FaPhotoVideo, FaBed, FaBath, FaRulerCombined, FaCalendarAlt,
  FaCouch, FaUtensils, FaHome, FaWarehouse
} from "react-icons/fa";
import { useCreateProductMutation } from '../../app/services/productsApi'; 
import './Add.scss';

const Add = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [createListing, { isLoading }] = useCreateProductMutation();

  const saveCard = async () => {
    const title = document.querySelector('.input-A-field').value;
    const area = document.querySelector('.input-d-field').value;
    const price = document.querySelector('.input-b-field').value;
    const description = document.querySelector('.textarea-field').value;

    if (!title || !area || !price) {
      alert('Заполните все поля!');
      return;
    }

    const details = Array.from(document.querySelectorAll('.icon-select')).map(select => select.value);
    const amenities = Array.from(document.querySelectorAll('.amenities-section input[type="checkbox"]'))
      .map((input, i) => ({
        label: input.nextSibling.textContent.trim(),
        checked: input.checked,
      }));

    const formData = new FormData();
    formData.append('title', title);
    formData.append('area', area);
    formData.append('price', price);
    formData.append('description', description);

    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    // Детали
    formData.append('rooms', details[0]);
    formData.append('baths', details[1]);
    formData.append('sqft', details[2]);
    formData.append('yearBuilt', details[3]);
    formData.append('bedroom', details[4]);
    formData.append('kitchen', details[5]);
    formData.append('type', details[6]);
    formData.append('garage', details[7]);

    // Удобства
    formData.append('amenities', JSON.stringify(amenities));

    try {
      await createListing(formData).unwrap();
      alert('Сохранено успешно!');
      onClose();
    } catch (error) {
       alert('Произошла ошибка при сохранении.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-Add">
      <div className="g-container">
        <div className="modal-Add-s">
          <h2>Создать новую карточку для недвижимости</h2>
        </div>
        <div className="modal-content">
          <button className="btn-add-photo" onClick={() => document.getElementById('upload-photo').click()}>
            <FaPhotoVideo className="Add-icon" />
            <span>Добавить ещё фото</span>
          </button>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-photo"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          {selectedImage && (
            <div style={{ marginTop: '10px' }}>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                style={{ width: '150px', height: 'auto', borderRadius: '10px' }}
              />
              <button
                className="btn-delete-photo"
                onClick={() => setSelectedImage(null)}
                style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', borderRadius: '5px' }}
              >
                Удалить
              </button>
            </div>
          )}
          <div className="form-grid">
            <input placeholder="Заголовок" className="input-A-field" />
            <div className="input-group">
              <input placeholder="Площадь" className="input-d-field" />
              <input placeholder="Цена" className="input-b-field" />
            </div>
          </div>
          <h3 className="section-title">Информация для детальной страницы</h3>
          <div className="details-Add-section">
            <div className="grid-icons">
              {[
                { icon: <FaBed />, label: "Комнаты" },
                { icon: <FaBath />, label: "Ванны" },
                { icon: <FaRulerCombined />, label: "Кв.фут" },
                { icon: <FaCalendarAlt />, label: "Год постройки" },
                { icon: <FaCouch />, label: "Спальня" },
                { icon: <FaUtensils />, label: "Кухня" },
                { icon: <FaHome />, label: "Тип" },
                { icon: <FaWarehouse />, label: "Гараж" },
              ].map((item, idx) => (
                <div key={idx} className="icon-item">
                  <div className="icon-container">
                    {item.icon}
                    <span className="icon-label">{item.label}</span>
                  </div>
                  <select className="icon-select">
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
          <div className="Ops">
            <textarea placeholder="Описание" className="textarea-field" />
          </div>
          <h3 className="section-title">Удобства</h3>
          <div className="amenities-section">
            <div className="amenities-grid">
              {[
                "Лифт", "Сад", "Камин", "Детская площадка",
                "Прачечная", "Стоянка", "Спортзал", "Бассейн",
                "Клубный дом", "Гаражи"
              ].map((label, i) => (
                <label key={i} className="amenity-label">
                  <input type="checkbox" />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="modal-Add-footer">
            <button onClick={saveCard} className="btn-save" disabled={isLoading}>
              {isLoading ? 'Сохраняем...' : 'Сохранить'}
            </button>
            <button onClick={onClose} className="btn-cancel">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;