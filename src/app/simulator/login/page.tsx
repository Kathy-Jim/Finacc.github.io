'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
    const [pageState, setPageState] = useState<'login' | 'selection' | 'declaration'>('login');

    const handleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();
        setPageState('selection');
    };

    const handleProceedDeclaration = () => {
        setPageState('declaration');
    };

    const handleDeclarationSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Declaración completada (Simulación).");
        setPageState('login');
    };

    return (
        <div className = "font-sans bg-gradient-to-r from-[var(--color-finacc-dark-green)] to-green-600 h-screen flex justify-center items-center">
            {/* Login Page Content */ }
    {
        pageState === 'login' && (
            <div id="login-page" className="login-box w-[700px] h-[400px] flex shadow-2xl bg-white rounded-2xl overflow-hidden">
                <div className="login-left w-1/2 p-10 flex flex-col justify-center">
                    <div className="logo">
                        <Image src="/image1/imagen__11_-removebg-preview.png" alt="Logo" width={100} height={100} className="mb-5" />
                    </div>
                    <h2 className="text-2xl mb-5 text-gray-800 font-bold">LOGIN</h2>
                    <form id="login-form" onSubmit={handleLoginSubmit} className="flex flex-col">
                        <input type="email" id="email" placeholder="Email Address" required className="p-3 mb-4 border border-gray-300 rounded-md text-sm" />
                        <input type="password" id="password" placeholder="Password" required className="p-3 mb-4 border border-gray-300 rounded-md text-sm" />
                        <div className="text-center mb-4">
                            {/* Uso de la clase arbitraria para el color del texto */}
                            <Link href="#" className="text-xs no-underline hover:underline text-[var(--color-finacc-dark-green)]">Forgot your password?</Link>
                        </div>
                        {/* Uso de la clase arbitraria para el fondo y hover */}
                        <button type="submit" className="p-3 border-none text-white text-sm cursor-pointer rounded-md transition bg-[var(--color-finacc-dark-green)] hover:bg-[var(--color-finacc-green)]">LOGIN</button>
                    </form>
                </div>
                <div className="login-right w-1/2 bg-[url('/image/pexels-weekendplayer-186461 (2).jpg')] bg-center bg-cover flex justify-center items-center text-white">
                    <div className="company-logo">
                        <Image src="/image1/imagen__11_-removebg-preview.png" alt="Company Logo" width={150} height={150} className="mb-8" />
                    </div>
                </div>
            </div>
        )
    }

    {/* Selection Page (Contenido simulado después del login) */ }
    {
        pageState === 'selection' && (
            <div id="selection-page" className="bg-white p-10 rounded-lg shadow-2xl text-center w-96">
                <h2 className="text-xl font-bold mb-5">Selección de Trámite</h2>
                <p className="mb-8">Elige tu siguiente paso:</p>
                <button onClick={handleProceedDeclaration} className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Proceder a la Declaración</button>
            </div>
        )
    }

    {/* Declaration Panel (Contenido simulado de la declaración) */ }
    {
        pageState === 'declaration' && (
            <div id="declaration-panel" className="bg-white p-10 rounded-lg shadow-2xl w-[600px]">
                {/* Uso de la clase arbitraria para el color del texto */}
                <h2 className="text-2xl font-bold mb-5 text-[var(--color-finacc-green)]">Panel de Declaración (Simulación)</h2>
                <p className="mb-8">Completa los campos para simular tu declaración de impuestos.</p>
                <form id="declaration-form" onSubmit={handleDeclarationSubmit} className="space-y-4">
                    <input type="text" placeholder="Ingreso Anual" required className="w-full p-3 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Deducciones" required className="w-full p-3 border border-gray-300 rounded-md" />
                    <div className="pt-5">
                        {/* Uso de la clase arbitraria para el fondo y hover */}
                        <button type="submit" className="p-3 text-white rounded-md transition w-full bg-[var(--color-finacc-green)] hover:bg-[var(--color-finacc-dark-green)]">Finalizar Declaración (Simulación)</button>
                    </div>
                </form>
            </div>
        )
    }
    </div >
    );
}