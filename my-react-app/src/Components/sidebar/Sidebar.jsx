import React, { useState, useContext } from 'react'
import './Sidebar.css'
import { Asset } from '../../assets/Asset'
import { Context } from '../../context/Context'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  // ✅ Connected to real context data
  const { prevPrompts, onSent, newChat } = useContext(Context)

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className='top'>
        <img
          onClick={() => setExtended(prev => !prev)}
          className="menu"
          src={Asset.menuu}
          alt='Menu'
        />
        {/* ✅ New chat clears result and goes home */}
        <div className='new-chat' onClick={newChat}>
          <img src={Asset.plus} alt="New chat" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            {prevPrompts.length === 0 ? (
              <p className='no-history'>No history yet</p>
            ) : (
              // ✅ Shows real previous prompts from context
              prevPrompts.slice().reverse().map((prompt, i) => (
                <div
                  key={i}
                  className="recent-entry"
                  onClick={() => onSent(prompt)}
                  title={prompt}
                >
                  <img src={Asset.message} alt="" />
                  <p>{prompt.length > 22 ? prompt.slice(0, 22) + '...' : prompt}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={Asset.question} alt="Help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Asset.history} alt="Activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Asset.setting} alt="Settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
