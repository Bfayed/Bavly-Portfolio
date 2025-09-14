
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Lock, Mail, User } from "lucide-react";

const SignUpSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [signUpComplete, setSignUpComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

 
    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const validateForm = () => {

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
 
    setTimeout(() => {
      console.log("Sign up form submitted:", formData);
      
      setSignUpComplete(true);
      setIsSubmitting(false);
      
      toast({
        title: "Account created!",
        description: "You have successfully signed up. Welcome to the community!",
      });
    }, 1500);
  };

  return (
    <section id="signup" className="bg-gradient-to-b from-secondary/20 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto glass-card p-8 border border-primary/10 animate-fade-in">
          {!signUpComplete ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center">Join the Community</h2>
              <p className="text-foreground/70 text-center mb-8">
                Sign up to get notified about new projects, blogs, and events.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field pl-10"
                      placeholder="Bavly Fayed"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="signupEmail" className="block text-sm font-medium text-foreground/80 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      id="signupEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field pl-10"
                      placeholder="Bavly@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground/80 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50">
                      <Lock size={18} />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className={`input-field pl-10 ${passwordError ? 'border-destructive/50' : ''}`}
                      placeholder="password here"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground/80 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/50">
                      <Lock size={18} />
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className={`input-field pl-10 ${passwordError ? 'border-destructive/50' : ''}`}
                      placeholder="confirm password here"
                    />
                  </div>
                  {passwordError && <p className="text-destructive text-sm mt-1">{passwordError}</p>}
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
                
                <p className="text-sm text-center text-foreground/60 mt-6">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/20 text-primary">
                  <CheckCircle size={48} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Registration Successful!</h3>
              <p className="text-foreground/70 mb-6">
                Thank you for joining our community! You'll start receiving updates soon.
              </p>
              <button
                onClick={() => setSignUpComplete(false)}
                className="text-primary hover:underline"
              >
                Register another account
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
