import background from '../assets/background_img_planner.jpg';
import background2 from '../assets/food-background.jpeg';

function PlaceFinder () {
    return (
        <div>
            <div className="bg-auto bg-center bg-fixed" style={{ backgroundImage: `url(${background})`}}>
                <div className="text-3xl font-serif pt-24 h-32">
                    Great! Let's find a place together for your next trip!
                    <p className='text-base mt-12'> Please select what kind of travel you would prefer!</p>
                </div>
                <div className="option-container flex flex-row justify-center gap-x-24 p-8 mt-24">
                    <div className="option-box  rounded h-48 w-48 p-4 bg-teal-300 text-gray-50 font-serif text-xs hover:h-56 hover:w-56 hover:text-sm duration-150" >
                        <p className="text-base font-medium"> Relaxed </p>
                        <p className="mt-2 subpixel-antialiased "> Select this if you prefer relaxing at your stay more, and visit just a few scenic spots. This 
                            iteanary will suggest only a few scenic spots around the city and will give you more time to relax
                            and enjoy your stay.
                        </p>
                    </div>

                    <div className="option-box rounded bg-sky-300 text-gray-50 font-serif h-48 w-48 p-4 text-xs hover:h-56 hover:w-56 hover:text-sm duration-150" >
                        <p className="text-base font-medium"> Chill and Exlpore </p>
                        <p className=" mt-2 subpixel-antialiased"> Select this if you want to explore around the place and visit the best of the scenic places. This
                            iteanary will make cover a few scenic spots around the city as well as will give you time to relax 
                            at your stay.
                        </p>
                    </div>

                    <div className="option-box rounded bg-amber-400 h-48 text-gray-50  font-serif w-48 p-4 text-xs hover:h-56 hover:w-56 hover:text-sm duration-150" >
                        <p className="text-base font-medium"> Sightseeing </p>
                        <p className="mt-2 subpixel-antialiased"> Select this if you want to cover as mamy tourists spots possible during your trip. This iteanary 
                            is going to be cover most of the places and it will require more travelling around the city.
                        </p>
                    </div>

                </div>
                <span className="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm m-20">
                    <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </span>
            </div>

            <div className="h-screen bg-auto bg-center" style={{ backgroundImage: `url(${background2})`}}>
                <div className="header h-48 text-white pt-16">
                        <p className="text-xl font-bold font-sans">
                            Please tell us about your food choices? 
                        </p>
                        
                        <p className='mt-6 italic text-lg font-serif'>
                            Would be easier for us to tailor an iteanary well suited for you.
                        </p>
                </div>

                <div className="options-container flex flex-column justify-center gap-20">
                    <div className="h-48 w-48 bg-slate-50 p-4 rounded-md ">
                        <p className="mt-6">North Indian</p>
                        <p className="text-xs mt-4">Please select this if you prefer more of North Indian food.</p>
                    </div>
                    <div className="h-48 w-48 bg-slate-50 p-4 rounded-md">
                        <p className="mt-6">South Indian</p>
                        <p className="text-xs mt-4">Please select this if you prefer more of South Indian food.</p>
                    </div>
                    <div className="h-48 w-48 bg-slate-50 p-4 rounded-md">
                        <p className="mt-6">Open to try</p>
                        <p className="text-xs mt-4">Please select this if you want to try mix of the others and popular local cuisine as well.</p>
                    </div>
                </div>

                <span className="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm m-28">
                    <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default PlaceFinder;