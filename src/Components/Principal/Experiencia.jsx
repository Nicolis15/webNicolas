import imgAXA from '../../Assets/imgAxa.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Experiencia() {
    const [t] = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="mb-10">
            <h1 className="font-code-bold text-secundary-blue text-2xl md:text-3xl text-center">
                {t("experiencia_new.titulo")}
            </h1>


            <div className="relative  justify-center flex gap-6 mb-16">

                {/* Date */}
                <div className="w-40 text-right">
                    <span className="font-code text-sm text-gray-500">
                        ene. 2025 – jun. 2025
                    </span>
                </div>

                {/* Line + dot */}
                <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    <div className="w-0.5 h-full bg-secundary-blue/30 mt-1" />
                </div>

                {/* Content */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-6 w-full max-w-3xl">
                    <h3 className="font-code-bold text-lg">
                        Practicante ingeniero de datos
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                        AXA Colpatria
                    </p>

                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Developed and maintained ELT pipelines using Python and SQL Server.</li>
                        <li>Automated data quality and validation processes.</li>
                        <li>Built Power BI dashboards to support business decision-making.</li>
                    </ul>
                </div>

            </div>



        </section>
    );
}

