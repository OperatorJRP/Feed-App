import { create } from "zustand"
import type {
  AuthState,
  AuthActions,
  AuthCredentials,
  SignUpCredentials,
  User,
} from "../models"

const TEST_ACCOUNTS = [
  { email: "demo@example.com", password: "password123", username: "Demo User" },
  { email: "test@user.com", password: "testpass", username: "Test User" },
]

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  signIn: async (credentials: AuthCredentials) => {
    set({ isLoading: true })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const account = TEST_ACCOUNTS.find(
      (acc) =>
        acc.email === credentials.email && acc.password === credentials.password
    )

    if (account) {
      const user: User = {
        id: account.email,
        email: account.email,
        username: account.username,
        avatar: `https://ui-avatars.com/api/?name=${account.username}&background=random`,
      }

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      })

      localStorage.setItem("user", JSON.stringify(user))
      return true
    }

    set({ isLoading: false })
    return false
  },

  signUp: async (credentials: SignUpCredentials) => {
    set({ isLoading: true })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (credentials.password !== credentials.repeatPassword) {
      set({ isLoading: false })
      return false
    }

    const existingAccount = TEST_ACCOUNTS.find(
      (acc) => acc.email === credentials.email
    )
    if (existingAccount) {
      set({ isLoading: false })
      return false
    }

    const user: User = {
      id: credentials.email,
      email: credentials.email,
      username: credentials.email.split("@")[0],
      avatar: `https://ui-avatars.com/api/?name=${credentials.email.split("@")[0]}&background=random`,
    }

    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    })

    localStorage.setItem("user", JSON.stringify(user))
    return true
  },

  signOut: () => {
    set({
      user: null,
      isAuthenticated: false,
    })
    localStorage.removeItem("user")
  },

  checkAuth: () => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        set({
          user,
          isAuthenticated: true,
        })
      } catch {
        localStorage.removeItem("user")
      }
    }
  },
}))
