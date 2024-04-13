import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext } from "react";



const UpdateProfile = () => {
  const { UpdateUser } = useContext(AuthContext);

  const handleSubmit = e =>{
    e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      const email = e.target.email.value;
      // console.log(name,photo,email);
      UpdateUser(name, photo, email)
      .then()
      .catch(error =>{
        
        console.log(error);
      })
      
  }
  

  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
       <div className="hero px-20 min-h-screen bg-base-200 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:ml-32 lg:text-left">
      <h1 className="text-5xl font-bold">Update your profile</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your update Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
        <button  className="w-full btn mt-2 text-sm font-bold bg-slate-100 border-[#23BE0A] hover:bg-[#23BE0A] transition  text-[#23BE0A]   duration-500  hover:text-white">Done</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default UpdateProfile;
