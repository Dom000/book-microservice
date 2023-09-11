import { useAuthenticateStore } from "../store"
import { create } from "zustand"

export const authenticateUser = (set: any) => ({
    isLoggedIn: false as boolean,
    userDetails: null as any,

    setIsLoggedIn: (by: boolean) => {
        set(({ isLoggedIn: by }))
    },

    setUserDetails: (by: any) => {
        set(({ userDetails: by }))
    },

})




