import { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/lib/services';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-teal-100 mt-3 max-w-2xl">Massage therapy and wellness services grouped by goal, so you can find the right session faster.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <div key={category.title} className="bg-teal-50 p-6 rounded-lg border border-teal-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service} className="flex gap-3 text-gray-700">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center bg-teal-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-3">Not sure which service is right for you?</h2>
          <p className="text-teal-100 mb-6">Call or send a message and we’ll help you choose the best session for your goals.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-800 px-8 py-3 font-bold hover:bg-gray-100">Book Now</Link>
        </div>
      </section>
    </div>
  );
}
