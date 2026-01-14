import { useState } from 'react'
import {Column, Card} from './Column'
import { Modal } from './Modal'

import './index.css'

type JobType = {
    
    id: string,
    company: string,
    companyIcon: Company,
    position: string,
    status: string,
    link?: string,
    createdAt: string,
    rating?: number,
    moodTxt: string,
    favorites: boolean,
}

type Company = {
    logo: string,
    alt: string
}


function App() {
 const [jobs, setJobs] = useState<JobType[]>([])

 function handleJobs(newJob: JobType){

    setJobs(previous => [...previous, newJob])

 }

 function handleDeleteJobs(id: string){
    
  setJobs(previous => previous.filter(job => job.id !== id))
  

 }
  return (
  <>
  <Modal onAddJob={handleJobs}></Modal>
  
  <Column color='red' name='Active'>
    {jobs.map(job => (
      <Card key={job.id} job={job} onDelete={handleDeleteJobs}></Card>))};
    </Column>
    </>

    // <Column name='Active'>
    // </Column>
  )
}

export default App
