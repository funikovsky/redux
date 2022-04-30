import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit'

import { Theme, Themes } from '../context/theme'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const ThemeSlice = createSlice( {
    name: 'Theme',
    initialState: Theme.light,
    reducers: {

        toggleTheme(state) {

            const currentTheme = state.theme

            switch(currentTheme) {
                case "light":
                    return state = Theme.dark
                case "dark":
                    return state = Theme.light
                default: 
                return state = Theme.light
            }
        }

    }
})

export const {toggleTheme} = ThemeSlice.actions

const rootReducer = combineReducers({
    theme: ThemeSlice.reducer
})



export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector