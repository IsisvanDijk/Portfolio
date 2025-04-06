const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#022B54] to-[#003A66] text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2025 Isis van Dijk</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a
                        href="https://www.linkedin.com/in/isis-van-dijk-294900356"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFFFFF] hover:text-[#DFA8B8] transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/IsisvanDijk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFFFFF] hover:text-[#DFA8B8] transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
