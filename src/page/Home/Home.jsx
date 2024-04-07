import Cards from "./Cards";
import Carosel from "./Carosel";
import {useParams} from 'react-router-dom'

const Home = () => {
    const data = useParams()
    console.log(data);
    return (
        <div>
           <Carosel></Carosel>
           <Cards></Cards>
        </div>
    );
};

export default Home;