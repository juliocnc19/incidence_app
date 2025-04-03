import { create } from "zustand";
import { authStorageType } from "../../utils/types/authStorageType";


export const authStorage = create<authStorageType>((set) => ({
  user: null,
  isSidebarVisible:false,
  toggleSidebar:()=>set((state)=>({isSidebarVisible:!state.isSidebarVisible})),
  setUser: (newUser) => set({ user: newUser })
}))
