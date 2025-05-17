import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold ${isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            Iniciar sesión
          </button>
          <button
            className={`px-4 py-2 font-semibold ${!isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            Registrarse
          </button>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? "Iniciar sesión" : "Registrarse"}
          </button>
        </form>

        {isLogin && (
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
        )}
      </div>
    </div>
  );
}
