'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-amber-900 to-blue-950 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-100 rounded-lg shadow-lg overflow-hidden border-8 border-amber-800/40 transform rotate-1">
          {/* Effet de coin corné */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200 shadow-md transform rotate-45 translate-x-8 -translate-y-8"></div>
          
          <div className="p-8 relative">
            {/* Crâne avec yeux en croix */}
            <div className="absolute top-4 right-4 w-16 h-16">
              <div className="w-12 h-8 bg-amber-900 rounded-t-full mx-auto"></div>
              <div className="w-12 h-6 bg-amber-900 rounded-b-lg mx-auto flex justify-center items-end">
                <div className="w-6 h-1 bg-amber-700 mb-1"></div>
              </div>
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 flex justify-between px-1">
                <div className="w-3 h-3 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-amber-700 rotate-45"></div>
                  <div className="w-3 h-0.5 bg-amber-700 -rotate-45 absolute"></div>
                </div>
                <div className="w-3 h-3 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-amber-700 rotate-45"></div>
                  <div className="w-3 h-0.5 bg-amber-700 -rotate-45 absolute"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center mb-8">
              <div className="w-full max-w-md border-b-2 border-amber-900/30 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-center text-amber-900 font-serif mb-2">
                  Zone Interdite
                </h1>
                <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
              </div>
            </div>
            
            <div className="bg-amber-50/60 p-6 rounded-lg border-2 border-amber-800/30 text-center mb-8 transform -rotate-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-900 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-900 font-serif text-lg mb-3">
                Par tous les flibustiers ! Vous avez navigué en eaux interdites !
              </p>
              <p className="text-amber-700">
                Cette zone est réservée aux membres d'équipage de haut rang. Veuillez retourner sur le pont principal ou choisir une destination précise.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link href="/" className="bg-amber-800 hover:bg-amber-700 text-amber-100 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retourner à la carte principale
              </Link>
            </div>
          </div>
          
          {/* Éléments décoratifs */}
          <div className="absolute bottom-4 left-4 opacity-30">
            <div className="w-16 h-16 border-2 border-amber-700 rounded-full"></div>
          </div>
        </div>
        
        {/* Indication discrète pour les développeurs */}
        <div className="mt-6 text-center text-amber-500/40 text-xs">
          Note aux développeurs : Accédez aux cartes via leurs URL spécifiques (/cards/coffre, /cards/porte, /cards/texte)
        </div>
      </div>
    </div>
  );
}