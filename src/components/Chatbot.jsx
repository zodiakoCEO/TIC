import { useState, useRef, useEffect, useCallback } from 'react';
import chatbotIcon from '../assets/chatbot-2.png'; // Asegúrate de que la ruta sea correcta

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 ¿En qué te puedo ayudar hoy? Soy el asistente virtual del proyecto Hábitat-TIC en La Magnolia.",
      isBot: true,
      options: ["¿De qué trata el proyecto?", "Voces del barrio", "Análisis y Literatura"]
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Base de conocimiento masiva y categorizada
  const knowledgeBase = {
    saludos: {
      tags: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'qhubo', 'saludos', 'hey', 'que tal'],
      responses: [
        "¡Hola! Qué gusto saludarte. ¿Te gustaría saber sobre nuestro enfoque en La Magnolia o conocer los testimonios del barrio?",
        "¡Hola! Bienvenido. Puedes preguntarme sobre la economía popular, nuestra metodología o los referentes académicos del proyecto."
      ]
    },
    despedidas: {
      tags: ['adios', 'chao', 'hasta luego', 'nos vemos', 'bye', 'hasta pronto'],
      responses: [
        "¡Hasta luego! Gracias por interesarte en Hábitat-TIC La Magnolia. Vuelve cuando quieras.",
        "¡Chao! Que tengas un excelente día. Recuerda que la tecnología la construimos entre todos."
      ]
    },
    agradecimientos: {
      tags: ['gracias', 'te agradezco', 'muy amable', 'perfecto', 'excelente', 'listo', 'ok', 'vale'],
      responses: [
        "¡Con mucho gusto! ¿Hay algo más en lo que te pueda orientar?",
        "¡Para eso estoy! Si tienes más curiosidad sobre cómo usamos las TIC en el barrio, solo dímelo."
      ]
    },
    proyecto: {
      tags: ['que es', 'de que trata', 'proyecto', 'objetivo', 'proposito', 'resumen', 'habitat', 'habitat-tic', 'informacion', 'que hacen', 'mision'],
      responses: [
        "Hábitat-TIC es un proyecto de investigación-acción en La Magnolia (Envigado). Buscamos resignificar el concepto de 'Ciudad Inteligente', usando la tecnología no como un fin, sino como una herramienta para potenciar los saberes locales y la economía popular.",
        "Nuestro proyecto conecta la vida cotidiana con herramientas digitales. Queremos cerrar la brecha digital visibilizando cómo las comunidades (como los comerciantes y emprendedores de La Magnolia) autogestionan su territorio."
      ]
    },
    territorio: {
      tags: ['magnolia', 'envigado', 'lugar', 'donde', 'barrio', 'territorio', 'comunidad', 'contexto'],
      responses: [
        "Trabajamos en La Magnolia, un barrio tradicional de Envigado. Elegimos este territorio porque tiene una identidad comunitaria muy fuerte, llena de comerciantes de oficios y emprendedores que mantienen viva la economía local.",
        "La Magnolia es nuestro ecosistema de estudio. Aquí conviven saberes ancestrales, redes de cuidado barrial y nuevas dinámicas de economía popular que estamos mapeando y apoyando."
      ]
    },
    voces_saberes: {
      tags: ['saberes', 'personas', 'voces', 'comerciantes', 'beatriz', 'andres', 'alfonso', 'yurani', 'emprendedores', 'testimonios', 'oficios', 'musica', 'reposteria'],
      responses: [
        "Documentamos historias reales: como Beatriz, que vende chocolates por WhatsApp; Andrés, un músico comunitario; Don Alfonso, que arregla muebles hace 40 años; y Yurani, una emprendedora migrante. Ellos son la verdadera inteligencia de la ciudad.",
        "Nuestra sección de 'Saberes y Prácticas Locales' recopila audios y testimonios de habitantes de La Magnolia. Mostramos cómo usan herramientas como WhatsApp o Instagram para mover la economía popular."
      ]
    },
    analisis_referentes: {
      tags: ['analisis', 'literatura', 'referentes', 'academicos', 'maestre', 'caicedo', 'ciudad inteligente', 'smart city', 'estudio', 'teoria'],
      responses: [
        "Nos basamos en una visión crítica de las 'Ciudades Inteligentes'. Autores como Maestre Góngora (2015) y Caicedo Plúa (2022) nos enseñan que una verdadera ciudad inteligente debe priorizar la inclusión social, la participación ciudadana y la equidad digital por encima del simple marketing tecnológico.",
        "Cuestionamos el modelo corporativo de 'Smart City'. Como señala Caicedo (2022), buscamos plataformas emergentes desde la base comunitaria, empoderando a las redes vecinales en lugar de depender solo de grandes infraestructuras."
      ]
    },
    tecnologia: {
      tags: ['tecnologia', 'tic', 'digital', 'herramientas', 'innovacion', 'whatsapp', 'redes', 'conectividad'],
      responses: [
        "Hablamos de 'Tecnología de Proximidad'. En lugar de imponer apps complejas, observamos cómo la comunidad ya usa WhatsApp, Nequi o mapas digitales (que alcanzan un alto nivel de adopción) y buscamos potenciar esos usos desde la pedagogía.",
        "Para nosotros, las TIC deben garantizar inclusión, cohesión social y continuidad. Evaluamos indicadores de apropiación digital en el barrio para diseñar estrategias de alfabetización que realmente sirvan al comercio local."
      ]
    }
  };

  const normalizeText = (text) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, "");
  };

  const getResponse = useCallback((userInput) => {
    const cleanInput = normalizeText(userInput);
    const words = cleanInput.split(' ');

    let bestMatch = null;
    let maxScore = 0;

    // Sistema de puntuación para ser más tolerante a variaciones
    Object.keys(knowledgeBase).forEach(key => {
      let score = 0;
      knowledgeBase[key].tags.forEach(tag => {
        // Si la frase exacta está, muchos puntos
        if (cleanInput.includes(normalizeText(tag))) score += 5;
        // Si hay palabras sueltas que coinciden, puntos parciales
        words.forEach(word => {
          if (word.length > 3 && normalizeText(tag).includes(word)) score += 1;
        });
      });

      if (score > maxScore) {
        maxScore = score;
        bestMatch = knowledgeBase[key];
      }
    });

    // Si encontró una buena coincidencia
    if (bestMatch && maxScore > 1) {
      return {
        text: bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)],
        options: null
      };
    }
    
    // Fallback inteligente (cuando no entiende)
    return {
      text: "No estoy completamente seguro de a qué te refieres, pero soy experto en estos temas. ¿Te gustaría explorar alguno?",
      options: ["¿Qué es Hábitat-TIC?", "El barrio La Magnolia", "Testimonios del barrio", "Ciudades Inteligentes"]
    };
  }, []);

  const handleSend = (textOrEvent) => {
    // Permite recibir tanto el evento del formulario como texto directo de los botones
    if (textOrEvent?.preventDefault) textOrEvent.preventDefault();
    
    const userText = typeof textOrEvent === 'string' ? textOrEvent : input;
    if (!userText.trim()) return;

    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { id: Date.now(), text: userText.trim(), isBot: false }]);
    setInput('');
    setIsTyping(true);

    // Simular tiempo de pensamiento
    setTimeout(() => {
      const botReply = getResponse(userText);
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: botReply.text, 
        isBot: true,
        options: botReply.options 
      }]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-96 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col h-[550px] animate-fadeIn transition-all origin-bottom-right">
          
          {/* Header */}
          <div className="bg-teal-700 p-5 rounded-t-3xl text-white flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-black text-lg flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
                </span>
                Hábitat-TIC Bot
              </h3>
              <p className="text-teal-100 text-xs mt-1 opacity-90">Asistente de La Magnolia</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-teal-100 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-5 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.isBot ? 'bg-white text-slate-700 rounded-bl-none border border-slate-100' : 'bg-teal-600 text-white rounded-br-none'}`}>
                  {msg.text}
                </div>
                
                {/* Botones de sugerencia si existen */}
                {msg.options && (
                  <div className="mt-2 flex flex-wrap gap-2 max-w-[90%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(opt)}
                        className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1.5 rounded-full hover:bg-teal-600 hover:text-white transition-colors text-left"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Indicador de escribiendo */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 rounded-b-3xl shrink-0">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="Escribe un mensaje..."
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className="absolute right-2 p-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Botón Flotante */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-teal-700 p-4 rounded-full shadow-[0_10px_25px_rgba(15,118,110,0.4)] hover:scale-105 hover:bg-teal-800 transition-all group relative flex items-center justify-center"
        >
          <img src={chatbotIcon} alt="Abrir Chat" className="w-7 h-7 filter brightness-0 invert" />
          {/* Burbuja de notificación opcional */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        </button>
      )}
    </div>
  );
}