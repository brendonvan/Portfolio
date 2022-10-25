const initialState = {
    username: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            return { }; 
        default: 
            return state;
    }
}

export default userReducer;