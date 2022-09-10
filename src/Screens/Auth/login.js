import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import toast from "../../Components/common/toast"
import logoImg from '../../assets/img/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, changeLoginFailedStatus } from '../../actions/auth'

import './login.css'
import Loader from '../../Components/loader'
import { showLoaderAction } from '../../actions/loader'





const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)
    const is_authenticated = useSelector(state => state.auth.is_authenticated)
    const loginMessage = useSelector(state => state.auth.loginMessage)
    // console.log('yyyy',is_authenticated)


    const handleLogin = async () => {
        if (email == '' || password == '') {
            toast.error("Please enter a valid email address or password to proceed")
            return false;
        }
        dispatch(loginAction({ email, password }))
    }
    useEffect(() => {
        if (is_authenticated) {
            console.log('yyyy', is_authenticated)
            toast.success("Login Success")
            history.push('/dashboard')
        }
        if (loginMessage) {
            console.log(loginMessage)
            toast.error(loginMessage)
            let data = { data: { message: null } }
            dispatch(changeLoginFailedStatus(data))
        }
    }, [is_authenticated, loginMessage])


    return (
        <>
            <Loader />
            <div className="background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className=" form bg-white p-5 border rounded">
                                <div>
                                    <img
                                        src={logoImg}
                                        alt="logo"
                                        style={{ height: '100px', marginLeft: '10rem' }}
                                        className="img-fluid mt-3"
                                    />
                                    <h2 className=" text-center m-3 title" >Welcome to Kalea Archer</h2>
                                    <p style={{ marginBottom: '20px' }} className={'text-center'} >Sign in to Admin Console</p>
                                    <input className={"form-control"} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" style={{ marginBottom: 10 }} />
                                    <input className={"form-control"} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                    <label style={{ marginTop: '20px', marginBottom: '20px' }} onClick={() => history.push('/forget')}>Forgot your password?</label><br />
                                    <button type={"primary"} className="btn btn-block" onClick={() => handleLogin()} style={{ width: '100%', background: '#1890ff', color: '#fff' }}> Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )

}

export default Login