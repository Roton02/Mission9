import { useState } from 'react';

export const Youtube = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));
  const sliders = [{img: "https://source.unsplash.com/640x640/?random/resort",title: "Winter",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/640x640/?random/villa",title: "Spring",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/640x640/?random/Island",title: "Summer",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/640x640/?random/Beachfront",title: "Autumn",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
  
  return (
      <div className="flex gap-4">
      {/* map  */}
        {sliders.map((slide, idx) => (
          <div onClick={() => toggle({ currentIdx: idx })} className={`h-[600px]  relative duration-500 ease-in-out ${isOpen == idx ? "w-full " : "w-1/3" }`} key={idx}>
          {/* main image  */}
            <img className="h-full w-full object-cover rounded-3xl" src={slide.img} alt="accordion navigate ui"/>
            <img className={`absolute bottom-5 border-white border-2 ${isOpen === idx ? "left-4" : "left-1/2 -translate-x-1/2 duration-700"}  h-[50px] w-[50px] object-cover rounded-full`} src={slide.img} alt="accordion navigate ui"/>
              <div className={`text-white absolute left-[100px] bottom-5`}>
              <h3 className="text-3xl font-semibold">Status</h3>
              <p className="text-xl">{slide.title}</p>
            </div>
          </div>
        ))}
      </div>
  )};
  export default Youtube;