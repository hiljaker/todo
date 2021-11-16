export const LoginAction = (userdata) => {
    return {
        type: "login",
        payload: userdata
    }
}

export const LogoutAction = () => {
    return {
        type: "logout"
    }
}