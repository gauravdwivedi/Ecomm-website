import React, { useContext, useState, useEffect } from 'react'
import authContext from '../../helpers/authContext'


const SignIn = React.memo(
    function SignIn(props) {

        const context = useContext(authContext)
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        console.log(props)

        useEffect(() => {
            if (context.isAuthenticated) {
                console.log('LOggedIn')
                props.history.replace('/')
            }
        })

        // useEffect(() => {
        //     console.log(props.auth.login)
        // }, [props.auth.login])



        //Form Validation 
        const loginvalidation = (form) => {
            let return_type = true;
            let password = form.elements['password'];
            let email = form.elements['email'];

            var elems = document.querySelectorAll('.help-block');
            [].forEach.call(elems, function (el) {
                el.parentNode.classList.remove('error');
                el.parentNode.removeChild(el);
            });

            //If email input is empty
            if (email.value == '') {
                email.parentNode.classList.add('error');
                email.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Please enter email address</div>'
                );

                return_type = false;
            } else {
                var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                if (!testEmail.test(email.value)) {
                    email.parentNode.classList.add('error');
                    email.parentNode.insertAdjacentHTML(
                        'beforeend',
                        '<div class="help-block alert alert-danger">Please enter a valid email address</div>'
                    );
                    return_type = false;
                }
            }

            //If password is empty
            if (password.value == '') {
                password.parentNode.classList.add('error');
                password.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Please enter password</div>'
                )
                return_type = false;
            } else if (password.value != '' && password.value.length < 5) {
                password.parentNode.classList.add('error');
                password.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Password should be of atleast 6 digits</div>'
                );
                return_type = false;
            }

            return return_type;
        }

        // const doSubmit = (event) => {
        //     event.preventDefault();
        //     let form = document.forms['login'];
        //     if (loginvalidation(form)) {
        //         context.doLogin({
        //             email,
        //             password
        //         })
        //     }
        // }


        const doSubmit = (e) => {
            e.preventDefault();

            let form = document.forms['login'];

            if (loginvalidation(form)) {
                console.log('Login')
                props.login({
                    email, password
                }).then((res) => {
                    console.log('Response', res[0])

                    if (res[0].registration == false) {
                        Util.setCookie('hoppedin_token', res[0].token, 7);
                        Util.setCookie('userData', res[0].user, 7);
                        context.setAuthState(true)
                    }

                    if (res[0].code || res[0].message == 'Not Found') {

                        console.log('Error')
                        let password = form.elements['password'];

                        password.parentNode.classList.add('error');
                        password.parentNode.insertAdjacentHTML('beforeend',
                            '<div class="help-block alert alert-danger">Email or Password is incorrect!</div>'
                        )
                    }
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
                                <h3 className="text-white">Log into with<br /> your Hoppedin Account</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur ad piscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <div className="sign-form">
                                <form
                                    className="px-15"
                                    noValidate
                                    name='login'
                                    onSubmit={(e) => doSubmit(e)} >

                                    <section className="add-address pt-4">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                            <label htmlFor="floatingInput">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <a href="/forgetpassword" className="forgot mb-3">Forgot Password ?</a>
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



)
export default SignIn