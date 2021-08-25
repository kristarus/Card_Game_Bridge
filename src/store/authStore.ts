import create from "zustand";

type Store = {
  auth: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const useStore = create<Store>((set) => ({
  auth: false,
  logIn: () => set({ auth: true }),
  logOut: () => set({ auth: false }),
}));
