import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobPagination from './JobPagination';


function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(2);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <JobPagination page={page} setPage={setPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobPagination 
      page={page} 
      setPage={setPage}
      hasNextPage={hasNextPage} />
    </Container>
  )
}

export default App;
