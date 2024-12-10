import { useState } from "react";

export default function useLocalStorage(key, initialState) {

    const _readValue = () => {
        try {
            const _data = localStorage.getItem(key);
            return _data ? JSON.parse(_data) : initialState;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialState;
        }
    };

    const [data, setData] = useState(_readValue);

    const _saveValue = (value) => {
        try {

            if (typeof value === 'function') {
                console.warn('Cannot store functions in localStorage');
                return;
            }

            const valueToStore = value instanceof Function ? value(data) : value;
            setData(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    const _removeValue = () => {
        try {
            localStorage.removeItem(key);
            setData(initialState);
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    };

    return [data, _readValue,  _saveValue, _removeValue];
}