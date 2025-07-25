import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router"
import { profile } from "../libs/axios/user"
import { logout } from "../libs/axios/auth"

export default function AuthLayout() {
  const [profileData, setProfileData] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    profile()
      .then((data) => setProfileData(data))
      .catch((err) => console.error(err))
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
        <span className="text-lg font-semibold text-gray-700">
          Bienvenido, {profileData.name || "Usuario"}
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
          Cerrar sesión
        </button>
      </nav>
      <Outlet />
    </div>
  )
}
