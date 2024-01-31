import { slideData } from "../../../public/data";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowRight } from "react-icons/fa";
 


const Home = () => {
    return (
        <div className="hero min-h-screen relative w-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/dqyusvzi9/image/upload/v1706351891/Rectangle_1_o5vcxn.png)' }}>
            <div className=" absolute w-full top-0">
                <Navbar />
            </div>
            <div className="w-full h-full bg-black opacity-[0.6]">

            </div>



            {/* slider */}

            <div className="carousel w-full">
               
               {
                slideData.map((slide)=>
                (

                    <div key={slide.id} id="slide1" className="carousel-item relative w-full 0">

                    <div className="flex justify-between gap-20 w-full m-20">



                        <div className="text-white absolute z-10">
                            <h1 className="text-5xl font-bold uppercase">{slide.title}</h1>
                            <p className="py-6">{slide.paragraph}</p>
                            <div className=" flex gap-3 rounded font-semibold bg-[#F9A51A] px-4 py-2 w-[120px] items-center text-black">
                                <span>Booking </span>
                                <FaArrowRight />

                            </div>

                        </div>
                        <div className="flex gap-8">
                            <div className="w-[250px] h-[380px]  border-[4px] rounded-lg border-[#F9A51A] relative">
                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">

                                </div>
                                <img src={slide.image} className="w-full h-full object-cover" />
                                <h2 className="text-3xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase ">Cox bazar</h2>

                            </div>

                            <div className="relative">
                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">

                                </div>
                                <img src={slide.image} className="w-[250px] h-[380px]  border-[4px] rounded-lg border-none relative" />
                                <h2 className="text-3xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase">Sreemangal</h2>
                            </div>
                            <div className="relative">

                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">

                                </div>

                                <img src={slide.image} className="w-[250px] h-[380px] border-[4px] rounded-lg border-none" />
                                <h2 className="text-3xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase">Sundarbans</h2>
                            </div>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-x-1/2 left-5 right-5 top-50 bottom-0 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                ))
               }

                {/* <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-between gap-20 w-full m-20">

                        <div className="text-white  ">
                            <h1 className="text-5xl font-bold uppercase">Sreemangal</h1>
                            <p className="py-6">Sreemangal is a city, fishing port, tourism centre and <br />
                                district headquarters in southeastern Bangladesh. It is <br />  famous mostly for its long natural sandy beach, and it ....</p>
                            <div className=" flex gap-3 rounded font-semibold bg-[#F9A51A] px-4 py-2 w-[120px] items-center text-black">
                                <span>Booking </span>
                                <FaArrowRight />

                            </div>
                        </div>

                        <div className="flex gap-8">

                            <div className="relative">
                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">

                                </div>

                                <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/o4fk9ifouoemjtxafxwx.png" className="w-[250px] h-[380px]  border-[4px] rounded-lg border-[#F9A51A] relative" />

                                <h2 className="text-3xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase ">Sreemangal</h2>
                            </div>
                            <div className="relative">

                                <div className="w-full h-[200px] bg-gradient-to-t from-gray-950 bottom-0 absolute z-10">

                                </div>

                                <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/qkih69dqaulr9dozqu5i.png" className="w-[250px] h-[380px] border-[4px] rounded-lg border-none" />
                                <h2 className="text-3xl font-bold absolute z-10 text-white bottom-10 ml-4 uppercase">Sundarbans</h2>
                            </div>
                        </div>



                    </div>
                    <div className="absolute flex justify-between transform -translate-x-1/2 left-5 right-5 top-50 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex justify-between gap-20 w-full m-20">

                        <div className="text-white ">
                            <h1 className="text-5xl font-bold uppercase">Sundarbans</h1>
                            <p className="py-6">Sundarbans is a city, fishing port, tourism centre and <br />
                                district headquarters in southeastern Bangladesh. It is <br />  famous mostly for its long natural sandy beach, and it ....</p>
                            <div className=" flex gap-3 rounded font-semibold bg-[#F9A51A] px-4 py-2 w-[120px] items-center text-black">
                                <span>Booking </span>
                                <FaArrowRight />

                            </div>
                        </div>
                        <div>

                            <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/qkih69dqaulr9dozqu5i.png" className="w-[250px] h-[380px] border-[4px] rounded-lg border-[#F9A51A]" />
                            <h2 className="text-3xl font-bold absolute z-10 text-white bottom-32 ml-4 uppercase">Sundarbans</h2>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-x-1/2 left-5 right-5 top-50 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
                <div id="slide4" className="carousel-item relative w-full">
                    {/* <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/qkih69dqaulr9dozqu5i.png" className="w-[270px] h-[416px]" /> */}
                    <div className="absolute flex justify-between transform -translate-x-1/2 left-5 right-5 top-50 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;