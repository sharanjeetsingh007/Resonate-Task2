import React, { useState } from 'react'
import AllContacts from '../Components/AllContacts/AllContacts'
import Header from '../Components/Header/Header'
import "./Layout.css"

function Layout() {
    // theme state
    const [theme, setTheme] = useState(false)

    // change theme state from child
    const changeTheme = () => {
        setTheme(prev => !prev)
    }

    return (
        <div className='layout'>
            <Header theme={theme} changeTheme={changeTheme} />
            <AllContacts theme={theme} />
        </div>
    )
}

export default Layout