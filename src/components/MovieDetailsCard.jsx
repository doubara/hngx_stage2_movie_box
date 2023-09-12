import poster from '../assets/Rectangle.png';
import famousImg from '../assets/Rectangle_37.png'

const MovieDetailsCard = (props) =>{

    return <div className="min-h-full text-black px-6 py-6">
        <div className="h-1/2">
            <img className='w-full  object-cover' src={poster} alt="" />
        </div>
        <p className="py-6">Top Gun Maverick . 2022 . PG-13 . 2h 10m <span className="text-red-400 0border-grey-200 rounded-full p-4">action</span> <span className="text-red-400 border border-gray-200 rounded-full p-2">action</span> <span className="text-right py-2"><span className="text-grey-200"></span>8.5</span>|350k</p>
        <div className="flex items-stretch">
            <div className="basis-3/4 px-4">
                <p>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
                
                <p className='py-2'>Director: <span className="text-red-400 my-4">Joseph Kosinki</span></p>
                
                <p className='py-2'>Writers: <span className="text-red-400 my-4">Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                
                <p className='py-2'>Stars: <span className="text-red-400 my-4">Tom Cruise, Jennifer Connely, Mius Teller</span></p>

                <div className="my-2 border border-gray-400 rounded-lg">
                    <button className='bg-red-400 rounded-lg py-2 px-8'>Top Rated Movie #65</button><span className='px-4'>Awards 9 Nominations</span>
                </div>
            </div>
            <div className="basis-1/4">
                <button className="w-full py-3 rounded-lg text-white bg-red-400 txt-center">See Showtimes</button>
                <button className="block w-full rounded-lg py-3 mt-2 border border-red-400 bg-red-200 text-black text-center">See Showtimes</button>
                <div className='mt-2 relative'>
                    <img src={famousImg} alt="" />
                    <p className='absolute bottom-0 text-xs px-4 text-white bg-gray-600 bg-transparent rounded-lg'>The Best Movies and shows in September</p>
                    {/* The Best Movies and shows in September */}
                </div>
            </div>
        </div>
    </div>
};

export default MovieDetailsCard;