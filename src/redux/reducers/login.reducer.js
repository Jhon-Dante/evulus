const init = {
    isLogin: false,
    token:null,
    isLoading:true,
    user:null,
    institution:null,
    institutions:null,
    role_id:null,
    rol:null,
    isAdmin:false,
    sidebar:null,
    theme:'primary',
}

const setPersist = (user) => window.localStorage.setItem('user2', JSON.stringify(user))

export const loginReducer = (state = init, action) => {
    switch(action.type){
        case "LOGIN":
            setPersist(action.payload)
            return {
                ...state,
                isLogin: action.payload.token ? true : false,
                user:action.payload.user,
                token:action.payload.token,
                isAdmin: action.payload.user.isAdmin,
                institution: action.payload.user.institution,
                role_id:action.payload.user.role_id,
                rol: action.payload.user.rol.adj,
                sidebar:action.payload.sidebar,
                // theme: 
            }
        case "GET_USER":
            const user3 = JSON.parse(window.localStorage.getItem('user2'))
            
            const auth = user3 ? user3 : null;
            return {...state,
                isLogin: auth.user ? true : false,
                user: auth.user ? auth.user : null,
                token: auth.user ? auth.token : null,
                isAdmin: auth.user ? auth.user.isAdmin : false,
                institution: auth.user ? auth.user.institution : null,
                role_id: auth.user ? auth.user.role_id : null,
                rol: auth.user ? auth.user.rol[0].adj : null,
                isLoading: false,
                sidebar: auth.user ? auth.sidebar : null,
                // theme: 
            }
        case "LOADING":
            return{...state, isLoading: false}
        case "LOGOUT":
            setPersist([])
            return {...state, 
                isLogin: false,
                user:null,
                token:null,
                isAdmin:false,
                institution:null,
                role_id:null,
                rol:null,
                sidebar:null,
                theme: 'primary'
            }
        default:
            return state;
    }
}