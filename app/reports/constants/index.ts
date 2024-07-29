type NestedData = {
    [category: string]: {
        [subCategory: string]: string[];
    };
}

export const categoryData:NestedData = {
  Agriculture: {
    "Agriculture Equipment": [
      "Agriculture Implements and Equipments",
      "Combine Harvesters",
      "Rotavators",
      "Tillers",
      "Tractors",
      "Used Agricultural Equipment",
    ],
    "Crop Protection": [
      "Agricultural Chemical",
      "Fertilizer",
      "Biofertilizer",
      "Protected Cultivation",
    ],
    Farming: [
      "Agritech",
      "Field Crops",
      "Fishing",
      "Fruits and Vegetables",
      "Irrigation",
      "Plantations",
    ],
    Seed: ["Conventional Seed", "Hybrid Seed"],
  },
  "Animal Health": {
    "Animal Feed": ["Pet Food", "Dog Food", "Cat Food", "Other Pet Food"],
    "Animal Health and Care": [
      "Pet Clinics",
      "Pet Grooming Products",
      "Cat Feeder",
      "Cat Fence",
      "Cat Grooming",
      "Cat Litter",
      "Cat Shampoo",
    ],
  },
  BFSI: {
    Banking: [
      "ATM",
      "ATM Managed Services",
      "Online Banking",
      "Retail Banking",
    ],
    "Financial Services": [
      "Financial Advisory",
      "Financial Brokerage",
      "Investment Banking",
      "Payments",
      "Private Equity",
      "Remittance",
       "Wealth Management",
    ],
    Insurance: [
      "General Insurance",
      "Health Insurance",
      "Life Insurance",
      "Motor Insurance",
      "Reinsurance",
      "Fire Insurance",
      "Marine Insurance",
      "Online Insurance",
    ],
    "Loans and Advances": [
      "Housing Loan",
      "Education Loan",
      "Vehicle Loan ",
      "Mortgage Loan",
      "Online Loan",
      "Personal Loan",
      "BNPL",
      "POS Lending",
      "Debt Collection",
      "P2P Lending",
      "Crowdlending",
    ],
    "Payment Cards": [
      "Charge Card",
      "Credit Card",
      "Debit Card",
      "Financial Cards and Payment",
      "Pre-Paid Card",
      "Store Card",
    ],
  },
  Security: {
    Defense: [
      "Aerospace Products",
      "Aircraft Components",
      "Automation",
      "Combat Vehicles",
      "MRO Services",
      "Navigational Instruments",
    ],
    "Security Devices": [
      "Access Control",
      "Cyber Security",
      "Fire Alarm",
      "Intrusion Detection",
      "IT Security",
      "Video Surveillance",
    ],
    Weapon: ["Ballistic Protection", "Ammunition"],
  },
  "Oil and Gas": {
    "Clean Technology": [
      "Biofuel",
      "Carbon Fiber",
      "Lithium-Ion",
      "Engineering",
      "Hydropower",
      "Solar Power",
      "Wind Power",
      "Waste Water Treatment",
    ],
    Gas: ["LPG", "PNG", "LNG", "Natural Gas", "Fuel Station"],
    Oil: [
      "Drilling and Exploration",
      "Drilling Equipment",
      "Fuel Dispenser",
      "Refining",
    ],
    Upstream: ["Fields", "Wells", "Blocks", "FPSOs"],
    Downstream: ["Refinery", "Petrochemicals"],
    Midstream: [
      "Liquid Storage",
      "Pipeline",
      "Gas Storage",
      "Gas Processing",
      "LNG Liquefaction",
      "LNG Regasification",
      "Tankers",
    ],
    Power: [
      "Electricity Generation and Transmission",
      "Inverter and UPS",
      "Power Components",
      "Nuclear",
      "LED Lighting",
      "Diesel Generator",
      "Power Plants",
      "Energy Storage",
      "Smart Grid",
      "Transmission and Distribution",
    ],
  },
  Healthcare: {
    "Radiology and Diagnostics": ["Diagnostics Lab"],
    "General Healthcare": [
      "Fitness Services",
      "Home Healthcare",
      "Clinics",
      "Diabetes Care Services",
      "Rehabilitation Care",
      "Medical Tourism",
      "Hospitals",
      "Wellness Care",
    ],
    "Medical Devices & Consumables": [
      "Medical Consumables",
      "Diabetes Care Devices",
      "Anesthesia  and Respiratory Devices ",
      "Cardiovascular Devices",
      "Dental Devices",
      "Aesthetic Devices",
      "Dental Implants and Abutments",
      "Dental Material",
      "Dental Hygiene Devices",
      "Diagnostics Imaging Devices",
      "IVD",
      "Blood Gas Analyzers",
      "Dental Imaging",
      "Patient Monitoring market",
      "Opthalmic Devices",
      "ENT Devices Market",
      "Neurology devices Market",
    ],
    "Consumer Health and Pharmaceuticals": [
      "Analgesics",
      "Cough, Cold and Allergy",
      "Dermatologicals",
      "Dietary Supplements",
      "Digestive Remedies",
      "Ear Care",
      "Eye Care",
      "OTC Healthcare",
      "Herbal/Traditional Products",
      "NRT Smoking Cessation Aids",
      "Pediatric Consumer Health",
      "Sleep Aids",
      "Sports Nutrition",
      "Vitamins",
      "Weight Management and Well Being",
      "Wound Care",
      "Vaccine",
      "Respiratory",
      "Pharmacy Stores",
      "Pharmaceuticals",
      "API",
      "Health Tech",
      "Contact Lenses",
      "Stem Cell Banking",
    ],
  },
  "Media & Entertainment": {
    Advertising: [
      "Online Advertising",
      "OOH Advertising",
      "Ad Platforms",
      "Property Classifieds",
      "Recruitment Classifieds",
      "Matrimonial Classifieds",
      "Auto Classifieds",
    ],
    Entertainment: [
      "Leisure and Entertainment",
      "Movie Theatre",
      "Theme Parks",
      "Amusment Parks",
      "DTH and IPTV",
      "OTT Media",
      "Video Streaming",
      "Traditional Toys and Games",
      "Video Games",
      "Fantasy Sports",
      "Online Gambling",
      "Casino",
      "Wedding Maket",
    ],
    "Travel and Tourism": [
      "Airlines",
      "Lodging",
      "Bookings",
      "Tourism",
      "Travel",
    ],
  },
  "Automotive and Automotive Components": {
    Automotive: [
      "Used Vehicle",
      "Car Rental",
      "Electric Vehicle",
      "Two Wheeler",
      "Three Wheeler",
      "Aviation",
      "Automotive Service",
      "Commercial Vehicle",
      "Powertrain",
      "Drone",
      "Light Electric Vehicle",
    ],
    "Auto Components": [
      "EV Charging",
      "Fleet Management Systems",
      "Spare Parts",
      "Automotive Equipments",
    ],
  },
  "Logistics and Shipping": {
    Logistics: [
      "Freight Forwarding",
      "Warehousing",
      "Cold Chain",
      "Transportation",
      "Courier",
      "3PL",
      "Value Added Services",
    ],
    Packaging: [
      "Alcoholic Drinks Packaging",
      "Baby and Child Specific Products Packaging",
      "Beauty and Personal Care Packaging",
      "Canned Food Packaging",
      "Confectionary Packaging",
      "Dairy Packaging",
      "Dog and Cat Food Packaging",
      "Home Care Packaging",
      "Hot Drinks Packaging",
      "Meals and Soups Packaging",
      "Plant Based Dairy Packaging",
      "Processed Fruits and Vegetable Packaging",
      "Processed Meat and Seafood Packaging",
      "Soft Drinks Packaging",
    ],
  },
  "Retail and Consumer Goods": {
    "Beauty and Personal Care": [
      "Baby and Child Specific Products",
      "Bath and Shower",
      "Colour Cosmetics",
      "Personal Hygiene",
      "Depilatories",
      "Fragrances",
      "Hair Care",
      "Mass Beauty and Personal Care",
      "Men's Grooming",
      "Oral Care",
      "Tissues",
      "Diapers",
      "Adult Incontinence",
      "Menstrual Care",
      "Premium Beauty and Personal Care",
      "Skin Care",
      "Sun Care",
    ],
    "Consumer Electronics": [
      "Computers and Peripherals",
      "Headphones",
      "Home Audio and Cinemas",
      "Home Video",
      "Imaging Devices",
      "In-Car Entertainment",
      "Mobile Phones",
      "Portable Players",
      "Wearable Electronics",
      "LED Lighting",
    ],
    "Consumer Appliances": [
      "Air Treatment Products",
      "Dishwashers",
      "Food Preparation Appliances",
      "Home Laundry Appliances",
      "Large Cooking Appliances",
      "Microwaves",
      "Personal Care Appliances",
      "Refrigeration Appliances",
      "Small Cooking Appliances",
      "Vaccum Cleaners",
    ],
    "Home and Office Furnishings": [
      "Mattress",
      "Gardening",
      "Furniture",
      "Home Improvement",
      "Home Furnishings",
      "Homewares",
      "Air Care",
      "Bleach",
      "Dishwashing",
      "Home Insecticides",
      "Laundry Care",
      "Polishes",
      "Surface Care",
      "Toilet Care",
      "Luggage and Bags",
    ],
    Retailing: [
      "Apparel and Footwear Specialist",
      "Convenience Stores",
      "Department Stores",
      "E-Commerce",
      "Forecourt Retailers",
      "Grocery Retailers",
      "Health and Beauty Specialists",
      "Home and Gardening",
      "Supermarket and Hypermarkets",
      "Online Food Delivery",
      "Online Grocery Delivery",
      "Quick Commerce",
      "Vending",
    ],
    "Luxury Goods": [
      "Luxury Apparel and Footwear",
      "Luxury Eyewear",
      "Luxury Foodservice",
      "Jewellery",
      "Luxury Leather Goods",
      "Luxury Writing Instruments",
      "Premium and Luxury Cars",
      "Luxury Beauty and Personal Care",
      "Luxury Luggage and Bags",
      "Luxury Watches",
    ],
    "Sports ": ["Sports Equipments", "Fitness Equipment"],
    "Apparel and Footwear": [
      "Kidswear",
      "Footwear",
      "Menswear",
      "Hosiery",
      "Womenswear",
      "Sportswear",
      "Apparel Accessories",
      "Sports Accessories",
      "Textile",
      "Online Apparel and Footwear",
    ],
  },
  "Education and Technology": {
    Education: [
      "Corporate Training",
      "Executive Education",
      "Traditional Education",
      "Medical Education",
      "Test Preparation",
    ],
    Technology: ["Ed-Tech"],
  },
  "Food and Beverage": {
    Foodservice: [
      "Café",
      "Full Service Restaurant",
      "Catering",
      "Cloud Kitchen",
      "Limited Service Restaurant",
    ],
    "Food Ingredient": [
      "Edible Oils",
      "Meals & Soups",
      "Ready Meals",
      "Sauces, Dip and Condiments",
      "Spreads",
      "Seafood",
      "Organic Food",
    ],
    "Alcoholic Beverages": [
      "Beer",
      "Regular Cider",
      "Non Alcoholic Cider",
      "Spirits",
      "Wine",
      "IMFL",
      "RTDs",
      "Non Alcoholic RTDs",
    ],
    "Hot Beverage": [
      "Coffee",
      "Tea",
      "RTD Coffee",
      "RTD Tea",
      "Other Hot Drinks",
    ],
    "Soft Drinks": [
      "Bottled Water",
      "Regular Carbonates",
      "Reduced Sugar Carbonates",
      "Concentrates",
      "Juice",
      "Energy Drinks",
      "Sports Drink",
    ],
    "Dairy Products": [
      "Baby Food",
      "Butter and Spreads",
      "Cheese",
      "Drinking Milk Products",
      "Yoghurt",
      "Cottage Cheese",
      "Milk Powder",
      "Whey Protein",
      "Milk ",
      "Ice Cream",
      "Other Dairy",
      "Plant Based Dairy Products",
    ],
    "Fresh Food": [
      "Eggs",
      "Fish and Seafood",
      "Fruits and Vegetables",
      "Meat and Chicken",
      "Dry Fruits/Nuts",
      "Pulses",
      "Spices",
      "Starchy Roots",
      "Sugar and Sweetners",
    ],
    "Functional Food and Beverage": [
      "Functional Hot Drinks",
      "Functional Soft Drinks",
      "Functional Snacks",
      "Functional Dairy Products",
      "Functional Cooking Ingredients and Meals",
      "Functional Staple Foods",
    ],
    "Confectionary and Snacks": [
      "Chocolate Confectionary",
      "Gum",
      "Sugar Confectionary",
      "Ice Cream",
      "Savoury Snacks",
      "Sweet Biscuits, Snack Bars and others",
    ],
    "Staple Foods": [
      "Baked Foods",
      "Breakfast Cereals",
      "Processed Food and Cereals",
      "Processed Meat and Seafood",
      "Rice, Pasta and Noodles",
      "Frozen Food",
    ],
    Tobacco: [
      "Cigarettes",
      "Cigars, Cigarillos and Smoking Tobacco",
      "Smokeless Tobacco",
      "E-Vapour Products",
      "Heated Tobacco Products",
    ],
    Ingredients: [
      "Conditioning Agents",
      "Proteins",
      "Sweetners",
      "Commodities",
    ],
  },
  "Manufacturing and Construction": {
    "Construction Materials": [
      "Bricks and Blocks",
      "Ceramics",
      "Aluminum",
      "Cement",
      "Construction Chemicals",
      "Glass",
      "Marble and Granite",
      "Hardware",
      "Paper",
      "Roofing Products",
      "Sanitaryware",
      "Steel",
      "Doors and Windows",
      "Wood",
      "Electrical Products",
    ],
    "Industrial Engineering": [
      "Warehousing Automation",
      "Logistics Automation",
      "Industrial Automation",
    ],
    Infrastructure: [
      "Infrastructure Projects",
      "Facility Management",
      "Shipbuilding",
    ],
    "Parts and Machinery": [
      "Construction Equipment",
      "Power Tools",
      "Elevators and Excavators",
      "Fire Safety",
      "Smart Home Products",
      "Pipe and Pipe Fittings",
      "Pumps",
    ],
    "Real Estate": [
      "Office",
      "Residential",
      "Retail",
      "Commercial",
      "Hotel",
      "Real Estate Consultancy",
    ],
  },
  "Chemicals and Mining": {
    Chemicals: [
      "Fine Chemicals",
      "Organic Chemicals",
      "Paint",
      "Plastic ",
      "Polymer",
      "Rubber",
      "Specialty Chemicals",
    ],
    Mining: ["Bauxite Mining", "Coal Mining", "Copper Mining", "Iron Ore"],
  },
  "Technology, Media and Telecom": {
    "IT and ITeS": [
      "E-Commerce",
      "Video Conferencing Solutions",
      "AI and Blockchain",
      "IT Service",
      "Data Center",
      "Cloud Services",
      "Semiconductor",
      "SaaS",
      "Process Outsourcing",
    ],
    "Media and Telecom": ["Smartphone", "Cryptocurrency", "Online Trading"],
    Technology: [
      "Agritech",
      "Foodtech",
      "Deeptech",
      "Healthtech",
      "Fintech",
      "Logitech",
      "Edtech",
      "IOT",
      "Biotech",
      "Consumertech",
      "Other Emerging Technologies",
    ],
  },
};