export type ServiceCategory = {
  title: string;
  services: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Relaxation & Wellness',
    services: [
      'Signature Therapeutic Massage',
      'Swedish Massage',
      'Hot Stone Massage (optional addition)',
      'Reiki & Sound Healing',
    ],
  },
  {
    title: 'Pain Relief & Recovery',
    services: [
      'Deep Tissue & Structural Integration',
      'Shiatsu Massage',
      'Sports Recovery Massage',
      'Mobility & Assisted Stretch Therapy',
    ],
  },
  {
    title: 'Specialized Wellness',
    services: [
      'Lymphatic Drainage Therapy',
      'Body Contouring & Sculpting',
      'Thai Massage',
      'Post-Op Massage',
    ],
  },
];
