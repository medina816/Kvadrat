import { useGetProductsQuery, useDeleteProductMutation } from '../../app/services/productsApi.js';
import { RiEditFill, RiDeleteBin5Fill } from 'react-icons/ri';
import Add from '../add/Add.jsx';
import { useState } from 'react';
import EditProperty from '../EditProperty/EditProperty.jsx'

const ManageProperties = () => {
  const { data: properties = [], refetch } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const [remainder, setRemainder] = useState({ message: '', type: '' });

  const showRemainder = (message, type = 'success') => {
    setRemainder({ message, type });
    setTimeout(() => {
      setRemainder({ message: '', type: '' });
    }, 2000);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Уверены, что хотите удалить?')) {
      try {
        await deleteProduct(id).unwrap();
        showRemainder('Удалено успешно', 'success');
        refetch();
      } catch (error) {
        showRemainder('Ошибка удаления', 'error');
        console.error(error);
      }
    }
  };

  const handleEdit = (property) => {
    setEditData(property);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData(null);
    refetch();
  };

  return (
    <div className="w-[967px] mt-[50px] m-auto text-white relative">
      {remainder.message && (
        <div
          className={`mb-4 px-4 py-2 rounded text-center font-semibold
            ${remainder.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
          role="alert"
          aria-live="assertive"
        >
          {remainder.message}
        </div>
      )}

      <div className="grid grid-cols-5 gap-[118px] px-[11px] py-[14px] bg-[#222224] rounded-[4px] text-xl font-medium">
        <div>Фотографии</div>
        <div className="ml-4">Заголовок</div>
        <div className="ml-4">Площадь</div>
        <div className="ml-[80px]">Цена</div>
        <div>Действие</div>
      </div>

      <div className="flex justify-end mt-10">
        <button
          onClick={handleAddNew}
          className="bg-red-600 hover:bg-red-800 text-white font-semibold h-[57px] w-[215px] rounded-full text-lg transition"
        >
          Добавить
        </button>
      </div>

      {properties.map((property) => (
        <div
          key={property.id}
          className="grid grid-cols-5 gap-4 w-full items-center px-4 py-4 border-b border-[#FFFFFF99]"
        >
          <div className="h-[76px] w-[165px] ml-[-15px] overflow-hidden rounded-md">
           <img src={property.images?.[0]} alt="flat" className="w-full h-full object-cover" />

          </div>

          <p className="text-[18px] font-medium w-[209px] h-[44px] ml-4">{property.title}</p>

          <div className="w-[208px] ml-[45px] text-slate-200">
            <p className="text-[16px] font-normal">Площадь: {property.area}</p>
          </div>

          <div className="text-xl ml-[143px] font-semibold text-[#FFFFFF]">
            {property.price}$
          </div>

          <div className="flex gap-3 ml-[108px] text-lg">
            <button onClick={() => handleEdit(property)} title="Редактировать">
              <RiEditFill className="text-white hover:text-yellow-400 transition text-2xl" />
            </button>
            <button onClick={() => handleDelete(property.id)} title="Удалить">
              <RiDeleteBin5Fill className="text-red-500 hover:text-red-600 transition text-2xl" />
            </button>
          </div>
        </div>
      ))}

{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-[600px] relative">
      <button
        onClick={handleCloseModal}
        className="absolute top-2 right-4 text-black text-2xl hover:text-red-600"
        aria-label="Закрыть модальное окно"
      >
        &times;
      </button>
      {editData ? (
        <EditProperty
          isOpen={isModalOpen}
          editData={editData}
          onClose={handleCloseModal}
          setRemainder={showRemainder}
        />
      ) : (
        <Add
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          setRemainder={showRemainder}
        />
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default ManageProperties;
