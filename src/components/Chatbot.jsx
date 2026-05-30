import { useState, useRef, useEffect, useCallback } from 'react';
import chatbotIcon from '../assets/chatbot-2.png';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ 
    id: 1, 
    text: "Hola, soy el asistente especializado en Hábitat-TIC (La Magnolia). ¿En qué puedo profundizar hoy?", 
    isBot: true 
  }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Base de conocimiento robusta
  const knowledgeBase = {
    que_es: {
      tags: ['que es', 'que es esto', 'descripcion', 'que hacen', 'de que trata', 'resumen'],
      responses: [
        "Hábitat-TIC es un proyecto pedagógico de investigación-acción que busca resignificar el concepto de 'Ciudad Inteligente' desde La Magnolia (Envigado). No vemos la tecnología como un fin, sino como un medio para potenciar los saberes locales, la economía popular y las redes de cuidado que ya existen en el barrio.",
        "Somos una iniciativa que conecta la vida cotidiana de La Magnolia con herramientas digitales. Nuestra misión es reducir la brecha digital y fortalecer la autonomía de los habitantes a través de procesos de apropiación social del conocimiento."
      ]
    },
    territorio: {
      tags: ['magnolia', 'envigado', 'lugar', 'donde', 'barrio', 'territorio'],
      responses: [
        "La Magnolia en Envigado es nuestro epicentro. Es un territorio con una identidad fuerte y una economía popular activa que nos enseña diariamente cómo las comunidades autogestionan su bienestar.",
        "Trabajamos exclusivamente en La Magnolia porque es un ecosistema rico en redes sociales y prácticas de cuidado que merecen ser visibilizadas y potenciadas mediante estrategias tecnológicas."
      ]
    },
    tecnologia: {
      tags: ['tecnologia', 'tic', 'digital', 'herramientas', 'innovacion', 'plataforma'],
      responses: [
        "Proponemos una 'Tecnología de Proximidad'. Esto significa que no traemos soluciones externas prefabricadas, sino que diseñamos herramientas digitales que se adaptan a las necesidades reales de los comerciantes y vecinos de La Magnolia.",
        "Nuestras herramientas TIC buscan fortalecer la soberanía comercial y facilitar el intercambio de saberes, siempre manteniendo el componente humano y comunitario por encima de la automatización."
      ]
    },
    metodologia: {
      tags: ['como', 'metodologia', 'investigacion', 'estudio', 'observacion', 'trabajo'],
      responses: [
        "Nuestra metodología es etnográfica y participativa. Pasamos tiempo en el territorio, dialogamos con los actores locales y documentamos las dinámicas barriales para que la tecnología que desarrollemos sea un reflejo fiel de la comunidad.",
        "Combinamos el registro audiovisual, el mapeo de actores clave y la sistematización de experiencias para crear una lectura crítica y constructiva de lo que significa la innovación en un contexto barrial."
      ]
    }
  };


  const getResponse = useCallback((userInput) => {
    const cleanInput = userInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Buscar la categoría que más coincida con el input
    let bestMatch = null;
    let maxMatches = 0;

    Object.keys(knowledgeBase).forEach(key => {
      const matchCount = knowledgeBase[key].tags.filter(tag => cleanInput.includes(tag)).length;
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestMatch = knowledgeBase[key];
      }
    });

    if (bestMatch) {
      return bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
    }
    
    return "Es un tema interesante. En el marco de Hábitat-TIC La Magnolia, puedo hablarte sobre el territorio, la tecnología que implementamos, nuestra metodología o el impacto esperado.";
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { id: Date.now(), text: userText, isBot: false }]);
    setInput('');

    setTimeout(() => {
      const botReply = getResponse(userText);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, isBot: true }]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="mb-4 w-96 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col h-[500px] animate-slideUp">
          <div className="bg-teal-700 p-6 rounded-t-3xl text-white">
            <h3 className="font-black text-lg">Hábitat-TIC Intelligence</h3>
            <p className="text-teal-100 text-xs mt-1 opacity-80">Asistente experto en La Magnolia, Envigado</p>
          </div>
          <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm ${msg.isBot ? 'bg-white text-slate-700 rounded-bl-none' : 'bg-teal-600 text-white rounded-br-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="¿Qué deseas consultar?"
            />
          </form>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-700 p-4 rounded-full shadow-xl hover:scale-105 transition-all">
        <img src={chatbotIcon} alt="Chat" className="w-6 h-6" />
      </button>
    </div>
  );
}