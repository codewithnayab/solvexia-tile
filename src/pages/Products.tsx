import { Badge } from "@/components/ui/badge";
import { Droplets, Zap, Leaf, Layers, Shield, Award } from "lucide-react";
import productImage from "@/assets/product-packaging.jpg";

const Products = () => {
  const products = [
    {
      name: "Solvexia Tile Adhesive - Grey",
      variant: "Standard Grey",
      image: productImage,
      description: "Industry-grade strength tile adhesive designed for interior and exterior applications. Perfect for all tile types with superior bonding.",
      features: ["Industry-Grade Strength", "Water & Weather Resistant", "Crack-Free Installation", "Easy Application"],
      packaging: "20 kg moisture-proof bags",
      shelfLife: "12 months from manufacturing date",
      price: "₹ 450 - 520 per bag"
    },
    {
      name: "Solvexia Tile Adhesive - White",
      variant: "Premium White",
      image: productImage,
      description: "Premium white adhesive for light-colored tiles and mosaics. Provides clean finish with long-lasting durability and eco-friendly composition.",
      features: ["Long-Lasting Durability", "Compatible with All Tiles", "Eco-Friendly & Safe", "No Color Bleeding"],
      packaging: "20 kg moisture-proof bags",
      shelfLife: "12 months from manufacturing date",
      price: "₹ 520 - 580 per bag"
    }
  ];

  const featureIcons = {
    "Industry-Grade Strength": Shield,
    "Water & Weather Resistant": Droplets,
    "Crack-Free Installation": Zap,
    "Easy Application": Leaf,
    "Long-Lasting Durability": Award,
    "Compatible with All Tiles": Layers,
    "Eco-Friendly & Safe": Leaf,
    "No Color Bleeding": Layers
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade tile adhesives engineered for superior performance, durability, and ease of application.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
          <div key={index} className="card-product group">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <Badge variant="secondary" className="mb-3">{product.variant}</Badge>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => {
                      const Icon = featureIcons[feature as keyof typeof featureIcons];
                      return (
                        <div key={feature} className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
                          {Icon && <Icon size={16} className="text-accent" />}
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground">Packaging</h5>
                    <p className="text-sm">{product.packaging}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground">Shelf Life</h5>
                    <p className="text-sm">{product.shelfLife}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-muted-foreground">Price Range</h5>
                    <p className="text-sm font-semibold text-accent">{product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Solvexia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">C2</span>
              </div>
              <h3 className="font-semibold mb-2">C2 Grade Classification</h3>
              <p className="text-sm text-muted-foreground">Meets EN 12004 standards for improved performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">24h</span>
              </div>
              <h3 className="font-semibold mb-2">Fast Curing</h3>
              <p className="text-sm text-muted-foreground">Quick setting for faster project completion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">IP</span>
              </div>
              <h3 className="font-semibold mb-2">Water Resistant</h3>
              <p className="text-sm text-muted-foreground">Excellent performance in wet areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;