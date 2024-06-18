// JobsList.jsx

import React from 'react';
import JobCard from '../JobCard/page';
import jobData from '@/data/data';


function JobsList() {
  return (
    <div className="max-w-3xl mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {jobData.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsList;
