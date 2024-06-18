import React from 'react';

function JobCard({ job }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-gray-600">{job.salary}</p>
    </div>
  );
}

export default JobCard;