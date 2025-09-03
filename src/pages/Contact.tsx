import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 11 2345-6789"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@solvexia.com", "sales@solvexia.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Industrial Area, Phase-II", "New Delhi, India - 110020"],
      description: "Visit our main facility"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      description: "We're here to help"
    }
  ];

  const officeLocations = [
    {
      city: "New Delhi",
      type: "Head Office",
      address: "Industrial Area, Phase-II, New Delhi - 110020",
      phone: "+91 11 2345-6789",
      email: "delhi@solvexia.com"
    },
    {
      city: "Mumbai",
      type: "Regional Office",
      address: "Andheri Industrial Estate, Mumbai - 400053",
      phone: "+91 22 2345-6789",
      email: "mumbai@solvexia.com"
    },
    {
      city: "Bangalore",
      type: "Regional Office",
      address: "Peenya Industrial Area, Bangalore - 560058",
      phone: "+91 80 2345-6789",
      email: "bangalore@solvexia.com"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with Solvantass Trading Company for customers, dealers, and contractors. We're here to help with all your tile adhesive needs.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card-product text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <div className="space-y-1 mb-2">
              <p className="text-sm font-medium">+91 9888761009</p>
            </div>
            <p className="text-xs text-muted-foreground">Call us for immediate assistance</p>
          </div>
          <div className="card-product text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <div className="space-y-1 mb-2">
              <p className="text-sm font-medium">solvantasstradingcompany@gmail.com</p>
            </div>
            <p className="text-xs text-muted-foreground">Send us your queries anytime</p>
          </div>
          <div className="card-product text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <div className="space-y-1 mb-2">
              <p className="text-sm font-medium">Hajiyapur to Beehat road</p>
              <p className="text-sm font-medium">near Makdera Tiraha</p>
            </div>
            <p className="text-xs text-muted-foreground">Visit our facility</p>
          </div>
          <div className="card-product text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
            <div className="space-y-1 mb-2">
              <p className="text-sm font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-sm font-medium">Sunday: Closed</p>
            </div>
            <p className="text-xs text-muted-foreground">We're here to help</p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Enter subject (optional)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Map and Office Info */}
          <div className="space-y-8">
            {/* Embedded Map */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin size={48} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Hajiyapur to Beehat road, near Makdera Tiraha Baburdipur,</p>
                <p className="text-muted-foreground mb-4">Post Fakharpur – Tahsil Maholi, Sitapur, U.P. – 261151</p>
                <Button variant="outline">
                  <MapPin size={16} className="mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="card-elevated p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Solvantass Trading Company</h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+91 9888761009</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">solvantasstradingcompany@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-sm text-muted-foreground">
                      Hajiyapur to Beehat road, near Makdera Tiraha Baburdipur,<br />
                      Post Fakharpur – Tahsil Maholi,<br />
                      Sitapur, U.P. – 261151
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;