import { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import axios from 'axios'

const DataKariawan = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3300/users"
        }).then((result) => {
            setDatas(result.data.data)
        })
    }, [])

    return (
        <div className='flex justify-between gap-[3.7rem] w-full pl-2'>
            <div className="">
                <Navbar />
            </div>

            <div className="w-full h-screen px-2 pt-2">
                <div className="bg-[#157ae1] px-[1rem] p-4 mb-[5rem] rounded-[8px] flex justify-between  shadow-lg">
                    <h1 className=' font-bold text-[17px]'>Daftar Kariawan</h1>
                    <p className='pr-4' >Hii {localStorage.getItem('nama')}</p>
                </div>

                <div className="flex justify-center">
                    <table className='w-[40rem]]'>
                        <thead className='border-2'>
                            <tr className='border-2 bg-gray-600 text-white  '>
                                <th className='w-[1rem] px-3 '>No</th>
                                <th className='w-[1rem] px-3'>NIP</th>
                                <th className='w-[10rem]'>Nama</th>
                                <th className='w-[10rem]'>Tanggal Daftar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, index) => {
                                return (
                                    <tr className='border-2 text-center' key={index} >
                                        <td>{index + 1}</td>
                                        <td>{data.nip}</td>
                                        <td>{data.nama}</td>
                                        <td>{new Date(data.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataKariawan