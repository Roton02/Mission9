import { IoLocationSharp } from "react-icons/io5";
import { CgAsterisk } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
const Cards = ({ data }) => {
  const { setViewLand,user} = useContext(AuthContext)
  // console.log(setViewLand);
  const {estate_title,price,status,area,location,image} = data;

  return (
    <div>
      <div  className="card bg-base-100 shadow-xl hover:scale-105 transition-transform  ">
        <figure className="px-8 pt-8">
          <img data-aos="zoom-in"
            src={image}
            alt="Shoes"
            className="rounded-xl h-52 "
          />
        </figure>
        <div className="card-body  ">
          
          <h2 className="flex items-center  text-2xl text-center font-bold animate__backInDown ">
            {estate_title}</h2> <hr />
          <div>
            {/* <h1 className="text-xl"> {segment_name} </h1> */}
            
           <div className="flex justify-between px-1 text-lg font-semibold">
            <h1>Price: {price}</h1>
            <h1>status: {status}</h1>
           </div> <hr />
           <div className=" flex justify-between px-2 text-lg ">
            
            <h1> Area:  {area}</h1>
            <h1 className="flex  justify-end items-center gap-2 "> <IoLocationSharp/> {location.split(' ')[1]}</h1>
           </div>
           
          </div>
          
          <div className="w-full  ">
           <Link onClick={()=>setViewLand(data)} to='/ShowDetails'> <button className="btn btn-secondary hover:bg-pink-800 w-full">View Property </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
