import BookingCard from "../BookingCard/BookingCard";
import Navbar from "../Navbar/Navbar";


const BookingSrimangal = () => {
    return (
        <div className="hero min-h-screen relative w-full" style={{ backgroundImage: `url(https://res.cloudinary.com/dqyusvzi9/image/upload/v1706357690/o4fk9ifouoemjtxafxwx.png)`
        }}>

                <div className=" absolute w-full top-0">
                    <Navbar color="text-white"/>
                </div>
                <div className="w-full h-full bg-black opacity-[0.6]">
                </div>

                {/* content */}

                <div className="flex justify-between gap-20 w-full m-20">
                    <div className="text-white z-10 m-20 ">
                        <h1 className="text-5xl font-bold uppercase">Sreemangal</h1>
                        <p className="py-6">Sreemangal is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.
                         Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds.
                          North, sea turtles breed on nearby Sonadia Island.</p>
                       
                    </div>

                    <div className="mx-48 my-20">

                        <BookingCard/>

                    </div>

                </div>

            </div>
    );
};

export default BookingSrimangal;