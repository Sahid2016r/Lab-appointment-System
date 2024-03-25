import React from "react";
import{ Form,Input, message} from "antd";
import "../styles/RegisterStyles.css";
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";

const DoctorRegi = () => {
const navigate = useNavigate() 

//form handler
const onfinishHandler = async (values) =>{
   try{
    
    const res = await axios.post('/api/v1/user/docregister', values)
    
    if(res.data.success){
      message.success('Register Successfully!')
      navigate('/login')
    }else{
      message.error(res.data.message)
    }

   }catch(error) {
    
    console.log(error)
    message.error("something went Wrong")
   }
};


  return   (
    <div className="backgroundDiv">
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">REGISTER FORM</h3>
          
        <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Hospital" name="hospital">
            <Input type="text" required />
          </Form.Item>
          
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
            <p></p>
          </Link>
          <center>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          </center>
        </Form>
      </div>
    </div>
  );
};

export default DoctorRegi
