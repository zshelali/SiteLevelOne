'use client';

import { useState } from 'react';
import { use } from 'react';


function TexteContent() {
    const [inputValue, setInputValue] = useState('');
    const [isRevealed, setIsRevealed] = useState(false);
    const correctPhrase = "ceci est le code";
    
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      
      // Vérifier si la phrase est correcte (sans tenir compte de la casse)
      if (newValue.toLowerCase() === correctPhrase.toLowerCase()) {
        setIsRevealed(true);
      } else {
        setIsRevealed(false);
      }
    };
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 to-amber-700 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          {/* Parchemin */}
          <div className="bg-amber-100 rounded-lg shadow-lg overflow-hidden relative border-8 border-amber-800/40">
            {/* Effet de coin corné */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200 shadow-md transform rotate-45 translate-x-8 -translate-y-8"></div>
            
            <div className="p-8">
              <h2 className="text-3xl text-amber-900 mb-6 text-center font-serif transform -rotate-1">
                <span className="inline-block transform rotate-3">M</span>essage 
                <span className="inline-block transform -rotate-2">S</span>ecret
              </h2>
              
              <div className="mb-8 transform -rotate-1">
                <p className="text-amber-800 mb-6 text-center font-serif italic">
                  "Par tous les flibustiers! Écrivez la phrase secrète pour révéler les indications du trésor perdu..."
                </p>
                
                <div className="relative">
                  {/* Plume stylisée comme élément décoratif */}
                  <div className="absolute -top-10 -right-5 w-8 h-20">
                    <div className="w-2 h-16 bg-amber-950 rounded-full transform rotate-45 origin-bottom"></div>
                    <div className="w-6 h-8 bg-amber-700 rounded-tr-full rounded-br-xl absolute bottom-0 right-0 transform -rotate-12"></div>
                  </div>
                  
                  <div className="border-b-2 border-amber-700/50 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Écrivez ici avec votre plus belle plume..."
                      className="w-full px-4 py-3 bg-transparent border-none focus:outline-none text-amber-900 italic text-xl"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {isRevealed ? (
                        <div className="w-10 h-10 bg-amber-900/10 rounded-full flex items-center justify-center border-2 border-amber-800/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Information révélée */}
              <div className={`transition-all duration-1000 ${isRevealed ? 'opacity-100 max-h-[32rem]' : 'opacity-0 max-h-0'} overflow-hidden`}>
                <div className="pt-6">
                  <div className="bg-amber-50/60 p-6 rounded-lg border-2 border-amber-800/30 relative transform rotate-1">
                    {/* Cachet stylisé */}
                    <div className="absolute -top-6 -right-6 w-16 h-16">
                      <div className="w-14 h-14 bg-red-800 rounded-full relative flex items-center justify-center">
                        <div className="absolute inset-2 border-2 border-red-200/30 rounded-full"></div>
                        <div className="text-red-200 font-bold text-xs rotate-12">SCEAU</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-900/10 rounded-full border border-amber-800/30"></div>
                    
                    {/* Boussole stylisée */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center relative border-4 border-amber-800/40">
                        <div className="absolute w-12 h-12 border-4 border-amber-500 rounded-full"></div>
                        <div className="absolute w-10 h-1 bg-amber-900 transform rotate-45"></div>
                        <div className="absolute w-10 h-1 bg-amber-600 transform -rotate-45"></div>
                        <div className="absolute w-3 h-3 bg-amber-900 rounded-full"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-amber-900 mb-4 text-center border-b border-amber-700/30 pb-2">Carte au Trésor</h3>
                    
                    <div className="bg-amber-100/70 p-4 rounded-md border border-amber-800/20 mb-4 transform -rotate-1">
                      <p className="text-amber-800 mb-2 font-serif">
                        L'emplacement du trésor est révélé:
                      </p>
                      <p className="text-amber-900 font-medium italic text-lg">
                        "Le trésor se trouve sur l'île au crâne, enterré sous le plus grand palmier à 20 pas vers l'est de la grotte aux requins."
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50/70 p-3 rounded-md border border-amber-800/20 transform rotate-1">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-amber-800 italic text-lg">
                          Pour votre prochaine aventure, mémorisez le mot-clé: <span className="font-bold italic">"Nautilus"</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-4 bg-amber-800/10 border-t border-amber-900/20">
              <p className="text-sm text-amber-800 text-center font-serif">
                🏴‍☠️ Déchiffrez le message pour découvrir l'emplacement du trésor
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-amber-900/50 rounded-lg shadow-md p-4 backdrop-blur-sm border border-amber-800/30 transform rotate-1">
            <div className="flex items-center">
              {/* Crâne pirate stylisé */}
              <div className="w-8 h-8 mr-3 relative">
                <div className="w-full h-5 bg-gray-100 rounded-t-full"></div>
                <div className="w-full h-3 bg-gray-100 absolute bottom-0 rounded-b-lg flex justify-center items-end">
                  <div className="w-4 h-1 bg-gray-300 mb-0.5"></div>
                </div>
                <div className="absolute top-2 left-1 w-1.5 h-2 bg-gray-700 rounded-full"></div>
                <div className="absolute top-2 right-1 w-1.5 h-2 bg-gray-700 rounded-full"></div>
                <div className="absolute top-0 left-0 right-0 h-8 border-2 border-amber-800 rounded-full opacity-40"></div>
              </div>
              <p className="text-amber-100 text-sm italic font-serif">
                Indice: La phrase est une évidence pour tout bon pirate qui se respecte!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

function PorteContent() {
    const [code, setCode] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const correctCode = "6745";
    
    const handleDigitClick = (digit) => {
      if (code.length < 4) {
        const newCode = code + digit;
        setCode(newCode);
        
        if (newCode.length === 4) {
          if (newCode === correctCode) {
            setIsError(false);
            setTimeout(() => {
              setIsOpen(true);
            }, 500);
          } else {
            setIsError(true);
            setTimeout(() => {
              setCode('');
              setIsError(false);
            }, 1000);
          }
        }
      }
    };
    
    const handleClear = () => {
      setCode('');
      setIsError(false);
    };
    
    return (
      <div className="min-h-screen p-6 bg-gradient-to-br from-amber-950 to-amber-800">
        <div className="w-full max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-amber-100 font-serif border-b-2 border-amber-200/30 pb-2 text-center mb-6">
            <span className="inline-block transform -rotate-3 mr-2">🔒</span>
            La Porte du Capitaine
            <span className="inline-block transform rotate-3 ml-2">🗝️</span>
          </h3>
        
          {/* Porte pirate */}
          <div className="relative w-full aspect-[3/4] bg-amber-950 rounded-t-lg overflow-hidden shadow-2xl border-8 border-amber-900">
            {/* Détails de la porte */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-2 h-24 bg-amber-700 rounded-full"></div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-2 h-24 bg-amber-700 rounded-full"></div>
            
            {/* Panneau de la porte qui s'ouvre */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-amber-800 to-amber-950 transition-transform duration-1500 ease-in-out origin-left z-20"
              style={{
                transform: isOpen ? 'perspective(1200px) rotateY(-85deg)' : 'perspective(1200px) rotateY(0deg)',
                boxShadow: isOpen ? '10px 0 15px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              {/* Texture de bois simulée avec des lignes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="h-full w-full flex flex-col justify-between opacity-30">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="h-1 w-full bg-amber-600 transform rotate-1"></div>
                  ))}
                </div>
              </div>
              
              {/* Éléments décoratifs de la porte */}
              <div className="absolute inset-0">
                <div className="absolute inset-8 border-4 border-amber-900/40 rounded-sm"></div>
                
                {/* Poignée de la porte pirate */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-10 h-16 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-700 border-2 border-amber-900"></div>
                  <div className="w-3 h-10 bg-amber-800 rounded-b-sm"></div>
                </div>
                
                {/* Plaque avec tête de mort */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28">
                  <div className="w-full h-full bg-amber-800 rounded-full flex items-center justify-center border-4 border-amber-700">
                    <div className="w-16 h-16 flex flex-col items-center justify-center">
                      {/* Crâne stylisé */}
                      <div className="w-10 h-6 bg-amber-100 rounded-t-full"></div>
                      <div className="w-10 h-4 bg-amber-100 rounded-b-lg flex justify-center items-end">
                        <div className="w-6 h-1 bg-amber-300 mb-0.5"></div>
                      </div>
                      <div className="absolute w-10 h-6 flex justify-between items-center px-1.5 pt-1">
                        <div className="w-2 h-2.5 bg-amber-950 rounded-full"></div>
                        <div className="w-2 h-2.5 bg-amber-950 rounded-full"></div>
                      </div>
                      {/* Os croisés */}
                      <div className="absolute w-16 h-16 flex items-center justify-center">
                        <div className="w-2 h-14 bg-amber-100 rotate-45 rounded-full"></div>
                        <div className="w-2 h-14 bg-amber-100 -rotate-45 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenu derrière la porte */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-amber-900 z-10">
              <div className="w-full max-w-xs">
                <div className="bg-amber-100 p-6 rounded-md shadow-md border-4 border-amber-800">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center relative border-4 border-amber-800/40">
                      <div className="absolute w-12 h-12 border-4 border-amber-500 rounded-full"></div>
                      <div className="absolute w-10 h-1 bg-amber-900 transform rotate-45"></div>
                      <div className="absolute w-10 h-1 bg-amber-600 transform -rotate-45"></div>
                      <div className="absolute w-3 h-3 bg-amber-900 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif text-amber-900 mb-3 text-center border-b border-amber-800/30 pb-2">Journal de Bord Secret</h3>
                  
                  <p className="text-amber-800 font-medium mb-3">
                    Vous avez découvert les quartiers secrets du capitaine!
                  </p>
                  
                  <div className="bg-amber-50 p-3 rounded border border-amber-300 mb-3 transform -rotate-1">
                    <p className="text-amber-900 italic">
                      "Notre prochaine destination se trouve à l'est des îles du Dragon. Cherchez la crique aux émeraudes et suivez les trois palmiers alignés."
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-2 rounded border border-amber-300 flex items-start transform rotate-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-700 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-amber-800 text-sm">
                      Mot-clé pour la carte suivante: <span className="font-bold">"Atlantide"</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Serrure à code */}
          <div className={`mt-6 bg-amber-800 p-4 rounded-md shadow-lg border-4 border-amber-900 transition-all duration-700 ${isOpen ? 'opacity-60' : 'opacity-100'}`}>
            <div className="text-center text-amber-200 mb-3 font-serif text-lg font-bold">Serrure du Capitaine</div>
            
            <div className="bg-amber-900 p-2 rounded mb-4 flex items-center justify-between border-2 border-amber-950">
              <div className="flex-1 h-10 bg-amber-200/80 rounded flex items-center justify-center px-2 border border-amber-950">
                <div className={`text-2xl font-mono tracking-widest ${isError ? 'text-red-800' : 'text-amber-900'}`}>
                  {code.padEnd(4, '_')}
                </div>
              </div>
              <button 
                onClick={handleClear}
                className="ml-3 h-10 w-10 bg-red-700 hover:bg-red-800 text-amber-100 rounded flex items-center justify-center border border-amber-950"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null].map((digit, index) => {
                if (digit === null) return <div key={index} className="w-12 h-12"></div>;
                
                return (
                  <button 
                    key={index} 
                    onClick={() => handleDigitClick(digit)}
                    className={`w-12 h-12 rounded flex items-center justify-center text-xl font-bold 
                      ${isError ? 'bg-red-700 text-amber-200' : 'bg-amber-700 hover:bg-amber-600 text-amber-200'} 
                      transition-colors shadow-md border-2 border-amber-950`}
                  >
                    {digit}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 text-center text-sm text-amber-200">
              <div className="flex items-center justify-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Entrez le code secret du capitaine</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-amber-900/60 rounded-lg shadow-md p-3 backdrop-blur-sm border border-amber-800/50">
            <div className="flex items-center text-amber-100">
              <div className="w-6 h-6 mr-2 text-amber-200">🏴‍☠️</div>
              <p className="italic font-serif text-sm">
                "Une fois la serrure déverrouillée, les secrets du capitaine vous seront révélés, moussaillon!"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

function CoffreContent() {
    const [code, setCode] = useState([0, 0, 0, 0]);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const correctCode = "2482";
    
    const handleDigitChange = (index, value) => {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (newCode.join('') === correctCode) {
        setIsUnlocked(true);
      } else {
        setIsUnlocked(false);
      }
    };
  
    const incrementDigit = (index) => {
      const newValue = (code[index] + 1) % 10;
      handleDigitChange(index, newValue);
    };
  
    const decrementDigit = (index) => {
      const newValue = (code[index] - 1 + 10) % 10;
      handleDigitChange(index, newValue);
    };
    
    return (
      <div className="min-h-screen p-6 bg-gradient-to-br from-amber-900 to-amber-800 text-amber-100">
        <div className="space-y-6 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-amber-200 font-serif border-b-2 border-amber-700/30 pb-2 text-center">
            <span className="inline-block transform -rotate-3 mr-2">🏴‍☠️</span>
            Le Coffre Maudit
            <span className="inline-block transform rotate-3 ml-2">🏴‍☠️</span>
          </h3>
          <p className="text-amber-200 italic font-medium text-center">
            "Par les os de Davy Jones, trouvez la combinaison pour déverrouiller ce coffre et découvrir son trésor!"
          </p>
        
        {!isUnlocked ? (
          <div className="space-y-8">
            <div className="flex justify-center space-x-4 my-8">
              {code.map((digit, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <button 
                    onClick={() => incrementDigit(index)} 
                    className="w-14 h-10 bg-amber-800 hover:bg-amber-700 text-amber-200 rounded-t-md flex items-center justify-center shadow-md border border-amber-950"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="w-14 h-20 bg-amber-100 border-4 border-amber-900 flex items-center justify-center text-3xl font-bold text-amber-950 shadow-inner">
                    {digit}
                  </div>
                  <button 
                    onClick={() => decrementDigit(index)} 
                    className="w-14 h-10 bg-amber-800 hover:bg-amber-700 text-amber-200 rounded-b-md flex items-center justify-center shadow-md border border-amber-950"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-950 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-950 rounded-full"></div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-950 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-950 rounded-full"></div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="w-48 h-48 bg-amber-900 rounded-lg flex items-center justify-center relative shadow-lg border-4 border-amber-950">
                {/* Lignes de bois simulées */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-6 w-full bg-amber-800 mb-0.5"></div>
                  ))}
                </div>
                
                <div className="w-40 h-40 bg-amber-800 rounded-md border-8 border-amber-950/70 flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-amber-950 rounded-t-lg border-4 border-amber-900"></div>
                  <div className="w-28 h-28 bg-amber-700 rounded-sm border-2 border-amber-950 shadow-inner flex items-center justify-center">
                    <span className="text-amber-300 text-5xl">X</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="px-3 py-1 bg-amber-700 border-2 border-amber-950 rounded-md transform -rotate-3">
                    <span className="text-amber-200 font-bold tracking-widest">{code.join('')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-800/50 border-4 border-amber-950/40 rounded-md shadow-md text-center relative backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              
              <div className="text-lg font-serif font-bold text-amber-200">Journal de bord</div>
              <p className="italic text-amber-100 mt-2">
                "La combinaison est cachée quelque part sur l'île... cherchez bien, moussaillon!"
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-4 bg-amber-800/50 border-4 border-amber-950/40 rounded-md shadow-md text-center backdrop-blur-sm">
              <span className="text-2xl font-serif font-bold text-amber-200">🏆 Par les mille tonnerres ! Le trésor est à vous ! 🏆</span>
            </div>
            
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-amber-900 rounded-lg flex items-center justify-center relative shadow-lg border-4 border-amber-950 transform rotate-12 transition-transform duration-1000">
                {/* Lignes de bois simulées */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-6 w-full bg-amber-800 mb-0.5"></div>
                  ))}
                </div>
                
                <div className="w-40 h-40 bg-amber-800 rounded-md border-4 border-amber-950 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <div className="flex flex-wrap justify-center items-center">
                      <span className="text-yellow-200 text-4xl m-1">💰</span>
                      <span className="text-yellow-200 text-4xl m-1">💎</span>
                      <span className="text-yellow-200 text-4xl m-1">👑</span>
                      <span className="text-yellow-200 text-4xl m-1">⚜️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-800/50 border-4 border-amber-950/40 rounded-md shadow-md relative backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-950 rounded-full"></div>
              
              <h4 className="font-bold text-xl text-amber-200 font-serif mb-2 text-center">Message du Capitaine</h4>
              <p className="text-amber-100 italic">
                "Arr! Vous avez trouvé le code {correctCode} et déverrouillé mon précieux coffre! Vous êtes maintenant digne de rejoindre mon équipage pour chercher le trésor suivant!"
              </p>
              
              <div className="mt-4 p-3 bg-amber-900/60 rounded border border-amber-700">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-amber-200 text-sm">
                    Mot-clé pour votre prochain voyage: <span className="font-bold">"Kraken"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  }

  function DefaultContent() {
	return (
	  <div className="min-h-screen p-6 bg-gradient-to-br from-amber-950 via-amber-900 to-blue-950 flex flex-col justify-center items-center">
		<div className="w-full max-w-lg bg-amber-100 rounded-lg shadow-xl overflow-hidden relative border-8 border-amber-800/40 transform rotate-1">
		  {/* Effet de coin corné */}
		  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200 shadow-md transform rotate-45 translate-x-8 -translate-y-8"></div>
		  
		  <div className="p-8 relative">
			{/* Crâne pirate stylisé */}
			<div className="absolute top-4 right-4 w-14 h-14">
			  <div className="w-10 h-6 bg-amber-950 rounded-t-full mx-auto"></div>
			  <div className="w-10 h-4 bg-amber-950 rounded-b-lg mx-auto flex justify-center items-end">
				<div className="w-5 h-1 bg-amber-700 mb-1"></div>
			  </div>
			  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 flex justify-between px-1">
				<div className="w-2 h-2 flex items-center justify-center">
				  <div className="w-2 h-0.5 bg-amber-100 rotate-45"></div>
				  <div className="w-2 h-0.5 bg-amber-100 -rotate-45 absolute"></div>
				</div>
				<div className="w-2 h-2 flex items-center justify-center">
				  <div className="w-2 h-0.5 bg-amber-100 rotate-45"></div>
				  <div className="w-2 h-0.5 bg-amber-100 -rotate-45 absolute"></div>
				</div>
			  </div>
			</div>
			
			<div className="mb-8 text-center">
			  <h2 className="text-3xl font-bold text-amber-900 font-serif mb-2 transform -rotate-1">
				<span className="inline-block transform rotate-2">T</span>résor 
				<span className="inline-block transform -rotate-2">I</span>ntrouvable
			  </h2>
			  <div className="w-32 h-1 bg-amber-800/40 mx-auto"></div>
			</div>
			
			<div className="bg-amber-50/80 p-6 rounded-lg border-2 border-amber-800/30 text-center mb-6 transform -rotate-1">
			  <div className="flex justify-center mb-6">
				<div className="h-16 w-16 bg-amber-900/10 rounded-full border-2 border-amber-900/30 flex items-center justify-center">
				  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				  </svg>
				</div>
			  </div>
			  <p className="text-amber-900 font-medium text-lg mb-4 font-serif">
				Mille tonnerres ! Ce coffre n'existe pas sur notre carte !
			  </p>
			  <p className="text-amber-800 italic">
				La carte que vous cherchez semble avoir été emportée par les flots ou n'a jamais existé.
				Consultez votre compas et choisissez une destination valide, moussaillon !
			  </p>
			</div>
			
			<div className="flex justify-center">
			  <a 
				href="/"
				className="px-5 py-3 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded-md transition-colors shadow-md border border-amber-900/50 flex items-center transform hover:scale-105"
			  >
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
				Retour au navire principal
			  </a>
			</div>
		  </div>
		  
		  <div className="px-8 py-4 bg-amber-800/10 border-t border-amber-900/20">
			<p className="text-sm text-amber-800 text-center font-serif">
			  🏴‍☠️ Le Code des Pirates exige de naviguer sur les routes connues !
			</p>
		  </div>
		</div>
	  </div>
	);
  }

// Composant principal
export default function Page({params}: {params: { id: string }}) {
  // Utiliser await pour les paramètres
  const id = use(params).id;

  // Affichage direct du contenu correspondant à l'ID, sans wrapper commun
  if (id === "coffre") {
    return <CoffreContent />;
  } else if (id === "porte") {
    return <PorteContent />;
  } else if (id === "texte") {
    return <TexteContent />;
  } else {
    return <DefaultContent />;
  }
}