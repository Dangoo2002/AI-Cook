'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
              <Image 
                src="/logo.jpeg" 
                alt="AICook Logo" 
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">AICook</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
            <Link href="/recipe-finder" className="text-gray-700 hover:text-gray-900 font-medium">Recipe Finder</Link>
            <Link href="/cooking-tutor" className="text-gray-700 hover:text-gray-900 font-medium">Cooking Tutor</Link>
            <Link href="/ingredient-search" className="text-gray-700 hover:text-gray-900 font-medium">Ingredient Search</Link>
            <Link href="/ethical-ai" className="text-gray-700 hover:text-gray-900 font-medium">Ethical AI</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/recipe-finder" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipe Finder
              </Link>
              <Link 
                href="/cooking-tutor" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cooking Tutor
              </Link>
              <Link 
                href="/ingredient-search" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ingredient Search
              </Link>
              <Link 
                href="/ethical-ai" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ethical AI
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}