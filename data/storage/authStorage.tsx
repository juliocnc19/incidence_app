import { create } from "zustand";
import { authStorageType } from "../../utils/types/authStorageType";


export const authstorage = create<authStorageType>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser })
}))
