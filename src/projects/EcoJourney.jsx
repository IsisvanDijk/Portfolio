import { Link } from "react-router-dom";

const EcoJourney = () => {
    return (
        <div className="mt-4 mb-4 p-8 bg-[#f0f0f0] rounded-lg shadow-lg max-w-5xl mx-auto">
            <Link to="/"
                  className="bg-gradient-to-r from-[#022B54] to-[#003A66] hover:bg-[#003345] text-white p-2 rounded mb-6 inline-block">
                Portfolio
            </Link>

            <h2 className="text-3xl font-semibold mb-6 text-[#003366]">Eco Journey</h2>

            <div className="mt-4 mb-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
                <img src="./images/eco1.png" alt="EcoJourney screenshot 1" className="rounded-lg shadow-md w-auto h-80" />
                <img src="./images/eco2.png" alt="EcoJourney screenshot 2" className="rounded-lg shadow-md w-auto h-80" />
                <img src="./images/eco3.png" alt="EcoJourney screenshot 3" className="rounded-lg shadow-md w-auto h-80" />
                <img src="./images/eco4.png" alt="EcoJourney screenshot 4" className="rounded-lg shadow-md w-auto h-80" />
                <img src="./images/eco5.png" alt="EcoJourney screenshot 5" className="rounded-lg shadow-md w-auto h-80" />
            </div>

            <p className="text-[#333333] text-lg leading-relaxed mb-6">
                EcoJourney was het eerste project in het tweede jaar van mijn studie, waarin we met een team van vijf
                studenten werkten aan een thema rond ecologie en technologie. Het doel van EcoJourney was om een
                webapplicatie te creëren waarmee gebruikers hun ecologische voetafdruk konden tracken. Gebruikers kunnen
                barcodes van producten scannen, waarna de app gedetailleerde informatie geeft over de CO2-uitstoot die
                het product heeft veroorzaakt, van productie tot levering in de winkel. Het project was een combinatie
                van technologische ontwikkeling en ecologisch bewustzijn, waarbij we de programmeerkennis uit het eerste
                jaar toepasten.

                Helaas zijn we toendertijd vergeten een video te maken, en wegens een verlopen API-key heb ik alleen foto's van ons eindresultaat.
            </p>

            <div className="mt-4">
                <a
                    href="https://github.com/SEVerhaak/TLE-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003366] hover:text-[#001f33] transition-colors duration-300 font-semibold"
                    aria-label="GitHub - EcoJourney"
                >
                    Bekijk de code op GitHub
                </a>
            </div>
        </div>
    );
};

export default EcoJourney;