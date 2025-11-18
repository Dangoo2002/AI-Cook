'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const allRecipes = [
  {
    name: 'Chicken Machboos',
    ingredients: ['chicken', 'rice', 'saffron', 'onions', 'spices'],
    time: '60 min',
    difficulty: 'Intermediate'
  },
  {
    name: 'Vegetable Salona',
    ingredients: ['mixed vegetables', 'tomatoes', 'onions', 'spices'],
    time: '45 min', 
    difficulty: 'Easy'
  },
  {
    name: 'Lamb Harees',
    ingredients: ['lamb', 'wheat', 'butter', 'spices'],
    time: '90 min',
    difficulty: 'Advanced'
  },
  {
    name: 'Luqaimat',
    ingredients: ['flour', 'dates', 'sugar', 'yeast'],
    time: '30 min',
    difficulty: 'Easy'
  }
]

export default function RecipeFinder() {
  const [ingredients, setIngredients] = useState('')
  const [recipes, setRecipes] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleFindRecipes = () => {
    const userIngredients = ingredients.toLowerCase().split(',').map(i => i.trim()).filter(i => i)
    
    const matchedRecipes = allRecipes.map(recipe => {
      const matchedIngredients = recipe.ingredients.filter(ingredient =>
        userIngredients.some(userIng => ingredient.includes(userIng))
      )
      const matchPercentage = Math.round((matchedIngredients.length / recipe.ingredients.length) * 100)
      
      return {
        ...recipe,
        match: `${matchPercentage}%`,
        matchedCount: matchedIngredients.length
      }
    }).filter(recipe => recipe.matchedCount > 0)
    .sort((a, b) => b.matchedCount - a.matchedCount)

    setRecipes(matchedRecipes)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Recipe Finder</h1>
            <p className="text-gray-600 mb-8">Enter ingredients you have, and AI will suggest perfect Emirati recipes</p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="mb-6">
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-3">
                  Enter your ingredients (comma separated)
                </label>
                <textarea
                  id="ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="e.g., chicken, rice, saffron, onions, tomatoes..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900"
                />
              </div>
              
              <button
                onClick={handleFindRecipes}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Find Recipes with AI
              </button>
            </div>

            {/* AI Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/recipe1.jpeg" 
                    alt="AI analyzing ingredient combinations"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-600">AI Ingredient Analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/recipe2.jpeg" 
                    alt="AI matching ingredients to traditional recipes"
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-600">AI Recipe Matching</p>
              </div>
            </div>
            
            {hasSearched && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {recipes.length > 0 ? 'Recommended Recipes' : 'No Recipes Found'}
                </h2>
                {recipes.length > 0 ? (
                  <div className="space-y-4">
                    {recipes.map((recipe, index) => (
                      <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{recipe.name}</h3>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                Match: {recipe.match}
                              </span>
                              <span>Time: {recipe.time}</span>
                              <span>Level: {recipe.difficulty}</span>
                            </div>
                            <p className="text-gray-700 mt-2">
                              Uses: {recipe.ingredients.join(', ')}
                            </p>
                          </div>
                          <button className="bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-colors">
                            Cook This
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No recipes match your ingredients. Try different items.</p>
                    <p className="text-sm text-gray-500">Common Emirati ingredients: chicken, lamb, rice, dates, saffron, spices</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}