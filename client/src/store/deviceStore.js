import { create } from 'zustand';

const deviceStore = create((set) => ({
    types: [
        { id: 1, name: 'Phones' },
        { id: 2, name: 'Laptops' },
    ],
    brands: [
        { id: 1, name: 'Samsung' },
        { id: 2, name: 'Apple' },
    ],
    devices: [
        {
            id: 1,
            name: 'Iphone 12 PRO',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
        {
            id: 2,
            name: 'Samsung',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
        {
            id: 3,
            name: 'Asus',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
        {
            id: 4,
            name: 'App',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
        {
            id: 5,
            name: 'App',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
        {
            id: 6,
            name: 'App',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
        {
            id: 7,
            name: 'App',
            price: 1200,
            rating: 5,
            img: 'https://placecats.com/300/200',
        },
    ],
    selectedType: {},
    selectedBrand: {},

    setTypes: (newType) => set({ types: newType }),
    setBrands: (newBrand) => set({ brands: newBrand }),
    setDevices: (newDevice) => set({ device: newDevice }),
    setSelectedType: (newSelectedType) => set({ selectedType: newSelectedType }),
    setSelectedBrand: (newSelectedBrand) => set({ selectedBrand: newSelectedBrand }),
}));

export default deviceStore;
