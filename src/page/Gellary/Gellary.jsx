import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";

const Gellary = () => {

  return (
    <div>
         <Helmet>
        <title>Gellary</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <div  className="hero h-[300px] bg-cover text-opacity-100 mt-20   bg-center my-5 rounded-xl 
        bg-[url('https://i.ibb.co/pwbQNH3/g2222222.jpg')]">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            
            <div className=" space-y-12 mt-16  text-white flex flex-col justify-center ">
              <h1 data-aos="zoom-in-down" data-aos-duration='1000' className="text-xl lg:text-5xl  font-bold">
                WellCome To our Owesome properties Gellary 
              </h1>
              <div className="flex justify-center gap-10 items-center ">
                <button data-aos='fade-right' data-aos-duration='2000'
                  className="btn px-10 text-xl  hover:text-black text-white 
    font-xl bg-gray-400 "
                >
                  {" "}
                  <a href="#kidsBookList">See all</a>{" "}
                </button>
                <h1 data-aos='fade-left' data-aos-duration='1000' className=" flex items-center  lg:text-2xl  gap-2  font-bold">
                  <FaArrowLeft></FaArrowLeft> Click this and see magic !!{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl underline text-center my-14 font-semibold">
          Hilarious, Laugh-Out-Loud & All Time Funniest Picture Properties Ever!
        </h1>
        <div
          id="kidsBookList"
            
        >
        </div>
      </div>
      <section className="py-6">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            src="https://i.ibb.co/XYqqngL/photo-1562790351-d273a961e0e9.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/NCVQb5S/photo-1563911302283-d2bc129e7570.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/7Vy4JxC/photo-1590523277543-a94d2e4eb00b.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/hyGjb0s/photo-1592555059503-0a774cb8d477.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/Ypkvrs4/photo-1596394516093-501ba68a0ba6.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/7rY8hvB/photo-1600011689032-8b628b8a8747.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/sjN4gsq/photo-1601701119533-fde20cecbf4e.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/9wNcCN3/photo-1606402179428-a57976d71fa4.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src="https://i.ibb.co/9wbXnVb/photo-1610641818989-c2051b5e2cfd.jpg"
          />
          <img data-aos="zoom-in-down" data-aos-duration='2000'
            src="https://i.ibb.co/XLnXcPq/premium-photo-1681922761648-d5e2c3972982.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3  aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gellary;
