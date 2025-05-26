     import React, { useEffect, useState } from "react";
import AdBlock from "./AdBlock";

function Dashboard() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/banners")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при загрузке баннеров");
        return res.json();
      })
      .then((data) => {
        setBanners(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/banners/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при удалении");
        setBanners((prev) => prev.filter((banner) => banner.id !== id));
      })
      .catch((err) => alert(err.message));
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-600">Ошибка: {error}</p>;
  if (!banners.length) return <p>Баннеры отсутствуют.</p>;

  return (
    <div className="dashboard p-6">
      <h2 className="text-2xl mb-4 font-bold">Список баннеров</h2>
      {banners.map((banner) => (
        <AdBlock key={banner.id} banner={banner} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Dashboard;  