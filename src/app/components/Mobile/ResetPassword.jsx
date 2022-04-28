import React, { useContext, useState, useEffect } from 'react'
import authContext from '../../helpers/authContext'


const ResetPassword = React.memo(
    function ResetPassword(props) {

        const context = useContext(authContext)
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        console.log(props)

        useEffect(() => {
            if (context.isAuthenticated) {
                console.log('LOggedIn')
                props.history.replace('/')
            }
        })
        const resetpasswordvalidation = (form) => {
            let return_type = true;
            let password = form.elements['password'];
            let confirmpassword = form.elements['confirmpassword'];


            var elems = document.querySelectorAll('.help-block');
            [].forEach.call(elems, function (el) {
                el.parentNode.classList.remove('error');
                el.parentNode.removeChild(el);
            });


            if (password.value == '') {
                password.parentNode.classList.add('error');
                password.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Please enter password</div>'
                );
                return_type = false;
            }

            if (password.value != '' && password.value.length < 5) {
                password.parentNode.classList.add('error');
                password.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Please enter minimum 5 character long password.</div>'
                );
                return_type = false;
            }

            if (password.value != confirmpassword.value) {
                confirmpassword.parentNode.classList.add('error');
                confirmpassword.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Password and confirm password are not same.</div>'
                );
                return_type = false;
            }


            const doSubmit = (e) => {
                e.preventDefault();

                let form = document.forms['resetpassword'];

                if (resetpasswordvalidation(form)) {

                    props.resetpasswordverification({
                        token, password
                    }).then((res) => {
                        console.log('Response', res)


                    })

                }
            }
            return (
                <div id="main">
                    <div style={{ backgroundColor: '#000' }}>
                        <div className="d-flex align-items-end login-sec vertical-form">
                            <a href="/" className="btn btn-lg mt-2 sign-back" type="submit"><img src="images/back.svg" className="img-fluid" alt="" />Back</a>
                            <div className="sign-in-section">
                                <div className="inboard-info px-15">
                                    <h3 className="text-white">Change Password<br /> of your Hoppedin Account</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur ad piscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="sign-form">
                                    <form
                                        className="px-15"
                                        noValidate
                                        name='resetpassword'
                                        onSubmit={(e) => doSubmit(e)} >

                                        <section className="add-address pt-4">

                                            <div className="form-floating mb-3">
                                                <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <label htmlFor="floatingPassword">Password</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="password" name='confirmpassword' className="form-control" id="floatingPassword" placeholder="Re-Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                <label htmlFor="floatingPassword">Re-password</label>
                                            </div>

                                        </section>
                                        {/* <a href="#" className="btn sign-in-btn mt-5" type="submit">Sign In</a> */}
                                        <input type='submit' value='Sign In' className='btn sign-in-btn mt-5' />
                                        <span className="account-link d-block text-center">Don't have an account then? <a href="/signup" className="underline">Sign up </a></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
)

export default ResetPassword