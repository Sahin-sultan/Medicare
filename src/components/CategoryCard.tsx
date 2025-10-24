import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  itemCount: number;
}

const CategoryCard = ({ icon: Icon, title, itemCount }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] h-full">
      <CardContent className="p-3 sm:p-6 flex flex-col items-center justify-center h-full">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-2 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-full h-full text-primary-foreground" />
        </div>
        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-center group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground text-center">{itemCount} products</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
