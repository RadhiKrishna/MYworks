import type { IconName } from "@/components/ui/Icon";

// Central place for all site content that repeats across pages/components.
// Edit here once — Navbar, Footer, and every section pull from this file.

export const site = {
  name: "ORDO",
  fullName: "Ordo Technical Services LLC",
  tagline: "Where Precision Meets Excellence",
  phone: "+971 XX XXX XXXX",
  emergencyPhone: "+971 XX XXX XXXX",
  email: "info@ordotechnical.com",
  website: "www.ordotechnical.com",
  location: "Dubai, United Arab Emirates",
};

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/district-cooling", label: "District Cooling" },
  { href: "/sectors", label: "Sectors" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: { label: string; icon: IconName }[] = [
  { label: "UAE Based", icon: "pin" },
  { label: "24/7/365 Support", icon: "clock" },
  { label: "Integrated Services", icon: "layers" },
  { label: "Engineering-Led", icon: "gear" },
];

export const whoWeAre = {
  paragraphs: [
    "Ordo Technical Services LLC is a UAE-based technical services company built around one simple idea — doing exceptional work for exceptional clients.",
    "We bring together some of the most skilled engineers, technicians, and specialists in the business, united by a shared commitment to quality, precision, and genuine care for the work we deliver. Whether we are installing complex electromechanical systems, maintaining critical district cooling infrastructure, or transforming an interior space — we show up with expertise, integrity, and a standard that does not waver.",
    "We work across the full spectrum of the UAE's built environment — from luxury residential towers and world-class hotels to commercial developments, industrial facilities, and the UAE's rapidly growing district cooling networks.",
  ],
  closing: [
    "At Ordo, we do not just complete projects.",
    "We build relationships. We deliver results. We set the standard.",
  ],
  quote:
    "Great technical work should be invisible — systems that run perfectly, spaces that feel effortless, and infrastructure that never lets you down.",
};

export const atAGlance = [
  { label: "Company", value: "Ordo Technical Services LLC" },
  { label: "Home", value: "United Arab Emirates" },
  { label: "Coverage", value: "UAE — Wide" },
  {
    label: "Sectors Served",
    value: "Residential · Commercial · Hospitality · Industrial · Healthcare · Government · District Cooling",
  },
  { label: "Approach", value: "Integrated · Engineering-Led · Client-First" },
  { label: "Support", value: "24 / 7 / 365" },
];

export const values = [
  {
    n: "01",
    title: "Precision",
    body: "Every detail matters. From the first calculation to the final finish, we execute with accuracy and care that sets a new benchmark.",
  },
  {
    n: "02",
    title: "Reliability",
    body: "Our clients rest easy knowing Ordo is on the job. We show up, we deliver, and we stand behind everything we build and maintain.",
  },
  {
    n: "03",
    title: "Integrity",
    body: "No shortcuts. No surprises. Honest work, transparent communication, and results you can count on — every single time.",
  },
];

export const contactChannels: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "pin", label: "Location", value: "Dubai, United Arab Emirates" },
  { icon: "phone", label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "chat", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "layers", label: "Website", value: site.website, href: `https://${site.website}` },
  {
    icon: "clock",
    label: "24/7 Emergency Line",
    value: site.emergencyPhone,
    href: `tel:${site.emergencyPhone.replace(/\s/g, "")}`,
  },
];

export const serviceOptions = [
  "Electromechanical & Engineering Services",
  "Building Finishes & Interior Works",
  "Maintenance, Repair & Specialist Services",
  "District Cooling Services",
  "General Enquiry",
];

export const responseTimeCommitment = [
  { priority: "Critical", time: "Within 1 Hour", situation: "Cooling supply to customers affected" },
  { priority: "Urgent", time: "Within 4 Hours", situation: "Major fault with risk of imminent failure" },
  { priority: "High", time: "Within 8 Hours", situation: "Significant fault without immediate risk" },
  { priority: "Routine", time: "Within 48 Hours", situation: "Minor issues and non-critical items" },
  { priority: "Planned", time: "Scheduled", situation: "Preventive servicing as agreed" },
];

export const electromechanicalDetail = [
  {
    n: "01",
    title: "Electromechanical Works Contracting",
    intro:
      "The backbone of every modern building is its electromechanical infrastructure. This is where Ordo leads. We take full ownership of your electromechanical project — from early design coordination right through to the moment we hand over a fully tested, perfectly performing system.",
    items: [
      "Full electromechanical system design and engineering",
      "Coordination across electrical, mechanical, and plumbing disciplines",
      "Power distribution systems and switchgear installation",
      "Mechanical systems — HVAC, plumbing, and fire protection",
      "Building Management and automation systems",
      "Earthing, surge protection, and lightning protection",
      "Shop drawings, as-built records, and authority submissions",
      "Full system testing, commissioning, and performance verification",
      "Handover documentation and operator training",
    ],
    closing: "From the first cable to final commissioning — Ordo delivers.",
  },
  {
    n: "02",
    title: "Air-Conditioning, Ventilation & Air Filtration",
    intro:
      "In the UAE, HVAC is not a luxury — it is a necessity. Ordo designs and delivers cooling, ventilation, and air quality solutions that keep occupants comfortable, buildings energy-smart, and systems performing reliably through every season.",
    items: [
      "Split, multi-split, cassette, and ducted system installation",
      "VRF / VRV multi-zone system design and installation",
      "Central chilled water plant and air handling systems",
      "Fresh air, energy recovery, and mechanical ventilation",
      "Smoke extract, pressurization, and car park ventilation",
      "Kitchen exhaust and commercial ventilation systems",
      "Air filtration, purification, and indoor air quality solutions",
      "Precision cooling for data centers and server rooms",
      "Full ductwork design, fabrication, and installation",
      "Ongoing maintenance programs and service contracts",
      "Round-the-clock emergency breakdown response",
    ],
    closing: "Perfectly conditioned air. Perfectly managed systems.",
  },
  {
    n: "03",
    title: "Electromechanical Equipment Installation & Maintenance",
    intro:
      "Equipment failure costs time, money, and reputation. Ordo keeps your machinery running through expert installation, proactive care, and rapid response when it matters most.",
    items: [
      "Pumps, motors, compressors, and generators — installation and start-up",
      "Variable speed drives and soft starter installation",
      "Control panels and automation system installation",
      "Heat exchangers, cooling towers, and pressurization units",
      "Structured preventive maintenance programs",
      "Predictive maintenance using thermal and vibration analysis",
      "Equipment calibration and performance verification",
      "Overhaul, refurbishment, and spare parts supply",
      "Emergency response — anytime, any day",
    ],
    closing: "Maximum uptime. Minimum risk.",
  },
];

export const buildingFinishesDetail = [
  {
    n: "05",
    title: "Floor & Wall Tiling",
    intro:
      "Surfaces speak before people do. Ordo's tiling specialists combine technical precision with a genuine eye for design — delivering tile installations that are flawlessly placed, beautifully finished, and made to endure.",
    items: [
      "Ceramic, porcelain, marble, granite, and natural stone installation",
      "Large-format tile installation with laser-guided leveling",
      "Feature walls, decorative mosaics, and statement floors",
      "Swimming pool and wet area tiling",
      "Outdoor terraces, podiums, and landscape paving",
      "Anti-slip and specialty tile installations",
      "Wet area waterproofing and substrate preparation",
      "Surface screeding, leveling, and priming",
      "Grouting, sealing, and surface protection",
      "Tile restoration and refurbishment works",
    ],
    closing: "Every tile placed with intention. Every surface finished with pride.",
  },
  {
    n: "06",
    title: "Painting & Protective Coatings",
    intro:
      "Color transforms spaces. Protection extends them. Ordo's painting teams deliver premium finishes for interiors, façades, and industrial surfaces — where aesthetic quality meets long-term durability.",
    items: [
      "Premium interior painting — full range of finishes",
      "Texture coatings, Venetian plaster, and decorative effects",
      "Wallpaper and feature wall installation",
      "Exterior and façade painting — weather and UV resistant",
      "High-rise façade painting — rope access and scaffolding",
      "Epoxy and polyurethane floor coatings",
      "Anti-corrosion and fire-retardant coatings",
      "Chemical-resistant and heat-resistant industrial coatings",
      "Waterproof and elastomeric coating systems",
      "Surface preparation, sandblasting, and priming",
      "Road marking and line marking",
    ],
    closing: "Every surface. Every finish. Done right.",
  },
  {
    n: "07",
    title: "False Ceiling & Light Partitions",
    intro:
      "Great interiors are shaped from the ceiling down. Ordo creates interior environments that are as functional as they are beautiful — transforming raw space into refined, purposeful environments.",
    items: [
      "Gypsum board suspended ceiling systems",
      "Armstrong mineral fiber and metal grid ceilings",
      "Metal, wooden slat, and stretch ceiling systems",
      "Acoustic ceilings and soundproofing solutions",
      "Fire-rated ceiling systems",
      "Curved, coffered, and feature ceiling designs",
      "Gypsum board partition systems",
      "Full-height glass and frameless glass partitions",
      "Demountable and relocatable partition systems",
      "Acoustic and fire-rated partitions",
      "Toilet and washroom cubicle systems",
      "Full coordination with lighting, HVAC, and sprinkler systems",
      "Space planning and 3D visualization",
    ],
    closing: "Ceilings that inspire. Partitions that perform. Spaces that feel right.",
  },
];

export const maintenanceDetail = [
  {
    n: "08",
    title: "Building Maintenance",
    intro:
      "A well-maintained building is a well-performing asset. Ordo delivers proactive, professional building maintenance that protects property value, keeps occupants comfortable, and eliminates costly failures before they happen.",
    items: [
      "Custom planned preventive maintenance programs",
      "Round-the-clock reactive and emergency response",
      "Flexible annual maintenance contracts",
      "MEP systems maintenance — mechanical, electrical, and plumbing",
      "HVAC servicing and ongoing maintenance",
      "Civil repairs — plastering, waterproofing, and patching",
      "Roof maintenance and waterproofing",
      "Façade inspection, cleaning, and repair",
      "Swimming pool maintenance and water management",
      "Generator and backup power testing and servicing",
      "Fire system maintenance and testing",
      "Digital work order management and asset tracking",
      "Regular performance reporting and KPI dashboards",
    ],
    extraList: {
      heading: "Properties We Look After",
      items: [
        "Residential Towers",
        "Villa Communities",
        "Hotels",
        "Office Buildings",
        "Retail Centers",
        "Healthcare Facilities",
        "Schools",
        "Warehouses",
        "Government Properties",
        "Mixed-Use Developments",
      ],
    },
    closing: "Your asset. Our responsibility. Maintained to perfection.",
  },
  {
    n: "09",
    title: "Electrical Fittings & Fixtures — Repair & Maintenance",
    intro:
      "Electrical reliability is non-negotiable. Ordo's certified electrical teams keep your building's electrical systems safe, efficient, and performing exactly as they should.",
    items: [
      "Distribution board inspection, testing, and servicing",
      "Circuit breaker testing and replacement",
      "Wiring fault diagnosis and repair",
      "Switch, socket, and outlet repair and replacement",
      "LED lighting installation, upgrade, and retrofit programs",
      "Emergency and exit lighting installation and testing",
      "Lighting control systems — dimmers, sensors, and smart controls",
      "Thermal (infrared) scanning of electrical systems",
      "Power quality analysis and power factor correction",
      "UPS and generator maintenance and testing",
      "Earthing and lightning protection system servicing",
      "Electrical safety audits and inspection reports",
      "Annual electrical maintenance contracts",
    ],
    closing: "Safe. Efficient. Reliable. That is the Ordo electrical standard.",
  },
  {
    n: "10",
    title: "Sanitary Installation & Pipe Repairs",
    intro:
      "Clean water in. Waste out. Always. Ordo's plumbing specialists deliver reliable sanitary installations and fast, effective pipe repair — keeping water systems performing cleanly and efficiently.",
    items: [
      "Complete plumbing system installation",
      "Sanitary fixture installation — toilets, basins, showers, baths, urinals",
      "Cold and hot water supply system installation",
      "Gravity drainage and sewerage installation",
      "Pumped drainage and sewage systems",
      "Water heater installation and servicing",
      "Advanced leak detection — acoustic, thermal, and tracer gas",
      "Drain unblocking and high-pressure hydro-jetting",
      "CCTV drain inspection and survey",
      "Grease trap installation, cleaning, and maintenance",
      "Water tank cleaning and disinfection",
      "Water hygiene management and quality testing",
      "Plumbing inspection and compliance reporting",
    ],
    closing: "Precision plumbing. Zero leaks. Complete peace of mind.",
  },
];

export const districtCoolingIntro = {
  paragraphs: [
    "The district cooling sector demands specialist knowledge, operational precision, and absolute reliability — every hour of every day. Ordo delivers exactly that.",
    "We provide dedicated specialist technical services to the UAE's district cooling operators, plant managers, and cooling network owners. Our district cooling team is purpose-built for this sector — with people, tools, and processes designed around the unique demands of large-scale centralized cooling infrastructure.",
  ],
  emphasis: [
    "We are not generalists trying to serve the district cooling market.",
    "We are specialists — and it shows in everything we do.",
  ],
};

export const whoWeWorkWith = [
  "District Cooling Utility Operators — Empower · Emicool · Tabreed · Khazna and others",
  "Central Cooling Plant Operation and Management Companies",
  "Master Developers with private district cooling networks",
  "Main Contractors on district cooling construction projects",
  "Government entities owning district cooling infrastructure",
  "Real estate developers establishing new cooling networks",
];

export const districtCoolingWhatIsCovered = [
  { label: "Central Plant — Chillers · Towers · Pumps · TES", value: "Full scheduled servicing + repairs" },
  { label: "Distribution Network — Valves · Chambers · Pipework", value: "Inspections + repair response" },
  { label: "Energy Transfer Stations", value: "Full scheduled servicing + repairs" },
  { label: "Electrical & Instrumentation", value: "Servicing + calibration" },
  { label: "SCADA & Monitoring Systems", value: "Ongoing support + updates" },
  { label: "Emergency Response", value: "24/7 · Guaranteed response times" },
];

export const districtCoolingWhatYouGet = [
  "A dedicated point of contact who knows your network",
  "Resident or mobile technical teams — your preference",
  "Digital asset management with full maintenance history",
  "Monthly and quarterly performance reporting",
  "Annual network condition review and forward planning",
  "Clear performance targets with transparent tracking",
  "Emergency spare parts on hand and ready",
  "Round-the-clock emergency support — guaranteed response",
  "Full safety compliance on every activity",
];

export const districtCoolingServices = [
  {
    code: "DC · 01",
    title: "Central Cooling Plant Technical Services",
    intro: [
      "The central plant is the heart of any district cooling network.",
      "Ordo keeps it beating — efficiently, reliably, and without interruption.",
    ],
    groups: [
      {
        heading: "Chiller Services",
        items: [
          "Chiller installation and start-up — all types and major brands",
          "Annual servicing and overhaul programs",
          "Tube brushing and heat exchanger inspection and cleaning",
          "Refrigerant management, recovery, and recharging",
          "Compressor overhaul, bearing replacement, and seal repair",
          "Control system servicing and calibration",
          "Performance testing and efficiency reporting",
          "Emergency chiller breakdown response — any time, any day",
        ],
        note: "Brands We Work With: Carrier · Trane · York · Daikin · McQuay · Smardt · Turbocor · Multistack · and others",
      },
      {
        heading: "Cooling Tower Services",
        items: [
          "Full installation and commissioning",
          "Fan inspection, balancing, and blade replacement",
          "Gearbox servicing and oil change",
          "Fill media and drift eliminator inspection and replacement",
          "Basin cleaning and biological control",
          "Structural inspection and protective treatment",
        ],
      },
      {
        heading: "Pump Systems",
        items: [
          "Pump installation — all configurations",
          "Variable speed drive installation and commissioning",
          "Mechanical seal, bearing, and impeller servicing",
          "Precision alignment and performance testing",
          "Pump station flow balancing and optimization",
        ],
      },
      {
        heading: "Water Treatment",
        items: [
          "Chemical dosing system installation and servicing",
          "Side-stream filtration maintenance",
          "Water quality testing, monitoring, and reporting",
          "Biological control and Legionella prevention programs",
          "Scale, corrosion, and biofouling management",
        ],
      },
    ],
  },
  {
    code: "DC · 02",
    title: "Distribution Network Services",
    intro: [
      "The pipeline network is the circulatory system of district cooling.",
      "Ordo installs and maintains it with the precision it demands.",
    ],
    groups: [
      {
        heading: "Pre-Insulated Pipe Network Installation",
        items: [
          "HDPE-jacketed polyurethane foam pre-insulated pipe systems",
          "Underground pipe laying and installation coordination",
          "Field joint insulation and jacket welding — butt fusion and electrofusion",
          "Valve, fitting, and expansion joint installation",
          "Anchor block and pipe support construction",
          "Pressure testing, flushing, and commissioning",
          "Network flow balancing and performance verification",
        ],
      },
      {
        heading: "Pipeline Leak Detection & Repair",
        items: [
          "Alarm wire monitoring — continuous network surveillance",
          "Acoustic leak detection and sound correlation",
          "Tracer gas leak location — hydrogen and nitrogen methods",
          "Infrared thermal imaging surveys",
          "Hydraulic pressure analysis and leak pinpointing",
          "Emergency excavation, pipe repair, and reinstatement",
          "Jacket repair, re-welding, and insulation replacement",
        ],
      },
      {
        heading: "Valve Chamber Services",
        items: [
          "Chamber and isolation valve installation — all valve types",
          "Instrumentation and monitoring device installation",
          "Sump drainage and ventilation installation",
          "Valve operation testing, exercising, and packing replacement",
          "Actuator servicing — electric and pneumatic",
          "Safety management for all confined space entry works",
        ],
      },
      {
        heading: "Network Optimization",
        items: [
          "Hydraulic modeling and network analysis",
          "Differential pressure monitoring and analysis",
          "Control valve commissioning and balancing",
          "Pump speed optimization programs",
          "Post-optimization performance verification and reporting",
        ],
      },
    ],
  },
  {
    code: "DC · 03",
    title: "Energy Transfer Station (ETS) Services",
    intro: [
      "The ETS is where the district cooling network connects to the building.",
      "Ordo makes this connection work perfectly — every time.",
    ],
    groups: [
      {
        heading: "ETS Installation",
        items: [
          "Plate Heat Exchanger installation and pressure testing",
          "Primary and secondary pipework, valve, and strainer installation",
          "Control valve sizing, selection, and installation",
          "BTU and energy meter installation and commissioning",
          "Differential pressure controllers and regulating valve installation",
          "BMS control panel installation and configuration",
          "Remote monitoring and SCADA connection",
          "ETS room fit-out, drainage, and electrical works",
          "Full commissioning, testing, and handover",
        ],
      },
      {
        heading: "ETS Scheduled Servicing",
        items: [
          "Monthly — Visual checks · Control valve verification · Strainer cleaning · Meter reading · Leak inspection",
          "Quarterly — Heat exchanger performance check · Differential pressure analysis · Actuator testing · Calibration verification",
          "Annually — Full heat exchanger opening and cleaning · Gasket check and replacement · Complete control valve service · Meter calibration · Full performance test and efficiency report · Thermal scan of electrical components",
        ],
      },
      {
        heading: "ETS Emergency & Corrective Services",
        items: [
          "Control valve fault diagnosis, repair, and replacement",
          "Heat exchanger emergency cleaning or bypass",
          "BTU meter replacement and reconfiguration",
          "Sensor and transmitter replacement",
          "Control fault diagnosis and repair",
          "Emergency pipe joint and gasket replacement",
        ],
      },
      {
        heading: "ETS Upgrades & New Connections",
        items: [
          "New building ETS connection — design and installation",
          "Capacity upgrades for growing cooling loads",
          "Smart metering and remote reading system installation",
          "Control system modernization and automation upgrades",
          "Heat exchanger replacement with high-efficiency units",
        ],
      },
    ],
  },
  {
    code: "DC · 04",
    title: "Metering, Monitoring & Smart Systems",
    intro: [
      "Real-time visibility is what separates good operators from great ones.",
      "Ordo installs and maintains the metering and monitoring infrastructure that gives district cooling operators complete control of their network.",
    ],
    groups: [
      {
        items: [
          "BTU and heat meter supply, installation, and commissioning",
          "Ultrasonic and electromagnetic flow meter installation",
          "Temperature sensor installation and calibration",
          "Smart metering and automatic remote reading systems",
          "Meter calibration, verification, and certification programs",
          "SCADA system installation, setup, and commissioning",
          "RTU and PLC installation and programming",
          "Communication networks — fiber optic, 4G/LTE, and wireless",
          "Flow, pressure, temperature, and level sensor installation",
          "Alarm and event management configuration",
          "Data logging, historian, and reporting dashboard setup",
          "BMS integration for ETS monitoring and control",
          "Demand management and peak load control programming",
          "Ongoing SCADA servicing and system security management",
        ],
      },
    ],
  },
  {
    code: "DC · 05",
    title: "Electrical & Instrumentation Plant Services",
    groups: [
      {
        items: [
          "High and medium voltage switchgear installation and servicing",
          "Distribution board and motor control center services",
          "Variable speed drive installation, commissioning, and servicing",
          "Soft starter installation and maintenance",
          "Power factor correction system services",
          "UPS, battery, and emergency generator services",
          "Cable installation — power, control, and instrumentation",
          "Earthing and surge protection systems",
          "Thermal scanning of all electrical installations",
          "Power quality analysis and harmonic assessment",
          "Flow meter and pressure transmitter calibration",
          "Temperature and vibration sensor installation and monitoring",
          "Full instrument calibration management and certification",
        ],
      },
    ],
  },
  {
    code: "DC · 06",
    title: "Maintenance Contracts for DC Operators",
    intro: [
      "Ordo's district cooling maintenance program is purpose-built for operators who cannot afford surprises. Structured, technology-driven, and completely transparent — our contracts give you full control and complete confidence.",
    ],
    coverageTable: true,
    extraList: true,
    responseTable: true,
  },
  {
    code: "DC · 07",
    title: "Upgrades & Efficiency Improvement",
    groups: [
      {
        items: [
          "Chiller replacement with higher-efficiency models",
          "Variable speed drive fitting on existing fixed-speed systems",
          "Chiller controls and building management system upgrades",
          "Free cooling integration and heat recovery addition",
          "Pump optimization and hydraulic efficiency improvement",
          "Cooling tower fill media upgrade and fan drive replacement",
          "Smart metering rollout across older network sections",
          "ETS control valve upgrade to smart modulating technology",
          "Energy performance audits and benchmarking",
          "Chiller sequencing and load management optimization",
          "Thermal storage operational strategy improvement",
          "Real-time energy monitoring and reporting systems",
        ],
      },
    ],
  },
  {
    code: "DC · 08",
    title: "24/7 Emergency Response",
    intro: [
      "In district cooling, there is no acceptable downtime.",
      "Ordo is always ready.",
    ],
    groups: [
      {
        items: [
          "Dedicated emergency line — answered every hour of every day",
          "Experienced district cooling technicians on permanent standby",
          "Fully equipped response vehicles — tools and parts ready",
          "On-site emergency spare parts inventory for critical components",
          "Chiller emergency repair and temporary bypass management",
          "Emergency pipe repair and network isolation",
          "ETS emergency repair and rapid reinstatement",
          "Electrical fault response and repair",
          "Emergency portable cooling coordination",
          "Post-emergency reporting and root cause analysis",
        ],
      },
    ],
  },
];

export const services = [
  {
    n: "01",
    title: "Electromechanical & Engineering Services",
    body: "Full ownership of your electromechanical project — from design coordination through to a fully tested, perfectly performing system.",
    items: ["HVAC", "Electrical", "Mechanical", "Plumbing", "BMS", "Equipment"],
  },
  {
    n: "02",
    title: "Building Finishes & Interior Works",
    body: "Technical precision paired with a genuine eye for design — finished to endure.",
    items: ["Tiling", "Painting", "Ceilings", "Partitions"],
  },
  {
    n: "03",
    title: "Maintenance, Repair & Specialist Services",
    body: "Proactive, professional maintenance that protects property value and eliminates costly failures.",
    items: ["Building Maintenance", "Electrical", "Plumbing", "District Cooling"],
  },
];

export const whyOrdo: { title: string; body: string; icon: IconName }[] = [
  { title: "One Partner", body: "Every technical discipline. One contact. No complexity.", icon: "partner" },
  { title: "Real Specialists", body: "Deep expertise in every service we offer — no generalists.", icon: "specialist" },
  { title: "Always There", body: "24 hours. 7 days. 365 days a year.", icon: "clock" },
  { title: "Tech-Enabled", body: "Digital maintenance management · Smart monitoring · Live reporting", icon: "tech" },
  { title: "Safety First", body: "Zero harm culture. Rigorous safety on every site, every day.", icon: "shield" },
  { title: "UAE Focused", body: "Built for this market. Experienced in its demands and its standards.", icon: "pin" },
  { title: "Transparent", body: "Clear reporting. Honest communication. No surprises.", icon: "chat" },
  { title: "Results Driven", body: "We measure what matters and we deliver on our commitments.", icon: "chart" },
];

export const districtCoolingStats = [
  { value: "08", label: "Specialist Divisions" },
  { value: "24/7", label: "Emergency Response" },
  { value: "UAE", label: "Wide Support" },
];

export const sectors = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Industrial",
  "Healthcare",
  "Government",
  "District Cooling",
];

// Draft copy -- the source company profile only lists sector names, not
// descriptions. These are reasonable placeholder descriptions for each
// sector; review and adjust the wording before launch.
export const sectorDetails = [
  {
    name: "Residential",
    description:
      "From villa communities to high-rise residential towers, we deliver electromechanical, finishing, and maintenance services that keep homes comfortable, safe, and running smoothly.",
  },
  {
    name: "Commercial",
    description:
      "Office towers, retail centers, and mixed-use developments rely on us for dependable MEP systems, interior finishing, and ongoing technical maintenance.",
  },
  {
    name: "Hospitality",
    description:
      "Hotels and resorts demand a flawless guest experience. We support hospitality operators with HVAC, maintenance, and finishing work that never interrupts service.",
  },
  {
    name: "Industrial",
    description:
      "Factories, warehouses, and industrial facilities trust Ordo for robust electromechanical installation, equipment maintenance, and rapid emergency response.",
  },
  {
    name: "Healthcare",
    description:
      "Hospitals and clinics need systems that simply cannot fail. We deliver the precision and reliability healthcare environments demand.",
  },
  {
    name: "Government",
    description:
      "We work with government entities on technical services and infrastructure projects that meet the UAE's highest standards for quality and compliance.",
  },
  {
    name: "District Cooling",
    description:
      "Our specialist division serves district cooling operators, plant managers, and network owners with dedicated, purpose-built technical services.",
    href: "/district-cooling",
  },
];

export const sustainability = {
  intro:
    "Ordo Technical Services LLC is proud to support the UAE's sustainability goals and contribute to a smarter, more energy-efficient built environment. Across all our services, we actively drive better environmental outcomes through:",
  items: [
    "Energy-efficient system design and installation",
    "District cooling — delivering up to 50% energy savings over conventional cooling",
    "LED lighting programs and energy reduction initiatives",
    "Variable speed drive installation and pump optimization",
    "Smart metering and real-time energy monitoring",
    "Responsible refrigerant handling",
    "Waste reduction and responsible site management",
    "Support for green building standards across all project types",
  ],
};

export const safety = {
  intro: "Safety is not a checkbox at Ordo. It is a culture.",
  items: [
    "Zero Harm commitment — every project, every site, every day",
    "Dedicated safety personnel on all active sites",
    "Risk assessments and method statements for every activity",
    "Permit to work system for all high-risk operations",
    "Mandatory safety briefings for all site personnel",
    "Confined space and isolation safety management",
    "Regular site audits, inspections, and team safety talks",
    "Incident reporting and continuous learning culture",
    "Full personal protective equipment compliance",
    "Responsible environmental and waste management practices",
  ],
};

// Verified working Unsplash source images used on the homepage.
// Swap these for the client's own photography when available.
export const images = {
  heroSkyline:
    "/images/river-modern-buildings.jpg",
  districtCoolingPipes:
    "/images/district-cooling-pipes.jpg",
};
