const initState = {
    themes: ['dark', 'red', 'some'],
    theme: 'dark'
};

export type InitStateType = {
    themes: Array<string>
    theme: string
}

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => ({type: 'CHANGE_THEME', theme} as const); // fix any