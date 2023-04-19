import React, { useState } from 'react'
import Container from '../Layout/Container'


const Item = ({ children, href }) => {
    return (
        <a href={href} className='hover:font-medium xl:text-base text-sm'>{children}</a>
    )
}

const Navigation = ({ className }) => {
    return (
        <nav className={`xl:space-x-10 flex ${className} `}>
            <Item href={"#"}>Home</Item>
            <Item href={"#about"}>About</Item>
            <Item href={"#work"}>MyStreaming</Item>
            <Item href={"#contact"}>Contact</Item>
        </nav>
    )
}
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='sticky top-0 z-50 bg-[#f9f7f5]/60 backdrop-blur-sm  dark:bg-gray-700/80  right-0 left-0'>
            <Container className={`xl:py-8 py-6 flex  justify-between flex-row  items-center  ${isOpen && 'border-b-2 border-dashed dark:border-gray-600 border-peach-500'} xl:border-0`}>
                <h5 className='font-medium text-xl'>Fatimah Azzara</h5>
                <div className='block'>
                    <button className='xl:hidden block' onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <Navigation className={"hidden xl:block"} />
                </div>
            </Container>
            <Container className={`py-5  xl:hidden ${isOpen ? "block" : "hidden"}`}>
                <Navigation className={"flex flex-col space-y-6"} />
            </Container>
        </div>
    )
}

export default Header
