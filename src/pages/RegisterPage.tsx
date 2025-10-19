import { useNavigate } from "react-router-dom"
import Navbar from "../components/ui/Navbar"
import RegisterForm from "../components/login/RegisterForm"
import "./AuthPage.css"

const RegisterPage = () => {
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate("/")
  }

  return (
    <div className="auth-page">
      <Navbar />

      <div className="auth-container">
        <RegisterForm isModal={false} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}

export default RegisterPage
