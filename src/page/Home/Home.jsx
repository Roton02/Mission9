import Testiomonial from "../Testiomonial/Testiomonial";
import Cards from "./Cards";
import Carosel from "./Carosel";
import { useLoaderData } from "react-router-dom";
import Youtube from "./Youtube";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Carosel></Carosel>
      <div className="mt-5 md:mt-8">
        <h1 className="text-4xl py-5 underline text-center font-bold">
          Luxury Properties
        </h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {data.map((d) => (
            <Cards key={d.id} data={d}></Cards>
          ))}
          {/* <Cards></Cards> */}
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl">
        <Testiomonial></Testiomonial>
      </div>
      <div className="mt-5 md:mt-8">
        <h1 className="text-4xl my-5   text-center underline  font-bold">Galery</h1>
        <Youtube></Youtube>
      </div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </div>
  );
};

export default Home;
