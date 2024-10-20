import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import ClipLoader from "../components/Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchJobs = async () => {
      try {
        const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Data fetching error: ", error);
      } finally {
        setLoading(false);
      }
    };
    FetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <ClipLoader />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
