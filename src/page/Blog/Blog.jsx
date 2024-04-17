import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div data-aos="zoom-in-up" data-aos-duration='1000'
          
       
          className="block max-w-sm mt-16 gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src="https://i.ibb.co/vL8L69Y/blog10.jpg"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            Tropical Paradise Resort
            </h3>
            <span className="text-xs dark:text-gray-600">
              February 19, 2021
            </span>
            <p>
            Escape to this idyllic resort nestled along the pristine beaches of the Caribbean. Enjoy luxurious accommodations, beachfront access, infinity pool, spa treatments, and fine dining.
            </p>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a data-aos="fade-right" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/nBb3zF6/blog2.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Mountain Retreat Resort
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 21, 2021
              </span>
              <p>
              Experience the ultimate mountain getaway in the heart of the Swiss Alps. Ski-in/ski-out access, hot tubs, gourmet restaurants, and a fitness center await you amidst breathtaking alpine scenery.
              </p>
            </div>
          </a>
          <a data-aos="zoom-in" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/9b48bb5/blog3.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Luxury Safari Lodge
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 22, 2021
              </span>
              <p>
              Embark on a journey of luxury and adventure at this exquisite safari lodge in the renowned Maasai Mara. Enjoy guided safari tours, luxury tents, private chef services, and unforgettable wildlife viewing.
              </p>
            </div>
          </a>
          <a data-aos="fade-left" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/DDGhY9h/blog4.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Seaside Penthouse
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 23, 2021
              </span>
              <p>
              Indulge in lavish seaside living at this stunning penthouse overlooking the turquoise waters of Miami Beach. Features include an oceanfront balcony, private elevator, infinity pool, and designer furnishings.
              </p>
            </div>
          </a>
          <a data-aos="fade-right" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/DY91zzq/blog6.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Luxury Loft Penthouse
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 24, 2021
              </span>
              <p>
              Immerse yourself in the romance of Paris from this luxurious loft penthouse with unparalleled views of the iconic Eiffel Tower. Enjoy a Jacuzzi, personal chef, and dedicated butler service in this opulent retreat
              </p>
            </div>
          </a>
          <a data-aos="zoom-in" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/cwVr5rR/blog5.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Exotic Island Retreat
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 25, 2021
              </span>
              <p>
              Discover the epitome of luxury and seclusion on this exotic private island in Bora Bora. Featuring overwater bungalows, a private beach, helicopter pad, and an array of marine activities, this retreat offers unparalleled privacy and indulgence.
              </p>
            </div>
          </a>
          <a data-aos="fade-left" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/rwV8rd7/blog7.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Secluded Island Haven
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 26, 2021
              </span>
              <p>
              Escape to this secluded haven nestled in the pristine waters of the Maldives. Luxurious villa accommodations, infinity pool, diving excursions, and yacht charters await discerning travelers seeking ultimate privacy and relaxation.
              </p>
            </div>
          </a>
          <a data-aos="fade-right" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/1Z1w1sS/blog8.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Exclusive Island Estate
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 26, 2021
              </span>
              <p>
              Experience the pinnacle of luxury living on your very own private island in the Caribbean. This exclusive estate boasts luxury villas, a private chef, tennis court, and even a private airstrip for seamless travel access.
              </p>
            </div>
          </a>
          <a data-aos="zoom-in" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/Zx08wKm/blog9.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Tranquil Oasis Island
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 26, 2021
              </span>
              <p>
              Escape to a tranquil oasis on your own private island in Fiji. Surrounded by crystal-clear waters and lush tropical landscapes, this exclusive retreat offers luxurious beachfront villas, gourmet dining, and personalized service.
              </p>
            </div>
          </a>
          <a data-aos="fade-left" data-aos-duration='1000'
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://i.ibb.co/TBKzDvZ/blog1.jpg"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              Remote Paradise Island
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 26, 2021
              </span>
              <p>
              Discover a remote paradise on this secluded island in the Seychelles. With pristine beaches, lush rainforest, and unparalleled privacy, this exclusive retreat is perfect for intimate getaways and luxury escapes.
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
      <Helmet>
        <title>Blogs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </section>
  );
};

export default Blog;
