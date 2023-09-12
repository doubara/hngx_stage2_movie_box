import Navigation from "../components/Navigation";
import MovieDetailsCard from "../components/MovieDetailsCard";

const Movies = (props)=>{

    return <section className="flex items-stretch min-h-screen border brder-red-600">
        <div className="min-h-screen basis-1/4 h-full border">
            <Navigation />
        </div>
        <div className="basis-3/4 min-h-screen border">
            <MovieDetailsCard />
        </div>
    </section>
}

export default Movies;