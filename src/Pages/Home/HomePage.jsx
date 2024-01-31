import { FaArrowRight } from 'react-icons/fa';

import Navbar from '../Shared/Navbar/Navbar';
import { slideData } from '../../../public/data';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



export const HomePage = () => {
    



    return (

        <div>

            <Helmet>
                <title>Travel</title>
            </Helmet>


            <div>
                <div className="hero min-h-screen relative w-full" style={{ backgroundImage: `url(https://res.cloudinary.com/dqyusvzi9/image/upload/v1706351891/Rectangle_1_o5vcxn.png)` }}>
                    <div className=" absolute w-full top-0">
                        <Navbar color="text-white"/>
                    </div>
                    <div className="w-full h-full bg-black opacity-[0.6]">
                    </div>

                    <div className="flex justify-between gap-20 w-full m-20">
                        <div className="text-white z-10 m-20 ">
                            <h1 className="text-5xl font-bold uppercase">Cox bazar</h1>
                            <p className="py-6">Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <div className=" flex gap-3 rounded font-semibold bg-[#F9A51A] px-4 py-2 w-[120px] items-center text-black">
                                <span>Booking </span>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="flex gap-8 mx-10">
                            <Link to ={`/coxbazar/${slideData.id}`}>

                            <div className="w-[270px] h-[416px]  border-[4px] rounded-lg border-[#F9A51A]  relative">
                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">
                                </div>
                                <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706351891/Rectangle_1_o5vcxn.png" className="w-full h-full object-cover" />
                                <h2 className="text-2xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase ">Cox Bazar</h2>
                            </div>

                            </Link>

                            <Link to ={`/srimangal/${slideData.title}`} >
                            <div className="w-[270px] h-[416px]   rounded-lg  relative">
                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">
                                </div>
                                <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/o4fk9ifouoemjtxafxwx.png" className="w-full h-full object-cover border-[4px] hover:border-[#F9A51A]" />
                                <h2 className="text-2xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase ">Sreemangal</h2>
                            </div>
                            </Link>


                           <Link to ={`/sundarban/${slideData.paragraph}`}>

                           <div className="w-[270px] h-[416px]  ] rounded-lg hover:border-[#F9A51A]  relative">
                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">
                                </div>
                                <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/qkih69dqaulr9dozqu5i.png" className="w-full h-full object-cover border-[4px] hover:border-[#F9A51A]" />
                                <h2 className="text-2xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase ">Sundarbans</h2>
                            </div>
                           
                           </Link>
                        </div>
                    </div>

                   
                </div>
            </div>

        </div>
    )
}




