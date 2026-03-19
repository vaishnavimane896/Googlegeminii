import React, { useState } from 'react'
import './Sidebar.css'
import { Asset } from '../../assets/Asset'

const Sidebar = () => {

       const [extended,setExtended] = useState(false)


  return (
    <div className='sidebar'>
        <div className='top'>
        <img  onClick={()=>setExtended(prev=>!prev)} className="menu" src= {Asset.menuu} alt=''/>
        <div className='new-chat'>
            <img src ={Asset.plus} alt="" />
           {extended? <p>new chat</p>:null}
        </div>
        {extended
        ?<div className='recent'>
            <p className='recent-title'>Recent</p>
            <div className="recent-entry">
                <img src={Asset.message} alt=""/>
                <p>what is react....</p>
            </div>
        </div>  
        : null }
        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry">
                <img src={Asset.question } alt=""  />
                {extended?<p>help</p> :null}
            </div>
             <div className="bottom-item recent-entry">
                <img src={Asset.history} alt=""  />
                {extended?<p>Activity</p> :null}
            </div>
             <div className="bottom-item recent-entry">
                <img src={Asset.setting } alt=""  />
                {extended?<p>Settings</p> :null}
            </div>

        </div>

    </div>
  )
}

export default Sidebar