import './register.css'
import axios from 'axios'
import { BiShowAlt } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'

const Register = () => {
    const [createNama, setCreateNama] = useState('')
    const [createNip, setCreateNip] = useState('')
    const [createPaaword, setCreatePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const hendeleRegister = (event) => {
        event.preventDefault()

        setLoading(true)
        const requestingData = {
            nama: createNama,
            nip: createNip,
            password: createPaaword
        }
        axios({
            method: "POST",
            url: "http://localhost:3300/users",
            data: requestingData
        }).then((result) => {
            setTimeout(() => {
                localStorage.setItem("nama", result.data.nama)
                setLoading(false)
                navigate('../Home')
            }, 1000)
        }).catch(() => {
            alert('nip sudah ada')
        })
    }

    function showPassword() {
        let password = document.getElementById('password')
        let hide1 = document.getElementById('hide1')
        let hide2 = document.getElementById('hide2')

        if (password.type === 'password') {
            password.type = 'text'
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
                    <h2 className='judul'>Register</h2>
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
                    <form onSubmit={hendeleRegister} className='login-form'>
                        <div className='text-box'>
                            <input type='number' placeholder="NIP" required onChange={(event) => setCreateNip(event.target.value)} />
                        </div>
                        <div className="text-box">
                            <input type='text' placeholder='Nama' required onChange={(event) => setCreateNama(event.target.value)} />
                        </div>
                        <div className="text-box">
                            <input type='password' placeholder='Password' id='password' onChange={(event) => setCreatePassword(event.target.value)} />
                            <span onClick={showPassword} className='material-symbols-outlined flex w-[90%] justify-end  '>
                                <p id='hide2' className='active'><BiShowAlt /></p>
                                <p id='hide1' className=''><BiHide /></p>
                            </span>
                            <span className="flex pl-2">
                                <RiLockPasswordLine className='' />
                            </span>
                        </div>
                        <button >Register</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register