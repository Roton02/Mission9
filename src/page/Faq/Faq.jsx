import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <div className=" overflow-x-hidden border-2 rounded-xl">
             <Helmet>
        <title>FAQ</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <div  className="hero h-[200px] bg-cover text-opacity-100   bg-center rounded-t-xl 
        bg-slate-900 bg-opacity-80">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            
            <div className=" space-y-12  text-white flex flex-col justify-center ">
            <h2 data-aos="fade-left" data-aos-duration='1000' className=" text-4xl font-bold underline leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
              <div className="flex justify-center gap-10 items-center ">
              </div>
            </div>
          </div>
        </div>
            
            <div data-aos="fade-right" data-aos-duration='1000' className="join join-vertical w-full">
  <div  className="collapse collapse-arrow join-item ">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    Why is travelling important?
    </div>
    <div className="collapse-content"> 
      <p>Travelling is important as it teaches us a lot of things. You can learn new skills, new languages, new cultures. Moreover, you get to make new friends and try out new foods when you travel to a new place. It can be a real learning experience for all.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How is travelling different now?
    </div>
    <div className="collapse-content"> 
      <p>Travelling has changed drastically thanks to technology. Earlier, people had to take animals to travel to a new place and it would be time-consuming. Now, there are many transport options available that help you reach within no time. Further, the internet has made travelling easier by offering maps, translation apps, food services, cab services, etc. available at our fingertips.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What time is it? 
    </div>
    <div className="collapse-content"> 
      <p>Time zones can be confusing, so we recommend you to ask this question if you don’t miss your flight or your train ride!</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How much does the magazine cost?
    </div>
    <div className="collapse-content"> 
      <p> Whether you’re at the airport planning to buy magazine or snacks, or at a tourist spot about to buy souvenirs, asking for how much it would cost you is very important. Replace the word magazine with the word you might!</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How do I get to the park from here?
    </div>
    <div className="collapse-content"> 
      <p>When maps and smartphone apps fail to help you, asking a local for directions will always be a good option. Be sure to remember the directions (left, right, straight ahead). Don’t forget to note the landmarks! Do you turn left after the train station? Is it straight ahead or right next to the statue?</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Faq;