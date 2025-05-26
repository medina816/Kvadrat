import React, { useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) return alert("Вы должны согласиться с условиями.");

    try {
      const res = await login({ email, password }).unwrap();
      if (res?.token) {
        localStorage.setItem("token", res.token); 
        navigate("/admin");
      } else {
        alert("Не удалось получить токен от сервера.");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">ВОЙТИ</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Электронная почта *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              placeholder="example@mail.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Пароль *</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black"
              placeholder="********"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-red-600"
            />
            <label className="text-sm">
              Я согласен с{" "}
              <a href="#" className="underline text-white hover:text-red-400">
                условиями
              </a>
            </label>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">
              Ошибка: {error?.data?.message || "Неверный логин или пароль"}
            </p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-full font-bold"
          >
            {isLoading ? "Загрузка..." : "ВОЙТИ"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;