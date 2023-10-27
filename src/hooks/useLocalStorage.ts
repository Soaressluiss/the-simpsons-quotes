export const UseLocalStorage = () => {
    function setLocalStorage(key: string, value: string) {
        return window.localStorage.setItem(key, value);
    }
    function getLocalStorage(key: string) {
        return window.localStorage.getItem(key);
    }
    function deleteLocalStorage(key: string) {
        return window.localStorage.removeItem(key);
    }

    return {
        setLocalStorage,
        getLocalStorage,
        deleteLocalStorage,
    };
};
