import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Вы должны согласиться с условиями.");
      return;
    }
    console.log("Email:", email, "Password:", password);
    // здесь может быть логика отправки данных
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-6">ВОЙТИ</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">
              Электронная почта (логин)<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Например asanov@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Введите пароль<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-red-600"
            />
            <label htmlFor="agree" className="text-sm">
              Я согласен с{" "}
              <a href="#" className="underline text-white hover:text-red-400">
                Условиями предоставления услуг
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-bold py-2 rounded-full"
          >
            ВОЙТИ
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;