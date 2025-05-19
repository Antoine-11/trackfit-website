import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold ${isLogin ? "text-[#14213D] border-b-2 border-[#14213D]" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            Iniciar sesión
          </button>
          <button
            className={`px-4 py-2 font-semibold ${!isLogin ? "text-[#14213D] border-b-2 border-[#14213D]" : "text-gray-500"}`}
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
            className="w-full bg-[#14213D] text-white py-2 rounded-md hover:bg-[#1f2e57] transition duration-300 ease-in-out border border-black shadow-[0_0_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]"
          >
            {isLogin ? "Iniciar sesión" : "Registrarse"}
          </button>
        </form>

        {isLogin && (
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#FCA311] hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
        )}
      </div>
    </div>
  );
}
