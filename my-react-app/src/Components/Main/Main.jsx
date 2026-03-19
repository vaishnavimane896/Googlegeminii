import React from 'react'
import './Main.css'
import { Asset } from '../../assets/Asset'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
             <img src={Asset.user} alt="" />
        </div>
       <div className='main-container'>
        <div className='greet'>
            <p><span>Hello,vaishnavi</span></p>
            <p>how can i help you today</p>
        </div>
        <div className='cards'>
            <div className='card'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam.</p>
                <img src = {Asset.compass} alt="" />

            </div>
            <div className='card'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam.</p>
                <img src = {Asset.bulb} alt="" />

            </div>
            <div className='card'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam.</p>
                <img src = {Asset.message} alt="" />

            </div>
            <div className='card'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam.</p>
                <img src = {Asset.code} alt="" />
            </div>
            
        </div>

        <div className='main-bottom'>
            <div className='search-box'>
                <input type='text' placeholder='enter a prompt here' />
            <div>
                <img src={Asset.Gallary} alt="" />
                <img src={Asset.mic} alt="" />
                <img src={Asset.send} alt="" />
            </div>
            </div>
            <p className='bottom-info'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nobis ipsam fugit rerum maiores ipsum.
            </p>

        </div>

       </div>
    </div>
  )
}

export default Main