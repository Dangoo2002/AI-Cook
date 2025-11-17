import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Have questions about Emirati cooking? Need help with a recipe? 
                  Our AI assistant and team are here to help you master traditional 
                  Emirati cuisine.
                </p>

                {/* AI Images Section */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-2xl h-32 mb-2 flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/images/ai-support.jpg" 
                        alt="AI customer support assistance"
                        width={200}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-xs text-gray-600">AI Support System</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-2xl h-32 mb-2 flex items-center justify-center overflow-hidden">
                      <Image 
                        src="/images/ai-chatbot.jpg" 
                        alt="AI chatbot for cooking help"
                        width={200}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-xs text-gray-600">AI Cooking Assistant</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">support@aicook.ae</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Based in UAE</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Cooking Assistant</h3>
                  <p className="text-gray-700 mb-4">
                    Quick cooking questions? Try our AI chatbot for instant help with recipes and techniques.
                  </p>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    Chat with AI Assistant
                  </button>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}