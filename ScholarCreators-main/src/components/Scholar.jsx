import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "./firebase"
import "./Style.css";
import Footer from './Footer';

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
    <>
    <div className='page'>
      <div className="link" style={{marginTop: "4rem"}}>
          <a href="/"> Home </a>
          <p>></p>
          <a href="/scholarships"> Scholarship </a>
        </div>
      <h3 style={{textAlign: "center"}}>Scholarship List</h3>

      <div className='dis'>
      <div className='cardhead'>
        {scholarship.map(scholarship =>
        <div key={scholarship.id}>
            <div className='card'>
              <div className='titlet'>
                <h3>{scholarship.data.Title}</h3>
                <p><strong>Deadline </strong>{scholarship.data.Date}</p>
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
                <h5>Scholarship Can Be Taken At :</h5><p> {scholarship.data.Scholar}</p>
              </div>
              <div className='names'>
                <button className='btn'><a href={scholarship.data.Apply}>Apply</a></button>
              </div>
            </div>
          </div>)}
      </div>

      <div className="banklist">
          <div className="blk">
          <h3>Top Banks for Education Loan</h3>
          </div>
            <div className="name">
            <a href="/Education"><p>SBI Education Loan</p></a>
            <a href="/Education"><p>HDFC Education Loan</p></a>
            <a href="/Education"><p>Axis Bank Education Loan</p></a>
            <a href="/Education"><p>Bank of Baroda Education Loan</p></a>
            <a href="/Education"><p>Avanse Education Loan</p></a>
            <a href="/Education"><p>Canara Education Loan</p></a>
            <a href="/Education"><p>ICICI Bank Education Loan</p></a>
            <a href="/Education"><p>PNB Education Loan</p></a>
            <a href="/Education"><p>Indian Bank Education Loan</p></a>
            <a href="/Education"><p>Union Bank Education Loan</p></a>
            <a href="/Education"><p>Auxilo Education Loan</p></a>
            <a href="/Education"><p>Bank of Maharashtra</p></a>
            <a href="/Education"><p>Central Bank of India</p></a>
            <a href="/Education"><p>Federal Bank Education Loan</p></a>
            <a href="/Education"><p>IDFC First Bank Education Loan</p></a>
            <a href="/Education"><p>Incred Education Loan</p></a>
            <a href="/Education"><p>IDBI Bank Education Loan</p></a>
            <a href="/Education"><p>Indian Overseas Bank</p></a>
            <a href="/Education"><p>Kotak Mahindra Bank</p></a>
            <a href="/Education"><p>UCO Bank Education Loan</p></a>
            <a href="/Education"><p>Tata Capital Education Loan</p></a>
            <a href="/Education"><p>Saraswat Bank Education Loan</p></a>
            <a href="/Education"><p>Jammu and Kashmir Bank</p></a>
            <a href="/Education"><p>Karnataka Bank Education Loan</p></a>
            <a href="/Education"><p>Yes Bank Education Loan</p></a>
            <a href="/Education"><p>Induslnd Bank Education loan</p></a>
            <a href="/Education"><p>South Indian Bank</p></a>
            <a href="/Education"><p>Bandhan Bank Education Loan</p></a>
            <a href="/Education"><p>Punjab and Sind Bank</p></a>
            <a href="/Education"><p>Karur Vysya Bank</p></a>
            <a href="/Education"><p>City Union Bank</p></a>
            <a href="/Education"><p>RBL Bank Education Loan</p></a>
            <a href="/Education"><p>HSBC Bank Education Loan</p></a>
            <a href="/Education"><p>DBS Bank Education Loan</p></a>
            <a href="/Education"><p>DCB Bank Education Loan</p></a>
            <a href="/Education"><p>Dhanlaxmi Bank Education Loan</p></a>
            <a href="/Education"><p>Aditya Birla Finance</p></a>
            <a href="/Education"><p>Catholic Syrian Bank</p></a>
            <a href="/Education"><p>Tamilnad Mercantile Bank</p></a>
            <a href="/Education"><p>Nainital Bank Education Loan</p></a>
            </div>
      </div>
      </div>
    </div>

<Footer />
</>
  )
}
