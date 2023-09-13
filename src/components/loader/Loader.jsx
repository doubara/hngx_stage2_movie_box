import Skeleton from "react-loading-skeleton";

const Loader = (props)=>{

    return <div className='customGrid'>
        {new Array(props.count).fill('loading').map((load, index)=>{
            return <Skeleton key={index*Math.random()*200} containerClassName="bg-gre-400" count={1}></Skeleton>
        })}
    </div>
};

export default Loader;
