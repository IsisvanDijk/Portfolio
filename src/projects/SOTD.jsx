import { Link } from "react-router-dom";

const SOTD = () => {
    return (
        <div className="mt-4 mb-4 p-8 bg-[#f0f0f0] rounded-lg shadow-lg max-w-5xl mx-auto">
            <Link to="/"
                  className="bg-gradient-to-r from-[#022B54] to-[#003A66] hover:bg-[#003345] text-white p-2 rounded mb-6 inline-block">
                Portfolio
            </Link>

            <h2 className="text-3xl font-semibold mb-6 text-[#003366]">Station of the Dead</h2>

            <div className="mt-4 mb-6 flex justify-center">
                <video className="max-w-full h-auto rounded-lg shadow-md" controls>
                    <source src="./videos/SOTD-Trailer.mp4" type="video/mp4"/>
                    Je browser ondersteunt de video-tag niet.
                </video>
            </div>

            <p className="text-[#333333] text-lg leading-relaxed mb-6">
                Station of the Dead is een game die ik samen met drie andere teamleden heb ontwikkeld in Unreal Engine 5
                tijdens ons eerste studiejaar. De opdracht was om een game te creëren waarin we gebruik maakten van een
                specifieke locatie en soort gameplay. Wij kregen de combinatie van “killer” en “Rotterdam Centraal”
                toegewezen.
                <br/>
                Voor de game hebben we inspiratie gehaald uit populaire zombie-shooter games, met name Call of Duty
                Zombies.
                We besloten om een zombie survival-shooter te maken, waarin de speler zich bevindt op Rotterdam
                Centraal.
                De game speelt zich af in een apocalyptische setting, waarbij zombies in waves in het station
                verschijnen en
                de speler moet overleven.
            </p>

            <div className="mt-4">
                <a
                    href="https://github.com/StefanMuijs/Cle4_Game_Team19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003366] hover:text-[#001f33] transition-colors duration-300 font-semibold"
                    aria-label="GitHub - Station of the Dead"
                >
                    Bekijk de code op GitHub
                </a>
            </div>
            <div className="mt-4">
                <a
                    href="https://www.instagram.com/z_stationofthedead/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003366] hover:text-[#001f33] transition-colors duration-300 font-semibold"
                    aria-label="Instagram - Station of the dead"
                >
                    Bekijk de instagram!
                </a>
            </div>
        </div>
    );
};

export default SOTD;
