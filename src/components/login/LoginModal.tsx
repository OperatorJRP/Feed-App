import LoginForm from "./LoginForm"
import "./AuthModal.css"

const LoginModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <LoginForm isModal={true} />
      </div>
    </div>
  )
}

export default LoginModal
