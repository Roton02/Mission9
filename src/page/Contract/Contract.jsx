import { Helmet } from "react-helmet-async";

const Contract = () => {
    return (
		<div className=" overflow-x-hidden">
	<Helmet>
        <title>Contract</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
			<div  className="hero h-[200px]  bg-cover text-opacity-100   bg-center my-5 rounded-xl 
        bg-[url('https://i.ibb.co/d7nSHTS/bbbbbbb111111111.jpg')]">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            
            <div data-aos="fade-bottom" data-aos-duration='1000' className=" space-y-12  text-white flex flex-col justify-center ">
              <h1 className="text-xl lg:text-4xl  font-bold">
                Lets talk to private environment  habi
              </h1>
              <div className="flex justify-center gap-10 items-center ">
              </div>
            </div>
          </div>
        </div>
        <section className=" bg-gray-100 rounded-xl">
	<div className="grid max-w-6xl grid-cols-1 px-10 lg:px-0 lg:grid-cols-6  gap-10   md:divide-x">
		<div className="py-20 md:py-0 col-span-2 rounded-l-xl text-white bg-slate-900 ">
			<div className="p-10">
				<p>Contact</p>
			<h1 data-aos="zoom-in" data-aos-duration='1000' className="text-3xl  md:text-4xl my-8 font-bold">RELAINS-RELUX</h1>
			<p data-aos="fade-right" data-aos-duration='1000' className="pt-2 pb-4">Contact us to unlock the door to your perfect sale and rental property.</p>
			<div data-aos="fade-right" data-aos-duration='1000' className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Subornachar, Noakhali</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>0182000000</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>MR Coders.tech @business.com</span>
				</p>
			</div>
			</div>
		</div>
		<form noValidate="" className="flex lg:col-span-4 flex-col py-6 my-5 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea placeholder="write message"  rows="5" className="block p-5 w-full rounded-md focus:ring focus:ring-opacity-75 "></textarea>
			</label>
			<button data-aos="fade-left" data-aos-duration='1000' type="button" className="self-end px-8 py-3 text-lg rounded-lg bg-blue-500  text-white  hover:bg-gray-200 
			 hover:text-black duration-300">Send message</button>
		</form>
	</div>
</section>
		</div>
    );
};

export default Contract;