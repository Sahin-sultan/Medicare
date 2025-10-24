import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Sign in to access your profile.</p>
            <Button>Sign In</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Sign in to view your order history.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;