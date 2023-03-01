import { RiLockPasswordLine } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BiShowAlt } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'
import './login.css'
import axios from 'axios'

const Login = () => {
    const [inputNip, setInputNip] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const hendeleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const requestingData = {
            nip: inputNip,
            password: inputPassword
        }

        axios({
            method: "POST",
            url: "http://localhost:3300/users/login",
            data: requestingData
        }).then((result) => {
            setTimeout(() => {
                localStorage.setItem("nip", result.data.users.nip)
                localStorage.setItem("nama", result.data.users.nama)
                // alert('succes✔')
                setLoading(true)
                navigate('../Home')
                setLoading(false)
            }, 1000)
        })
    }

    const showPassword = () => {
        var password = document.getElementById('password')
        var hide1 = document.getElementById('hide1')
        var hide2 = document.getElementById('hide2')

        if (password.type === "password") {
            password.type = "text"
            hide1.style.display = 'none'
            hide2.style.display = 'block'
        } else {
            password.type = 'password'
            hide1.style.display = 'block'
            hide2.style.display = 'none'
        }

    }

    return (
        <main>
            <div className='bg-login'>
                <div className='login'>
                    <h2 className='judul'>App Kariawan</h2>
                    {loading &&
                        <div className='flex justify-center'>
                            <Puff
                                height="80"
                                width="80"
                                radius={1}
                                color="#4fa94d"
                                ariaLabel="puff-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    }
                    <form onSubmit={hendeleSubmit} className='login-form'>
                        <div className='text-box'>
                            <input type='number'
                                placeholder="Masukan NIP"
                                required
                                onChange={(event) => setInputNip(event.target.value)}
                            />
                            <span className='material-symbols-outlined'>
                                <BiUserCircle />
                            </span>
                        </div>
                        <div className="text-box flex items-center">
                            <input type='password'
                                placeholder='Masukan Password'
                                required
                                id='password'
                                onChange={(event) => setInputPassword(event.target.value)}
                            />
                            <span onClick={showPassword} className='material-symbols-outlined flex w-[90%] justify-end '>
                                <p id='hide2' className='active' ><BiShowAlt /></p>
                                <p id='hide1' ><BiHide /></p>
                            </span>
                            <span className="flex">
                                <RiLockPasswordLine className='ml-[]' />
                            </span>
                        </div>
                        <button type='submit' >Login</button>
                        <Link to='/register' className='button'>
                            <button className='text-white' >Register</button>
                        </Link>
                    </form>
                </div>
            </div>
        </main >
    )
}

export default Login