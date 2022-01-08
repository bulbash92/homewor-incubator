const initState = {
    isLoading: false
}

type InitStateType = typeof initState
export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.loading}
        }
        default: return state
    }
}

type ActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({type: 'LOADING', loading}as const) // fix any