import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc,collection } from "firebase/firestore";
import { auth } from "../../firebase/config";
import { db } from "../../firebase/config";

const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const navigate = useRouter()

  return (
    <section className="sign-in-up register">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">The Power of Financial Freedom</h5>
                  <h2 className="title">Let’s Get Started!</h2>
                  <p>
                    Please Enter your Email Address to Start your Online
                    Application
                  </p>
                </div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    if (!firstname || !lastname || !email || !phone)
                      return alert(
                        "All fields must be provided. Please provide all fields"
                      );

                    try {
                      await createUserWithEmailAndPassword(
                        auth,
                        email,
                        firstname + lastname + (referralCode || '13') 
                      );
                      await addDoc(collection(db, "users"), {
                        firstname,
                        lastname,
                        email,
                        referralCode,
                        cash:1000,
                        phone,
                        canCashOut: false
                      });

                      alert(
                        `You registration was successful. Your account password is ${
                          firstname + lastname + referralCode
                        } and your account number is ${phone}. Please store password and account no very well very well.`
                      );

                      navigate.replace('/account')
                    } catch (error) {
                      alert(error.message);
                    }
                  }}
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="fname">First Name</label>
                        <input
                          onChange={(e) => setFirstname(e.target.value)}
                          type="text"
                          id="fname"
                          placeholder="Jone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          onChange={(e) => setLastname(e.target.value)}
                          type="text"
                          id="lname"
                          placeholder="Fisher"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="email">Enter Your Email Address</label>
                        <input
                          onChange={(e)=>setEmail(e.target.value)}
                          type="email"
                          id="email"
                          placeholder="Your email address here"
                          required
                        />
                      </div>
                    </div>
                     <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="email">Enter Your Phone Number</label>
                        <input
                          onChange={(e)=>setPhone(e.target.value)}
                          type="number"
                          id="email"
                          placeholder="Your phone number here"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="referral">
                          Someone invited you over?
                        </label>
                        <input
                         onChange={(e)=>setReferralCode(e.target.value)}
                          type="text"
                          id="referral"
                          placeholder="Enter the referral code"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input">
                        <p>
                          By clicking submit, you agree to{" "}
                          <Link href="/terms-condition">
                            <span>
                              United Trust&#39;s Terms of Use, Privacy Policy, E-sign
                            </span>
                          </Link>{" "}
                          &{" "}
                          <Link href="/">
                            <span>communication Authorization.</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button type={"submit"} className="cmn-btn">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
