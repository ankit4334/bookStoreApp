import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) =>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4000/users/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        //alert("Signup Successfull")
        toast.success('Signup  Successfull!');
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        //alert("Error: "+ err.response.data.message);
        toast.error("Error: "+ err.response.data.message);
      }
    });
  };

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div id="" className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">SingUp</h3>


        {/* name */}

        <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              name="name"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your full Name"
              {...register("fullname", { required: true })}
            />
            <br/>
            {errors.fullname &&( <span className="text-sm text-red-500" >This field is required</span>)}
          </div>

          {/* Email */}

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              name="email"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email &&( <span className="text-sm text-red-500" >This field is required</span>)}
          </div>

          

          {/* password */}

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              name="password"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            <br/>
            {errors.password &&( <span className="text-sm text-red-500" >This field is required</span>)}
          </div>

          {/* Button create */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Singup 
            </button>
            <p className='text-xl'>
              Have account?{" "}
              <button className="underline text-blue-500 cursor-pointer"
              onClick={()=>document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>{" "}
              <Login></Login>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
