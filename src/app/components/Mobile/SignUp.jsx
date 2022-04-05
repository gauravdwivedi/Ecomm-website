import React from 'react'

function SignUp() {
    return (
        <div id="main">
            <div style={{ backgroundColor: '#000' }}>
                <div className="d-flex align-items-end login-sec vertical-form">
                    <a href="#" className="btn btn-block btn-lg mt-2 sign-back" type="submit"><img src="images/back.svg" className="img-fluid" alt="" />Back</a>
                    <div className="sign-in-section">
                        <div className="inboard-info px-15">
                            <h3 className="text-white">Create your account <br />on Hoppedin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur ad piscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="sign-form">
                            <form className="px-15">
                                <section className="add-address pt-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="name" />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="mobile-no" />
                                        <label htmlFor="floatingPassword">Mobile No.</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="repassword" className="form-control" id="floatingPassword" placeholder="Re-Password" />
                                        <label htmlFor="floatingPassword">Re-password</label>
                                    </div>
                                </section>
                                <a href="#" className="btn sign-in-btn mt-3" type="submit">Sign up</a>
                                <span className="account-link d-block text-center">Don’t have an account then? <a href="#" className="underline">Sign in </a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp