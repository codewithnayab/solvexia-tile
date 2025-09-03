import { Award, Target, Users, Lightbulb, Eye, Droplets } from "lucide-react";

const About = () => {
  const values = [
    { icon: Award, title: "Quality Excellence", description: "Uncompromising quality in every product we manufacture" },
    { icon: Target, title: "Precision Engineering", description: "Advanced formulations for superior performance" },
    { icon: Users, title: "Customer First", description: "Building lasting relationships with our clients" },
    { icon: Lightbulb, title: "Innovation", description: "Continuous R&D for next-generation solutions" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient mb-6">About Solvexia</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building India's future, one tile at a time. We are pioneers in high-performance construction chemicals and tile adhesives.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              हमारी कंपनी उच्च गुणवत्ता वाला टाइल एडहेसिव बनाती है जो मजबूत, टिकाऊ और विश्वसनीय है। 
              हम ग्राहकों की संतुष्टि को प्राथमिकता देते हैं और भरोसे की पहचान हैं।
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Our Philosophy</h3>
              <p className="text-muted-foreground italic">
                "हम सिर्फ टाइल एडहेसिव नहीं बनाते, हम रिश्तों और विश्वास को जोड़ते हैं।"
              </p>
              <p className="text-muted-foreground mt-2">
                "We don't just make tile adhesive, we build relationships and trust."
              </p>
            </div>
            <p className="text-muted-foreground">
              Our commitment goes beyond manufacturing - we create solutions that bond not just tiles, 
              but trust between us and our customers. Every product reflects our dedication to quality 
              and reliability in construction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-primary" size={32} />
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To provide long-lasting, reliable, and easy-to-use tile adhesive solutions that ensure 
              superior bonding and customer satisfaction in every construction project.
            </p>
          </div>
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Eye className="text-primary" size={32} />
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To build strength and trust in every construction project, becoming the most trusted 
              name in tile adhesive solutions across India.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="card-elevated p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Solvexia?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-foreground" size={32} />
              </div>
              <h4 className="font-semibold mb-2">International Technology</h4>
              <p className="text-sm text-muted-foreground">Advanced formulations designed for Indian conditions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-primary-foreground" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Waterproof & Weather Resistant</h4>
              <p className="text-sm text-muted-foreground">Superior protection against all weather conditions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Professional & Customer Friendly</h4>
              <p className="text-sm text-muted-foreground">Dedicated support for professionals and end customers</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-product text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;