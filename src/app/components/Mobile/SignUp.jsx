import React, { useContext, useState, useEffect } from 'react'
import authContext from '../../helpers/authContext'

const SignUp = React.memo(function SignUp(props) {

    const context = useContext(authContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (context.isAuthenticated) {
            console.log('LOggedIn')
            props.history.replace('/')
        }
    })

    const signupvalidation = (form) => {

        var return_type = true;
        let email = form.elements['email'];
        let password = form.elements['password'];
        let confirmpassword = form.elements['confirmpassword'];
        let name = form.elements['name'];
        let mobile = form.elements['mobile'];

        var elems = document.querySelectorAll('.help-block');
        [].forEach.call(elems, function (el) {
            el.parentNode.classList.remove('error');
            el.parentNode.removeChild(el);
        });

        if (name.value == '') {
            name.parentNode.classList.add('error');
            name.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Name is required</div>'
            );
            return_type = false;
        } else {
            var testName = /^[a-zA-Z ]+$/;
            if (!testName.test(name.value)) {
                name.parentNode.classList.add('error');
                name.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Please enter a valid name</div>'
                );
                return_type = false;
            }
        }

        if (email) {
            if (email.value == '') {
                email.parentNode.classList.add('error');
                email.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger">Please enter a valid email address</div>'
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
        }

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

        if (mobile.value == '') {
            mobile.parentNode.classList.add('error');
            mobile.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Please enter mobile no</div>'
            );

            if (mobile.value)
                return_type = false;
        }

        return return_type;
    }


    const doSubmit = (e) => {
        e.preventDefault();

        let form = document.forms["signup"];

        if (signupvalidation(form)) {
            let fullName = name;
            var firstName = fullName.split(' ').slice(0, -1).join(' ');
            var lastName = fullName.split(' ').slice(-1).join(' ');
            if (firstName == '') {
                firstName = lastName;
                lastName = '';
            }

            props.login({
                email,
                password,
                firstName,
                lastName,
                phone
            }).then((res) => {
                console.log('RES', res)

                //user already registered
                if (res[0].registration == false) {

                    Util.setCookie('hoppedin_token', res[0].token, 7);
                    Util.setCookie('userData', res[0].user, 7);
                    context.setAuthState(true)
                }


                if (res[0].registration == true) {
                    let token = res[0].token
                    props.signup({
                        email,
                        password,
                        firstName,
                        lastName,
                        phone,
                        token
                    }).then((res) => {
                        console.log('Resgistration result', res)
                        context.doLogin({
                            email,
                            password
                        })
                    })
                }
            })

        }
    }


    return (

        <div id="main">
            <div style={{ backgroundColor: '#000' }}>
                <div className="d-flex align-items-end login-sec vertical-form">
                    <a href="/" className="btn btn-block btn-lg mt-2 sign-back" type="submit"><img src="/images/back.svg" className="img-fluid" alt="" />Back</a>
                    <div className="sign-in-section">
                        <div className="inboard-info px-15">
                            <h3 className="text-white">Create your account <br />on Hoppedin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur ad piscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="sign-form">
                            <form className="px-15" name="signup" onSubmit={doSubmit}>
                                <section className="add-address pt-4">
                                    <div className="form-floating mb-3">
                                        <input type="text" name="name" className="form-control" id="floatingInput" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" name='mobile' className="form-control" id="floatingInput" placeholder="mobile-no" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        <label htmlFor="floatingPassword">Mobile No.</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" name='confirmpassword' className="form-control" id="floatingPassword" placeholder="Re-Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        <label htmlFor="floatingPassword">Re-password</label>
                                    </div>
                                </section>
                                {/* <a href="#" className="btn sign-in-btn mt-3" type="submit">Sign up</a> */}
                                <input type="submit" value="Sign up" className='btn sign-in-btn mt-3 ' />
                                <span className="account-link d-block text-center">Have an account then? <a href="/login" className="underline">Sign in </a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
})

export default SignUp