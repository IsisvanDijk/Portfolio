import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {


    return (
        <nav className="bg-gradient-to-r from-[#022B54] to-[#003A66] text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" aria-label="Home">
                    <h1 className="text-white hover:text-[#DFA8B8] text-2xl font-serif">Isis van Dijk</h1>
                </Link>

                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">


                <HashLink smooth to="/#about" aria-label="Over mij"
                                  className="text-white hover:text-[#DFA8B8] focus:outline-none focus:ring-2 focus:ring-[#FFD89C] focus:ring-offset-2">
                            Over mij
                        </HashLink>

                        <HashLink smooth to="/#projects" aria-label="Portfolio"
                                  className="text-white hover:text-[#DFA8B8] focus:outline-none focus:ring-2 focus:ring-[#FFD89C] focus:ring-offset-2">
                            Portfolio
                        </HashLink>

                        <a
                            href="https://www.linkedin.com/in/isis-van-dijk-294900356"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#DFA8B8]"
                            aria-label="LinkedIn"
                        >
                            <img
                                src="/public/linkedin.png"
                                alt="LinkedIn"
                                className="w-6 h-6 rounded-full"
                            />
                        </a>
                    </div>
                </div>
        </nav>
);
};

export default NavBar;
