import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id="projects" className="p-8 bg-[#022B54] text-[#EAEAEA]">
            <h2 className="text-4xl font-serif mb-6">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Project 1: Station of the Dead */}
                <Link to="/StationOfTheDead"
                      className="bg-[#1A163D] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold mb-2">Station of the Dead</h3>
                    <img src="./images/SOTD-z.png" alt="Station of the Dead" className="mb-4 h-40 w-full object-cover"/>
                    <p className="text-sm">Station of the Dead is een game die is ontwikkeld in een team van 4 met Unreal Engine 5 tijdens mijn eerste studiejaar.</p>
                </Link>

                {/* Project 2: Eco Journey */}
                <Link to="/EcoJourney"
                      className="bg-gradient-to-r from-[#1A163D] to-[#001444] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold mb-2">Eco Journey</h3>
                    <div className="flex justify-center mb-4">
                        <img src="./images/EcoJourney.png" alt="Eco Journey" className="h-40 object-cover" />
                    </div>
                    <p className="text-sm">EcoJourney is ontwikkeld in een team van vijf, als onderdeel van een ecologisch-technologisch thema, waarbij we de programmeerkennis uit het eerste jaar toepasten.</p>
                </Link>


                {/* Project 3: SignTrail */}
                <Link to="/SignTrail"
                      className="bg-[#001444] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold mb-2">SignTrail</h3>
                    <img src="./images/SignTrail.png" alt="Sign Trail" className="mb-4 h-40 w-full object-cover"/>
                    <p className="text-sm">Deze gebaren game heb ik samen met mijn team gemaakt voor het keuzevak gebaren taal om het leren leuker en interactiever te maken.</p>
                </Link>

            </div>
        </section>
    );
};

export default Projects;
