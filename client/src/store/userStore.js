import { create } from 'zustand';

// create takes a function (where the logic of the state is defined) as argument and defines store
const counterStore = create((set) => ({
    count: 0,
    // wraping {} in () to return an object directly from an arrow function
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const userStore = create((set) => ({
    isAuth: false,
    user: {},

    // zustand expects us to return a new object not mutate the existing one taht's why we return new obj ({ ... })
    setIsAuth: (newIsAuth) => set((state) => ({ isAuth: newIsAuth })),
    setUser: (newUser) => set((state) => ({ user: newUser })),
}));

export default userStore;
