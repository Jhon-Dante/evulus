export const login = payload => ({
    type: 'LOGIN',
    payload: payload
})

export const getUser = () => ({
    type: 'GET_USER'
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const Loading = () => ({
    type: 'LOADING'
})