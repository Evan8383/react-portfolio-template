import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar-svgrepo-com.svg';

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh] m-auto">
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center px-4 space-y-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I'm Evan Bennett</h1>
              <img src={ avatar } alt="Avatar" className='w-56 md:w-72 lg:w-96 m-auto p-6'/>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate and creative Web Developer with a focus on frontend technologies.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 text-center">
              <Link
                to="/portfolio"
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm border-gray-200 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-200">
          <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate and creative Web Developer with a strong focus on frontend technologies.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 text-center">
              <Link
                to="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm border-gray-200 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate and creative Web Developer with a strong focus on frontend technologies.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <QrCodeIcon className="h-10 w-10 rounded-lg" />
                <span className="text-sm font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <WindIcon className="h-10 w-10 rounded-lg" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ComponentIcon className="h-10 w-10 rounded-lg" />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RouterIcon className="h-10 w-10 rounded-lg" />
                <span className="text-sm font-medium">API routes</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}

function QrCodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

function RouterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6.01 18H6" />
      <path d="M10.01 18H10" />
      <path d="M15 10v4" />
      <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
      <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
    </svg>
  )
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
