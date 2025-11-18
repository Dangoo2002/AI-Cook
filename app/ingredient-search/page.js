'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function IngredientSearch() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [identifiedIngredient, setIdentifiedIngredient] = useState('')

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setTimeout(() => {
          setIdentifiedIngredient('Dates')
        }, 1500)
      }
      reader.readAsDataURL(file)
    }
  }

  const ingredients = [
    { name: 'Dates', recipes: ['Date Maamoul', 'Stuffed Dates', 'Date Syrup'] },
    { name: 'Saffron', recipes: ['Saffron Rice', 'Machboos', 'Harees'] },
    { name: 'Cardamom', recipes: ['Arabic Coffee', 'Spice Blends', 'Desserts'] },
    { name: 'Rose Water', recipes: ['Luqaimat', 'Arabic Sweets', 'Desserts'] }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Visual Ingredient Search</h1>
            <p className="text-gray-600 mb-8">Upload a photo of any ingredient, and AI will identify it and suggest Emirati recipes</p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Ingredient Photo</h3>
                <p className="text-gray-600 mb-4">Take a clear photo of any ingredient</p>
                
                <label className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium cursor-pointer inline-block">
                  Choose Image
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              {uploadedImage && (
                <div className="text-center">
                  <div className="max-w-md mx-auto mb-6">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded ingredient" 
                      className="rounded-2xl mx-auto max-h-64"
                    />
                  </div>
                  
                  {identifiedIngredient && (
                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        AI Identification: {identifiedIngredient}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        This ingredient is commonly used in traditional Emirati cuisine.
                      </p>
                      <button className="bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors">
                        View Recipe Suggestions
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* AI Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/ingredient1.jpeg" 
                    alt="AI computer vision recognizing ingredients"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-600">AI Computer Vision Analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/ingredient2.jpeg" 
                    alt="AI matching ingredients to recipes"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-600">AI Recipe Matching System</p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Emirati Ingredients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{ingredient.name}</h3>
                    <div className="space-y-2">
                      {ingredient.recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                          {recipe}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How Visual Search Works</h3>
              <p className="text-gray-700 mb-6">
                Our AI uses advanced computer vision technology to identify ingredients from photos. 
                The system is trained on thousands of images of traditional Emirati ingredients 
                and can recognize even regional variations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-gray-700 font-medium">Upload Photo</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-gray-700 font-medium">AI Identification</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-gray-700 font-medium">Recipe Suggestions</p>
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