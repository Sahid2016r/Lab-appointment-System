import React, {useEffect} from 'react';
import axios from 'axios';
import '../styles/LayoutStyles.css';




const HomePage = () => {


  // user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData()
  }, [])




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
                  <h1>heloo</h1>
                  </div>
                  <div className='box2'>
                  <h1>heloo 2</h1>
                  </div>
                  <div className='box3'>
                  <h1>heloo 3</h1>
                  </div>
                </div>

            </div>
        </div>
        
    </div>
    </>
    );
      
  
};

export default HomePage
