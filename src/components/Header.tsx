import { useRef } from "react";
import { Link, } from "react-router-dom";
import logo from "../assets/images/logo-circle.png";




const Header = () => {


    const headerRef = useRef<HTMLElement>(null);



    return (
        <>
            <header
                ref={headerRef}
                className={`sticky w-full top-0 z-50 shadow-lg transition-transform duration-300 ease-in-out `}
            >
                {/* Top Section - Logo and Institution Name */}
                <div className="bg-mpgin-darkBlue py-3 border-b ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center gap-4">
                            <Link to="/" className="flex items-center gap-4 ">
                                <img
                                    src={logo}
                                    alt="MPGIN Logo"
                                    className="h-20 w-20  hover:scale-105 transition-transform duration-200"
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                />
                                <h1 className="text-mpgin-blue font-bold text-lg md:text-4xl tracking-tight">
                                    Matoshri Pratishthan Group of Institutions, Nanded
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
