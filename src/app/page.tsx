"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ============================
   ServiceCard
   ============================ */
type ServiceCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description }) => (
  <div className="service-card bg-gray-100 p-4 rounded-xl text-left shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 flex-shrink-0 w-64 min-h-[260px] overflow-hidden">
    <div className="service-icon mb-4 w-20 h-20 mx-auto">
      <Image src={iconSrc} alt={title} width={80} height={80} className="w-full h-full object-contain" />
    </div>

    <h3 className="text-lg font-semibold mb-2 text-[var(--color-finacc-green)] whitespace-normal">{title}</h3>
    <p className="text-sm whitespace-normal">{description}</p>
  </div>
);

/* ============================
   SimulatorCard
   ============================ */
type SimulatorCardProps = {
  iconSrc: string;
  title: string;
  href: string;
};

const SimulatorCard: React.FC<SimulatorCardProps> = ({ iconSrc, title, href }) => (
  <div className="service1-card bg-gray-100 p-8 rounded-xl shadow-lg w-64 h-64 hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 flex-shrink-0 overflow-hidden">
    <div className="service1-icon mb-4 w-24 h-24 mx-auto">
      <Image src={iconSrc} alt={title} width={90} height={90} className="w-full h-full object-contain" />
    </div>

    <Link href={href} className="simulator-link font-extrabold text-base block mt-4 text-[var(--color-finacc-green)] hover:underline whitespace-normal">
      {title}
    </Link>
  </div>
);

/* ============================
   Page
   ============================ */
export default function HomePage() {
  return (
    <div className="text-gray-900 bg-white">

      {/* HEADER */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="logo">
          <Image src="/image1/imagen__11_-removebg-preview.png" alt="FINACC Logo" width={150} height={70} />
        </div>

        <nav>
          <ul className="flex space-x-6 list-none">
            <li><Link href="#Home" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Home</Link></li>
            <li><Link href="#About" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">About</Link></li>
            <li><Link href="#services" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Services</Link></li>
            <li><Link href="#Simulators" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Simulators</Link></li>
            <li><Link href="#Contacts" className="font-bold hover:text-gray-400 transition text-[var(--color-finacc-green)]">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="Home" className="relative h-[85vh] flex items-center pl-14 bg-cover bg-center">
        {/* Background image fill wrapper */}
        <div className="absolute inset-0">
          <Image
            src="/image1/pexels-weekendplayer-186464.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-white max-w-4xl">
          <h1 className="text-5xl font-bold mb-5">Learn how to manage your finances!</h1>
          <p className="text-xl mb-8">At FINACC, we help teens manage money and make smart financial choices early on.</p>

          <div className="buttons flex space-x-5">
            <Link href="#" className="btn learn-more py-3 px-8 text-[var(--color-finacc-green)] bg-white font-bold rounded-md hover:bg-gray-200 transition">
              Learn More
            </Link>

            <a href="#Contacts" className="btn contact-us py-3 px-8 text-white bg-[var(--color-finacc-green)] font-bold rounded-md hover:bg-[var(--color-finacc-dark-green)] transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="services flex flex-col lg:flex-row justify-between mx-auto w-11/12 my-12 text-black space-y-6 lg:space-y-0 lg:space-x-5">
        <div className="card bg-white p-8 rounded-xl shadow-md flex-1 text-center">
          <h3 className="mb-3 font-semibold text-xl text-[var(--color-finacc-green)]">Financial Planning</h3>
          <p className="mb-5 text-base">We offer personalized financial plans to help you achieve your financial goals</p>
          <Link href="#" className="card-btn font-bold transition text-[var(--color-finacc-green)] hover:text-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>

        <div className="card bg-white p-8 rounded-xl shadow-md flex-1 text-center">
          <h3 className="mb-3 font-semibold text-xl text-[var(--color-finacc-green)]">Investment Strategies</h3>
          <p className="mb-5 text-base">Our experts provide guidance to help you make smart investment decisions and achieve long-term growth.</p>
          <Link href="#" className="card-btn font-bold transition text-[var(--color-finacc-green)] hover:text-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>

        <div className="card bg-white p-8 rounded-xl shadow-md flex-1 text-center">
          <h3 className="mb-3 font-semibold text-xl text-[var(--color-finacc-green)]">Debt Management</h3>
          <p className="mb-5 text-base">We assist you in managing and reducing your debt to reach financial stability.</p>
          <Link href="#" className="card-btn font-bold transition text-[var(--color-finacc-green)] hover:text-[var(--color-finacc-dark-green)]">READ MORE</Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="About" className="welcome flex flex-col lg:flex-row justify-between items-center p-12 bg-gray-50 text-black">
        <div className="welcome-text w-full lg:w-3/5 pr-0 lg:pr-10 mb-8 lg:mb-0">
          <h2 className="mb-5 text-3xl font-bold text-[var(--color-finacc-green)]">Welcome to FINACC</h2>
          <p className="text-lg mb-5">
            We are FINACC. We provide financial consulting to help young people make smart financial decisions and achieve their goals.
          </p>

          <Link href="#" className="btn know-more text-white py-3 px-6 rounded-md font-bold transition bg-[var(--color-finacc-green)] hover:bg-[var(--color-finacc-dark-green)]">
            READ MORE
          </Link>
        </div>

        <div className="welcome-image w-full lg:w-2/5 flex justify-center items-center">
          <Image
            src="/image1/771c3f19-d43b-40e1-93c3-5efa4c42855e.png"
            alt="Financial Meeting"
            width={600}
            height={400}
            className="w-4/5 h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
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

      {/* SIMULATORS */}
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

      {/* CONTACT */}
      <section id="Contacts" className="our-contacts bg-white py-10 text-center text-black">
        <h2 className="mb-10 text-3xl font-bold text-[var(--color-finacc-green)]">Contact Us</h2>

        <div className="carousel2-container relative overflow-x-auto whitespace-nowrap px-8">
          <div className="service2-card bg-gray-100 p-12 rounded-xl shadow-lg w-96 h-64 hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 mx-auto flex flex-col items-center justify-center">

            {/* EMAIL -> Abre Gmail con el mensaje ya listo */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lopez.emelym0@gmail.com&su=Hello%20Emely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-finacc-green)] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[var(--color-finacc-dark-green)] transition mb-6"
            >
              Send me an email
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/emely-l%C3%B3pez-0aa6b3368"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[var(--color-finacc-green)] font-semibold hover:underline"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.247-1.342-1.247-.822 0-1.359.538-1.359 1.247 0 .694.52 1.248 1.327 1.248h.016zm4.908 8.212h2.4v-3.992c0-.213.16-.426.078-.577.172-.426.564-.868 1.223-.868 0 0 1.087 0 1.087 1.124v4.313h2.4V9.59c0-2.24-1.196-3.281-2.79-3.281-1.292 0-1.872.71-2.193 1.21h.016V6.169h-2.4c.031.68 0 7.225 0 7.225z"/>
              </svg>

              <span>Visit my LinkedIn</span>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
