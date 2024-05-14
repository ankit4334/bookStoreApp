import React,{ useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";


//data public foder me list.json ke name se pada here import karke uspe filter lagayenge.

//import list from "../../public/list.json";
import Cards from './Cards';
function Freebook() {

  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
      const res=await  axios.get("http://localhost:4000/books");
      
      const data=res.data.filter((data)=>data.category==="Free");
      console.log(data);
      setBook(data);
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])

  //const filterData=list.filter((data)=>data.category==="Free");
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    

  return (
    <>
    
    <div className='max-w-screen-2xl contrast mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1> 
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis dolorum numquam vel qui ad. Enim explicabo natus veritatis odit eos itaque quidem aliquam ipsa.</p> 
      </div>
   
    
    
    <div >
      <Slider {...settings}>
         {book.map((item)=>(
          <Cards item={item} key={item.id}/>
         ))}
      </Slider> 
    
    </div>
    </div>
    </>
  )
}

export default Freebook
   
/*
1.multiple book ko responsive banane ke liye :-react slick slider side se command ->npm install react-slick --save ->install karege
2.phir ise me css wale command ko phi install karege:-npm install slick-carousel --save
3.apne file me is class ko import karege{
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
}
4.
*/








 



/*
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
//import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  
  

   // const data = res.data.filter((data) => data.category === "Free");
    const data=list.filter((data)=>data.category==="Free"); 
    console.log(data)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;

*/





