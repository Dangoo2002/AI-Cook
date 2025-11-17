import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function EthicalAI() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Ethical AI & Privacy</h1>
            
            <div className="prose prose-lg text-gray-700 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Ethical AI</h2>
                <p>
                  At AICook, we believe in using artificial intelligence responsibly to enhance 
                  cultural preservation while respecting user privacy and maintaining transparency 
                  in our operations.
                </p>
              </div>

              {/* AI Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/ai-data-security.jpg" 
                      alt="AI data security and encryption"
                      width={400}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Secure AI Data Processing</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/ai-transparency.jpg" 
                      alt="Transparent AI systems"
                      width={400}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Transparent AI Operations</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Protection</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Data Security:</strong> All uploaded images and personal data are encrypted 
                      and stored securely. We never share your personal information with third parties.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Image Processing:</strong> Photos you upload for ingredient identification 
                      are processed anonymously and deleted after analysis.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Recipe Preferences:</strong> Your cooking preferences and skill level 
                      are used only to improve your experience and are never sold or shared.
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ethical AI Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparency</h3>
                    <p className="text-gray-700">
                      We clearly explain how our AI systems work and what data we collect. 
                      No hidden algorithms or mysterious processes.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Respect</h3>
                    <p className="text-gray-700">
                      Our AI is trained to respect and preserve authentic Emirati cooking 
                      traditions while making them accessible to everyone.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">User Control</h3>
                    <p className="text-gray-700">
                      You have full control over your data. Delete your account and all 
                      associated data at any time with one click.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Bias Prevention</h3>
                    <p className="text-gray-700">
                      We continuously monitor our AI systems to prevent cultural biases 
                      and ensure fair representation of all Emirati culinary traditions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Usage Policy</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>What we collect:</strong> Basic account information, recipe preferences, 
                    cooking skill level, and temporarily processed images for ingredient identification.
                  </p>
                  <p>
                    <strong>What we don't collect:</strong> Personal conversations, location data 
                    without permission, sensitive personal information.
                  </p>
                  <p>
                    <strong>How we use data:</strong> Solely to improve your cooking experience, 
                    provide personalized recipe recommendations, and enhance our AI systems.
                  </p>
                  <p>
                    <strong>Data retention:</strong> You can request deletion of your data at any time. 
                    Anonymous cooking data may be retained to improve our services.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Have questions about our AI ethics or privacy practices?
                </p>
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium">
                  Contact Our Ethics Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}