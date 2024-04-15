import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <div className="">
             <Helmet>
        <title>FAQ</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div  className="hero h-[200px] bg-cover text-opacity-100   bg-center my-5 rounded-xl 
        bg-[url('https://i.ibb.co/kH9Xknx/faq4444444444.jpg')]">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            
            <div className=" space-y-12  text-white flex flex-col justify-center ">
              <h1 className="text-xl lg:text-4xl  font-bold">
              Here are some suggestions for you about FAQ
              </h1>
              <div className="flex justify-center gap-10 items-center ">
              </div>
            </div>
          </div>
        </div>
            <h2 className="mb-12 text-4xl font-bold underline leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Faq;