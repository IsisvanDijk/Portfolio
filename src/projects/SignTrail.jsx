import { Link } from "react-router-dom";

const SignTrail = () => {
    return (
        <div className="mt-4 mb-4 p-8 bg-[#f0f0f0] rounded-lg shadow-lg max-w-5xl mx-auto">
            <Link to="/" className="bg-gradient-to-r from-[#022B54] to-[#003A66] hover:bg-[#003345] text-white p-2 rounded mb-6 inline-block">
                Portfolio
            </Link>

            <h2 className="text-3xl font-semibold mb-6 text-[#003366]">SignTrail</h2>

            <div className="mt-4 mb-6 flex justify-center">
                <video className="max-w-full h-auto rounded-lg shadow-md" controls>
                    <source src="./videos/SignTrail.mp4" type="video/mp4" />
                    Je browser ondersteunt de video-tag niet.
                </video>
            </div>

            <p className="text-[#333333] text-lg leading-relaxed mb-6">
                SignTrail is een educatieve game die we hebben ontwikkeld voor het keuzevak Gebarentaal. Het doel was om
                het leren van gebaren interactiever en leuker te maken. Daardoor heeft mijn team de keuze gemaakt een
                spel te maken. In het spel volgen spelers een pad en leren ze
                verschillende gebaren die ze moeten uitvoeren om verder te komen. Dit project heeft kunnen laten zien dat
                gamificatie van educatie zeker een goede optie kan zijn, zo kunnen veel mensen uit ons backend team nu vinger
                spellen sinds zij zelf het model hebben getraind. </p>

            <div className="mt-4">
                <a
                    href="https://github.com/Mathijs-04/TLE2-Front-End"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003366] hover:text-[#001f33] transition-colors duration-300 font-semibold"
                    aria-label="GitHub - SignTrail"
                >
                    Bekijk de code op GitHub
                </a>
            </div>
        </div>
    );
};

export default SignTrail;
