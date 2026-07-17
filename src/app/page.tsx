import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    { name: 'Swedish Massage', desc: 'Classic relaxation massage using long, flowing strokes to ease tension and promote well-being.', price: '$80/60min' },
    { name: 'Deep Tissue Massage', desc: 'Targets deep muscle layers to release chronic tension and knots.', price: '$95/60min' },
    { name: 'Sports Massage', desc: 'Designed for athletes to improve performance and speed recovery.', price: '$100/60min' },
    { name: 'Hot Stone Massage', desc: 'Heated stones melt away stress and tension for deep relaxation.', price: '$110/60min' },
    { name: 'Thai Massage', desc: 'Traditional stretching and pressure techniques to increase flexibility.', price: '$90/60min' },
    { name: 'Couples Massage', desc: 'Share a relaxing experience with your partner in our couples suite.', price: '$160/60min' },
  ];
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
            {services.map((s, i) => (
              <div key={i} className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
                <p className="text-teal-600 font-bold">{s.price}</p>
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
