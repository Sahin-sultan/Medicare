import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Sign in attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4 py-8 sm:py-12">
      <Card className="w-full max-w-[calc(100vw-2rem)] sm:max-w-md mx-auto shadow-xl">
        <CardHeader className="text-center space-y-2 sm:space-y-3 px-6 pt-8">
          <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome Back</CardTitle>
          <CardDescription className="text-base sm:text-lg">
            Sign in to access your medical services
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 px-6 pt-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm sm:text-base font-medium block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base sm:text-lg px-4"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm sm:text-base font-medium block">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base sm:text-lg px-4"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
              <label className="flex items-center space-x-3 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 border-2 rounded accent-primary"
                />
                <span className="text-sm sm:text-base">Remember me</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm sm:text-base text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-6 px-6 pb-8">
            <Button 
              type="submit" 
              size="lg"
              className="w-full h-12 text-base sm:text-lg font-semibold"
            >
              Sign In
            </Button>
            <p className="text-sm sm:text-base text-center">
              Don't have an account?{" "}
              <Link 
                to="/sign-up" 
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;