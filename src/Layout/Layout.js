import React, { useState } from 'react'
import AllContacts from '../Components/AllContacts/AllContacts'
import Header from '../Components/Header/Header'
import Spinner from '../Components/Spinner/Spinner'
import "./Layout.css"

function Layout() {
    // theme state
    const [theme, setTheme] = useState(false)
    const [loader, setLoader] = useState(false)

    // change theme state from child
    const changeTheme = () => {
        setTheme(prev => !prev)
    }

    const changeLoader = (value) => {
        setLoader(value)
    }

    console.log(loader, "loader")
    return (<>
        {loader ? <Spinner /> :
            <div className='layout'>
                <Header theme={theme} changeTheme={changeTheme} />
                <AllContacts theme={theme} loader={loader} changeLoader={changeLoader} />

            </div>
        }
    </>
    )
}

export default Layout