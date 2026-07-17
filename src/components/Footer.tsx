export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div><h3 className="font-bold text-lg mb-4">Hollywood Massage Therapies</h3><p className="text-teal-200">Relax. Restore. Rejuvenate.</p></div>
        <div><h4 className="font-bold mb-4">Contact</h4><a href="tel:+13106945261" className="text-teal-200">(310) 694-5261</a><p className="text-teal-200 mt-2">Hollywood, CA</p></div>
        <div><h4 className="font-bold mb-4">Hours</h4><p className="text-teal-200">Mon-Sat: 10am - 8pm</p><p className="text-teal-200">Sun: 11am - 6pm</p></div>
      </div>
    </footer>
  );
}
