import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div>

            <nav className="fixed lg:flex hidden items-center justify-start left-4 top-8 h-full overflow-hidden z-50">
                <div className="container mx-auto">
                    <div className="max-h-[400px] h-full bg-black/20 w-[60px] backdrop-blur-2xl flex flex-col items-center  justify-between gap-y-6 rounded-xl  py-8 ">
                        <Link
                            to="home"
                            activeClass="active"
                            smooth="true"
                            spy={true}
                            className="flex items-center justify-center w-[60px] h-[60px]"
                        ><IoMdHome className="cursor-pointer text-xl text-white"></IoMdHome>
                        </Link>

                        <Link
                            to="user"
                            activeClass="active"
                            smooth="true"
                            spy={true}
                            className="flex items-center justify-center w-[60px] h-[60px]"
                        ><FaRegUser className="cursor-pointer text-xl text-white"></FaRegUser>
                        </Link>

                        <Link
                            activeClass="active"
                            smooth="true"
                            spy={true}
                            className="flex items-center justify-center w-[60px] h-[60px]"
                        ><IoIosMail className="cursor-pointer text-xl text-white"></IoIosMail>
                        </Link>
                        <Link
                            activeClass="active"
                            smooth="true"
                            spy={true}
                            className="flex items-center justify-center w-[60px] h-[60px]"
                        ><BiCommentDetail className="cursor-pointer text-xl text-white"></BiCommentDetail>
                        </Link>
                        <Link
                            activeClass="active"
                            smooth="true"
                            spy={true}
                            className="flex items-center justify-center w-[60px] h-[60px]"
                        ><MdWorkOutline className="cursor-pointer text-xl text-white"></MdWorkOutline>
                        </Link>
                    </div>
                </div>

            </nav>

        </div>
    );
};

export default Navbar;