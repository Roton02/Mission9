import { IoLocationSharp } from "react-icons/io5";
import { Link,useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Card from "../Home/Card";

const DetailsPage = () => {
  const data = useLoaderData()
  const param = useParams()
  console.log(data,param);
  const DetailsData = data.filter(AData => AData.id == param.id)
  // console.log(DetailsData);
    return (
      <div>
        <Helmet>
        <title>Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
       <div>
        {DetailsData.map(DData => <Card CData={DData} key={DData.id}></Card> )}
       </div>
      </div>
    );
};

export default DetailsPage;