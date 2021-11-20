import React from 'react'
import banner from '../images/Banner.png'
import { Bannerstyle } from '../template/Template'

const Banner = () => {
    return (
        <div>
            <Bannerstyle src={banner} alt="banner"></Bannerstyle>
        </div>
    )
}

export default Banner
