
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Card from "../Home/Card";
import Slider from "../Home/Slider/Slider";

const DetailsPage = () => {
  const data = useLoaderData()
  const param = useParams()
  console.log(data,param);
  const DetailsData = data.filter(AData => AData.id == param.id)
  // console.log(DetailsData);
  
    return (
      <div className="overflow-x-hidden">
        <Helmet>
        <title>Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
       <div data-aos="zoom-in" data-aos-duration='2000'>
        {DetailsData.map(DData => <Card CData={DData} key={DData.id}></Card> )}
       </div>
      </div>
    );
};

export default DetailsPage;