import "@fontsource/poppins/400.css";
import Footer from "./Footer";
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from "./firebase";

function Loan() {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile, setMobile] = useState('')
  const [Nationality, setNationality] = useState('')
  const [Address, setAddress] = useState('')
  const [Location, setLocation] = useState('')
  const [Amount, setAmount] = useState('')
  const [Aadhar, setAadhar] = useState('')
  const [Pan, setPan] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (Name === '' || Email === '' || Mobile === ''|| Nationality === ''|| Address === ''|| Location === '' || Amount === '' || Aadhar === '' || Pan === ''){
      return
    }
  const scholarCollRef = collection(db, 'LoanRequest')
  addDoc(scholarCollRef, {Name, Email, Mobile, Nationality, Address, Location, Amount, Aadhar, Pan})
  .then(response => {
    console.log(response)
    alert("Details Submitted Successfully ! Our Team will Contact You Soon")
  })
  .catch(error => {
    console.log(error.message)
  })
  }
  return (
    <>
      <div className="bode">
        <div className="link">
          <a href="/"> Home </a>
          <p>></p>
          <a href="/scholarships"> Scholarship </a>
          <p> > </p>
          <a href="/Education"> Education Loan</a>
        </div>

        <div className="edu">
          <div className="tag">
            <h1>Apply for a Education Loan</h1>
            <p>
              Learn all about the fundamentals of an education loan, the
              application process, the various types of education loans, and
              other essential details related to financing your studies.
            </p>
          </div>
          <div className="form">
          <form onSubmit={handleSubmit}>
                  <div className='scholar'>
                    <h4>Add Scholarship</h4>
                    <label>Enter Your Full Name *</label>
                    <input id='Name' type='Text' value={Name} placeholder="Your Full Name" required onChange={e => setName (e.target.value)} />
                    <label>Enter Your Email-id *</label>
                    <input id='Email' type='Text' value={Email} placeholder="Your Email-Id" required onChange={e => setEmail (e.target.value)} />
                    <label>Enter Your Phone No *</label>
                    <input id='Mobile' type='Text' value={Mobile} placeholder="Your Phone No" required onChange={e => setMobile (e.target.value)} />
                    <label>Enter Your Nationality/Country *</label>
                    <input id='Nationality' type='Text' value={Nationality} placeholder="Your Country/Nationality" required onChange={e => setNationality (e.target.value)} />
                    <label>Permanent Address (City/ District) *</label>
                    <input id='Address' type='Text' value={Address} placeholder="Permanent Address" required onChange={e => setAddress (e.target.value)} />
                    <label>Where are you planning to study ? *</label>
                    <input id='Location' type='Text' value={Location} placeholder="Where are you Planing to study" required onChange={e => setLocation (e.target.value)} />
                    <label>Required Loan Amount * </label>
                    <input id='Amount' type='Text' value={Amount} placeholder="Approx Required Amount" required onChange={e => setAmount (e.target.value)} />
                    <label>Enter Your Aadhar No</label>
                    <input id='Aadhar' type='Text' value={Aadhar} placeholder="Enter Your Aadhar No" onChange={e => setAadhar (e.target.value)} />
                    <label>Enter Your PAN Card No</label>
                    <input id='Pan' type='Text' value={Pan} placeholder="Enter Your PAN Card No" onChange={e => setPan (e.target.value)} />
                    <button className='button' type='submit'>Process</button>
                  </div>
                </form>
          </div>
        </div>
      </div>

      <div className="ques">
        <div className="ask">
          <h3>About Education Loan</h3>
          <div className="container">
            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>What Is An
                Education Loan?
              </h2>
              <div className="answe">
                <p>
                  An education loan is a type of loan specifically designed to
                  help students and their families pay for the cost of higher
                  education in India and Abroad. Multiple financial institutions
                  like Public sector banks, Private banks, and NBFCs offer
                  education loans to students.
                </p>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    It covers expenses such as tuition, fees, books, supplies,
                    and sometimes living expenses.
                  </p>
                </div>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    The general education loan process includes searching for a
                    lender, applying for an education loan, getting your loan
                    sanctioned, disbursement of the amount, and the repayment of
                    your education loan
                  </p>
                </div>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    A loan amount between 1 lac to 1.5 cr can be offered with
                    interest rates starting from 8.15% (latest ROI).
                  </p>
                </div>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    The repayment of education loans starts after the moratorium
                    period in all banks. A moratorium period of around 6 months
                    to 1 year is offered by banks on taking an education loan.{" "}
                  </p>
                </div>
                <h6>
                  Moratorium period = Course duration + 6 months/ 1 year (grace
                  period
                </h6>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Secured vs Unsecured Education Loans
              </h2>
              <div className="answe">
                <h3>1. Secured Education Loans</h3>
                <p>
                  A secured education loan requires the borrower (or their
                  family) to pledge an asset as collateral, such as property,
                  fixed deposits, or other valuable assets, to obtain the loan.
                  The lender can seize this asset if the borrower defaults on
                  the loan.
                </p>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    Collateral requirement: The borrower must offer an asset to
                    secure the loan.
                  </p>
                </div>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    This includes Lower interest rates, Larger loan amounts,
                    Longer repayment periods, Risk of asset seizure, etc.
                  </p>
                </div>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    Loan amount Up to 1 Cr for India & Up to 1.5 Cr for Abroad{" "}
                  </p>
                </div>
                <h3>2. Unsecured Education Loans</h3>
                <p>
                  An unsecured education loan does not require the borrower to
                  pledge any collateral. These loans are granted based on the
                  borrower’s or co-signer’s creditworthiness, income, and other
                  financial factors.
                </p>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    This includes No collateral required, Higher interest rates,
                    Smaller loan amounts, Credit-based approval, No risk to
                    assets, etc
                  </p>
                </div>
                <div className="ans">
                  <img className="img1" src="cir.png" alt=""></img>
                  <p>
                    Loan amount Up to 50 lacs for India & Up to 1 Cr for Abroad{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Top 4 Education Loan NBFCs in India
              </h2>
              <div className="answe">
                <div>
                  <h3>HDFC Credila:</h3>
                  <li>Up to 100% finance of i20 value</li>
                  <li>Option of 100% collateral-free student loan</li>
                  <li>Sanction before admission for i20</li>
                  <li>Doorstep service</li>
                </div>
                <div>
                  <h3>Avanse:</h3>
                  <li>100% education finance</li>
                  <li>There is no limit to the maximum amount</li>
                  <li>Sanction within 1 day after logging the file</li>
                  <li>Prefers meritorious students</li>
                  <li>Can disburse in 1 installment</li>
                  <li>Doorstep service</li>
                </div>
                <div>
                  <h3>Incred:</h3>
                  <li>Accepts multi-city co-signers</li>
                  <li>Can cover all the expenses of a student</li>
                  <li>All charges are included in InCred's origination fees</li>
                  <li>
                    Can provide pre-visa disbursal if the situation demands
                  </li>
                </div>
                <div>
                  <h3>Auxilo:</h3>
                  <li>1% processing fees</li>
                  <li>100% Finance</li>
                  <li>Pre-admission student loan</li>
                  <li>Pre-Visa study loan disbursement</li>
                  <li>Fast-track student loan</li>
                  <li>Competitive interest rates</li>
                </div>
                <h6>
                  Other NBFCs offering study loans are Aditya Birla Capital,
                  Tata Capital, Bajaj Finserv and more.
                </h6>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                How to Apply for an Education Loan Online?
              </h2>
              <div className="answe">
                <div className="bank">
                  <p>
                    Let’s go through the application process for an education
                    loan.
                  </p>
                  <h5>Online:-</h5>
                  <h6>
                    Follow the steps to start your study loan process online for
                    all Govt. banks, private banks, and NBFCs.
                  </h6>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      STEP 1: Fill out the Scholars Creators Student Loan Common
                      Application form or request a callback{" "}
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      STEP 2: You will receive a call from your financial
                      officer, to check your eligibility. Provide all the
                      required information.
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      STEP 3: Compare and choose your lender bank from all the
                      lender options as per your eligibility and education loan
                      policies.
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      STEP 4: Submit your documents in the bank as per the
                      documents checklist shared by your financial officer
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      STEP 5: After document submission, your file will be
                      logged in. You will receive a decision within 2-6 days for
                      Private banks like Axis, and ICICI and within 15-20 days
                      for Govt. banks.
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      STEP 6: After the sanction, you can sign the education
                      loan agreement and collect your sanction letter.
                    </p>
                  </div>
                  <h5>Offline:-</h5>
                  <p>
                    If you want to apply for an education loan offline, then you
                    can visit the nearest bank branch and speak to the bank
                    manager.
                  </p>
                </div>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Documents Needed to Apply for an Education Loan
              </h2>
              <div className="answe">
                <div className="bank">
                  <h5>Section 1: Study Loan Application form </h5>
                  <p>
                    Bank Application form with 2 passport-size photographs
                    (online copy generated by ScholarsCreators is acceptable)
                  </p>
                </div>
                <div className="bank">
                  <h5>
                    Section 2: Basic documents for Applicant (student) and
                    co-applicant and/or Guarantor
                  </h5>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      {" "}
                      Proof of identity –PAN Card (and Passport of the student
                      if going abroad)
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Proof of Residence – Voter ID Card/ Passport/ Electricity
                      Bill/ Telephone Bill/ Ration card/ Bank account statement/
                      Aadhar. (2 different proofs if current and permanent
                      residence are different)
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Bank account statement for the last 6 months (Personal/
                      Salary). For co-applicants, it should show the salary
                      credits if salaried or 1-year business transactions if
                      self-employed.
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Personal Asset & Liability Statement (assessed by the
                      branch professional)
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>All the documents should be self-attested.</p>
                  </div>
                </div>
                <div className="bank">
                  <h5>Section 3: Academic Documents for Applicant</h5>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Education mark sheets and certificates- 10th, 12th, Degree
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Proof of admission for the course (should be evidencing
                      total duration of the course)
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Fee structure</p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Entrance exam scorecard</p>
                  </div>
                </div>
                <div className="bank">
                  <h5>Section 4: Income Documents for Co-applicant</h5>
                  <h5>If Salaried</h5>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Latest Salary slips (for the last 3 months)</p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Form 16 of the last 2 years.</p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Employers ID card</p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>ITR of last 2 yrs</p>
                  </div>
                  <h5>If Self-employed</h5>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>ITR of last 3 yrs</p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Last 3 years' Balance sheet and Profit & Loss account
                      (only if self-employed)
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Proof of Business address</p>
                  </div>
                </div>
                <div className="bank">
                  <h5>Section 5: Additional docs (if applicable)</h5>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>Receipts of advance payments made if any.</p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      All loan account statements (1 year) if any pending loans.
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Letter explaining the gap if the students had a
                      failure/break in studies on Rs. 100 stamp paper. (Format
                      to be provided by WeMakeScholars Financial officer)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                How to Calculate EMI for Education Loans?
              </h2>
              <div className="answe">
                <h3>Calculate the EMI using the following formula:</h3>
                <p>EMI = [P x R x (1+R)N]/[(1+R)N-1]</p>
                <p>Where,</p>
                <li>P = Principal amount (loan amount)</li>
                <li>R = Rate of interest (monthly)</li>
                <li>N = Tenure (in months)</li>
                <li>Monthly interest rate = Annual interest rate / 12</li>
                <p>Monthly interest rate = 10.5 / 100/ 12 = 0.00875%</p>
                <p>
                  EMI = [15,00,000 x 0.00875% x
                  (1+0.00875%)36]/[(1+0.00875%)144-1]
                </p>
                <p>EMI = Rs. 18,362</p>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Education Loan Eligibility
              </h2>
              <div className="answe">
                <div>
                  <h3>Applicant:</h3>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      The applicant must be an Indian citizen residing in India
                      or NRI.
                    </p>
                  </div>
                  <div className="ans">
                    <img className="img1" src="cir.png" alt=""></img>
                    <p>
                      Overseas Citizens of India (OCI) and Persons of Indian
                      Origin (PIOs) are eligible for student loans to study in
                      India but not for overseas education.
                    </p>
                  </div>

                  <div>
                    <h3>Co-applicant:</h3>
                    <div className="ans">
                      <img className="img1" src="cir.png" alt=""></img>
                      <p>
                        The co-applicant must also be an Indian citizen residing
                        in India or NRI.
                      </p>
                    </div>
                    <div className="ans">
                      <img className="img1" src="cir.png" alt=""></img>
                      <p>
                        Overseas Citizens of India (OCI) and Persons of Indian
                        Origin (PIOs) are eligible for education loans to study
                        in India but not for overseas education.
                      </p>
                    </div>
                    <div className="ans">
                      <img className="img1" src="cir.png" alt=""></img>
                      <p>
                        Applicants must have any of their parents/
                        parent-in-law/ siblings/ spouse as their co-applicants
                        while applying for a student loan
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3>University and course:</h3>
                    <div className="ans">
                      <img className="img1" src="cir.png" alt=""></img>
                      <p>
                        The applicant should have an admission letter from a
                        recognized School abroad or in India.
                      </p>
                    </div>
                    <div className="ans">
                      <img className="img1" src="cir.png" alt=""></img>
                      <p>
                        The applicant must have opted for a full-time or
                        part-time UG/PG program.
                      </p>
                    </div>
                    <div className="ans">
                      <img className="img1" src="cir.png" alt=""></img>
                      <p>
                        An exceptional academic record is always beneficial for
                        the process.
                      </p>
                    </div>
                  </div>
                  <h6>
                    Note: However, the specific eligibility depends on your bank
                    and the scheme, under which you are taking the education
                    loan. There is always a possibility of deviation from the
                    usual process.
                  </h6>
                </div>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                CIBIL Score for An Education Loan
              </h2>
              <div className="answe">
                <h3>
                  Below are the minimum CIBIL scores accepted by Govt. Banks,
                  Pvt. Banks and NBFCs{" "}
                </h3>
                <li>State Bank of India (SBI): 591</li>
                <li>Other Govt. Banks: 685</li>
                <li>Pvt. banks/NBFCs: 685</li>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Education Loan Eligible Courses
              </h2>
              <div className="answe">
                <h5>
                  Here is the List of Course Eligible for an Education Loan:
                </h5>
                <div>
                  <h5>Graduation courses:</h5>
                  <li>BA</li>
                  <li>B.Com</li>
                  <li>B.Sc., etc</li>
                </div>

                <div>
                  <h5>Post Graduation courses:</h5>
                  <li>Msters</li>
                  <li>Ph.D.</li>
                </div>

                <div>
                  <h5>Professional courses:</h5>
                  <li>Engineering</li>
                  <li>Medical</li>
                  <li>Agriculture</li>
                  <li>Veterinary</li>
                  <li>Law</li>
                  <li>Dental</li>
                  <li>Management</li>
                  <li>Architecture</li>
                  <li>Computer, etc.</li>
                </div>

                <div>
                  <h5>Managementcourses:</h5>
                  <li>Hotel Mgt</li>
                  <li>Hospital Mgt</li>
                  <li>Event Mgt</li>
                  <li>Mass Communication, etc. </li>
                </div>

                <div>
                  <h5>Regular Degree / Diploma courses like:</h5>
                  <li>Aeronautical</li>
                  <li>Pilot training</li>
                  <li>Shipping etc.,</li>
                </div>

                <div>
                  <h5>For abroad studies:</h5>
                  <li>Regular Graduate Degree</li>
                  <li>Post-Graduate Degree</li>
                  <li>Diploma/Certificate</li>
                  <li>
                    Doctorate courses in any discipline offered by abroad
                    Institutes
                  </li>
                </div>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Education Loan Fees & Charges
              </h2>
              <div className="answe">
                <h5>
                  Here is a list of processing fees and other charges of Banks
                  and NBFCs:
                </h5>
                <li>Government Banks: Rs.10,000 + GST</li>
                <li>Private Banks: 1% of the loan amount + GST</li>
                <li>NBFCs: 0.75% to 1.5% of the loan amount + GST</li>
                <h6>
                  Note: Collateral Legal and Valuation charges between Rs. 7500
                  to Rs. 10,000. Only applicable to secured loans.
                </h6>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Features and Benefits of an Education Loan
              </h2>
              <div className="answe">
                <p>
                  A few features and benefits offered by education loans are
                  very low-interest rates, collateral-free loans, education
                  loans without an i20, pre-visa disbursement, and much more,
                  TCS on foreign remittance, and income tax deductions under
                  section 80E.{" "}
                </p>
              </div>
            </div>

            <div className="questio">
              <h2>
                <img className="img" src="arr.png" alt=""></img>
                Education Loan Subsidy Schemes
              </h2>
              <div className="answe">
                <div>
                  <h4>Central Scheme for Interest Subsidy (CSIS)</h4>
                  <p>
                    The scheme was announced by the MHRD, now the Ministry of
                    Education, to grant interest subsidies on study loans to
                    students belonging to the EWS section of society.{" "}
                  </p>
                  <h5>Eligibility criteria for CSIS </h5>
                  <li>
                    The annual family income of the student should not exceed Rs
                    4.5 lacs per annum.
                  </li>
                  <li>
                    Students should have mandatory proof of belonging from the
                    EWS section of society.
                  </li>
                  <li>
                    Students must secure admission in approved courses of study
                    in India only
                  </li>
                  <h6>
                    Benefit: Under the scheme, in the moratorium period,
                    eligible students need not pay any interest for their
                    student loans taken to study in India.
                  </h6>
                </div>
                <div>
                <h4>Padho Pardesh Scheme</h4>
                <p>The interest subsidy scheme was launched by the Ministry Of Minority Affairs, GOI to benefit meritorious study-abroad aspirants belonging to economically weaker sections of notified minority communities.</p>
                <h6>The interest subsidy scheme was launched by the Ministry Of Minority Affairs, GOI to benefit meritorious study-abroad aspirants belonging to economically weaker sections of notified minority communities.</h6>
                </div>
                <div>
                <h4>Dr. Ambedkar Interest Subsidy Scheme for OBC and EWS Students</h4>
                <p>The interest subsidy scheme was launched by the Ministry of Social Justice and Empowerment, for students belonging to OBC and EBC sections of the society, on the interest payable within the moratorium period. This scheme is for eligible abroad study aspirants.</p>
                <h6>Note: Dr. Ambedkar Interest Subsidy Scheme for OBC and EWS Students scheme has been discontinued from 2022-2023 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banklist">
          <div className="blk">
          <h3>Top Banks for Education Loan</h3>
          </div>
            <div className="name">
            <a href="/user/Education"><p>SBI Education Loan</p></a>
            <a href="/user/Education"><p>HDFC Education Loan</p></a>
            <a href="/user/Education"><p>Axis Bank Education Loan</p></a>
            <a href="/user/Education"><p>Bank of Baroda Education Loan</p></a>
            <a href="/user/Education"><p>Avanse Education Loan</p></a>
            <a href="/user/Education"><p>Canara Education Loan</p></a>
            <a href="/user/Education"><p>ICICI Bank Education Loan</p></a>
            <a href="/user/Education"><p>PNB Education Loan</p></a>
            <a href="/user/Education"><p>Indian Bank Education Loan</p></a>
            <a href="/user/Education"><p>Union Bank Education Loan</p></a>
            <a href="/user/Education"><p>Auxilo Education Loan</p></a>
            <a href="/user/Education"><p>Bank of Maharashtra</p></a>
            <a href="/user/Education"><p>Central Bank of India</p></a>
            <a href="/user/Education"><p>Federal Bank Education Loan</p></a>
            <a href="/user/Education"><p>IDFC First Bank Education Loan</p></a>
            <a href="/user/Education"><p>Incred Education Loan</p></a>
            <a href="/user/Education"><p>IDBI Bank Education Loan</p></a>
            <a href="/user/Education"><p>Indian Overseas Bank</p></a>
            <a href="/user/Education"><p>Kotak Mahindra Bank</p></a>
            <a href="/user/Education"><p>UCO Bank Education Loan</p></a>
            <a href="/user/Education"><p>Tata Capital Education Loan</p></a>
            <a href="/user/Education"><p>Saraswat Bank Education Loan</p></a>
            <a href="/user/Education"><p>Jammu and Kashmir Bank</p></a>
            <a href="/user/Education"><p>Karnataka Bank Education Loan</p></a>
            <a href="/user/Education"><p>Yes Bank Education Loan</p></a>
            <a href="/user/Education"><p>Induslnd Bank Education loan</p></a>
            <a href="/user/Education"><p>South Indian Bank</p></a>
            <a href="/user/Education"><p>Bandhan Bank Education Loan</p></a>
            <a href="/user/Education"><p>Punjab and Sind Bank</p></a>
            <a href="/user/Education"><p>Karur Vysya Bank</p></a>
            <a href="/user/Education"><p>City Union Bank</p></a>
            <a href="/user/Education"><p>RBL Bank Education Loan</p></a>
            <a href="/user/Education"><p>HSBC Bank Education Loan</p></a>
            <a href="/user/Education"><p>DBS Bank Education Loan</p></a>
            <a href="/user/Education"><p>DCB Bank Education Loan</p></a>
            <a href="/user/Education"><p>Dhanlaxmi Bank Education Loan</p></a>
            <a href="/user/Education"><p>Aditya Birla Finance</p></a>
            <a href="/user/Education"><p>Catholic Syrian Bank</p></a>
            <a href="/user/Education"><p>Tamilnad Mercantile Bank</p></a>
            <a href="/user/Education"><p>Nainital Bank Education Loan</p></a>
            <a href="/user/Education"><p></p></a>
            </div>
        </div>
      </div>

      <div className="details">
        <p>Education loan eligibility is something very important to check before you proceed in the abroad education loan process. But, before getting into the details, as you should know, an abroad education loan is simply a loan student takes to fund their education abroad in foreign universities. This education loan covers every expense from the student's tuition fees, living expenses to his travel, books, health insurance expenses etc.</p>
        <h6>How to check your Education loan eligibility</h6>
        <p>There are many banks that offer education loan for abroad studies. But understanding the education loan eligibility plays a crucial role in getting the best offer in the market. You can check your education loan eligibility here.</p>
        <p>There are 2 kinds of abroad education loans. The first one is collateral education loan and the second type is called non collateral education loan. As the word clearly implies, the one with collateral/ secured loan is wherein you have to pledge/ mortgage some collateral to the bank for securing a loan against it. While the non collateral education loans do not require you to have collateral, hence its called as unsecured education loans. The latter type is risky to the lender and hence many factors are taken into account before sanctioning the education loan. The most important ones are the student's academic profile, scores in tests like GRE/ IELTS/ TOEFL/ PTE/ GMAT, the co-applicant's salary and Income Tax Returns (ITR) details.</p>
        <p>As you might know, ScholarsCreators is an organisation supported by the IT Ministry, Govt of India. ScholarsCreators helps you to check your Education loan eligibility. With over 10 banks and NBFCs its the largest market place for study abroad eucation loans. You can discover the best lenders matching your profile and the required terms. Beyond checking the Education loan eligibility, ScholarsCreators' financial officer will assist you in securing the best education loan in the shortest possible time. All the documents required while applying for an education loan will be informed well inadvance. As this initiative is under the digital India campaign, it's at free of cost.</p>
      </div>


      <Footer />
    </>
  );
};

export default Loan;
