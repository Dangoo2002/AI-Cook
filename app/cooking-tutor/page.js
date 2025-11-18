'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function CookingTutor() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userLevel, setUserLevel] = useState('beginner')

  const recipeSteps = [
    { step: 1, instruction: 'Wash and prepare the rice', duration: '5 min', tip: 'Rinse until water runs clear' },
    { step: 2, instruction: 'Marinate the chicken with spices', duration: '15 min', tip: 'Use traditional Emirati spice blend' },
    { step: 3, instruction: 'Sauté onions until golden brown', duration: '8 min', tip: 'Medium heat for even cooking' },
    { step: 4, instruction: 'Cook chicken with tomatoes and spices', duration: '20 min', tip: 'Cover to retain moisture' },
    { step: 5, instruction: 'Layer rice over chicken and simmer', duration: '25 min', tip: 'Low heat for perfect texture' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Cooking Tutor</h1>
            <p className="text-gray-600 mb-8">Step-by-step guidance tailored to your skill level</p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Chicken Machboos</h2>
                  <p className="text-gray-600">Traditional Emirati spiced rice with chicken</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select 
                    value={userLevel}
                    onChange={(e) => setUserLevel(e.target.value)}
                    className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 bg-white"
                  >
                    <option value="beginner" className="text-gray-900">Beginner</option>
                    <option value="intermediate" className="text-gray-900">Intermediate</option>
                    <option value="advanced" className="text-gray-900">Advanced</option>
                  </select>
                </div>
              </div>
              
              {/* AI Images for Current Step */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl h-32 mb-2 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/cooking1.jpeg" 
                      alt="AI visual cooking guidance"
                      width={200}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600">AI Visual Guide</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl h-32 mb-2 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/cooking2.jpeg" 
                      alt="AI voice assistance for cooking"
                      width={200}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600">AI Voice Assistant</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Step {recipeSteps[currentStep].step}: {recipeSteps[currentStep].instruction}
                  </h3>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                    {recipeSteps[currentStep].duration}
                  </span>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-medium">AI Tip:</span>
                    <span>{recipeSteps[currentStep].tip}</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / recipeSteps.length) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-colors disabled:opacity-50"
                  >
                    Previous
                  </button>
                  
                  <span className="text-gray-600">
                    Step {currentStep + 1} of {recipeSteps.length}
                  </span>
                  
                  <button
                    onClick={() => setCurrentStep(Math.min(recipeSteps.length - 1, currentStep + 1))}
                    disabled={currentStep === recipeSteps.length - 1}
                    className="bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    Next Step
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium">
                  Start Voice Guidance
                </button>
              </div>
            </div>
        
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Watch AI Cooking Tutor in Action</h2>
              <div className="max-w-3xl mx-auto">
                <video 
                  controls 
                  className="w-full rounded-2xl shadow-lg"
                  poster="/ai.mp4"
                >
                  <source src="/videos/ai-cooking-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-center text-gray-600 mt-4">
                  See how our AI provides step-by-step guidance for traditional Emirati cooking
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Voice-guided instructions in multiple languages
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Adaptive difficulty based on your skill level
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Real-time cooking tips and techniques
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Time management and progress tracking
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Skill Levels</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Beginner</h4>
                    <p className="text-sm text-gray-600">Detailed instructions with basic techniques</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Intermediate</h4>
                    <p className="text-sm text-gray-600">Standard instructions with pro tips</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Advanced</h4>
                    <p className="text-sm text-gray-600">Concise instructions for experienced cooks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}