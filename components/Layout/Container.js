import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`w-full xl:px-96 px-10 ${className}`}>
            {children}
        </div>
    )
}

export default Container