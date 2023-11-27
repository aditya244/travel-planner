import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PlaceDetails from "./PlaceDetails";
import PlaceFinder from "./PlaceFinder";

function HomePage(){
    return (
        <div>
            <div className="columns-1 h-80  text-3xl font-bold flex justify-center items-center p-8 text-white bg-gray-800 ">
                Let's plan your trip together
            </div>
                <div className="columns-2 gap-0">
                    <div className="h-96 p-8 flex flex-col justify-center items-center bg-cyan-500">
                        Open to exoplore places around you?
                        <Link to="/placeFinder"><button className="bg-gray-100 hover:bg-gray-700 mt-6 text-black font-bold py-2 px-4 rounded hover:text-white">
                            Let's exoplore!
                        </button> </Link>
                    </div>
                    <div className="h-96 p-8 flex flex-col justify-center items-center bg-amber-400">
                        Already have a place in mind?
                        <Link to="/placeDetails"><button className="bg-gray-100 hover:bg-gray-700 mt-6 text-black font-bold py-2 px-4 rounded hover:text-white">
                            Get Details
                        </button> </Link>
                    </div>
                </div>
            </div>
    )
}

export default HomePage;