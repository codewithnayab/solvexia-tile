import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Droplets, Award, Star, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import productImage from "@/assets/product-packaging.jpg";

const Index = () => {
  const highlights = [
    {
      icon: Shield,
      title: "High Bond Strength",
      description: "Superior adhesion for long-lasting tile installation",
    },
    {
      icon: Droplets,
      title: "Water & Weather Resistant",
      description: "Complete protection against moisture and weather conditions",
    },
    {
      icon: Zap,
      title: "Easy Application",
      description: "Simple mixing and application process for all skill levels",
    },
    {
      icon: Award,
      title: "Long-Lasting Durability",
      description: "Engineered for 10+ years of reliable performance",
    },
  ];

  const products = [
    {
      name: "Tile Adhesive Grey",
      image: productImage,
      features: ["Waterproof", "Fast Setting", "C2 Grade"],
    },
    {
      name: "Tile Adhesive White",
      image: productImage,
      features: ["Premium White", "No Bleeding", "C2 Grade"],
    },
  ];

  const quickSpecs = [
    { label: "Coverage", value: "4-5 sqm per 25kg" },
    { label: "Open Time", value: "20-30 minutes" },
    { label: "Adhesion Strength", value: "≥ 1.0 N/mm²" },
    { label: "Tile Size", value: "Up to 60cm x 60cm" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }} // ✅ Using imported image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {/* ✅ replaced text-gradient with Tailwind gradient */}
            Solvexia
          </h1>

          <div className="mb-6">
            <p className="text-2xl mb-2 font-semibold">हर टाइल की मजबूती का भरोसा</p>
            <p className="text-xl text-white/90">Strong Bond, Lasting Beauty</p>
          </div>

          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/80">
            Premium quality tile adhesive engineered for superior performance and lasting durability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg border-white text-black hover:#0BE0F4 hover:text-primary"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* About Snippet */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Solvexia</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-4">
            हमारी कंपनी उच्च गुणवत्ता वाला टाइल एडहेसिव बनाती है जो मजबूत, टिकाऊ और विश्वसनीय है। हम ग्राहकों की संतुष्टि को प्राथमिकता देते हैं और भरोसे की पहचान हैं।
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Our company manufactures high-quality tile adhesive that is strong, durable, and reliable. We prioritize customer satisfaction and are known for trust and reliability.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>

      {/* Key Product Highlights */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Product Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-r from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tile adhesives available in grey and white variants
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg bg-white group hover:shadow-xl transition"
              >
                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link to="/products">
                    View Details
                    <ChevronRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Specs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Quick Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key performance parameters at a glance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickSpecs.map((spec, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md text-center bg-white hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
                <div className="text-muted-foreground font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90">
              Get technical datasheets, application guides, and expert support for your tile installation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Link to="/contact">Get Quote Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                <Link to="/application-guide">Download Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
