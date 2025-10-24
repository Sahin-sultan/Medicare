import ProductCard from "@/components/ProductCard";

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    name: "Paracetamol 500mg Tablets",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 128,
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
    rating: 4.8,
    reviews: 256,
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
    reviews: 89,
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
    reviews: 167,
    category: 'otc' as const,
    medicineInfo: {
      description: "Anti-inflammatory pain reliever for headaches, dental pain, and muscle aches.",
      features: ["Reduces inflammation", "Long-lasting relief", "Works within 30 minutes"],
      dosage: "1 tablet every 4-6 hours after meals. Maximum 4 tablets in 24 hours."
    }
  }
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Medicines & Healthcare Products</h1>
        <p className="text-muted-foreground">Browse our wide selection of medicines, supplements, and healthcare essentials</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;