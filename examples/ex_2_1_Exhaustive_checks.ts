type User = {
    name: string
    email: string
    mobile: string
}
type UserLoginAction = {
    type: 'user_login'
    payload: User
}

type UserLogoutAction = {
    type: 'user_logout'
}

type UpdateHotelAction = {
    type: 'update_hotel'
    hotel_id: string
}


type Action = UserLoginAction | UserLogoutAction | UpdateHotelAction

type ReducerState = {
    user: User | null
    hotelId: string | null
}

function reducer(state: ReducerState, action: Action): ReducerState {
    switch (action.type) {
        case "user_login":
            return {
                ...state,
                user: action.payload
            }
        case "user_logout":
            return {
                ...state,
                user: null
            }

        // COMMENT OUT THIS BELOW CASE TO SEE WHAT HAPPENS
        case "update_hotel":
            return {
                ...state,
                hotelId: action.hotel_id
            }
        default:
            const _exhaustiveCheck: never = action;
            return _exhaustiveCheck;
    }
}


