import { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div>
      <section className="bg-teal-800 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">About Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">At Hollywood Massage Therapies, we believe that everyone deserves the healing benefits of professional massage. Our licensed massage therapists bring years of experience and a passion for helping clients feel their best.</p>
          <p className="text-gray-600 mb-4">Located in the heart of Hollywood, we offer a peaceful escape from the hustle and bustle of city life. Our spa is designed to provide a serene environment where you can truly relax and recharge.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Therapists</h2>
          <p className="text-gray-600">Each of our massage therapists is licensed, insured, and trained in multiple massage modalities. We continuously update our skills to bring you the latest and most effective techniques.</p>
        </div>
      </section>
    </div>
  );
}
