import axios from "axios";
import React, { useEffect, useState } from "react";

type jobsType = [
  {
    title: string;
    description: string;
    salary: string;
  }
];

type jobType = {
  title: string;
  description: string;
  salary: string;
};

export const HomeJobs = () : JSX.Element | null => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<null | jobsType>(null);
  // get job data
  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs/")
      .then((res) => {
        setJobs(res.data.result);
        // console.log(res.data.result[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // loading
  if (loading) {
    return <div className="w-full h-[150px] flex justify-center items-center">
      <div className="h-12 w-12 border-2 border-dashed border-sky-500 rounded-full animate-spin duration-150"></div>
    </div>
  }
  return (
    <section id="homeJobs1" className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 -m-12">
        {jobs?.map((job: jobType) => (
            <div className="p-12 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                TOP JOBS
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {job?.title}
              </h2>
              <p className="leading-relaxed mb-8">{job?.description}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                {job?.salary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
