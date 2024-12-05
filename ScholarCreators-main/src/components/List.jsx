import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "./firebase"

export default function List() {
    const [scholarship, setScholarship] =useState([])

    useEffect(() => {
      getScholarship()
    }, [])

    useEffect(() => {
      console.log(scholarship)
    }, [scholarship])

    function getScholarship() {
        const scholarshipCollectionRef = collection(db, 'scholarship')
        getDocs(scholarshipCollectionRef)
        .then(response => {
            const scholar = response.docs.map(doc => ({
              data: doc.data(),
              id: doc.id,
            }))
            setScholarship(scholar)
        })
        .catch(error => console.log(error.message))
    }
  return (
    <div style={{marginTop: "3rem", padding: "2rem"}}>
      <div className="links" style={{display: "flex"}}>
          <a href="/admin/profile/dashboard" style={{textDecoration: "none", color: "gray"}}> Dashboard </a>
          <p>></p>
          <a href="/admin/profile/dashboard/list" style={{textDecoration: "none", color: "gray"}}> List </a>
        </div>
      <h4>Scholarship List</h4>
      <div className='schol'>
      <div className='list'>
        {scholarship.map(scholarship =>
        <div key={scholarship.id}>
            <div className='card' style={{padding: "2rem", marginTop: "1rem"}}>
              <div className='title'>
                <h6>Id :  {scholarship.id}</h6>
              </div>
              <div className='name'>
              <div className='title'>
                <h3>{scholarship.data.Title}</h3>
              </div>
              <div className='names'>
                <h5>Date : </h5> <p>{scholarship.data.Dates}</p>
              </div>
              <div className='names'>
                <h5>Eligible Degree : </h5> <p>{scholarship.data.Degree}</p>
              </div>
              <div className='names'>
                <h5>Funding Type : </h5><p> {scholarship.data.Funding}</p>
              </div>
              <div className='names'>
                <h5>Scholarship Provider : </h5><p> {scholarship.data.Provider}</p>
              </div>
              <div className='names'>
                <h5>Eligible Course : </h5> <p>{scholarship.data.Course}</p>
              </div>
              <div className='names'>
                <h5>Open To : </h5><p> {scholarship.data.Country}</p>
              </div>
              <div className='names'>
                <h5>Scholarship can be taken at :</h5> <p>{scholarship.data.Scholar}</p>
              </div>
                <p><h5>Online Application Form Link : </h5> {scholarship.data.Apply}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='contelist'>
        <h4>Steps for Update scholarship details</h4>
        <li>Copy the Id For which you want to update.</li>
        <li>Go Back to Dashboard</li>
        <li>Click on edit option on left hand side</li>
        <li>Paste the Id and Other details</li>
        <li>Press the Update Button</li>
        <button className="btn btn-primary" style={{marginLeft: "2rem", marginTop: '1rem', width: "70%"}}>
            <a href="/admin/profile/dashboard/list/edit" style={{textDecoration: 'none', color: 'white'}}>Edit Scholarship</a>
        </button>
        <button className="btn btn-primary" style={{marginLeft: "2rem", marginTop: '1rem', width: "70%"}}>
            <a href="/admin/profile/dashboard" style={{textDecoration: 'none', color: 'white'}}>Admin Dashboard</a>
        </button>
      </div>
      </div>
    </div>
  )
}
