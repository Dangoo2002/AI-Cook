'use client'
import { useState } from 'react'

const recipeData = [
  { id: 1, name: 'Chicken Machboos', category: 'Main Dish', ingredients: ['chicken', 'rice', 'spices'] },
  { id: 2, name: 'Harees', category: 'Main Dish', ingredients: ['wheat', 'meat', 'butter'] },
  { id: 3, name: 'Luqaimat', category: 'Dessert', ingredients: ['flour', 'dates', 'sugar'] },
  { id: 4, name: 'Salona', category: 'Main Dish', ingredients: ['vegetables', 'chicken', 'spices'] },
  { id: 5, name: 'Date Maamoul', category: 'Dessert', ingredients: ['dates', 'flour', 'butter'] }
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      const filtered = recipeData.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(query.toLowerCase())
        )
      )
      setResults(filtered)
      setShowResults(true)
    }
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    if (e.target.value.length > 2) {
      const filtered = recipeData.filter(recipe =>
        recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setResults(filtered.slice(0, 3)) // Show only 3 suggestions
    } else {
      setResults([])
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for recipes (e.g., chicken, rice, dates)..."
          className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-xl hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Search Suggestions */}
      {results.length > 0 && !showResults && (
        <div className="absolute z-10 w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-lg mt-2">
          {results.map(recipe => (
            <div 
              key={recipe.id}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => {
                setQuery(recipe.name)
                setResults([])
              }}
            >
              <div className="font-medium text-gray-900">{recipe.name}</div>
              <div className="text-sm text-gray-600">{recipe.category}</div>
            </div>
          ))}
        </div>
      )}

      {/* Search Results */}
      {showResults && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Search Results for "{query}"
            </h3>
            <button 
              onClick={() => setShowResults(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          </div>
          {results.length > 0 ? (
            <div className="space-y-3">
              {results.map(recipe => (
                <div key={recipe.id} className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">{recipe.name}</h4>
                  <p className="text-sm text-gray-600">Ingredients: {recipe.ingredients.join(', ')}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-4">No recipes found. Try different ingredients.</p>
          )}
        </div>
      )}
    </div>
  )
}