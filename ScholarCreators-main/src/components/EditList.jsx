import React, { useState } from 'react'
import { db } from './firebase'
import { doc , updateDoc} from 'firebase/firestore'

export default function EditList() {
    const [id, setId] = useState('')
    const [Title, setTitle] = useState('')
    const [Date, setDate] = useState('')
    const [Degree, setDegree] = useState('')
    const [Funding, setFunding] = useState('')
    const [Provider, setProvider] = useState('')
    const [Course, setCourse] = useState('')
    const [Country, setCountry] = useState('')
    const [Apply, setApply] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (Title === ''|| Date === '' || Degree === '' || Funding === '' || Provider === '' || Course === '' || Country === '' || Apply === '' || id === ''){
            return
            }
            const docRef = doc(db, 'scholarship', id)
            updateDoc(docRef, {Title, Date, Degree, Funding, Provider, Course, Country, Apply})
            .then(response => {
                console.log(response)
                alert("Data Updated Successfully")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

  return (
    <div className='content' style={{marginTop: "2rem", padding: "2rem"}}>
      <div className="links" style={{display: "flex", paddingTop: "4rem"}}>
          <a href="/admin/profile/dashboard" style={{textDecoration: "none", color: "gray"}}> Dashboard </a>
          <p>></p>
          <a href="/admin/profile/dashboard/list" style={{textDecoration: "none", color: "gray"}}> List </a>
          <p>></p>
          <a href="/admin/profile/dashboard/list/edit" style={{textDecoration: "none", color: "gray"}}> Edit </a>
      </div>
          <div className='editlist'>
          <form onSubmit={handleSubmit} className='formedit'>
                  <div className='scholar'>
                    <div className='id'>
                    <h4>Edit Scholarship</h4>
                    <label>Scholarship ID *</label>
                    <input id='id' type='Text' value={id} placeholder='Enter the id of Scholarship for edit' onChange={e => setId (e.target.value)} required />
                    </div>
                    <br />
                    <p>Enter the Below details for Update</p>
                    <br />
                    <label>Scholarship Name</label>
                    <input id='Title' type='Text' value={Title} placeholder='Scholarship Name' required onChange={e => setTitle (e.target.value)} />
                    <label>Deadline</label>
                    <input id='Date' type='Text' value={Date} placeholder='Enter Deadline' required onChange={e => setDate (e.target.value)} />
                    <label>Degree Eligible</label>
                    <input id='Degree' type='Text' value={Degree} placeholder='Eligible Degree' required onChange={e => setDegree (e.target.value)} />
                    <label>Specify Funding ype</label>
                    <input id='Funding' type='Text' value={Funding} placeholder='Partially / Fully / Other' required onChange={e => setFunding (e.target.value)} />
                    <label>Scholarship Provider Country</label>
                    <input id='Provider' type='Text' value={Provider} placeholder='Scholarship Provider Country' required onChange={e => setProvider (e.target.value)} />
                    <label>Course Eligible</label>
                    <input id='Course' type='Text' value={Course} placeholder='Course Eligible' required onChange={e => setCourse (e.target.value)} />
                    <label>Open TO</label>
                    <input id='Country' type='Text' value={Country} placeholder='Country Eligible for Scholarship' required onChange={e => setCountry (e.target.value)} />
                    <label>Online Application Link</label>
                    <input id='Apply' type='Text' value={Apply} placeholder='Provide Lin' required onChange={e => setApply (e.target.value)} />
                    <button className='button' type='submit'>Update Data</button>
                  </div>
                </form>

                <div className='contelist'>
        <h4>Steps for Update scholarship details</h4>
        <li>Copy the Id For which you want to update.</li>
        <li>Go Back to Dashboard</li>
        <li>Click on edit option on left hand side</li>
        <li>Paste the Id and Other details</li>
        <li>Press the Update Button</li>
        <button className="btn btn-primary" style={{marginLeft: "2rem", marginTop: '1rem', width: "70%"}}>
            <a href="/admin/profile/dashboard/list" style={{textDecoration: 'none', color: 'white'}}>Go to List</a>
        </button>
        <button className="btn btn-primary" style={{marginLeft: "2rem", marginTop: '1rem', width: "70%"}}>
            <a href="/admin/profile/dashboard" style={{textDecoration: 'none', color: 'white'}}>Admin Dashboard</a>
        </button>
      </div>
          </div>
    </div>
  )
}
