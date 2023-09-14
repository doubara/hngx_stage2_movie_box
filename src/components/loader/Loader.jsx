import { Hourglass } from "react-loader-spinner";

const Loader = (props)=>{

    return <div className="absolute top-0 left-0 h-screen w-screen flex flex-col items-center justify-center">
        <p className="text-xl my-4">loading, please wait</p>
        <Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#306cce', '#72a1ed']}
    />
</div>
};

export default Loader;
