import { useAuthStore } from "../state/userStore"
import { useContentStore } from "../state/contentStore"
import { useDialogStore } from "../state/dialogStore"
import Navbar from "../components/ui/Navbar"
import Composer from "../components/content/Composer"
import ContentCard from "../components/content/ContentCard"
import LoginModal from "../components/login/LoginModal"
import RegisterModal from "../components/login/RegisterModal"
import "./HomePage.css"

const HomePage = () => {
  const { isAuthenticated } = useAuthStore()
  const { posts } = useContentStore()
  const { isSignInModalOpen, isSignUpModalOpen, openSignInModal } =
    useDialogStore()

  const handleFeedClick = () => {
    if (!isAuthenticated) {
      openSignInModal()
    }
  }

  return (
    <div className="feed-page">
      <Navbar />

      <main className="feed-main" onClick={handleFeedClick}>
        <div className="feed-container">
          <Composer />

          <div className="posts-list">
            {posts.map((post) => (
              <ContentCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      {isSignInModalOpen && <LoginModal />}
      {isSignUpModalOpen && <RegisterModal />}
    </div>
  )
}

export default HomePage
