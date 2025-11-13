// app/simulator/page.tsx

'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent } from 'react';

export default function SimulatorPage() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        window.location.href = "/simulator/login";
    };

    return (
        <div className="font-sans bg-gray-100 text-gray-800 min-h-screen">
            <header className="bg-white p-3 border-b-2 border-[var(--color-finacc-green)]">
                <div className="flex items-center justify-between mx-auto max-w-6xl">
                    <Image src="/image/imagen__11_-removebg-preview.png" alt="Logo Ministerio de Hacienda" width={175} height={65} className="mr-5" />
                    <div>
                        {/* Uso de la clase arbitraria para el color del texto */}
                        <h1 className="text-[var(--color-finacc-green)] text-xl text-center font-bold">Income-tax return Simulator</h1>
                    </div>
                </div>
            </header>

            <section className="bg-blue-100 text-center p-3 mt-3 border-t border-b border-[var(--color-finacc-green)]">
                <p className="text-sm"><strong>Use this simulator to practice your income-tax return:</strong></p>
            </section>

            <main className="flex justify-center p-5 max-w-6xl mx-auto space-x-8">
                <div className="login-container bg-white p-12 rounded-lg shadow-lg w-1/2">
                    {/* Uso de la clase arbitraria para el color del texto */}
                    <h3 className="text-[var(--color-finacc-green)] mb-3 text-2xl font-semibold">Welcome</h3>
                    <p className="mb-8">Write your NIT/DUI and password to sign in to system.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label htmlFor="nitdui" className="block text-gray-700 font-medium">NIT/DUI</label>
                        <input type="text" id="nitdui" placeholder="22222222-2" required className="w-full p-2 border border-gray-300 rounded-md" />

                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input type="password" id="password" placeholder="***" required className="w-full p-2 border border-gray-300 rounded-md" />

                        <div className="flex justify-between pt-5">
                            {/* Uso de la clase arbitraria para el fondo y hover */}
                            <button type="reset" className="py-2 px-4 bg-[var(--color-finacc-green)] text-white rounded-md cursor-pointer hover:bg-green-700 transition">Clean</button>
                            <button type="submit" className="py-2 px-4 bg-[var(--color-finacc-green)] text-white rounded-md cursor-pointer hover:bg-green-800 transition">Enter</button>
                        </div>
                    </form>
                </div>

                <aside className="w-1/4">
                    {/* Uso de la clase arbitraria para el color del texto */}
                    <h4 className="mb-4 text-[var(--color-finacc-green)] font-semibold text-lg">Step-by-Step</h4>
                    <ul className="list-none space-y-2">
                        {/* Uso de la clase arbitraria para el color del texto */}
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Recover Password</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Sign Up Online</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Change Email Online</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">VAT Declaration</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Account Payment Declaration</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Income Tax Declaration</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Real Estate Transfer</Link></li>
                        <li><Link href="#" className="text-[var(--color-finacc-green)] hover:underline">Capital Gains and/or Losses Report</Link></li>
                    </ul>
                </aside>
            </main>
        </div>
    );
}