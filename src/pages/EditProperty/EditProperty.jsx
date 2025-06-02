import React, { useEffect, useState } from 'react';
import { useUpdateProductMutation } from '../../app/services/productsApi';
import { IoClose } from 'react-icons/io5';
import { FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaUtensils, FaCar, FaBuilding, FaCamera } from 'react-icons/fa';
import '../add/Add.scss';

const AMENITIES = [
  'Лифт', 'Сад', 'Камин', 'Детская площадка',
  'Прачечная', 'Стоянка', 'Спортзал',
  'Бассейн', 'Клубный дом', 'Гаражи',
];

const EditProperty = ({ isOpen, onClose, editData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formState, setFormState] = useState({
    title: '',
    area: '',
    price: '',
    description: '',
    details: Array(8).fill(0),
    amenities: [],
  });

  const [remainder, setRemainder] = useState({ message: '', type: '' });

  const [updateListing] = useUpdateProductMutation();

  useEffect(() => {
    if (editData) {
      setFormState({
        title: editData.title || '',
        area: editData.area || '',
        price: editData.price || '',
        description: editData.description || '',
        details: [
          editData.rooms || 0,
          editData.baths || 0,
          editData.sqft || 0,
          editData.yearBuilt || 0,
          editData.bedroom || 0,
          editData.kitchen || 0,
          editData.type || 0,
          editData.garage || 0,
        ],
        amenities: editData.amenities || [],
      });
      setSelectedImage(null);
    }
  }, [editData]);

  const handleInputChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleDetailChange = (index, value) => {
    const updated = [...formState.details];
    updated[index] = value;
    setFormState((prev) => ({ ...prev, details: updated }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormState((prev) => {
      const updated = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updated };
    });
  };

  const saveCard = async () => {
    if (!formState.title || !formState.area || !formState.price) {
      setRemainder({ message: 'Пожалуйста, заполните заголовок, площадь и цену.', type: 'error' });
      return;
    }

    const formData = new FormData();
    formData.append('title', formState.title);
    formData.append('area', formState.area);
    formData.append('price', formState.price);
    formData.append('description', formState.description);
    formData.append('amenities', JSON.stringify(formState.amenities));

    const keys = ['rooms', 'baths', 'sqft', 'yearBuilt', 'bedroom', 'kitchen', 'type', 'garage'];
    formState.details.forEach((val, i) => formData.append(keys[i], val));

    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    try {
      await updateListing({ id: editData._id, formData }).unwrap();
      setRemainder({ message: 'Обновлено успешно!', type: 'success' });

      setTimeout(() => {
        onClose();
        setRemainder({ message: '', type: '' });
      }, 1500);
    } catch (error) {
      if (error?.status === 500) {
        setRemainder({ message: 'Ошибка сервера. Попробуйте позже.', type: 'error' });
      } else if (error?.status === 403) {
        setRemainder({ message: 'Доступ запрещён. У вас нет прав.', type: 'error' });
      } else {
        setRemainder({ message: '', type: '' });
      }
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-Add">
      <div className="modal-content">
        <div className="modal-Add-s">
          <h2>Редактировать карточку</h2>
          <IoClose size={24} style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={onClose} />
        </div>

        {remainder.message && (
          <div
            style={{
              margin: '10px 0',
              padding: '12px 20px',
              borderRadius: '10px',
              color: 'white',
              backgroundColor: remainder.type === 'success' ? '#4BB543' : '#C8180C',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {remainder.message}
          </div>
        )}

        <label htmlFor="imageInput" className="btn-add-photo">
          <span className="Add-icon"><FaCamera /></span>
          <span>Изменить фото</span>
        </label>
        <input
          type="file"
          id="imageInput"
          hidden
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />

        {selectedImage && (
          <div className="preview-image">
            <img src={URL.createObjectURL(selectedImage)} alt="preview" />
          </div>
        )}

        <div className="form-grid">
          <input
            className="input-A-field"
            placeholder="Заголовок"
            value={formState.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
          <input
            className="input-A-field"
            placeholder="Площадь"
            value={formState.area}
            onChange={(e) => handleInputChange('area', e.target.value)}
          />
          <input
            className="input-A-field"
            type="number"
            placeholder="Цена"
            value={formState.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
          />
        </div>

        <div className="form-grid">
          {[ 
            { label: 'Комнаты', icon: <FaBed />, index: 0 },
            { label: 'Ванны', icon: <FaBath />, index: 1 },
            { label: 'Кв.фут', icon: <FaRulerCombined />, index: 2 },
            { label: 'Год постройки', icon: <FaCalendarAlt />, index: 3 },
            { label: 'Спальня', icon: <FaBed />, index: 4 },
            { label: 'Кухня', icon: <FaUtensils />, index: 5 },
            { label: 'Тип', icon: <FaBuilding />, index: 6 },
            { label: 'Гараж', icon: <FaCar />, index: 7 },
          ].map(({ label, icon, index }) => (
            <div key={label} className="input-d-field">
              <label>{icon} {label}</label>
              <input
                type="number"
                value={formState.details[index]}
                onChange={(e) => handleDetailChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>

        <textarea
          className="input-A-field"
          rows={3}
          placeholder="Описание"
          value={formState.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />

        <div className="form-grid">
          {AMENITIES.map((a) => (
            <label key={a} className="amenity">
              <input
                type="checkbox"
                checked={formState.amenities.includes(a)}
                onChange={() => handleAmenityToggle(a)}
              />
              {a}
            </label>
          ))}
        </div>

        <div className="form-grid" style={{ justifyContent: 'flex-end' }}>
          <button className="save-btn" onClick={saveCard}>Сохранить</button>
          <button className="cancel-btn" onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;
