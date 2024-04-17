import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({CData}) => {
        console.log(CData);
        const {estate_title,segment_name,description,price,status,area,location,facilities,image} = CData ;
        
    return (
        <div>
            <div className="grid grid-cols-1  lg:grid-cols-5 gap-2   p-2 ">
       <div  className="col-span-3 p-4   ">
        <img className=" w-full rounded-lg  lg:min-h-[85vh]  " src={image} alt="" />
       </div>
       <div data-aos="fade-left" data-aos-duration='3000' className="col-span-2 px-5 space-y-1 md:space-y-3  md:px-16 lg:px-0 mt-8">
        <h1  className="text-4xl mb-2 font-bold">  {estate_title}</h1> <hr />
        <h1 className="text-2xl mb-2 font-medium"> Segment : {segment_name}</h1> <hr />
       
        <p className="text-xl my-1 "> <span className="text-xl font-bold  px-2">About SEG: </span>{description}</p> <hr />
        <ul> 
       <span className="text-2xl font-semibold ml-4 ">facilities</span>
        {
          facilities.map((f,i)=> <li className="ml-8 text-xl " key={i}>{i+1}. {f}</li>)
        }
        </ul> <hr />
        <div className="flex my-2 gap-12 ">
          <h1 className="text-xl">Area: {area}</h1>
          <h1 className="text-xl">Status: {status}</h1> <hr />
        </div> <hr />
        <div className="flex gap-7 md:gap-12  my-2">
        <h1 className="flex items-center font-semibold text-xl" >Price :{price}</h1> 
        <h1 className="flex items-center font-semibold text-xl" ><IoLocationSharp/>  {location}</h1> <hr />
        </div>
        <Link  to="/contract"
            className="rounded-md mt-10  py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#23BE0A] hover:bg-[#23BE0A] transition  text-[#23BE0A]   duration-500  hover:text-white"
          >
            <button  className="w-full mt-8 "><span className="absolute w-64 h-0  duration-300 origin-center rotate-45  bg-[#23BE0A] "></span>
            <span className="relative    ">
            Contract 
            </span></button>
          </Link>
       </div>
       
      </div>
        </div>
    );
};

Card.propTypes ={
  CData:PropTypes.object.isRequired,
 
}

export default Card;