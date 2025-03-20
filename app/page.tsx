'use client';
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoverCard, setHoverCard] = useState(null);
  
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-blue-950 text-amber-100">
      {/* En-tête avec bannière pirate */}
      <header className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <div className="w-14 h-14 mr-4 relative">
              {/* Crâne pirate stylisé */}
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="w-10 h-6 bg-amber-100 rounded-t-full mt-1"></div>
                <div className="w-10 h-4 bg-amber-100 rounded-b-lg">
                  <div className="w-full flex justify-center">
                    <div className="w-6 h-1 bg-amber-300 mt-3"></div>
                  </div>
                </div>
                <div className="absolute top-3 w-10 flex justify-between px-2">
                  <div className="w-1.5 h-2 bg-amber-950 rounded-full"></div>
                  <div className="w-1.5 h-2 bg-amber-950 rounded-full"></div>
                </div>
                {/* Os croisés */}
                <div className="absolute top-0 w-14 h-14 flex items-center justify-center">
                  <div className="w-1.5 h-12 bg-amber-100 rotate-45 rounded-full"></div>
                  <div className="w-1.5 h-12 bg-amber-100 -rotate-45 rounded-full"></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-200 font-serif tracking-wider">
              <span className="inline-block transform -rotate-3">P</span>
              <span className="inline-block transform rotate-2">I</span>
              <span className="inline-block transform -rotate-1">X</span>
              <span className="inline-block transform rotate-3">E</span>
              <span className="inline-block transform -rotate-2">L</span>
            </h1>
          </div>
          
          <div className="text-center mb-4">
            <p className="text-xl font-serif italic text-amber-300">La Chasse au Trésor des Compétences Numériques</p>
            <div className="flex justify-center mt-2 space-x-2">
              <div className="w-8 h-1 bg-amber-600 rounded"></div>
              <div className="w-16 h-1 bg-amber-500 rounded"></div>
              <div className="w-8 h-1 bg-amber-600 rounded"></div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Section principale avec carte au trésor */}
      <main className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-amber-900/40 p-6 rounded-lg border-2 border-amber-700/60 shadow-lg mb-12">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-amber-800/60 rounded-full hidden sm:flex items-center justify-center border-2 border-amber-600/50">
                <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🧭</div>
                </div>
              </div>
              <div className="flex-1 sm:ml-6">
                <h2 className="text-2xl font-bold mb-3 text-amber-200 font-serif">Bienvenue, Moussaillon!</h2>
                <p className="text-amber-100 mb-2">Embarquez pour une aventure palpitante sur les mers du numérique! PIXEL est un jeu sérieux basé sur le référentiel PIX qui vous permet de tester et d'améliorer vos compétences numériques tout en vivant une véritable chasse au trésor.</p>
                <p className="text-amber-200 italic font-serif">"Que vous soyez novice ou expert des technologies, les défis qui vous attendent mettront à l'épreuve votre sagacité et vos connaissances!"</p>
              </div>
            </div>
          </div>
          
          {/* À propos du jeu */}
          <div className="bg-blue-950/40 p-6 rounded-lg border-2 border-blue-900/30">
            <h3 className="text-xl font-bold mb-4 text-amber-200 font-serif">À propos de PIXEL</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">Objectifs</h4>
                <ul className="list-disc pl-5 text-amber-100 space-y-1">
                  <li>Tester et renforcer vos compétences numériques</li>
                  <li>Apprendre en s'amusant grâce à une ambiance immersive</li>
                  <li>Préparer aux certifications PIX de manière ludique</li>
                  <li>Découvrir des astuces et bonnes pratiques numériques</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">Comment jouer</h4>
                <ol className="list-decimal pl-5 text-amber-100 space-y-1">
                  <li>Choisissez un défi parmi les propositions</li>
                  <li>Résolvez les énigmes pour avancer</li>
                  <li>Collectez les mots-clés qui vous aideront pour la suite</li>
                  <li>Terminez tous les défis pour devenir maître des mers numériques!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Pied de page */}
      <footer className="py-6 px-4 mt-12 border-t border-amber-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-400/70 font-serif">
            <span className="inline-block transform rotate-1">P</span>
            <span className="inline-block transform -rotate-1">I</span>
            <span className="inline-block">X</span>
            <span className="inline-block transform rotate-2">E</span>
            <span className="inline-block transform -rotate-1">L</span>
            {" "} — La Chasse au Trésor des Compétences Numériques
          </p>
          <p className="text-xs text-amber-200/40 mt-2">Inspiré par PIX — Développé avec passion à l'UTBM</p>
        </div>
      </footer>
      
      {/* Éléments décoratifs */}
      <div className="fixed bottom-10 left-4 w-20 h-20 opacity-10 pointer-events-none">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 border-4 border-amber-500 rounded-full"></div>
          <div className="absolute inset-4 border-2 border-amber-600 rounded-full"></div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-500"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-500 transform -translate-x-1/2"></div>
        </div>
      </div>
      <div className="fixed top-20 right-6 w-24 h-24 opacity-10 pointer-events-none">
        <div className="w-14 h-14 border-2 border-amber-500 rotate-45 transform"></div>
      </div>
        </div>
    );
}