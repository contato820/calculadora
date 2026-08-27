'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-100 text-slate-800">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Calculadora de Gesso & Drywall</h1>
        <p className="text-sm text-slate-600">Escolha o modo de cálculo para iniciar o orçamento:</p>
        
        <div className="flex flex-col gap-3">
          <Link href="/simples" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition shadow-sm">
            📐 Modo Simples (Retangular)
          </Link>
          <Link href="/cad" className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 rounded-xl text-sm transition shadow-sm">
            ✏️ Modo CAD (Desenho Livre)
          </Link>
          <Link href="/configuracoes" className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2.5 rounded-xl text-sm transition">
            ⚙️ Configurar Preços
          </Link>
        </div>
      </div>
    </main>
  );
}