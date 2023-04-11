import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Feature from "../Feature/Feature";
// import { addToDb } from "../../utilities/fakedb";

const FeatureJobs = () => {
  const [isShow, setIsShow] = useState([]);
  // console.log("is show" ,isShow);
  const [featureJob, setFeatureJob] = useState([]);
  
  useEffect(() => {
    fetch("featureJobs.json")
      .then((res) => res.json())
      .then((data) => setFeatureJob(data));
  }, []);
  if (featureJob.length === 6) {
    const dataSlice = featureJob.slice(0, 4);
    // console.log("slice",dataSlice);
    setFeatureJob(dataSlice);
    setIsShow(featureJob);
  }

  const handleSeeMoreButton = () => {
    if (isShow.length === 6) {
      const dataSlice = isShow.slice(4,6);
      dataSlice.map(sliceData => setIsShow(sliceData))
      // console.log("6 slice", dataSlice);
      // setIsShow(dataSlice);
    }
  };

  return (
    <div>
      <section className="job-feature mb-8">
        {/* job feature heading */}
        <div className="job-feature-heading  flex flex-col   items-center  justify-center">
          <h1 className="w-3/5 font-extrabold mb-8 text-center">
            Featured Jobs
          </h1>
          <p className="  mb-8 text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* feature job details */}

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 items-center justify-around py-10">
          {featureJob.map((data) => (
            <Feature key={data.id} data={data}></Feature>
          ))}
        </div>
        <button
          onClick={()=>handleSeeMoreButton()}
          className="see-all-button btn  text-white bg-violet-700 mx-auto mt-5"
        >
          See All Jobs
        </button>
      </section>
    </div>
  );
};

export default FeatureJobs;
