import React from 'react'
import useWindowStore from '../store/windows';

const WindowControl = ({target}) => {

    const {closeWindow} = useWindowStore();
    
    
  return (
    <div id='window-controls'>
        <div className='close' onClick={()=>closeWindow(target)}/>
        <div className='minimize'/>
        <div className='maximize'/>
    </div>
  )
}

export default WindowControl