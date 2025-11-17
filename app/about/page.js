import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About AICook</h1>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                AICook represents the perfect fusion of traditional Emirati culinary heritage 
                with cutting-edge artificial intelligence technology. Our mission is to preserve 
                and share the rich flavors of Emirati cuisine while making it accessible to 
                everyone, from seasoned chefs to kitchen beginners.
              </p>

              {/* AI Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/ai-cooking-tech.jpg" 
                      alt="AI analyzing traditional Emirati cooking"
                      width={400}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600">AI analyzing traditional cooking techniques</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/ai-recipe-creation.jpg" 
                      alt="AI creating modern Emirati recipes"
                      width={400}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600">AI-powered recipe creation and adaptation</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
              <p>
                Born from a passion for both technology and traditional cooking, AICook 
                leverages artificial intelligence to help users discover, learn, and master 
                authentic Emirati recipes. Our AI system understands your available ingredients, 
                cooking skill level, and personal preferences to recommend the perfect dishes.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How AI Helps</h2>
              <p>
                Our intelligent system analyzes your pantry ingredients and suggests traditional 
                Emirati recipes you can prepare. It automatically adjusts portion sizes based on 
                the number of people you're cooking for and provides step-by-step guidance 
                tailored to your experience level.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-8 mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose AICook?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Smart recipe recommendations based on available ingredients
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Personalized cooking instructions for all skill levels
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Visual ingredient recognition technology
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Cultural preservation through modern technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}