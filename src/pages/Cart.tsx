import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-muted-foreground">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <CardFooter className="mt-8">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-lg font-semibold">Total</p>
            <p className="text-2xl font-bold text-primary">₹{total.toFixed(2)}</p>
          </div>
          <Button size="lg" onClick={() => alert("Checkout functionality coming soon!")}>
            Proceed to Checkout
          </Button>
        </div>
      </CardFooter>
    </div>
  );
};

export default Cart;