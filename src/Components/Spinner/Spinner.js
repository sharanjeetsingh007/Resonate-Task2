import React from 'react'
import "./Spinner.css"
import HashLoader from "react-spinners/HashLoader";

function Spinner() {
    return (
        <div className='spinner'>
            <HashLoader color="#9c27b0"
                size={100}
                margin={10}
            />
        </div>
    )
}

export default Spinner