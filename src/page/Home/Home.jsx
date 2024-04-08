import Cards from "./Cards";
import Carosel from "./Carosel";
import {useLoaderData} from 'react-router-dom'

const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
           <Carosel></Carosel>
           <div className=" md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
           {
            data.map(d=> <Cards key={d.id} data={d}></Cards>)
           }
           {/* <Cards></Cards> */}
           </div>
        </div>
    );
};

export default Home;