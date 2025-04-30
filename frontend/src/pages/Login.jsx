import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmitLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await loginUser(email, password)
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate('/home')
        }catch(error){
            alert(error.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-xl flex flex-col justify-evenly gap-6  px-4 py-10 shadow-md border-blue-500 bg-white border ">
        <h2 className="text-3xl text-center text-blue-500 font-semibold pb-3">Login</h2>
        <Input
          type="email"
          placeholder="Enter the Email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <Button variant="primary" size="medium" onClick={handleSubmitLogin}>
          {loading ? 'Logging in': 'Log In'}
        </Button>
      </div>
    </div>
  );
};

export default Login;
