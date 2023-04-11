import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";
// import { currencydollar } from "@heroicons/react/24/solid";

const JobDetails = () => {
  const loaderData = useLoaderData();
  const detailsId = useParams();
  const dynamicId = detailsId.id;

  const [detail, setDetail] = useState({});
  useEffect(() => {
    if (loaderData) {
      const findId = loaderData.find((dataId) => dataId.id === dynamicId);
      // console.log(findId);
      setDetail(findId);
    }
  }, []);
  // console.log(detail);
  const {
    id,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    Experiences,
    salary,
    jobTitle,
    phone,
    location,
    email,
  } = detail;

  const handleApplyButton = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <h1 className="w-3/5 ml-60   font-extrabold mb-8 text-center">
        Job Details
      </h1>
      <div className="lg:flex gap-48">
        <div className="w-50">
          <p className="mb-4 leading-8  ">
            <span className="font-bold ">Job Description:</span>{" "}
            <span className="text-gray-500">{jobDescription}</span>
          </p>
          <p className="mb-4 leading-8 ">
            <span className="font-bold">Job Responsibility :</span>{" "}
            <span className="text-gray-500">{jobResponsibility}</span>
          </p>
          <p className="mb-4 leading-8 ">
            <span className="font-bold">Educational Requirements:</span>{" "}
            <span className="text-gray-500"> {educationalRequirements}</span>
          </p>
          <p className="mb-8 leading-8 ">
            <span className="font-bold">Experiences:</span>{" "}
            <span className="text-gray-500"> {Experiences}</span>
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className=" bg-gray-100 p-4 card rounded-lg mb-5 ">
            <div className="mb-8 divide-y  text-gray-900">
              <p className="font-extrabold mb-4   ">Job Details</p>
              <p className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
                <span className="font-bold ml-2">Salary:</span>{" "}
                <span>{salary}</span>
              </p>
              <p className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span className="font-bold ml-2">Job Title:</span> {jobTitle}
              </p>
            </div>
            <div className="divide-y  text-gray-900">
              <p className="font-extrabold mb-4 divide-y  text-gray-900">
                Contact Information
              </p>
              <p className="mb-4 flex">
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="font-bold ml-2"> Phone:</span> {phone}
              </p>
              <p className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="font-bold ml-2">Email:</span> {email}
              </p>
              <p className="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="font-bold ml-2">Address:</span> {location}
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleApplyButton(id)}
              className="btn  w-full text-white bg-violet-700"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
