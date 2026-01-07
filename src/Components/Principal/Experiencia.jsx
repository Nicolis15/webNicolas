import { useTranslation } from 'react-i18next';

export default function Experiencia() {
    const [t] = useTranslation();


    return (
        <section className="mb-10 w-full">
            <h1 className="font-code-bold text-secundary-blue text-2xl md:text-3xl text-center">{t("experiencia_new.titulo")}</h1>

            {/* CONTENEDOR TIMELINE */}
            <div className="relative mt-16 max-w-8xl mx-auto">

                {/* LÍNEA CENTRAL */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secundary-blue/30 -translate-x-1/2" />

                {/* ========= EXPERIENCIA IZQUIERDA ========= */}
                <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start mb-16">

                    {/* CARD IZQUIERDA */}
                    <div className="flex justify-end">
                        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-6 w-full ml-5 max-w-4xl">
                            <h3 className="font-code-bold md:text-lg text-md ">{t("experiencia_new.experiencia3.cargo")}</h3>
                            <p className="text-sm text-gray-600 mb-3">{t("experiencia_new.experiencia3.compania")}</p>

                            <ul className="list-disc pl-5 md:text-sm text-xs text-gray-700 space-y-1">
                                <li>{t("experiencia_new.experiencia3.d1")}</li>
                                <li>{t("experiencia_new.experiencia3.d2")}</li>
                                <li>{t("experiencia_new.experiencia3.d3")}</li>
                                <li>{t("experiencia_new.experiencia3.d4")}</li>
                                <li>{t("experiencia_new.experiencia3.d5")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    </div>

                    <div className="flex items-start text-left text-sm text-gray-500">{t("experiencia_new.experiencia3.fecha")}</div>

                </div>

                {/* ========= EXPERIENCIA DERECHA ========= */}
                <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start mb-16">

                    <div className="flex items-start justify-end text-sm text-gray-500">ene. 2025 – jun. 2025</div>

                    <div className="flex justify-center">
                        <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    </div>

                    {/* CARD DERECHA */}
                    <div className="flex justify-start">
                        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-6 w-full mr-5 max-w-4xl">
                            <h3 className="font-code-bold md:text-lg text-md text-lg">Practicante ingeniero de datos</h3>
                            <p className="text-sm text-gray-600 mb-3">AXA Colpatria</p>

                            <ul className="list-disc md:text-sm text-xs pl-5 text-gray-700 space-y-1">
                                <li>Developed and maintained ELT pipelines using Python and SQL Server.</li>
                                <li>Automated data quality and validation processes.</li>
                                <li>Built Power BI dashboards to support business decision-making.</li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start mb-16">

                    {/* CARD IZQUIERDA */}
                    <div className="flex justify-end">
                        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-6 w-full ml-5 max-w-4xl">
                            <h3 className="font-code-bold md:text-lg text-md text-lg">Practicante ingeniero de datos</h3>
                            <p className="text-sm text-gray-600 mb-3">AXA Colpatria</p>

                            <ul className="list-disc md:text-sm text-xs pl-5 text-gray-700 space-y-1">
                                <li>Developed and maintained ELT pipelines using Python and SQL Server.</li>
                                <li>Automated data quality and validation processes.</li>
                                <li>Built Power BI dashboards to support business decision-making.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    </div>

                    <div className="flex items-start font-code-bold text-left text-sm text-gray-500">ene. 2025 – jun. 2025</div>

                </div>

            </div>
        </section>
    );
}
