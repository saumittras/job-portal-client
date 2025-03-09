import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    // fetch("http://localhost:3000/jobs")
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));
    axiosSecure.get('/jobs')
    .then(result=>{
      console.log(result.data)
      setJobs(result.data)
    })

  }, []);
  return (
    <div>
      <div className="jobcard-box grid grid-cols-1 sm:grid-cols-2 md;grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
