import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { authenticateUser } from "../slice";

export const useAuthenticateStore = create(persist(devtools(authenticateUser), { name: '_jjxjx', storage: createJSONStorage(() => localStorage) }))

