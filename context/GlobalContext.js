import React, { createContext, useState,useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(items);
    }, [items]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <GlobalContext.Provider value={{ items, addItem }}>
            {children}
        </GlobalContext.Provider>
    );
};
