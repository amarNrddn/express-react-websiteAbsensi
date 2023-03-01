import Navbar from "./Navbar"
import axios from 'axios'
import { useState } from "react"

const Absensi = () => {
    const [absenNotife, setAbsenNotife] = useState(false)
    const [loading, setLoading] = useState(false)

    const absen = (params) => {
        setLoading(true)
        const requestingData = {
            nip: localStorage.getItem('nip')
        }
        axios({
            method: "POST",
            url: `http://localhost:3300/absensi/${params}`,
            data: requestingData
        }).then(() => {
            setTimeout(() => {
                setLoading(false)
                setAbsenNotife(!absenNotife)
                alert('absen succes✔')
            }, 1000)
        })
    }

    return (
        <div>
            <div className="">
                <Navbar />
            </div>
            <h1 className="text-center">Absensi</h1>
                {loading && <p className="text-center">Tunggu...</p>}
            <div className="flex justify-center gap-4">
                <button onClick={() => absen('checkin')} className="bg-indigo-500 w-[5rem] rounded-[10px]">Presen</button>
                <button onClick={() => absen('checkout')} className="bg-sky-500/100  w-[5rem] rounded-[10px]">Absen</button>
            </div>
        </div>
    )
}

export default Absensi