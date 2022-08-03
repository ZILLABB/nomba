import { useState } from 'react'
import logo from '../../images/download.png'
import { NavData } from '../../data'

const Header = () => {

    return (
        <div>
            <div className='Fnav'>
                <img className='logo' src={logo} alt="" />
                {NavData.map((data,index) => (
                    <div key={index}>
                        <nav className='Nav'>
                            <ul className='productList'>
                                <li className='drop-down'>
                                    {data.title}
                                    <div className='dropdown-item'>
                                        {data.subTitle.map((subData, index) => (
                                            <div className='subSet' key={index}>
                                                    <p className='icons'>{subData.icon}</p>
                                                    <div>
                                                        <p>{subData.name}</p>
                                                        <p className='info'>{subData.info}</p>
                                                    </div>
                                            </div>
                                        ))}
                                    </div>
                                </li>                        
                            </ul>
                        </nav>

                    </div>
                ))}
                <ul className='signget'>
                    <li><button>Sign in</button></li>
                    <div className='space'></div>
                    <li><button className='yellowButton'>Get Started</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header