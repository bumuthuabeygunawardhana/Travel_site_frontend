import React,{useEffect} from "react";
import "./main.css"
import "./main.scss"
//import icons
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboardCheck } from "react-icons/hi"

// phtoes import krmu


import img from'../../Assert/img1.jpg'
import img2 from'../../Assert/img2.jpg'
import img3 from'../../Assert/img3.jpg'
import img4 from'../../Assert/img4.jpg'
import img5 from'../../Assert/img5.jpg'
import img6 from'../../Assert/img6.jpg'
import img7 from'../../Assert/img7.jpg'
import img8 from'../../Assert/img8.jpg'
import img9 from'../../Assert/img9.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


// let,s make array 

const Data = [
    {
        id:1,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:"New Zealend",
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
    },
     
    
   {
     id:2,
     imgSrc:img2,
     destTitle:'natural',
     location:"peru",
     grade:'MAIND HAPPY',
     fees:'$700',
     description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
   },


   
   {
     id:3,
     imgSrc:img3,
     destTitle:'Cappadocia',
     location:"Turky",
     grade:'CULTURAL RELAX',
     fees:'$720',
     description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},

{
    id:4,
    imgSrc:img4,
    destTitle:'Cappadocia',
    location:"Turky",
    grade:'CULTURAL RELAX',
    fees:'$720',
    description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},

{
    id:5,
    imgSrc:img5,
    destTitle:'Taj Mahal',
    location:"mlasia",
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},
 
{
    id:6,
    imgSrc:img6,
    destTitle:'Guanjauto',
    location:"Indonesia",
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},

{
    id:7,
    imgSrc:img7,
    destTitle:'Guanjauto',
    location:"Indonesia",
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},

{
    id:8,
    imgSrc:img8,
    destTitle:'Guanjauto',
    location:"Indonesia",
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},

{
    id:9,
    imgSrc:img9,
    destTitle:'Guanjauto',
    location:"Indonesia",
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:"The epitome of romance,Bora Bora is one of the best ravel destinations in the world. this place is known for it's luxurious stays and adventurous activities."
},





  



]





const Main=()=>{

     // let's create a react hook to add a scroll animation....

     useEffect(()=>{
        Aos.init({duration:2000})
     },[])


    return(
       <section className="main container section">


          <div className="secTitle">
           <h3 className="title">Most visited destinations</h3>
          </div>
        
         <div className="secContent grid">
           { /* mekdi array ekkt destination tika dala map function ek use krl ekin  ek destination ek gn wistr gn hdnne */}


           {
            Data.map( ({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return(
                    <div key={id}  data-aos="fade-up" className="singleDestination">
                        {/* img will return single id by using map array */}

                        <div className="imageDiv">

                            <img src={imgSrc} alt={destTitle}/>
                        </div>
                        
                        <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                           <span className="continent flex"> 
                              <HiOutlineLocationMarker className="icon"/>
                              <span className="name">{location}</span>
                           </span>


                           <div className="fees flex">
                              <div className="grade">
                                <span>{grade}<small>+1</small></span>
                              </div>
                              <div className="price">
                                <h5>{fees}</h5>
                              </div>
                           </div>

                           <div className="desc">
                            <p>{description}</p>
                           </div>

                           <button className="btn flex">
                              DETAILS <HiOutlineClipboardCheck className="icon"/>
                           </button>
                        </div>
                    </div>
                )
            }
            )
           }


         </div>

       </section>
    )
}

export default Main

