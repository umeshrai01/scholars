import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export default function Dashboard() {
  const [setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  const [Title, setTitle] = useState('')
  const [Date, setDate] = useState('')
  const [Dates, setDates] = useState('')
  const [Degree, setDegree] = useState('')
  const [Funding, setFunding] = useState('')
  const [Provider, setProvider] = useState('')
  const [Course, setCourse] = useState('')
  const [Country, setCountry] = useState('')
  const [Apply, setApply] = useState('')
  const [Scholar, setScholar] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (Title === '', Date === '', Dates === '', Degree === '', Funding === '', Provider === '', Course === '', Country === '', Scholar === '', Apply === ''){
      return
    }
  const scholarCollRef = collection(db, 'scholarship')
  addDoc(scholarCollRef, {Title, Date, Dates, Degree, Funding, Provider, Course, Country, Scholar, Apply})
  .then(response => {
    console.log(response)
    alert("Data Added Successfully")
  })
  .catch(error => {
    console.log(error.message)
  })
  }

  return (
    <div className='content' style={{marginTop: "-3rem"}}>
      <div className="link">
          <a href="/admin/profile/dashboard"> Dashboard </a>
        </div>
        <h3>Admin Dashboard</h3>

        <div className='flex'>
            <div className='menu'>
                <a href='/admin/profile/dashboard'><h5>Dashboard</h5></a>
                <a href='/admin/profile'><h5>Admin Profile</h5></a>
                <a href='/admin/profile/dashboard/list'><h5>View Scholarship</h5></a>
                <a href='/admin/profile/dashboard/list/edit'><h5>Edit Scholarship</h5></a>
                <a href='/admin/profile/dashboard/loanRequest'><h5>Loan Requests</h5></a>
                <a href='/admin/testList'><h5>Scholarship Test Applicant</h5></a>
            </div>

            <div className='adminInput'>

                <form onSubmit={handleSubmit} className='forma'>
                  <div className='scholar'>
                    <h4>Add Scholarship</h4>
                    <label>Scholarship Name</label>
                    <input id='Title' type='Text' value={Title} required onChange={e => setTitle (e.target.value)} />
                    <label>Deadline</label>
                    <input id='Date' type='Text' value={Date} required onChange={e => setDate (e.target.value)} />
                    <label>Date</label>
                    <input id='Dates' type='Text' value={Dates} required onChange={e => setDates (e.target.value)} />
                    <label>Degree Eligible</label>
                    <input id='Degree' type='Text' value={Degree} required onChange={e => setDegree (e.target.value)} />
                    <label>Funding Type</label>
                    <input id='Funding' type='Text' value={Funding} required onChange={e => setFunding (e.target.value)} />
                    <label>Scholarship Provider </label>
                    <input id='Provider' type='Text' value={Provider} required onChange={e => setProvider (e.target.value)} />
                    <label>Course Eligible</label>
                    <input id='Course' type='Text' value={Course} required onChange={e => setCourse (e.target.value)} />
                    <label>Open To</label>
                    <input id='Country' type='Text' value={Country} required onChange={e => setCountry (e.target.value)} />
                    <label>Scholarship can be taken at:</label>
                    <input id='Scholar' type='Text' value={Scholar} required onChange={e => setScholar (e.target.value)} />
                    <label>Online Application Link</label>
                    <input id='Apply' type='Text' value={Apply} onChange={e => setApply (e.target.value)} />
                    <button className='button' type='submit'>Add Data</button>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}
