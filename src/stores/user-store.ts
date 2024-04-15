import { createStore } from 'zustand/vanilla';

interface IUser {
  username: string;
  full_name: string;
  email: string;
  phone: string;
}

export type UserState = {
  user: IUser;
};

export type UserActions = {
  updateUser: (newUser: Partial<IUser>) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user: {
    username: '',
    full_name: '',
    email: '',
    phone: '',
  },
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,

    updateUser: (newUser) =>
      set((state) => ({ user: { ...state.user, ...newUser } })),

    fetchUser: async () => {
      const res = await fetch('api/user');
      const fetchedUser = await res.json();
      set({ user: fetchedUser });
    },
  }));
};
