import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import DoctorCard from "@/components/DoctorCard";
import EcgBackground from "@/components/EcgBackground";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const Index = () => {
  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      specialization: "Cardiologist",
      degrees: ["MBBS", "MD", "DM"],
      experience: 12,
      schedule: [
        { day: "Monday", times: ["9:00 AM - 1:00 PM", "4:00 PM - 8:00 PM"] },
        { day: "Wednesday", times: ["10:00 AM - 2:00 PM", "5:00 PM - 9:00 PM"] },
        { day: "Friday", times: ["9:00 AM - 1:00 PM", "4:00 PM - 8:00 PM"] }
      ],
      consultationFee: 1500
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      specialization: "Pediatrician",
      degrees: ["MBBS", "MD"],
      experience: 8,
      schedule: [
        { day: "Tuesday", times: ["9:00 AM - 1:00 PM", "4:00 PM - 8:00 PM"] },
        { day: "Thursday", times: ["10:00 AM - 2:00 PM", "5:00 PM - 9:00 PM"] },
        { day: "Saturday", times: ["9:00 AM - 2:00 PM"] }
      ],
      consultationFee: 1200
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      specialization: "Dermatologist",
      degrees: ["MBBS", "MD", "DVL"],
      experience: 10,
      schedule: [
        { day: "Monday", times: ["2:00 PM - 6:00 PM"] },
        { day: "Wednesday", times: ["2:00 PM - 6:00 PM"] },
        { day: "Saturday", times: ["10:00 AM - 2:00 PM", "3:00 PM - 7:00 PM"] }
      ],
      consultationFee: 1800
    },
    {
      id: "4",
      name: "Dr. James Wilson",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      specialization: "Neurologist",
      degrees: ["MBBS", "MD", "DM"],
      experience: 15,
      schedule: [
        { day: "Tuesday", times: ["9:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"] },
        { day: "Thursday", times: ["10:00 AM - 2:00 PM", "4:00 PM - 8:00 PM"] },
        { day: "Friday", times: ["2:00 PM - 8:00 PM"] }
      ],
      consultationFee: 2000
    }
  ];

  const featuredMedicines = [
    {
      id: "1",
      name: "Paracetamol 500mg Tablets",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 324,
      category: 'otc' as const,
      medicineInfo: {
        description: "Fast-acting pain relief medication for headaches, fever, and mild to moderate pain.",
        features: ["Rapid pain relief", "Reduces fever", "Easy to swallow tablets"],
        dosage: "1-2 tablets every 4-6 hours as needed. Maximum 8 tablets in 24 hours."
      }
    },
    {
      id: "2",
      name: "Amoxicillin 250mg Capsules",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 512,
      category: 'prescription' as const,
      medicineInfo: {
        description: "Broad-spectrum antibiotic for treating bacterial infections.",
        features: ["Treats respiratory infections", "Effective against many bacteria", "Well-tolerated"],
        dosage: "As prescribed by your healthcare provider. Typically 1 capsule 3 times daily."
      }
    },
    {
      id: "3",
      name: "Vitamin D3 1000IU Supplements",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 298,
      category: 'supplements' as const,
      medicineInfo: {
        description: "Essential vitamin supplement for bone health and immune system support.",
        features: ["Supports bone strength", "Enhances immune function", "Easy absorption"],
        dosage: "1 tablet daily with meals or as directed by healthcare provider."
      }
    },
    {
      id: "4",
      name: "Ibuprofen 400mg Tablets",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 189,
      category: 'otc' as const,
      medicineInfo: {
        description: "Anti-inflammatory pain reliever for headaches, dental pain, and muscle aches.",
        features: ["Reduces inflammation", "Long-lasting relief", "Works within 30 minutes"],
        dosage: "1 tablet every 4-6 hours after meals. Maximum 4 tablets in 24 hours."
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <EcgBackground />
      <Navbar />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section id="home" className="h-[90vh] pt-16">
          <FadeIn>
            <Hero />
          </FadeIn>
        </section>

        {/* Medicines Section */}
        <section id="medicines" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Medicines</h2>
                <p className="text-muted-foreground">Browse our selection of quality healthcare products</p>
              </div>
            </FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMedicines.map((product, index) => (
                  <FadeIn key={product.id} delay={index * 0.1} direction="up">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                    <ProductCard 
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      rating={product.rating}
                      reviews={product.reviews}
                      category={product.category}
                      medicineInfo={product.medicineInfo}
                    />
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className="py-16 bg-zinc-50/80">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Specialists</h2>
            </FadeIn>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctors.map((doctor, index) => (
                  <FadeIn key={doctor.id} delay={index * 0.1} direction="up">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <DoctorCard {...doctor} />
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose MediCare?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent p-3">
                  <svg className="w-full h-full text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Genuine Products</h3>
                <p className="text-muted-foreground">All medicines sourced directly from licensed manufacturers</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent p-3">
                  <svg className="w-full h-full text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable Delivery</h3>
                <p className="text-muted-foreground">Quick delivery to your doorstep within 24-48 hours</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent p-3">
                  <svg className="w-full h-full text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                <p className="text-muted-foreground">Our healthcare experts are always here to help you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground/5 border-t border-border py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                    <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    MediCare
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your trusted partner for healthcare and wellness products.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Medicines</li>
                  <li>Supplements</li>
                  <li>Personal Care</li>
                  <li>Wellness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Email: support@medicare.com</li>
                  <li>Phone: +91 1234567890</li>
                  <li>Hours: 24/7</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 MediCare. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;