// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Componente para la Tarjeta de Servicio del Carrousel
const ServiceCard = ({ iconSrc, title, description }: { iconSrc: string; title: string; description: string }) => (
  <div className="service-card bg-gray-100 p-4 rounded-xl text-left shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 flex-shrink-0 w-64">
    {/* Uso de la clase arbitraria para el texto */}
    <div className="service-icon mb-4 w-20 h-20 mx-auto">
      <Image src={iconSrc} alt={title} width={80} height={80} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-[var(--color-finacc-green)]">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

// Componente para la Tarjeta del Simulador
const SimulatorCard = ({ iconSrc, title, href }: { iconSrc: string; title: string; href: string }) => (
  <div className="service1-card bg-gray-100 p-8 rounded-xl shadow-lg w-64 h-64 hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 flex-shrink-0">
    <div className="service1-icon mb-4 w-24 h-24 mx-auto">
      <Image src={iconSrc} alt={title} width={90} height={90} className="w-full h-full object-contain" />
    </div>
    {/* Uso de la clase arbitraria para el texto y hover */}
    <Link href={href} className="simulator-link font-extrabold text-base block mt-4 text-[var(--color-finacc-green)] hover:underline">
      {title}
    </Link>
  </div>
);

// El componente principal de la página
export default function HomePage() {
  return (
    <div className="text-gray-900 bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="logo">
          <Image src="/image1/imagen__11_-removebg-preview.png" alt="FINACC Logo" width={150} height={70} />
        </div>
        <nav>
          <ul className="flex space-x-6 list-none">
            {/* Uso de la clase arbitraria para el texto */}
            <li><Link href="#Home" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Home</Link></li>
            <li><Link href="#About" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">About</Link></li>
            <li><Link href="#services" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Services</Link></li>
            <li><Link href="#Simulators" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Simulators</Link></li>
            <li><Link href="#Contacts" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      {/* Uso de la clase arbitraria para la imagen de fondo */}
      <section id="Home" className="relative h-[85vh] flex items-center pl-14 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <Image
          className="w-full h-full object-cover bg-opacity-30"
          src= '/image1/pexels-weekendplayer-186464.jpg'
          alt="Hero Background"
          fill
          
          />
        </div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-5">Learn how to manage your finances!</h1>
          <p className="text-xl mb-8">At FINACC, we help teens manage money and make smart financial choices early on.</p>
          <div className="buttons flex space-x-5">
            <Link href="#" className="btn learn-more py-3 px-8 text-[var(--color-finacc-green)] bg-white font-bold rounded-md hover:bg-gray-200 transition">Learn More</Link>
            {/* Uso de la clase arbitraria para el fondo y hover */}
            <Link href="#" className="btn contact-us py-3 px-8 text-white bg-[var(--color-finacc-green)] font-bold rounded-md hover:bg-[var(--color-finacc-dark-green)] transition">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Services Section (Cards) */}
      <section className="services flex justify-between mx-auto w-11/12 my-12 text-black space-x-5">
        <div className="card bg-white p-8 rounded-xl shadow-md w-1/3 text-center">
          {/* Uso de la clase arbitraria para el texto */}
          <h3 className="mb-3 font-semibold text-xl text-[var(--color-finacc-green)]">Financial Planning</h3>
          <p className="mb-5 text-base">We offer personalized financial plans to help you achieve your financial goals</p>
          <Link href="#" className="card-btn font-bold transition text-[var(--color-finacc-green)] hover:text-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>
        <div className="card bg-white p-8 rounded-xl shadow-md w-1/3 text-center">
          <h3 className="mb-3 font-semibold text-xl text-[var(--color-finacc-green)]">Investment Strategies</h3>
          <p className="mb-5 text-base">Our experts provide guidance to help you make smart investment decisions and achieve long-term growth.</p>
          <Link href="#" className="card-btn font-bold transition text-[var(--color-finacc-green)] hover:text-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>
        <div className="card bg-white p-8 rounded-xl shadow-md w-1/3 text-center">
          <h3 className="mb-3 font-semibold text-xl text-[var(--color-finacc-green)]">Debt Management</h3>
          <p className="mb-5 text-base">We assist you in managing and reducing your debt to reach financial stability.</p>
          <Link href="#" className="card-btn font-bold transition text-[var(--color-finacc-green)] hover:text-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>
      </section>

      {/* Welcome/About Section */}
      <section id="About" className="welcome flex justify-between items-center p-12 bg-gray-50 text-black">
        <div className="welcome-text w-3/5 pr-10">
          <h2 className="mb-5 text-3xl font-bold text-[var(--color-finacc-green)]">Welcome to FINACC</h2>
          <p className="text-lg mb-5">We are FINACC. We provide financial consulting to help young people make smart financial decisions and achieve their goals. Our services include personalized financial planning, investment advice, and debt management. Join us and take the first step towards financial freedom.</p>
          {/* Uso de la clase arbitraria para el fondo y hover */}
          <Link href="#" className="btn know-more text-white py-3 px-6 rounded-md font-bold transition bg-[var(--color-finacc-green)] hover:bg-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>
        <div className="welcome-image w-2/5 flex justify-center items-center">
          <Image src="/image1/771c3f19-d43b-40e1-93c3-5efa4c42855e.png" alt="Financial Meeting" width={600} height={400} className="w-4/5 h-auto object-contain" />
        </div>
      </section>

      {/* Our Services Section (Carousel) */}
      <section id="services" className="our-services bg-white py-10 text-center text-black">
        <h2 className="mb-10 text-3xl font-bold text-[var(--color-finacc-green)]">Our Services</h2>
        <div className="carousel-container relative overflow-x-auto whitespace-nowrap px-8">
          <div className="carousel flex space-x-5 transition duration-500 ease-in-out">
            <ServiceCard 
              iconSrc="/image1/bca809c1-3fe8-4b00-9293-7b4e414b6b0d.png"
              title="VAT Demystified: What You Need to Know About Value-Added Tax"
              description="We are experts in financial planning with over 10 years of experience."
            />
            <ServiceCard 
              iconSrc="/image1/c0ead314-15d9-4463-aaf4-6add04a2667a.png"
              title="Best Practices for Responsible Credit Card Management"
              description="Expert insurance solutions to protect your future."
            />
            <ServiceCard 
              iconSrc="/image1/497e2489-fa7e-4ca2-9647-57dedef3c063.png"
              title="Step-by-Step Guide to Opening a Bank Account"
              description="Grow your wealth with our expert investment strategies."
            />
            <ServiceCard 
              iconSrc="/image1/05b761a6-5bf1-41c3-a140-0cf08e7c5c47.png"
              title="Financial planning for the future"
              description="Grow your wealth with our expert investment strategies."
            />
            <ServiceCard 
              iconSrc="/image1/5579f6c6-764f-4c72-9521-d989ef9ebaf1.png"
              title="Expense management through mobile apps: a more efficient solution"
              description="Grow your wealth with our expert investment strategies."
            />
          </div>
        </div>
      </section>

      {/* Simulators Section (Carousel) */}
      <section id="Simulators" className="our-simulators bg-white py-10 text-center text-black">
        <h2 className="mb-10 text-3xl font-bold text-[var(--color-finacc-green)]">Simulators</h2>
        <div className="carousel1-container relative overflow-x-auto whitespace-nowrap px-8">
          <div className="carousel1 flex space-x-5 justify-start transition duration-500 ease-in-out">
            <SimulatorCard
              iconSrc="/image1/5ef72bc9-8760-4283-858f-267aefe4abac.png"
              title="Income-tax return simulator"
              href="/simulator"
            />
            <SimulatorCard
              iconSrc="/image1/Costs and expenses.png"
              title="Costs and expenses"
              href="/simulator"
            />
            <SimulatorCard
              iconSrc="/image1/credit1.png"
              title="Credit card"
              href="/simulator"
            />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="Contacts" className="our-contacts bg-white py-10 text-center text-black">
        <h2 className="mb-10 text-3xl font-bold text-[var(--color-finacc-green)]">Contact Us</h2>
        <div className="carousel2-container relative overflow-x-auto whitespace-nowrap px-8">
          <div className="service2-card bg-gray-100 p-12 rounded-xl shadow-lg w-96 h-64 hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 mx-auto">
            {/* Contenido de contacto aquí */}
          </div>
        </div>
      </section>
    </div>
  );
}