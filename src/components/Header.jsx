const Header = () => {
    return (
        <header
            className="relative flex flex-col md:flex-row items-center justify-between min-h-screen sm:min-h-[120vh] p-8 bg-gradient-to-r from-[#022B54] to-[#DFA8B8] border-b-2 border-white">
            {/* Designer Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-24 sm:mb-28 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#EAEAEA] mb-4 drop-shadow-lg">
                    Designer
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#FFD89C] max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
                    Creatief met technologie, passie voor front-end design.
                </p>
            </div>

            {/* Coder Section */}
            <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end mb-24 sm:mb-28 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#EAEAEA] mb-4 drop-shadow-lg">
                    &lt;Coder&gt;
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#FFD89C] max-w-xs sm:max-w-sm md:max-w-md">
                    Mijn code zorgt voor gebruiksvriendelijke en toegankelijke oplossingen.
                </p>
            </div>

            {/* Floating Tech Labels (Adjusted for Small Screens) */}
            <p className="absolute top-[10%] left-[5%] sm:top-[12%] sm:left-[8%] md:top-32 md:left-[20%] text-[#FFD89C] font-medium text-xs sm:text-sm md:text-xl animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                HTML
            </p>
            <p className="absolute top-[22%] left-[18%] sm:top-[25%] sm:left-[20%] md:top-44 md:left-[28%] text-[#DFA8B8] font-medium text-xs sm:text-sm md:text-xl animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                CSS
            </p>
            <p className="absolute top-[30%] right-[18%] sm:top-[32%] sm:right-[20%] md:top-56 md:right-[30%] text-[#FFD89C] font-medium text-xs sm:text-sm md:text-xl animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                JavaScript
            </p>
            <p className="absolute top-[38%] right-[10%] sm:top-[40%] sm:right-[12%] md:top-72 md:right-[20%] text-[#003A66] font-medium text-xs sm:text-sm md:text-xl animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                PHP
            </p>

            {/* Lower Positioned Tech Labels */}
            <p className="absolute bottom-[30%] left-[10%] sm:bottom-[26%] sm:left-[12%] md:bottom-32 md:left-[26%] text-[#FFD89C] font-medium text-xs sm:text-sm md:text-lg animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                React
            </p>
            <p className="absolute bottom-[14%] left-[22%] sm:bottom-[10%] sm:left-[24%] md:bottom-24 md:left-[36%] text-[#DFA8B8] font-medium text-xs sm:text-sm md:text-lg animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                Laravel
            </p>
            <p className="absolute bottom-[8%] right-[22%] sm:bottom-[5%] sm:right-[24%] md:bottom-16 md:right-[36%] text-[#FFD89C] font-medium text-xs sm:text-sm md:text-lg animate-fade opacity-80 hover:scale-110 transition-all duration-300">
                Unreal Engine 5
            </p>
        </header>
    );
};

export default Header;
