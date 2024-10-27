import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4">
          ForeverHealing
        </h1>
        <p className="text-2xl md:text-3xl text-green-700 mb-8">
          Stop Managing. Start Reversing.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Reverse Type 2 Diabetes Naturally
          </h2>
          <p className="text-xl text-green-700 mb-6">
            Release the emotional baggage from your past trapped in your present pancreas. Experience a transformation:
          </p>
          <ul className="list-disc list-inside text-lg text-green-600 mb-6">
            <li>Lose weight effortlessly</li>
            <li>Feel younger and more energetic</li>
            <li>Eliminate worries about hidden health concerns</li>
            <li>Reduce or eliminate medication dependency</li>
          </ul>
          <Link
            href="/contact"
            className="bg-green-600 text-white text-xl px-8 py-3 rounded-full hover:bg-green-700 transition duration-300 inline-block"
          >
            Start Your Healing Journey
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pancreas%20Art-hXemO0cKe1Fz95Tb8EXHyUtE3rKvVM.jpg" 
            alt="Artistic rendering of a pancreas with floral elements" 
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Approach</h3>
          <p className="text-lg text-gray-700">
            We combine emotional healing techniques with holistic health practices to address the root cause of Type 2 Diabetes. By releasing trapped emotions, we help your body heal naturally.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Why Choose Us</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Personalized healing plans</li>
            <li>Experienced practitioners in emotional and energy healing</li>
            <li>Holistic approach addressing body, mind, and spirit</li>
            <li>Proven success in reversing Type 2 Diabetes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}