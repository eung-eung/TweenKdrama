import { useEffect, useState } from "react"
import React from "react"
const themes = {
    dark: {
        className: 'dark-mode',

    },
    light: {
        className: 'light-mode',
    }

}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )

}

export { ThemeProvider, ThemeContext }