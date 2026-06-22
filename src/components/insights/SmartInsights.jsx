import { useState } from "react";
import { askGemini } from "../../services/geminiService";

function SmartInsights({ tasks }) {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false)

    const handleAsk = async () => {

        if (!question) return;
        setLoading(true);

        try {
            const response = await askGemini(question, tasks);
            if(response.error) throw response.error
            setResponse(response);
        } catch (error) {
            if (error?.code === 429) {
                setResponse("⚠️ Se alcanzó el límite de consultas de IA para esta demostración. Intenta nuevamente más tarde.");
            } else {
                setResponse("⚠️ Ocurrió un error al generar el análisis.");
        }
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="
                bg-white
                rounded-xl
                shadow-sm
                p-5
                xl:col-start-2 
                xl:col-end-3
                xl:order-4
            "
        >
            <h3
                className="
                    font-semibold
                    text-lg
                    mb-2
                "
            >
                🤖 Smart Insights
            </h3>
            <div
                className="
                    flex
                    justify-between
                    w-full
                "
            >
            <p
                className="
                text-sm
                text-slate-500
                mb-4
                "
            >
                Consulta información sobre la bandeja.
            </p>
                {response ? (
                    <button
                            className="
                                cursor-pointer
                                mb-3
                            "
                            onClick={() => setResponse('')}
                        >
                            ✕
                        </button>
                ): (
                    <></>
                )}
                
            </div>
            {
                (loading || response) ? (
                    loading ? (
                        <div
                            className="
                                bg-white
                                rounded-xl
                                shadow-lg
                                p-4
                                z-50
                                border
                                border-gray-200
                            "
                        >
                            <span className='animate-pulse'>Analizando...</span>
                        </div>
                    ) : (
                        <textarea
                            className="
                                w-full
                                border
                                rounded-lg
                                p-3
                                min-h-[120px]
                                overflow-y-auto
                            "
                            value={response}
                            readOnly
                        >
                        </textarea>
                    )
                ) : (
                    <textarea
                        placeholder="Ej: ¿Cuántas tareas de prioridad alta siguen pendientes?"
                        className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            min-h-[120px]
                        "
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); // evita el salto de línea
                                handleAsk();
                            }
                        }}
                    >
                    </textarea>
                )
            }
            <button
                className={`
                    mt-3
                    w-full
                    text-white
                    rounded-lg
                    py-2
                    ${
                        loading || response
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 cursor-pointer hover:bg-blue-700'
                    }
                `}
                onClick={handleAsk}
            >
                Generar análisis
            </button>

        </div>
    )
}

export default SmartInsights