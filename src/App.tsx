import { useState } from 'react'
import {Column, Card} from './Column'
import { Modal } from './Modal'
import {Tag, TabView} from './DashAssets'
import './index.css'
import Header from './Header'
import type { JobType} from './Types'
import SideNav from './SideNav'


function App() {
 const [jobs, setJobs] = useState<JobType[]>([])
 const [editJob, setNewEditJob] = useState<JobType | null>(null)
 const [showModal, setShowModal] = useState<boolean>(false)
 function handleJobs(newJob: JobType){

    setJobs(previous => [...previous, newJob])

 }

 function handleDeleteJobs(id: string){
  setJobs(previous => previous.filter(job => job.id !== id))
 }

 function handleEditJob(id: string){
  setNewEditJob(
    jobs.find(job => id === job.id) ?? null
  )
 }

 function handleUpdateJob(updatedJob: JobType){
  setJobs(previous => previous.map(job => job.id === updatedJob.id ? updatedJob : job))
  setNewEditJob(null);
 }

 function handleCancelJob(){
  if (editJob) setNewEditJob(null);
  handleShowModal()

 }

 function handleShowModal(){
  setShowModal(!showModal? true : false)
 }

  return (
  <div className='flex'>
  <SideNav recentJobs={jobs}></SideNav>
  <div>
    
  
  <Header jobProjName='jooook'></Header>

  {showModal && <Modal 
      
                onAddJob={handleJobs} 
                editingJob={editJob} 
                updateJob={handleUpdateJob} 
                cancelJob={handleCancelJob}>

                </Modal>

}
  
  <TabView>

  <Column color='yellow' name='Active' onShowModal={handleShowModal}>
    {jobs.map(job => (
      <Card key={job.id} job={job} onDelete={handleDeleteJobs} onEdit={handleEditJob}></Card>))};
    </Column>
    <Column color='red' name='Waiting' onShowModal={handleShowModal}></Column>
    <Column color='pink' name='Ghosted' onShowModal={handleShowModal}></Column>
  </TabView>


      <Tag/>
      
      <p className='bg-twitter-blue'>sadada

      </p>
    </div>
   </div>

    // <Column name='Active'>
    // </Column>
  )
}

export default App
