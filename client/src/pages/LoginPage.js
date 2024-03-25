import React from 'react'
import '../styles/LayoutStyles.css';

const LoginPage = () => {
  return (
    
      <>
    <div  className="mains">
        <div className="layouts">
            <div className="menubar">
                <h1 className="logos">LA<span>s</span></h1>

                <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/About'>About</a></li>
                  <li><a href='#'>Service</a></li>
                  <li><a href='/LoginPage'>Login</a></li>
                  <li><a href='#'>Register</a>
                  
                  </li>
                 
                </ul>
                
            </div>
            <div className="contents">
                
                <div className="bodys">
                  <div className='box1'>
                  <h1>Patient Login</h1>
                  </div>
                  <div className='box2'>
                  <h1>Doctor Login</h1>
                  </div>
                  <div className='box3'>
                  <h1>Admin Login</h1>
                  </div>
                </div>

            </div>
        </div>
        
    </div>
    </>
    
  )
}

export default LoginPage
