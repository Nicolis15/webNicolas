import { useTranslation } from 'react-i18next';

export default function Experiencia() {
    const [t] = useTranslation();

    return (
        <section className="mb-10 w-full">
            <h1 className="font-code-bold text-secundary-blue text-2xl md:text-3xl text-center">
                {t("experiencia_new.titulo")}
            </h1>

            {/* CONTENEDOR TIMELINE */}
            <div className="relative mt-16 max-w-8xl mx-auto">

                {/* LÍNEA CENTRAL (solo desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secundary-blue/30 -translate-x-1/2" />

                {/* ========= EXPERIENCIA 3 ========= */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-16">

                    {/* FECHA MOBILE */}
                    <div className="md:hidden text-sm text-gray-500 text-center">
                        {t("experiencia_new.experiencia3.fecha")}
                    </div>

                    {/* CARD */}
                    <div className="flex justify-center md:justify-end">
                        <div className="bg-white/90 backdrop-blur-md ml-5 mr-5 rounded-xl shadow-md p-5 md:p-6 w-full max-w-xl md:max-w-4xl md:ml-5">
                            <h3 className="font-code-bold text-md md:text-lg">
                                {t("experiencia_new.experiencia3.cargo")}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {t("experiencia_new.experiencia3.compania")}
                            </p>

                            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-700 space-y-1">
                                <li>{t("experiencia_new.experiencia3.d1")}</li>
                                <li>{t("experiencia_new.experiencia3.d2")}</li>
                                <li>{t("experiencia_new.experiencia3.d3")}</li>
                                <li>{t("experiencia_new.experiencia3.d4")}</li>
                                <li>{t("experiencia_new.experiencia3.d5")}</li>
                            </ul>
                        </div>
                    </div>

                    {/* PUNTO */}
                    <div className="hidden md:flex justify-center">
                        <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    </div>

                    {/* FECHA DESKTOP */}
                    <div className="hidden md:flex items-start text-sm text-gray-500">
                        {t("experiencia_new.experiencia3.fecha")}
                    </div>
                </div>

                {/* ========= EXPERIENCIA 2 ========= */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-16">

                    {/* FECHA MOBILE */}
                    <div className="md:hidden text-sm text-gray-500 text-center">
                        {t("experiencia_new.experiencia2.fecha")}
                    </div>

                    {/* FECHA DESKTOP */}
                    <div className="hidden md:flex items-start justify-end text-sm text-gray-500">
                        {t("experiencia_new.experiencia2.fecha")}
                    </div>

                    {/* PUNTO */}
                    <div className="hidden md:flex justify-center">
                        <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    </div>

                    {/* CARD */}
                    <div className="flex justify-center md:justify-start">
                        <div className="bg-white/90 backdrop-blur-md ml-5 mr-5 rounded-xl shadow-md p-5 md:p-6 w-full max-w-xl md:max-w-4xl md:mr-5">
                            <h3 className="font-code-bold text-md md:text-lg">
                                {t("experiencia_new.experiencia2.cargo")}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {t("experiencia_new.experiencia2.compania")}
                            </p>

                            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-700 space-y-1">
                                <li>{t("experiencia_new.experiencia2.d1")}</li>
                                <li>{t("experiencia_new.experiencia2.d2")}</li>
                                <li>{t("experiencia_new.experiencia2.d3")}</li>
                                <li>{t("experiencia_new.experiencia2.d4")}</li>
                                <li>{t("experiencia_new.experiencia2.d5")}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ========= EXPERIENCIA 1 ========= */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-16">

                    {/* FECHA MOBILE */}
                    <div className="md:hidden text-sm text-gray-500 text-center">
                        {t("experiencia_new.experiencia1.fecha")}
                    </div>

                    {/* CARD */}
                    <div className="flex justify-center md:justify-end">
                        <div className="bg-white/90 backdrop-blur-md ml-5 mr-5 rounded-xl shadow-md p-5 md:p-6 w-full max-w-xl md:max-w-4xl md:ml-5">
                            <h3 className="font-code-bold text-md md:text-lg">
                                {t("experiencia_new.experiencia1.cargo")}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {t("experiencia_new.experiencia1.compania")}
                            </p>

                            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-700 space-y-1">
                                <li>{t("experiencia_new.experiencia1.d1")}</li>
                                <li>{t("experiencia_new.experiencia1.d2")}</li>
                                <li>{t("experiencia_new.experiencia1.d3")}</li>
                                <li>{t("experiencia_new.experiencia1.d4")}</li>
                            </ul>
                        </div>
                    </div>

                    {/* PUNTO */}
                    <div className="hidden md:flex justify-center">
                        <div className="w-3 h-3 rounded-full bg-secundary-blue z-10" />
                    </div>

                    {/* FECHA DESKTOP */}
                    <div className="hidden md:flex items-start text-sm text-gray-500">
                        {t("experiencia_new.experiencia1.fecha")}
                    </div>
                </div>
            </div>
        </section>
    );
}
