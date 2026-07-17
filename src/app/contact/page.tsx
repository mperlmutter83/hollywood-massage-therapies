import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-teal-800 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Contact Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border rounded" />
            <select className="w-full px-4 py-3 border rounded"><option>Select a Service</option><option>Swedish Massage</option><option>Deep Tissue</option><option>Sports Massage</option><option>Hot Stone</option><option>Thai Massage</option><option>Couples Massage</option></select>
            <input type="date" className="w-full px-4 py-3 border rounded" />
            <textarea placeholder="Special requests or notes" rows={4} className="w-full px-4 py-3 border rounded"></textarea>
            <button type="submit" className="bg-teal-600 text-white px-6 py-3 font-bold hover:bg-teal-700">Book Appointment</button>
          </form>
          <div className="bg-teal-50 p-8 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
            <div className="mb-4"><h3 className="font-bold">Phone</h3><a href="tel:+13106945261" className="text-teal-600 text-xl font-bold">(310) 694-5261</a></div>
            <div className="mb-4"><h3 className="font-bold">Location</h3><p className="text-gray-600">Hollywood, CA</p></div>
            <div><h3 className="font-bold">Hours</h3><p className="text-gray-600">Mon-Sat: 10am - 8pm</p><p className="text-gray-600">Sun: 11am - 6pm</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
