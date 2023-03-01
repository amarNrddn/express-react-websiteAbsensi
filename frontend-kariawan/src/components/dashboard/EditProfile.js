import Navbar from "./Navbar";
import axios from "axios";
import './editprofile.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from 'react-icons/bi'

const EditProfile = () => {
    // const [nip, setNip] = useState('')
    const [nama, setNama] = useState(localStorage.getItem("nama"))
    const [password, setPassword] = useState('')
    const [passwordBaru, setPasswordBaru] = useState('')
    const [loadingUpdate, setLoadingUpdate] = useState(false)
    const naviGet = useNavigate()

    const hendeleUpdate = (event) => {
        event.preventDefault()
        setLoadingUpdate(true)

        const requestingData = {
            nip: localStorage.getItem('nip'),
            nama: nama,
            password: password,
            passwordBaru: passwordBaru
        }

        axios({
            method: "PUT",
            url: "http://localhost:3300/users",
            data: requestingData
        }).then(() => {
            setTimeout(() => {
                localStorage.clear()
                alert('silahkan login ulang')
                setLoadingUpdate(false)
                naviGet('/')
            }, 2000)
        })
    }

    const showPassword = () => {
        let password = document.getElementById("password")
        let hide1 = document.getElementById("hide1")
        let hide2 = document.getElementById("hide2")

        if (password.type === 'password') {
            password.type = 'text'
            hide1.style.display = 'block'
            hide2.style.display = 'none'
        } else {
            password.type = 'password'
            hide1.style.display = 'none'
            hide2.style.display = 'block'
        }
    }

    return (
        <di className='flex justify-between gap-[3.7rem] w-full pl-2'>
            <div className="">
                <Navbar />
            </div>
            <div className="w-full px-2 pt-2">
                <div className="bg-[#157ae1] px-[1rem] rounded-[8px] flex justify-between p-4 mb-[5rem] shadow-lg">
                    <h1 className=" font-bold text-[17px]">Edit Profil</h1>
                    <p className="pr-4">Hii {localStorage.getItem("nama")}</p>
                </div>

                <form className="w-[20rem] m-auto drop-shadow-lg " onSubmit={hendeleUpdate} >
                    <div className="mb-2">
                        <div className="">
                            <p className="mr-2">Nama</p>
                        </div>
                        <input type='text'
                            onChange={(event) => setNama(event.target.value)}
                            defaultValue={localStorage.getItem("nama")}
                            className='w-full outline-none border-2 rounded-[5px] '
                        />
                    </div>
                    <div className="mb-2">
                        <div className="">
                            <p className="mr-2">Password Lama</p>
                        </div>
                        <input type='text'
                            placeholder='masukan passwor lama'
                            required
                            onChange={(event) => setPassword(event.target.value)}
                            className='w-full outline-none border-2 rounded-[5px]'
                        />
                    </div>
                    <div className="mb-2">
                        <div className="">
                            <p className="mr-2">Paswword Baru</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <input type='text'
                                placeholder='masukan passwor baru'
                                required
                                id="password"
                                onChange={(event) => setPasswordBaru(event.target.value)}
                                className='w-full outline-none border-2 rounded-[5px]'
                            />
                            <div className="absolute flex pr-2 " onClick={showPassword}>
                                <p id="hide1" className="active"><BiShowAlt /></p>
                                <p id="hide2" className=""><BiHide /></p>
                            </div>
                        </div>
                    </div>
                    {loadingUpdate ? (
                        <button className="bg-sky-500 hover:bg-sky-700 w-full rounded-[10px] text-white">Succes</button>
                    ) : (
                        <button className="bg-sky-500 hover:bg-sky-700 w-full rounded-[10px] text-white">Update</button>
                    )}
                </form>

            </div>
        </di>
    )
}

export default EditProfile