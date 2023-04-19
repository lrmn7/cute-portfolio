import React from 'react'
import Header from '../Header'
import SwitchMode from '../Switch/SwitchMode'
import MetaSeo from '../MetaSeo'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <MetaSeo
                keyword="Fatimah Azzara,Gyjl,Zara ULM, Imayye, Grizelle"
                title={`Hey there! I'm Fatimah Azzara 👋  I am a student at Lambung Mangkurat University.  ,`}
                description={`I am a student at a University in the South Kalimantan. Game and Sleep are things I like, but there are some things I hate including peanuts. You can contact me in many ways, I will be very happy if you contact me 🙌`}
            />
            {children}
            <SwitchMode />
        </div>
    )
}

export default MainLayout