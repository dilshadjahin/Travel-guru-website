import { useEffect, useState } from "react";
import { navItem } from "../../../public/data";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import { FaStar } from "react-icons/fa";
import GoogleMapReact from 'google-map-react';
import MapConttainer from "./MapContainer";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const BookedSearch = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const [searchData, setSearchData] = useState([]);
    console.log(navItem);

 

    useEffect(() => {
        fetch('BookedData.json')
            .then(res => res.json())
            .then(data => setSearchData(data))

    }, []);

    return (

        <div className="max-w-7xl mx-auto " >

            {/* navbar */}

            <div className="flex justify-between  m-10">
                <div className="w-[56px] h-[35px]">
                    <img src={logo} alt="" className="w-full h-full" />
                </div>
                <div className="flex justify-between gap-8 text-base font-semibold">
                    {navItem.map((item, index) => (
                        <NavLink to={item.link} key={index}>{item.item}</NavLink>
                    ))}
                    <div>
                        <h1 className="font-bold">Dilshad Jahin</h1>
                    </div>

                </div>

            </div>

            <hr />

            <div className="mt-10">
                <p className="font-normal text-base">252 stays Apr 13-17 3 guests</p>
                <h2 className="text-xl font-bold">Stay in Cox’s Bazar</h2>
            </div>


            <div className="flex justify-between">

                
            <div>
                {searchData.map((searchAllData) => (
                    <div key={searchAllData.id} className="">

                        <div className="flex justify-between">

                            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-7xl mx-auto flex-row my-10">
                                <div className="relative w-[270px] h-[188px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                    <img
                                        src={searchAllData.img} className="object-cover w-full h-full" />
                                </div>
                                <div className="mx-6">

                                    <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {searchAllData.title}
                                    </h4>
                                    <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                        {searchAllData.others_info.guests} guests {searchAllData.others_info.bedrooms} bedrooms {searchAllData.others_info.beds} bed {searchAllData.others_info.baths} bath
                                    </p>
                                    <p className="mb-2">{searchAllData.description}</p>
                                    <p className="mb-2">{searchAllData.cancellationPolicy}</p>

                                    <div className="flex gap-10 text-base font-bold">

                                        <span className="flex gap-2 items-center"><FaStar className="text-[#FFAF38]" /> {searchAllData.rating}</span>
                                        <span>{searchAllData.price}</span>


                                    </div>


                                </div>
                            </div>

                          
                        </div>




                    </div>
                ))}

            </div>



                  {/* google map */}

                  <div style={{ height: '000px', width: '50%' }}>
                             <MapConttainer/>
                            </div>


            </div>




        </div>

    );
};

export default BookedSearch;