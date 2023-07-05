
import React from "react"
import { ThemeContext } from "./App"

export default function Button() {
    const { theme, toggleTheme } = React.useContext(ThemeContext)
    // also const value = .... then call on the properties with value.theme or value.toggleTheme
    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}