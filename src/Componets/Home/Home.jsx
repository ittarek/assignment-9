// import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import JobsCategory from "../jobCategory/JobsCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import "./Home.css";

const Home = () => {
  const jobsCategory = useLoaderData();

  return (
    <div>
      <header className="lg:flex items-center mt-24 header justify-around mb-40 relative">
        <div className="mb-8">
          <p className="w-[340px] font-extrabold mb-8 text-4xl">
            {" "}
            One Step Closer To Your{" "}
            <span className="text-violet-500">Dream Job </span>{" "}
          </p>
          <p className="w-[400px] mb-8 text-gray-400">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all your
            job application from start to finish.
          </p>
          <button className="btn  text-white bg-violet-700">Get Started</button>
        </div>
        <div className="w-96">
          <img
            className="w-full img-responsive"
            src="https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt=""
          />
        </div>
      </header>
      {/* Job category section */}
      <section className="job-category ">
        <div className="title-bar  flex items-center  flex-col justify-center">
          <h1 className="w-3/5 font-extrabold mb-8 text-center">
            Job Category List
          </h1>
          <p className="  mb-8 text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* 4 job items */}
        <div className="job-items lg:flex items-center   justify-between gap-8 mb-8">
          {jobsCategory.map((job) => (
            <JobsCategory job={job} key={job.id}></JobsCategory>
          ))}
        </div>
      </section>

      {/* job feature section */}
      <section>
        <FeatureJobs></FeatureJobs>
      </section>
    </div>
  );
};

export default Home;
