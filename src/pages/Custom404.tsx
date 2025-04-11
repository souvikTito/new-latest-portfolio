
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const Custom404 = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
        <div className="container-custom max-w-2xl text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary">404</div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Go Back
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 glass rounded-xl p-6 animate-fade-in">
            <h2 className="font-bold mb-4">Looking for something specific?</h2>
            <p className="text-muted-foreground mb-4">
              Try navigating using the menu above or check out these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link to="/projects">Projects</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/blog">Blog</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
