import React, { useContext, useState, useEffect } from 'react'
import authContext from '../../helpers/authContext'

const ForgetPassword = React.memo(function SignUp(props) {

    const context = useContext(authContext)

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (context.isAuthenticated) {
            console.log('LOggedIn')
            props.history.replace('/')
        }
    })

    const forgetpasswordvalidation = (form) => {

        var return_type = true;
        let email = form.elements['email'];

        var elems = document.querySelectorAll('.help-block');
        [].forEach.call(elems, function (el) {
            el.parentNode.classList.remove('error');
            el.parentNode.removeChild(el);
        });


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

        return return_type;
    }

    const doSubmit = (e) => {
        e.preventDefault();

        let form = document.forms["forgetpassword"];
        if (forgetpasswordvalidation(form)) {
            props.forgetpassword({ email }).then(res => {

                console.log('RESPONSE SUCCESS', res)
                if (res[0].code || res[0].message) {

                    console.log('Error')
                    let password = form.elements['email'];

                    password.parentNode.classList.add('error');
                    password.parentNode.insertAdjacentHTML('beforeend',
                        `<div class="help-block alert alert-danger">${res[0].message}</div>`
                    )
                }

            })
        }
    }

    return <>

        <div id="main">
            <div style={{ backgroundColor: '#000' }}>
                <div className="d-flex align-items-end login-sec vertical-form">
                    <a href="/" className="btn btn-block btn-lg mt-2 sign-back" type="submit"><img src="/images/back.svg" className="img-fluid" alt="" />Back</a>
                    <div className="sign-in-section">
                        <div className="inboard-info px-15">
                            <h3 className="text-white">Forget Password<br /></h3>
                            <p>Enter your email address to receive verification link</p>
                        </div>
                        <div className="sign-form">
                            <form className="px-15" name="forgetpassword" onSubmit={doSubmit}>
                                <section className="add-address pt-4">

                                    <div className="form-floating mb-3">
                                        <input type="text" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                </section>
                                {/* <a href="#" className="btn sign-in-btn mt-3" type="submit">Sign up</a> */}
                                <input type="submit" value="send" className='btn sign-in-btn mt-3 ' />
                                <span className="account-link d-block text-center">Have an account then? <a href="/login" className="underline">Sign in </a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
})

export default ForgetPassword