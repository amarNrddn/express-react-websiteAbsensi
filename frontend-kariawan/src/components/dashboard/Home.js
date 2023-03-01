import Navbar from "./Navbar"
import { AiOutlineUser } from 'react-icons/ai'
import { HiDatabase } from 'react-icons/hi'
import { FaToolbox } from 'react-icons/fa'
import { AiFillFileText } from 'react-icons/ai'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex justify-between gap-[3.7rem] w-full pl-2">
            <div className="">
                <Navbar />
            </div>
            <div className="w-full h-screen px-2 pt-2">
                <div className="bg-[#157ae1] px-[1rem] rounded-[8px] flex justify-between p-4 mb-[5rem] shadow-lg">
                    <h1 className=" font-bold text-[17px]">Dashboard</h1>
                    <p className="pr-4">Hii {localStorage.getItem("nama")}</p>
                </div>
                <div className="mb-[5rem] px-[1.8rem]">
                    <h1 className="text-center text-[18px] font-bold mb-[1rem]">Selamat Datang di Wbsite e-Absensi</h1>
                    <p className="indent-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam blanditiis expedita tempora ratione aliquid debitis accusamus maxime aliquam cum reiciendis deleniti iure, praesentium, harum vero ipsum, necessitatibus voluptatem reprehenderit quasi consequuntur? Deleniti cumque natus recusandae dolore veritatis voluptate quia incidunt porro rem doloribus tenetur quos, vel voluptatibus labore. In..</p>
                </div>
                <div className="px-[3rem] flex justify-between">
                    <Link to='/adminactive'>
                        <div className="flex items-center bg-[#fff] shadow-xl w-[14rem] rounded-[8px]">
                            <div className="bg-[#157ae1] w-[5rem] h-[5rem] flex rounded-[8px]">
                                <AiOutlineUser className="text-center text-[4rem] m-auto " />
                            </div>
                            <div className="m-auto">
                                <h1>Admin Active</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to='/datakariawan'>
                        <div className="flex items-center bg-[#fff] shadow-xl w-[14rem] rounded-[8px]">
                            <div className="bg-[#dd4b39] w-[5rem] h-[5rem] flex rounded-[8px]">
                                <HiDatabase className="text-center text-[4rem] m-auto " />
                            </div>
                            <div className="m-auto">
                                <h1>Data Kariawan</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to='/datajabatan'>
                        <div className="flex items-center bg-[#fff] shadow-xl w-[14rem] rounded-[8px]">
                            <div className="bg-[#00a65a] w-[5rem] h-[5rem] flex rounded-[8px]">
                                <FaToolbox className="text-center text-[4rem] m-auto " />
                            </div>
                            <div className="m-auto">
                                <h1>Data Jabatan</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to='/dataabsensi'>
                        <div className="flex items-center bg-[#fff] shadow-xl w-[14rem] rounded-[8px]">
                            <div className="bg-[#f39c12] w-[5rem] h-[5rem] flex rounded-[8px]">
                                <AiFillFileText className="text-center text-[4rem] m-auto " />
                            </div>
                            <div className="m-auto">
                                <h1>Data Absensi</h1>
                                <h3>5</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home