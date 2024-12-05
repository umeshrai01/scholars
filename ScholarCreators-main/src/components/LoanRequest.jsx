import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "./firebase"

export default function List() {
    const [LoanRequest, setLoanRequest] =useState([])

    useEffect(() => {
      getLoanRequest()
    }, [])

    useEffect(() => {
      console.log(LoanRequest)
    }, [LoanRequest])

    function getLoanRequest() {
        const LoanRequestCollectionRef = collection(db, 'LoanRequest')
        getDocs(LoanRequestCollectionRef)
        .then(response => {
            const scholar = response.docs.map(doc => ({
              data: doc.data(),
              id: doc.id,
            }))
            setLoanRequest(scholar)
        })
        .catch(error => console.log(error.message))
    }
  return (
    <div className='loanreq'>
        <div className="link" style={{marginTop: '4rem'}}>
          <a href="/admin/profile/dashboard"> Dashboard </a>
        </div>
      <h4 style={{textAlign: "center"}}>LoanRequest List</h4>
        <>
        {LoanRequest.map(LoanRequest =>
        <div key={LoanRequest.id}>
            <div className='cardloan'>
              <div className='title'>
                <h6>Id :  {LoanRequest.id}</h6>
              </div>
              <div className='names'>
                <h5>Student Name : </h5><p>{LoanRequest.data.Name}</p>
              </div>
              <div className='names'>
              <h5>Student Mobile No : </h5><p>{LoanRequest.data.Mobile}</p>
              </div>
              <div className='names'>
              <h5>Student Email-Id : </h5><p>{LoanRequest.data.Email}</p>
              </div>
              <div className='names'>
              <h5>Nationality : </h5><p>{LoanRequest.data.Nationality}</p>
              </div>
              <div className='names'>
                <h5>Student permanent Address : </h5><p>{LoanRequest.data.Address}</p>
              </div>
              <div className='names'>
              <h5>Planning To Study : </h5><p>{LoanRequest.data.Location}</p>
              </div>
              <div className='names'>
              <h5>Required Loan Amount: </h5><p>{LoanRequest.data.Amount}</p>
              </div>
              <div className='names'>
               <h5>Student Aadhar Card No : </h5> <p>{LoanRequest.data.Aadhar}</p>
              </div>
              <div className='names'>
                <h5>Student PAN Card No : </h5><p>{LoanRequest.data.Pan}</p>
              </div>
            </div>
          </div>
        )}
        </>
    </div>
  )
}












        