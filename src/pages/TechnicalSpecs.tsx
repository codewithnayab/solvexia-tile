const TechnicalSpecs = () => {
  const specifications = [
    { property: "Base", value: "Cement based polymer modified adhesive" },
    { property: "Color", value: "Grey / White" },
    { property: "Mixing Ratio", value: "3:1 (Powder:Water)" },
    { property: "Open Time", value: "20–30 minutes" },
    { property: "Adjustability Time", value: "10–15 minutes" },
    { property: "Coverage", value: "~3–4 kg/m² (3mm thickness)" },
    { property: "Compressive Strength", value: ">10 N/mm²" },
    { property: "Shear Adhesion Strength", value: ">2.5 N/mm²" },
    { property: "Pot Life", value: "2–3 hours" },
    { property: "Packaging", value: "20 kg moisture-proof bags" },
    { property: "Shelf Life", value: "12 months from manufacturing date" },
    { property: "Application Temperature", value: "5°C to 35°C" },
    { property: "Service Temperature", value: "-20°C to +70°C" },
    { property: "Water Resistance", value: "Excellent" },
    { property: "Chemical Resistance", value: "Good" },
    { property: "Tile Compatibility", value: "All types of tiles" },
    { property: "Application Areas", value: "Interior and Exterior" },
    { property: "Durability", value: "10+ years performance" },
  ];

  const testMethods = [
    { test: "Tensile Adhesion", standard: "EN 1348", result: "1.2 N/mm²" },
    { test: "Slip Resistance", standard: "EN 1308", result: "0.4 mm" },
    { test: "Open Time", standard: "EN 1346", result: "25 minutes" },
    { test: "Compressive Strength", standard: "EN 196-1", result: "35 N/mm²" },
    { test: "Water Absorption", standard: "EN 12808-5", result: "< 5%" },
    { test: "Thermal Shock", standard: "EN 12808-1", result: "Pass" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient mb-6">Technical Specifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical data and performance parameters for Solvexia tile adhesives.
          </p>
        </div>

        {/* Main Specifications Table */}
        <div className="card-elevated mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Product Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-6 font-semibold text-lg">Property</th>
                    <th className="text-left py-4 px-6 font-semibold text-lg">Value/Range</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
                      <td className="py-4 px-6 font-medium">{spec.property}</td>
                      <td className="py-4 px-6 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Test Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold mb-6">Test Methods & Standards</h3>
            <div className="space-y-4">
              {testMethods.map((test, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                  <div>
                    <div className="font-medium">{test.test}</div>
                    <div className="text-sm text-muted-foreground">{test.standard}</div>
                  </div>
                  <div className="font-semibold text-accent">{test.result}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold mb-6">Performance Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>C2 Grade classification as per EN 12004</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Superior adhesion strength (≥1.0 N/mm²)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Excellent slip resistance (≤0.5mm)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Extended open time (20-30 minutes)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Suitable for tiles up to 60cm x 60cm</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Interior and exterior applications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Calculator */}
        <div className="card-elevated p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Coverage Calculator</h3>
          <p className="text-muted-foreground mb-6">
            Calculate approximate material requirements for your project
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">4-5 sqm</div>
              <div className="text-sm text-muted-foreground">Coverage per 25kg bag<br/>(6mm notch trowel)</div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">3-4 sqm</div>
              <div className="text-sm text-muted-foreground">Coverage per 25kg bag<br/>(8mm notch trowel)</div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">2.5-3 sqm</div>
              <div className="text-sm text-muted-foreground">Coverage per 25kg bag<br/>(10mm notch trowel)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;