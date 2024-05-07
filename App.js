import React, { useState } from "react";
import Content from "./Content";

function App() {
  const jobGetItem = JSON.parse(localStorage.getItem("jobs"));
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(jobGetItem ?? []);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];
      const jobJson = JSON.stringify(newJob);
      localStorage.setItem("jobs", jobJson);
      return newJob;
    }, setJob(""));
  };

  const handleRemove = (i) => {
    setJobs((prev) => {
      const delJob = jobs.filter((item, index) => index !== i);
      const jobJsonDel = JSON.stringify(delJob);
      localStorage.setItem("jobs", jobJsonDel);
      return delJob;
    });
  };

  return (
    <div className="App">
      {" "}
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />{" "}
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <button onClick={() => handleRemove(index)}>delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
