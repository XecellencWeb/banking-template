import BigBanner from "../common/BigBanner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { auth, db } from "../../firebase/config";
import { getDocs,collection,updateDoc,doc, where, query} from "firebase/firestore";
import { genWelcomeText } from "../../data/names";



const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North (North Korea)",
    "Korea, South (South Korea)",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];




const AddTransaction = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0008",
        backdropFilter: "blur(2rem)",
        display: "grid",
        placeContent: "center",
        zIndex: 100000
      }}
    >
      <div
        style={{
          padding: "2rem",
          background: "#fff",
          borderRadius: "1.5rem",
          maxWidth: "40rem",
          marginInline: "1.5rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Banner = () => {

  const [user,setUser] = useState()

  const [theresTransaction, setTheresTransaction] = useState(false);
  const [isWithdrawal, setIsWithdrawal] = useState(true);
  const [addAmount, setAddAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [countryName, setCountryName] = useState("");
  
  const navigate = useRouter();
  const search = useSearchParams()


  const getUser = async()=>{
   const sShot =  await getDocs(collection(db,'users'))

   sShot.forEach(s=>{
    if(s.data().email === auth.currentUser.email){
      setUser(s.data())
    }
   })
  }

  useEffect(()=>{
    getUser()
    const isError = search.get('transaction-status')

    if(isError === 'bank-error') return alert('An error occured while trying to process your transaction. Please contact support to add money to your account manually.')
      if(isError === 'successfull') return alert('The money as been sent to your account. Your will receive an alert notification very soon. \n if you encounter any error please contact support.')

    },[])

  return (
    <>
      {theresTransaction && (
        <AddTransaction>
          <div>
            {!isWithdrawal ? (
              <div>
                <div className="col-12">
                  <div className="single-input">
                    <label htmlFor="referral">Enter amount to add</label>
                    <input
                      value={addAmount}
                      onChange={(e) => setAddAmount(e.target.value)}
                      type="text"
                      id="add-amount"
                      placeholder="Amount to add here"
                      required
                    />
                  </div>
                </div>
                <div style={{height:'.5rem'}}/>
                <div className="btn-area">
                  <button
                    onClick={() => {
                      if (addAmount.length < 3)
                        return alert("You can only add from $100");

                      navigate.replace("/processing-transaction?add-money=true");
                    }}
                    type={"submit"}
                    className="cmn-btn"
                  >
                    Add Money
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="row">
                <div className="col-12">
                  <div className="single-input">
                    <label htmlFor="widthdraw-amount">Enter amount to widthdraw</label>
                    <input
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      type="text"
                      id="withdraw-amount"
                      placeholder="Amount to widthdraw here"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input">
                    <label htmlFor="account-name">Enter your account name</label>
                    <input
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      type="text"
                      id="withdraw-amount"
                      placeholder="Account name here"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input">
                    <label htmlFor="account-number">Enter your account number</label>
                    <input
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      type="text"
                      id="withdraw-amount"
                      placeholder="Account number here"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input">
                    <label htmlFor="bank-name">Enter your bank name</label>
                    <input
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      type="text"
                      id="withdraw-amount"
                      placeholder="Bank name here"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input">
                    <label htmlFor="referral">Select the country your bank is located</label>
                     <input type="list" list="countries" value={countryName} onChange={(e)=>setCountryName(e.target.value)}/>
                    <datalist id="countries">
                      {countries.map(a=><option value={a}>{a}</option>)}
                    </datalist>
                  </div>
                </div>
                </div>
                <div style={{height:'.5rem'}}/>
                <div className="btn-area">
                  <button
                    onClick={async() => {
                      if (isNaN(Number(withdrawAmount)))
                        return alert("You can only withdraw from $100");
                      if(!bankName || !accountName || !accountNumber || !countryName)return alert("All field must be provided")

                      if(!user?.canCashOut){
                        return alert(`
                         ${genWelcomeText(user?.firstname)}
                          `)
                      }
                        try{
                        let id;
                        const s = await getDocs(query(collection(db,'users'),where('email','==',user.email)))
                  
                        s.forEach(s=>id=s.id)
                        const updateRef = doc(db, "users", id);
                  
                        await updateDoc(updateRef, {
                          cash: Number(user.cash) - Number(withdrawAmount),
                        });

                        navigate.replace("/processing-transaction?withdraw=true");
                        
                      } catch (error) {
                        alert("An error occured while processing request");
                      }

                      
                    }}
                    type={"submit"}
                    className="cmn-btn"
                  >
                    Withdraw Money
                  </button>
                </div>
              </div>
            )}
          </div>
        </AddTransaction>
      )}
      <BigBanner cls="account">
        <div className="main-content banner-mar">
          <div className="section-text">
            <h5 className="sub-title">Howdy {user?.firstname}, your account balance</h5>
            <h2 className="title">${user?.cash}</h2>
            <p>
              Change the way you manage your money.We have a fine range of
              accounts to help you manage your finances seamlessly
            </p>
          </div>

          <div className="bottom-area">
            <button
              onClick={() => {
                setIsWithdrawal(false);
                setTheresTransaction(true);
              }}
              className="cmn-btn"
            >
              Add money
            </button>
            <button
              onClick={() => {
                setIsWithdrawal(true);
                setTheresTransaction(true);
              }}
              className="cmn-btn second"
            >
              Withdraw money
            </button>
          </div>
        </div>
      </BigBanner>
    </>
  );
};

export default Banner;
