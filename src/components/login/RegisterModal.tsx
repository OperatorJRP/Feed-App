import RegisterForm from "./RegisterForm"
import "./AuthModal.css"

const RegisterModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <RegisterForm isModal={true} />
      </div>
    </div>
  )
}

export default RegisterModal
