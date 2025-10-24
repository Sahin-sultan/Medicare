import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Add grid pattern background style
const bgGridPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z' fill='currentColor' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`;

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: 'prescription' | 'otc' | 'supplements' | 'wellness';
  medicineInfo?: {
    description: string;
    features: string[];
    dosage: string;
  };
}

import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  category = 'otc',
  medicineInfo 
}: ProductCardProps) => {
  const { toast } = useToast();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group relative overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-px border border-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="p-3 sm:p-4">
        {/* Mobile-optimized product image section */}
        <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 mb-4">
          {/* Background pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{ backgroundImage: bgGridPattern }} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          </div>
          
          {/* Medicine image placeholder with better mobile sizing */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              {/* Placeholder bottle shape */}
              <div className="absolute inset-0 bg-white/80 rounded-lg shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary/10 to-transparent rounded-t-lg" />
              </div>
              {/* Medicine icon */}
              <svg className="absolute inset-0 w-full h-full text-primary/20 p-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>

          {/* Badges with improved positioning and stacking */}
          <div className="absolute top-2 left-2 right-2 flex flex-row justify-between items-start gap-2">
            <div className="flex flex-col gap-2">
              {discount > 0 && (
                <Badge variant="destructive" className="text-xs font-medium px-2.5 py-1 shadow-sm">
                  {discount}% OFF
                </Badge>
              )}
            </div>
            <Badge 
              variant="secondary" 
              className="text-xs font-medium px-2.5 py-1 shadow-sm bg-white/90 text-primary"
            >
              {category === 'otc' ? 'OTC' : category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Product title with improved typography and spacing */}
        <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Improved rating section layout */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              ({reviews.toLocaleString()} reviews)
            </span>
          </div>
        </div>
        
        <div className="space-y-3">
          {medicineInfo && (
            <div className="bg-muted/50 rounded-lg p-3 sm:p-4 space-y-2.5">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {medicineInfo.description}
              </p>
              {medicineInfo.features.length > 0 && (
                <div className="space-y-1.5">
                  <p className="text-xs sm:text-sm font-medium">Key Features:</p>
                  <ul className="text-xs sm:text-sm text-muted-foreground list-disc list-inside space-y-1">
                    {medicineInfo.features.map((feature, index) => (
                      <li key={index} className="leading-relaxed">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {medicineInfo.dosage && (
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs sm:text-sm font-medium">Recommended Dosage:</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {medicineInfo.dosage}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0 flex flex-col gap-4">
        {/* Price and Discount Section */}
        <div className="flex items-baseline gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-bold text-primary">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm sm:text-base text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {originalPrice && (
            <span className="text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              Save ₹{(originalPrice - price).toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button
            variant="default"
            className="flex-1 h-11 sm:h-10 text-sm font-medium gap-2 shadow-sm"
            onClick={() => {
              toast({
                title: "Added to Cart",
                description: `${name} has been added to your cart.`,
                duration: 3000,
              });
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
          <Button 
            className="flex-1 h-11 sm:h-10 text-sm font-medium shadow-sm" 
            variant="outline"
            onClick={() => {
              toast({
                title: "Medicine Details",
                description: `View detailed information about this ${category} medicine and its usage guidelines.`,
                duration: 3000,
              });
            }}
          >
            View Details
          </Button>
        </div>

        {/* Express Delivery Badge */}
        <div className="flex items-center justify-center gap-2 py-1 px-3 bg-muted/50 rounded-full">
          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 8V2H7a2 2 0 0 0-2 2v16m0 0a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2M5 20v-3a2 2 0 0 1 2-2h6m6-8h-3a2 2 0 0 0-2 2v11" />
            <path d="m17 14 2 2 4-4" />
          </svg>
          <span className="text-xs text-muted-foreground">Express Delivery Available</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
