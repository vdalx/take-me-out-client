export const getToken = () => {
    return {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }
}

export const setToken = (token) => {
    sessionStorage.setItem('token', token);
}