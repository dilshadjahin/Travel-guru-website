import { useEffect, useState } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";


const BookingCard = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');

        const formattedDate = `${day}/${month}`;
        setCurrentDate(formattedDate);
    }, []);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <div className="card-body">
                <div >

                    <h2 className="card-title text-base">Origin</h2>
                    <select className="select select-warning w-full max-w-xs">
                        <option disabled selected>Dhaka</option>
                        <option>Khulna</option>
                        <option>Sylhet</option>
                        <option>Chittagong</option>
                        <option>Bogura</option>
                        <option>Barishal</option>
                    </select>

                </div>

                <div className="my-4">

                    <h2 className="card-title text-base ">Destination</h2>
                    <select className="select select-warning w-full max-w-xs">
                        <option disabled selected>Cox bazar</option>
                        <option>Srimangal</option>
                        <option>Sundarban</option>
                        <option>Bandarban</option>
                        <option>Rangmati</option>
                        <option>Saintmartin</option>
                    </select>
                </div>

                <div className="flex gap-6">

                    <div className="">


                        <h2 className="card-title text-base ">From</h2>
                        <div className="flex justify-between  ">

                            <input type="text" id="dateInput" name="dateInput" defaultValue={currentDate} />

                            <MdOutlineCalendarToday />
                        </div>
                    </div>


                    <div>


                        <h2 className="card-title text-base ">To</h2>
                        <div className="flex">

                            <input type="text" id="dateInput" className="w-[100px]" name="dateInput" defaultValue={currentDate} />

                            <MdOutlineCalendarToday />
                        </div>
                    </div>


                </div>
                <div className="card-actions justify-end">
                    <button className="bg-[#F9A51A] w-full py-3 text-black font-semibold">Start booking</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;