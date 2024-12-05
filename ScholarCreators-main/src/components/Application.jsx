import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "./firebase"

export default function Application() {
    const [TestApplicant, setTestApplicant] =useState([])

    useEffect(() => {
      getTestApplicant()
    }, [])

    useEffect(() => {
      console.log(TestApplicant)
    }, [TestApplicant])

    function getTestApplicant() {
        const TestApplicantCollectionRef = collection(db, 'TestApplicant')
        getDocs(TestApplicantCollectionRef)
        .then(response => {
            const scholar = response.docs.map(doc => ({
              data: doc.data(),
              id: doc.id,
            }))
            setTestApplicant(scholar)
        })
        .catch(error => console.log(error.message))
    }
  return (
    <div className='contain' style={{marginTop: "4rem"}}>
      <h6 style={{textAlign: "center"}}>TestApplicant List</h6>
        <>
        {TestApplicant.map(TestApplicant =>
        <div key={TestApplicant.id}>
          <div className='display'>
          <h6>Id :  {TestApplicant.id}</h6>
              <div className="car">
                <div className="perso">
                  <div className='names'>
                    <h3>Student Name : </h3>
                    <p>{TestApplicant.data.Name}</p>
                  </div>
                  <div className='names'>
                    <h3>Student Email-Id : </h3><p>{TestApplicant.data.Email}</p>
                  </div>
                  <div className='names'>
                    <h3>Student Mobile No : </h3><p>{TestApplicant.data.Phone}</p>
                  </div>
                  <div className="names">
                    <h3>Gender : </h3><p>{TestApplicant.data.Gender}</p>
                  </div>
                </div>
                  <div className="image">
                    <img src={TestApplicant.data.imgUrl} width={"170px"} height={"200px"} alt="" />
                  </div>
              </div>
                <div className="detail">
                  <div className="names">
                    <h3>Father's Name : </h3><p>{TestApplicant.data.Father}</p>
                  </div>
                  <div className="names">
                    <h3>Mother's Name : </h3><p>{TestApplicant.data.Mother}</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="names">
                    <h3>Country : </h3><p>{TestApplicant.data.Country}</p>
                  </div>
                  <div className="names">
                    <h3>State : </h3><p>{TestApplicant.data.State}</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="names">
                    <h3>City : </h3><p>{TestApplicant.data.City}</p>
                  </div>
                  <div className="names">
                    <h3>District : </h3><p>{TestApplicant.data.District}</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="names">
                    <h3>Pin code : </h3><p>{TestApplicant.data.pinCode}</p>
                  </div>
                </div>

                <div className="detail">
                  <div className="name">
                    <h3>College Name : </h3><p>{TestApplicant.data.College}</p>
                  </div>
                </div>

                <div className="detail">
                  <div className="names">
                    <h3>Course : </h3><p>{TestApplicant.data.Course}</p>
                  </div>
                  <div className="names">
                    <h3>Duration : </h3><p>{TestApplicant.data.Duration}</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="names">
                    <h3>GPA : </h3><p>{TestApplicant.data.Cgpa}</p>
                  </div>
                </div>
            </div>
          </div>
        )}
        </>
    </div>
  )
}