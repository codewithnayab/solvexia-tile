import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import step1Image from "@/assets/step1-surface-prep.jpg";
import step2Image from "@/assets/step2-mixing.jpg";
import step3Image from "@/assets/step3-application.jpg";
import step4Image from "@/assets/step4-finishing.jpg";

const ApplicationGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Surface Preparation",
      description: "Clean and prepare the substrate for optimal adhesion",
      image: step1Image,
      details: [
        "Remove all loose materials, dust, grease, and contaminants",
        "Ensure surface is dry, sound, and structurally stable",
        "Fill any cracks or holes with appropriate filler",
        "Check surface levelness and make corrections if needed"
      ],
      tools: ["Wire brush", "Vacuum cleaner", "Surface cleaner"],
      timeRequired: "30-60 minutes per area"
    },
    {
      step: 2,
      title: "Mixing Procedure",
      description: "Prepare the adhesive mixture following proper ratio",
      image: step2Image,
      details: [
        "Mix adhesive powder with water in 3:1 ratio (Powder:Water)",
        "Add powder gradually to clean water while mixing",
        "Mix mechanically for 3-5 minutes until smooth and lump-free",
        "Allow mixture to mature for 2-3 minutes, then remix briefly"
      ],
      tools: ["Clean mixing bucket", "Mechanical mixer", "Clean water"],
      timeRequired: "5-10 minutes"
    },
    {
      step: 3,
      title: "Applying Adhesive",
      description: "Apply adhesive using proper notched trowel technique",
      image: step3Image,
      details: [
        "Apply adhesive with appropriate notched trowel",
        "Spread evenly maintaining consistent thickness",
        "Create uniform ridges for maximum coverage",
        "Work within open time of 20-30 minutes"
      ],
      tools: ["Notched trowel", "Float", "Level"],
      timeRequired: "Variable based on area"
    },
    {
      step: 4,
      title: "Fixing Tiles & Finishing",
      description: "Install tiles and complete the finishing process",
      image: step4Image,
      details: [
        "Place tiles within open time with slight twisting motion",
        "Ensure full contact and proper alignment",
        "Use tile spacers for consistent joint width",
        "Remove excess adhesive immediately from joints"
      ],
      tools: ["Tile spacers", "Rubber mallet", "Joint cleaner"],
      timeRequired: "Work within 20-30 min open time"
    }
  ];

  const tips = [
    {
      type: "success",
      icon: CheckCircle,
      title: "Pro Tips",
      content: [
        "Work in small sections to manage open time effectively",
        "Check weather conditions - ideal temperature 5°C to 35°C",
        "Ensure proper ventilation during and after application",
        "Use clean tools and equipment for best results"
      ]
    },
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Important Warnings",
      content: [
        "Do not add extra water to extend working time",
        "Avoid application on frozen or very hot surfaces",
        "Do not install tiles with insufficient back coverage",
        "Protect fresh installation from rain for 24 hours"
      ]
    },
    {
      type: "info",
      icon: Info,
      title: "Best Practices",
      content: [
        "Plan tile layout before starting application",
        "Use appropriate trowel size for tile dimensions",
        "Check tile alignment frequently during installation",
        "Allow 24 hours curing before grouting"
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient mb-6">Application Guide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these step-by-step instructions for professional tile installation using Solvexia adhesives.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="card-elevated overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Detailed Instructions:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Required Tools:</h5>
                        <div className="flex flex-wrap gap-1">
                          {step.tools.map((tool, i) => (
                            <span key={i} className="bg-muted/50 px-2 py-1 rounded text-xs">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">Time Required:</h5>
                        <span className="text-sm text-accent font-medium">{step.timeRequired}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips and Warnings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            const bgColor = tip.type === 'success' ? 'from-green-500/10 to-green-600/10' :
                            tip.type === 'warning' ? 'from-yellow-500/10 to-orange-600/10' :
                            'from-blue-500/10 to-blue-600/10';
            const iconColor = tip.type === 'success' ? 'text-green-600' :
                             tip.type === 'warning' ? 'text-yellow-600' :
                             'text-blue-600';
            
            return (
              <div key={index} className={`card-elevated p-6 bg-gradient-to-br ${bgColor}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                  <h3 className="font-semibold text-lg">{tip.title}</h3>
                </div>
                <ul className="space-y-2">
                  {tip.content.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicationGuide;