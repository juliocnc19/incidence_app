import User from "../../core/models/User"

export type authStorageType = {
  user: User | null
  isSidebarVisible:boolean
  toggleSidebar: () => void
  setUser: (user: User | null) => void
}

