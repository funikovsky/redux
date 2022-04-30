

export type Themes = 'light' | 'dark'

export interface ThemeProps {
    theme: string,
    backgroundColors: {

        div: string

    }
}

export type ThemeType = Record<Themes, ThemeProps>

export const Theme: ThemeType = {

    light: {
        theme: 'light',
        backgroundColors: {
            div: 'red'
        }

    },
    dark: {
        theme: 'dark',

        backgroundColors: {

            div: 'green'

        }

    }



}

