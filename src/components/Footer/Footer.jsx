import React,{useEffect} from "react";
import "./footer.css"
import "./footer.scss"
import video2 from "../../Assert/maalu.mp4"
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos'
import 'aos/dist/aos.css'



const Footer=()=>{

    // let's create a react hook to add a scroll animation....

    useEffect(()=>{
        Aos.init({duration:2000})
     },[])


    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"> </video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                      <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                        <button data-aos="fade-up" className="btn flex" type="submit"> 
                               SEND <FiSend className="icon"/>
                        </button>
                      </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                 <MdTravelExplore className="icon"/> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil placeat laudantium dicta veritatis iste hic aliquam sed, velit sequi asperiores temporibus quod alias. Veniam molestias sit praesentium voluptate facilis.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, tempora blanditiis quasi earum minima consequatur eveniet quia quis omnis ipsa iure accusamus quod impedit voluptatibus animi enim nulla dolorem!
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                              < AiOutlineTwitter className="icon"/>
                                < AiFillYoutube className="icon"/>
                                <AiFillInstagram className="icon"/>
                                <FaTripadvisor  className="icon"/> 
                        </div>
                    </div>

                    <div className="footerLink grid">

                        {/*group one */}

                         <div data-aos="fade-up" data-aos-duration="3000" className="linkgroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Services
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Insurence
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Agency
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Tourism
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Payment
                            </li>

                         </div>
                   
                        {/**group two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkgroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Booking
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Rentcars
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              HostelWorld
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Trivago
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              TripAdvisor
                            </li>

                         </div>

                        {/*group three*/}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkgroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              London
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Cnalifornia
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Indonisia
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Europe
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                              Oceania
                            </li>

                         </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - BUMUTECH 2024</small>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Footer