import React from 'react'

function Side() {
  return (
    <aside id='side'>
    <div className='side-title'>
      <div className='side-brand'>
           CATEGORIES
      </div>

    </div>
    <ul className='side-list'>
      <li className='items'>
        <a >WELCOME</a>
      </li>
      <li className='items'>
        <a >MANAGING</a>
      </li>

    </ul>
    </aside>
  )
}

export default Side