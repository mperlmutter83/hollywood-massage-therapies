import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  const services = [
    { name: 'Swedish Massage', desc: 'Classic relaxation massage using long, flowing strokes.', durations: [{ time: '60 min', price: '$80' }, { time: '90 min', price: '$115' }] },
    { name: 'Deep Tissue Massage', desc: 'Targets deep muscle layers to release chronic tension.', durations: [{ time: '60 min', price: '$95' }, { time: '90 min', price: '$135' }] },
    { name: 'Sports Massage', desc: 'For athletes to improve performance and recovery.', durations: [{ time: '60 min', price: '$100' }, { time: '90 min', price: '$145' }] },
    { name: 'Hot Stone Massage', desc: 'Heated stones for deep relaxation.', durations: [{ time: '60 min', price: '$110' }, { time: '90 min', price: '$155' }] },
    { name: 'Thai Massage', desc: 'Traditional stretching and pressure techniques.', durations: [{ time: '60 min', price: '$90' }, { time: '90 min', price: '$130' }] },
    { name: 'Couples Massage', desc: 'Share the experience with a partner.', durations: [{ time: '60 min', price: '$160' }, { time: '90 min', price: '$230' }] },
  ];
  return (
    <div>
      <section className="bg-teal-800 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Our Services</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
              <div className="flex gap-4">{s.durations.map((d, j) => <span key={j} className="text-teal-700 font-medium">{d.time}: {d.price}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
