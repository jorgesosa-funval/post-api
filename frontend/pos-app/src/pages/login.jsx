import { useNavigate } from "react-router";
import { login } from "../libs/axios/auth";


const Login = () => { 
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target)
    const body  = Object.fromEntries(formData.entries())
    try {
      const {status, data} = await login(body);
       if(data.status === "ok"){
          navigate('/')
       }
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-900">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-blue-700 font-semibold mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;