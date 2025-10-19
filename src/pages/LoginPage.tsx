import { useNavigate } from "react-router-dom"
import Navbar from "../components/ui/Navbar"
import LoginForm from "../components/login/LoginForm"
import "./AuthPage.css"

const LoginPage = () => {
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate("/")
  }

  return (
    <div className="auth-page">
      <Navbar />

      <div className="auth-container">
        <LoginForm isModal={false} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}

export default LoginPage
