import React, { useEffect, useState } from "react";
//import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
//axioms ka kam hai backend se data lena.
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
      const res=await  axios.get("http://localhost:4000/books");
      console.log(res.data);
      setBook(res.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])


  return (
    <>
      <div className="max-w-screen-2xl contrast mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl ">
            We're deleghted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit magnam amet dignissimos harum excepturi suscipit optio facere ab doloribus. Consequatur, ratione fuga! Atque obcaecati reiciendis possimus labore deserunt, vel eum! Similique magnam ipsa ea.</p>
           
            <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>

            </Link>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item)=>(
                <Cards key={item.id} item={item} />
            ))}
        </div>  

      </div>
    </>
  );
}

export default Course;
