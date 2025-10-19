import { create } from "zustand"
import type { ModalState, ModalActions } from "../models"

export const useDialogStore = create<ModalState & ModalActions>((set) => ({
  isSignInModalOpen: false,
  isSignUpModalOpen: false,

  openSignInModal: () =>
    set({
      isSignInModalOpen: true,
      isSignUpModalOpen: false,
    }),
  openSignUpModal: () =>
    set({
      isSignInModalOpen: false,
      isSignUpModalOpen: true,
    }),
  closeModals: () =>
    set({
      isSignInModalOpen: false,
      isSignUpModalOpen: false,
    }),
}))
