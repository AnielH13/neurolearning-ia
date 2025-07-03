export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0e0e0e] text-white relative">
      <h1 className="text-4xl font-bold mb-6 opacity-90">NeuroLink Learning</h1>

      <div className="flex gap-4">
        <button className="bg-[#1f1f1f] border border-gray-700 px-6 py-2 rounded-xl hover:bg-gray-800 transition">
          Iniciar demo
        </button>
        <button className="bg-[#1f1f1f] border border-gray-700 px-6 py-2 rounded-xl hover:bg-gray-800 transition">
          Comprar paquetes
        </button>
      </div>

      {/* Botón de perfil en la esquina inferior derecha */}
      <div className="absolute bottom-6 right-6">
        <button className="bg-[#1f1f1f] border border-gray-700 p-3 rounded-full hover:bg-gray-800 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A8 8 0 0112 4a8 8 0 016.879 13.804M15 21H9"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}