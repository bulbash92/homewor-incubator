// const initialState =
//     [
//         {_id: 0, name: 'Кот', age: 3},
//         {_id: 1, name: 'Александр', age: 66},
//         {_id: 2, name: 'Коля', age: 16},
//         {_id: 3, name: 'Виктор', age: 44},
//         {_id: 4, name: 'Дмитрий', age: 40},
//         {_id: 5, name: 'Ирина', age: 55},
//     ]

//type InitialStateType = typeof initialState
import {UserType} from "../HW8";

type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
             return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}