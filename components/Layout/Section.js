import React from 'react'

function Section({ children, className, id }) {
    return (
        <section id={id}>
            <div data-aos="fade-up" className={`bg-peach-500/50 dark:bg-gray-700 w-full py-24 ${className}`}>{children}</div>
        </section>
    )
}

export default Section