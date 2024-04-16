import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  // const { setViewLand } = useContext(AuthContext);
  // console.log(setViewLand);
  const {id, estate_title, price, status, area, location, image } = data ;
  

  return (
    <div>
      
      <div className="card flex flex-col bg-base-100 border-2 border-gray-300  hover:scale-105 transition-transform  ">
        <figure  data-aos="zoom-in" data-aos-duration='2000'  className="px-8 pt-8">
          <img
            data-aos="zoom-in"
            src={image}
            alt="Shoes"
            className="rounded-xl h-52 "
          />
        </figure>
        <div className="card-body flex-grow ">
          <h2  data-aos="flip-up" data-aos-duration='500'  className="flex items-center  text-2xl  font-bold animate__backInDown ">
            {estate_title}
          </h2>{" "}
          <hr />
          <div>
            {/* <h1 className="text-xl"> {segment_name} </h1> */}
            <div className="flex justify-between px-1 text-lg font-semibold">
              <h1  data-aos="zoom-in" data-aos-duration='1000'>Price: {price}</h1>
              <h1  data-aos="zoom-in" data-aos-duration='1000'>status: {status}</h1>
            </div>{" "}
            <hr />
            <div className=" flex justify-between px-2 text-lg ">
              <h1  data-aos="zoom-in" data-aos-duration='1000'> Area: {area}</h1>
              <h1  data-aos="zoom-in" data-aos-duration='1000' className="flex  justify-end items-center gap-2 ">
                {" "}
                <IoLocationSharp /> {location.split(",")[1]}
              </h1>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration='1000' className="w-full my-2 ">
          <Link  to={`/ShowDetails/${id}`}
            className="rounded-md   py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#23BE0A] hover:bg-[#23BE0A] transition  text-[#23BE0A]   duration-500  hover:text-white"
          >
            <button   className="w-full  "><span className="absolute w-64 h-0  duration-300 origin-center rotate-45  bg-[#23BE0A] "></span>
            <span className="relative    ">
            View Property
            </span></button>
          </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
