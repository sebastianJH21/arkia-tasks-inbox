import { env } from '../config/env'

export async function askGemini(question, tasks) {
    const prompt = `
    Actúa como un analista de productividad.

    Debes responder únicamente usando la información entregada.
    No respondas diciendo quién eres.

    Si debes listar elementos, cada elemento debe ir en una línea independiente.

    Formato obligatorio:
    
    1. Tarea 1
    2. Tarea 2
    3. Tarea 3

    Nunca respondas así:
    * Tarea 1 * Tarea 2 * Tarea 3

    Debes responder la pregunta un frase corta y si la pregunta lo requiere, debes agregar tambien el formato obligario a la respuesta:

    Ejemplo:
        Cuantas tareas tiene sandra?.
        Respusta: sandria 2 tareas:
        Formato obligario

    No inventes datos.

    Si la respuesta no existe en las tareas, indícalo.

    Tareas:
    ${JSON.stringify(tasks)}

    Pregunta:
    ${question}
    `;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();
    if (data.error){
        return data
    }

    return data.candidates[0].content.parts[0].text;
}