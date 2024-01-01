import Logo from "./Logo";

const Header = () => {
    return (
        <div>
            <div className="py-6 md:px-0 px-3">
                <div className="container mx-auto">
                    <div className="flex justify-between  items-center ">
                        <a href="/">
                            <Logo></Logo>
                        </a>
                        <button className="btn btn-sm btn-success rounded-full">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;