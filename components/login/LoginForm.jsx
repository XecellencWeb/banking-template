import Image from "next/image";
import Link from "next/link";
import show_hide from "/public/images/icon/show-hide.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useRouter()

  return (
    <section className="sign-in-up login">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">The Power of Financial Freedom</h5>
                  <h2 className="title">Login In To Your Money Account</h2>
                  <p>
                    Your security is our top priority. You&#39;ll need this to
                    log into your bankio account
                  </p>
                </div>

                <form onSubmit={async(e)=>{
                  e.preventDefault()

                  try {
                    await signInWithEmailAndPassword(auth,email,password)
                    alert('Successfull login')
                    navigate.replace('/account')
                  } catch (error) {
                    alert(error.message)
                  }

                }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="email">Enter Your Email Address</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type={"email"}
                          id="email"
                          placeholder="Your email ID here"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input ">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div className="password-show d-flex align-items-center">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type={"password"}
                            className="passInput"
                            id="confirmPass"
                            placeholder="Enter Your Password"
                            required
                          />
                          <Image

                            onClick={()=>{
                              const input = document.querySelector('#confirmPass')
                              input.type === 'text'?input.type = 'password':input.type= 'text'
                            }}
                            className="showPass"
                            src={show_hide}
                            alt="icon"
                          />
                        </div>
                        <div className="forgot-area text-end">
                          <Link onClick={(e)=>{e.preventDefault()
                            alert('Tip: your password is your firstname+lastname+referralcode or 13. eg allen moris 2345. password allenmoris2345')
                          }} href="/#" className="forgot-password">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button className="cmn-btn">Login</button>
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

export default LoginForm;
