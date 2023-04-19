import React from 'react'

function Sosial({ title, icon, href }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className='bg-white flex dark:bg-gray-600 py-5 rounded-full hover:shadow-sm relative hover:scale-105 transition-all mb-5'>
            <div className='flex justify-center w-full'>
                {icon}
                <span className='font-medium'>{title}</span>
            </div>
        </a>
    )
}

export default Sosial