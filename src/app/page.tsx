import Link from 'next/link';
import Image from 'next/image';
import { serviceCategories } from '@/lib/services';

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[500px] flex items-center">
        <Image src="/images/hero.jpg" alt="Massage" fill className="object-cover" />
        <div className="absolute inset-0 bg-teal-800/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
          <p className="text-teal-200 tracking-widest">Relax. Restore. Rejuvenate.</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">Hollywood Massage Therapies</h1>
          <p className="text-xl mb-6 max-w-2xl">Professional massage therapy services in the heart of Hollywood. Experience the healing power of therapeutic touch.</p>
          <Link href="/contact" className="inline-block bg-teal-600 px-8 py-3 font-medium hover:bg-teal-700">Book Your Massage</Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div key={category.title} className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                <h3 className="font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3 mb-4">
                  {category.services.map((service) => (
                    <li key={service} className="flex gap-3 text-gray-700 text-sm">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="text-teal-700 font-bold hover:text-teal-800">View services</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-teal-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Relax?</h2>
        <p className="mb-6">Book your appointment today and experience the difference.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-teal-800 px-8 py-3 font-bold hover:bg-gray-100">Book Now</Link>
          <a href="tel:+13106945261" className="border-2 border-white px-8 py-3 font-bold hover:bg-white/10">(310) 694-5261</a>
        </div>
      </section>
    </div>
  );
}
