
// src/data/propertiesDetails.js
export const propertyDetails = {
  kembangan: {
    slug: "5-tuas-view-close",
    status: "For Sale",
    name: "No. 5 Tuas View Close",
    district: "District 22 - Tuas / Jurong",

    hero: "/assets/kembangan/hero.jpg",
    blueprintBg: "/assets/kembangan/blueprint-bg.svg",

    intro: `This project involves the proposed reconstruction of an existing 2-storey factory building into a new 4-storey factory development, incorporating a Secondary Workers Dormitory (FCD approved for 205 workers).`,

    glance: [
      "Reconstruction of Existing 2-Storey Factory",
      "New 4-Storey Factory Building",
      "Includes Secondary Workers Dormitory (FCD for 205 Workers)",
      "QP: Manifield Design Consult LLP",
      "PE: CP Lim & Partner LLP",
      "Project Start: 08 Aug 2024",
      "Expected Completion: 15 Oct 2025",
      "Status: On Going"
    ],

    layoutTabs: {
      floorplan: ["/assets/kembangan/floorplan.jpg"],
      perspective: [
        "/assets/kembangan/gallery-1.jpg",
        "/assets/kembangan/gallery-2.jpg",
        "/assets/kembangan/gallery-3.jpg"
      ]
    },

    // 这是 Factory / Industrial 项目的 Feature，我已经完全重写，让它与住宅类型不冲突
    features: {
      "Industrial Features": [
        "4-storey production and operations layout",
        "Heavy-load floor design suitable for industrial machinery",
        "Optimised circulation for goods movement and workflow",
        "Upgraded M&E systems to support industrial operations"
      ],
      "Workers Dormitory (FCD 205 pax)": [
        "FCD-compliant Secondary Workers Dormitory",
        "Dedicated bathrooms, toilets and shower facilities",
        "Ventilated living spaces designed for thermal comfort",
        "Separated access from factory operations for safety"
      ],
      "Building Upgrades": [
        "Enhanced structural reinforcement for 4-storey extension",
        "Fire safety upgrades and SCDF-compliant improvements",
        "Improved façade, cladding, and thermal insulation",
        "Energy-efficient LED lighting across entire development"
      ],
      "Locale & Connectivity": [
        "Located within Tuas industrial zone",
        "Close to major transport routes and Tuas Checkpoint",
        "Convenient access for logistics and industrial operations",
        "Suitable for manufacturing, fabrication or storage use"
      ]
    },

    disclaimer: `All project information is based on approved plans. Details, specifications and visuals are subject to further changes as required by authorities, consultants or the developer.`
  },

  // ===== Katong – Joo Chiat =====
  "katong-joo-chiat": {
    slug: "11-tuas-view-close",
    status: "For Sale",
    name: "No. 11 Tuas View Close",
    district: "District 22 - Tuas / Jurong",

    // 顶部大图（先沿用原来的 katong 素材路径，之后你再换图即可）
    hero: "/assets/katong/hero.jpg",

    // 蓝色网格背景
    blueprintBg: "/assets/katong/blueprint-bg.svg",

    intro: `This project involves the proposed reconstruction of an existing 2-storey factory building into a new 4-storey factory development, with a new workers’ canteen and a Secondary Workers Dormitory (FCD approved for 205 workers).`,

    glance: [
      "Reconstruction of Existing 2-Storey Factory Building",
      "New 4-Storey Factory Building",
      "New Workers’ Canteen & Secondary Workers Dormitory (FCD for 205 Workers)",
      "QP: Yeo Aik Koon",
      "PE: AJ’S Ingenieurs",
      "Project Start: 17 Sep 2024",
      "Expected Completion: 15 Oct 2025",
      "Status: On Going"
    ],

    layoutTabs: {
      floorplan: ["/assets/katong/floorplan.jpg"],
      perspective: [
        "/assets/katong/gallery-1.jpg",
        "/assets/katong/gallery-2.jpg",
        "/assets/katong/gallery-3.jpg"
      ]
    },

    features: {
      "Industrial Planning & Layout": [
        "4-storey factory layout designed for efficient production workflow",
        "Provision for heavy-duty floor loading to accommodate machinery",
        "Clear separation of production, loading/unloading and circulation zones",
        "Improved access routes for trucks and service vehicles"
      ],
      "Workers Facilities": [
        "New workers’ canteen integrated within the development",
        "Secondary Workers Dormitory planned in accordance with FCD requirements for 205 workers",
        "Design for adequate daylight, ventilation and comfort in dormitory spaces",
        "Dedicated sanitary and common facilities to serve the dormitory occupants"
      ],
      "Building Services & Upgrades": [
        "Upgraded M&E systems to support factory operations and dormitory needs",
        "Enhanced fire protection and life-safety systems to meet current codes",
        "Energy-efficient lighting and equipment specified for long-term savings",
        "Façade and envelope improvements for durability and maintainability"
      ],
      "Locale & Connectivity": [
        "Located within the established Tuas industrial estate",
        "Good connectivity to major expressways and Tuas Checkpoint",
        "Suitable for manufacturing, logistics or related industrial activities",
        "Strategic location for companies requiring on-site workers’ accommodation"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or omissions. All information including renderings, illustrations, photographs and other graphic representations are artist’s impressions only and are subject to changes as may be required by the developer or the relevant authorities.`
  },

        // ===== Katong – Joo Chiat =====
  "serangoon-gardens-1": {
    slug: "65-farleigh-ave",
    status: "For Sale",
    name: "No. 65 Farleigh Ave",
    district: "District 13 – Serangoon Gardens",

    // 顶部大图（先占位，用你的 katong 路径没问题）
    hero: "/assets/serangoon1/hero.jpg",

    // 蓝图背景（保持你的网站统一）
    blueprintBg: "/assets/serangoon1/blueprint-bg.svg",

    // —— Intro ——（根据表格内容写的简介）
    intro: `A proposed outline application for the erection of a 2-storey detached dwelling house featuring a mezzanine level, an attic and a fully submerged basement. Designed by Architects Project Group LLP with structural works by CP Lim & Partner LLP.`,

    // —— At a Glance ——（全部来自表格）
    glance: [
      "2-Storey Detached Dwelling House",
      "Includes Mezzanine, Attic & Fully Submerged Basement",
      "Project Status: On Going",
      "Expected Completion: 15 Oct 2025",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP",
      "Price: Please enquire"
    ],

    // —— Layout Tabs（你之后放实际图即可）——
    layoutTabs: {
      floorplan: ["/assets/serangoon1/floorplan.jpg"],
      perspective: [
        "/assets/serangoon1/gallery-1.jpg",
        "/assets/serangoon1/gallery-2.jpg",
        "/assets/serangoon1/gallery-3.jpg"
      ]
    },

    // —— Features ——（自由发挥但保持住宅项目逻辑一致）
    features: {
      "Architecture & Structure": [
        "Detached house with mezzanine, attic and fully submerged basement",
        "Optimised structural layout by CP Lim & Partner LLP (PE)",
        "Architectural design by Architects Project Group LLP"
      ],
      "Interior": [
        "Spacious family-oriented layout",
        "Potential for open-plan living & dining areas",
        "Flexible attic space suitable for study, entertainment or additional bedroom"
      ],
      "Basement": [
        "Fully submerged basement",
        "Potential use: home entertainment room, gym, storage or utility area"
      ],
      "Natural Lighting & Ventilation": [
        "Designed for optimal airflow throughout the home",
        "Large window openings to maximise natural light"
      ],
      "Locale": [
        "Located within the private landed enclave of Serangoon Gardens",
        "Close to amenities at Chomp Chomp, myVillage & Serangoon Garden Circus",
        "Within proximity to schools and daily conveniences"
      ]
    },

    disclaimer: `All information presented is based on the latest available submission records and may be subject to changes or approvals by authorities. All visuals and descriptions are illustrative and for reference only.`
  },

  tuasviewclose5: {
    slug: "tuasviewclose5",
    status: "Under Construction",
    name: "No. 5 Tuas View Close",
    district: "District 22 - Tuas / Jurong",

    hero: "/assets/tuasviewclose5/hero.jpg",
    blueprintBg: "/assets/tuasviewclose5/blueprint-bg.svg",

    intro: `This project involves the proposed reconstruction of an existing 2-storey factory building into a new 4-storey factory development, incorporating a Secondary Workers Dormitory (FCD approved for 205 workers).`,

    glance: [
      "Reconstruction of Existing 2-Storey Factory",
      "New 4-Storey Factory Building",
      "Includes Secondary Workers Dormitory (FCD for 205 Workers)",
      "QP: Manifield Design Consult LLP",
      "PE: CP Lim & Partner LLP",
      "Project Start: 08 Aug 2024",
      "Expected Completion: 15 Oct 2025",
      "Status: On Going"
    ],

    layoutTabs: {
      floorplan: ["/assets/tuasviewclose5/floorplan.jpg"],
      perspective: [
        "/assets/tuasviewclose5/gallery-1.jpg",
        "/assets/tuasviewclose5/gallery-2.jpg",
        "/assets/tuasviewclose5/gallery-3.jpg"
      ]
    },

    // 这是 Factory / Industrial 项目的 Feature，我已经完全重写，让它与住宅类型不冲突
    features: {
      "Industrial Features": [
        "4-storey production and operations layout",
        "Heavy-load floor design suitable for industrial machinery",
        "Optimised circulation for goods movement and workflow",
        "Upgraded M&E systems to support industrial operations"
      ],
      "Workers Dormitory (FCD 205 pax)": [
        "FCD-compliant Secondary Workers Dormitory",
        "Dedicated bathrooms, toilets and shower facilities",
        "Ventilated living spaces designed for thermal comfort",
        "Separated access from factory operations for safety"
      ],
      "Building Upgrades": [
        "Enhanced structural reinforcement for 4-storey extension",
        "Fire safety upgrades and SCDF-compliant improvements",
        "Improved façade, cladding, and thermal insulation",
        "Energy-efficient LED lighting across entire development"
      ],
      "Locale & Connectivity": [
        "Located within Tuas industrial zone",
        "Close to major transport routes and Tuas Checkpoint",
        "Convenient access for logistics and industrial operations",
        "Suitable for manufacturing, fabrication or storage use"
      ]
    },

    disclaimer: `All project information is based on approved plans. Details, specifications and visuals are subject to further changes as required by authorities, consultants or the developer.`
  },

  // ===== Katong – Joo Chiat =====
  "tuasviewclose11": {
    slug: "11-tuas-view-close",
    status: "Under Construction",
    name: "No. 11 Tuas View Close",
    district: "District 22 - Tuas / Jurong",

    // 顶部大图（先沿用原来的 katong 素材路径，之后你再换图即可）
    hero: "/assets/tuasviewclose11/hero.jpg",

    // 蓝色网格背景
    blueprintBg: "/assets/tuasviewclose11/blueprint-bg.svg",

    intro: `This project involves the proposed reconstruction of an existing 2-storey factory building into a new 4-storey factory development, with a new workers’ canteen and a Secondary Workers Dormitory (FCD approved for 205 workers).`,

    glance: [
      "Reconstruction of Existing 2-Storey Factory Building",
      "New 4-Storey Factory Building",
      "New Workers’ Canteen & Secondary Workers Dormitory (FCD for 205 Workers)",
      "QP: Yeo Aik Koon",
      "PE: AJ’S Ingenieurs",
      "Project Start: 17 Sep 2024",
      "Expected Completion: 15 Oct 2025",
      "Status: On Going"
    ],

    layoutTabs: {
      floorplan: ["/assets/tuasviewclose11/floorplan.jpg"],
      perspective: [
        "/assets/tuasviewclose11/gallery-1.jpg",
        "/assets/tuasviewclose11/gallery-2.jpg",
        "/assets/tuasviewclose11/gallery-3.jpg"
      ]
    },

    features: {
      "Industrial Planning & Layout": [
        "4-storey factory layout designed for efficient production workflow",
        "Provision for heavy-duty floor loading to accommodate machinery",
        "Clear separation of production, loading/unloading and circulation zones",
        "Improved access routes for trucks and service vehicles"
      ],
      "Workers Facilities": [
        "New workers’ canteen integrated within the development",
        "Secondary Workers Dormitory planned in accordance with FCD requirements for 205 workers",
        "Design for adequate daylight, ventilation and comfort in dormitory spaces",
        "Dedicated sanitary and common facilities to serve the dormitory occupants"
      ],
      "Building Services & Upgrades": [
        "Upgraded M&E systems to support factory operations and dormitory needs",
        "Enhanced fire protection and life-safety systems to meet current codes",
        "Energy-efficient lighting and equipment specified for long-term savings",
        "Façade and envelope improvements for durability and maintainability"
      ],
      "Locale & Connectivity": [
        "Located within the established Tuas industrial estate",
        "Good connectivity to major expressways and Tuas Checkpoint",
        "Suitable for manufacturing, logistics or related industrial activities",
        "Strategic location for companies requiring on-site workers’ accommodation"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or omissions. All information including renderings, illustrations, photographs and other graphic representations are artist’s impressions only and are subject to changes as may be required by the developer or the relevant authorities.`
  },

      // ===== Katong – Joo Chiat =====
  "farleighave65": {
    slug: "65-farleigh-ave",
    status: "Under Construction",
    name: "No. 65 Farleigh Ave",
    district: "District 13",

    // 顶部大图（先占位，用你的 katong 路径没问题）
    hero: "/assets/farleighave65/hero.jpg",

    // 蓝图背景（保持你的网站统一）
    blueprintBg: "/assets/farleighave65/blueprint-bg.svg",

    // —— Intro ——（根据表格内容写的简介）
    intro: `A proposed outline application for the erection of a 2-storey detached dwelling house featuring a mezzanine level, an attic and a fully submerged basement. Designed by Architects Project Group LLP with structural works by CP Lim & Partner LLP.`,

    // —— At a Glance ——（全部来自表格）
    glance: [
      "2-Storey Detached Dwelling House",
      "Includes Mezzanine, Attic & Fully Submerged Basement",
      "Project Status: On Going",
      "Expected Completion: 15 Oct 2025",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP",
      "Price: Please enquire"
    ],

    // —— Layout Tabs（你之后放实际图即可）——
    layoutTabs: {
      floorplan: ["/assets/farleighave65/floorplan.jpg"],
      perspective: [
        "/assets/farleighave65/gallery-1.jpg",
        "/assets/farleighave65/gallery-2.jpg",
        "/assets/farleighave65/gallery-3.jpg"
      ]
    },

    // —— Features ——（自由发挥但保持住宅项目逻辑一致）
    features: {
      "Architecture & Structure": [
        "Detached house with mezzanine, attic and fully submerged basement",
        "Optimised structural layout by CP Lim & Partner LLP (PE)",
        "Architectural design by Architects Project Group LLP"
      ],
      "Interior": [
        "Spacious family-oriented layout",
        "Potential for open-plan living & dining areas",
        "Flexible attic space suitable for study, entertainment or additional bedroom"
      ],
      "Basement": [
        "Fully submerged basement",
        "Potential use: home entertainment room, gym, storage or utility area"
      ],
      "Natural Lighting & Ventilation": [
        "Designed for optimal airflow throughout the home",
        "Large window openings to maximise natural light"
      ],
      "Locale": [
        "Located within the private landed enclave of Serangoon Gardens",
        "Close to amenities at Chomp Chomp, myVillage & Serangoon Garden Circus",
        "Within proximity to schools and daily conveniences"
      ]
    },

    disclaimer: `All information presented is based on the latest available submission records and may be subject to changes or approvals by authorities. All visuals and descriptions are illustrative and for reference only.`
  },

  "completed-a": {
    slug: "tannery-lane",
    status: "Completed",                 // 显示在红色小字那一行
    name: "No. 19 Tannery Lane",
    district: "District 13",

    // 顶部大图
    hero: "/assets/completed-a/hero.jpg",

    // 蓝色网格背景（先用同一张也可以）
    blueprintBg: "/assets/completed-a/blueprint-bg.svg",

    // 介绍文案你可以之后替换成正式版本，这里先占位
    intro: `This completed project involves the erection of a 4-storey industrial building with an ancillary worker's dormitory located at the 1st storey.`,

    glance: [
      "4-Storey Industrial Building",
      "Ancillary Worker's Dormitory at 1st Storey",
      "Consultants (QP / PE): TP Seow Consultants",
      "Land Size (est): TBD",
      "Built-Up (est): TBD",
      "Contract Duration: 28/02/2009 – 28/02/2010",
      "Price: Please enquire"
    ],

    layoutTabs: {
      floorplan: ["/assets/katong/floorplan.jpg"],
      perspective: [
        "/assets/completed-a/gallery-1.jpg",
        "/assets/completed-a/gallery-2.jpg",
        "/assets/completed-a/gallery-3.jpg"
      ]
    },
    features: {
      "Green Features": [
        "Use of green materials",
        "Use of water efficient fittings",
        "Use of energy efficient lights, aircons and lift",
        "Provision of large windows for natural lighting and ventilation for all habitable areas",
        "Provision of sun-shading screens to minimise sunlight while allowing sufficient light to enter the spaces",
        "Provision of covered car porch within the development"
      ],
      "Residence": [
        "Double Volume Living Area (est. 5.3m ceiling height)",
        "Marble finishings line the 1st storey – living, dining and dry kitchen areas",
        "Bedrooms open to private balconies or roof terrace",
        "Timber teak floor covers BR corridors and floors, adding softness and warmth",
        "In-built lift for easy access within the property"
      ],
      "Dry Kitchen": [
        "Fitted with premium kitchen appliances"
      ],
      "Bedroom": [
        "6 spacious bedrooms (5 ensuite), 1 Helper’s Room",
        "Palatial master bedroom with space for study/work area and additional wardrobe space",
        "Each bathroom furnished with polished marble or stone finishings"
      ],
      "Locale": [
        "Nearby Kembangan MRT and Bedok North MRT",
        "Close to schools and amenities within 1–2 km radius",
        "Food options from cafes, restaurants and coffee shops for every budget"
      ]
    },
    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "completed-b": {
      slug: "32-jalan-jitong",
      status: "Completed",
      name: "No. 32 Jalan Jitong",
      district: "District 28",

      // 顶部大图（占位）
      hero: "/assets/completed-b/hero.jpg",

      // 蓝色网格背景
      blueprintBg: "/assets/completed-b/blueprint-bg.svg",

      // 简介（基于图中内容）
      intro: `This project involves the erection of a 2-storey semi-detached dwelling house complete with an attic, roof garden, and a private swimming pool. The construction was carried out between January 2013 and April 2014 by Architects Genesis (QP) and Pebiz Consultants (PE).`,

      glance: [
        "2-Storey Semi-Detached House with Attic",
        "Roof Garden & Private Swimming Pool",
        "Contract Duration: 21 Jan 2013 – 22 Apr 2014",
        "Land Size (est): 3,200 – 3,500 sqft",
        "Built-Up (est): 4,500 – 5,000 sqft",
        "QP: Architects Genesis",
        "PE: Pebiz Consultants",
        "Construction Cost: $1,100,000"
      ],

      layoutTabs: {
        floorplan: [
          "/assets/completed-b/floorplan.jpg"
        ],
        perspective: [
          "/assets/completed-b/gallery-1.jpg",
          "/assets/completed-b/gallery-2.jpg",
          "/assets/completed-b/gallery-3.jpg"
        ]
      },

      // ★ 以下为你要求的：可自行拓展但不得与图中冲突 → 我已全部写成合理、不重复的内容
      features: {
        "Architecture & Build": [
          "Contemporary semi-detached design with clean architectural lines",
          "Integrated attic level designed for multifunctional family or entertainment use",
          "Roof garden with planter edges for privacy and greenery",
          "Swimming pool constructed with reinforced concrete shell and mosaic tile finishing",
          "Optimized spatial planning with clear zoning for common and private areas"
        ],
        "Interior": [
          "Double-height living area enhancing natural light flow",
          "Open-plan dining and dry kitchen arrangement",
          "Quality stone and timber finishes throughout the interior",
          "Large window openings for natural ventilation",
          "Ensuite bedrooms designed with functional wardrobe layouts"
        ],
        "Sustainability": [
          "Energy-efficient lighting throughout the residence",
          "Cross-ventilation planning in all habitable spaces",
          "Water-efficient sanitary fittings",
          "Environmental considerations in material selection"
        ],
        "Locale": [
          "Peaceful landed enclave ideal for family living",
          "Surrounded by parks and quiet neighbourhood streets",
          "Accessible to amenities, eateries, and neighbourhood commercial clusters",
          "Short drive to major expressways connecting to the rest of Singapore"
        ]
      },

      disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or omissions. All visuals including illustrations, pictures and renderings are artist’s impressions and are subject to changes as required by authorities or the developer.`
  },

  "chiselhurst63": {
      slug: "chiselhurst63",
      status: "Completed",
      name: "No. 63 Chiselhurst Grove",
      district: "District 19",

      hero: "/assets/chiselhurst63/hero.jpg",
      blueprintBg: "/assets/chiselhurst63/blueprint-bg.svg",

      intro: `A bespoke corner-terrace residence designed under the envelope control scheme, this project features a 2-storey structure complemented by a full basement, attic and a private swimming pool. Built between May 2014 and August 2015, the home balances architectural functionality with refined modern living.`,

      glance: [
        "2-Storey Envelope-Control Corner Terrace",
        "Includes Attic, Basement & Swimming Pool",
        "Construction Period: 1 May 2014 – 28 Aug 2015",
        "QP: Hiladt Architects LLP",
        "PE: Cericon Consultants"
      ],

      layoutTabs: {
        floorplan: ["/assets/chiselhurst63/floorplan.jpg"],
        perspective: [
          "/assets/chiselhurst63/gallery-1.jpg",
          "/assets/chiselhurst63/gallery-2.jpg",
          "/assets/chiselhurst63/gallery-3.jpg"
        ]
      },

      features: {
        "Green Features": [
          "Cross-ventilated layout planned for natural cooling",
          "Energy-efficient lighting and water-saving bathroom fittings",
          "Large window openings designed to reduce daytime energy use",
          "Eco-friendly construction materials selected where feasible",
          "Shading devices incorporated to manage heat without compromising daylight",
          "Covered car porch designed to reduce surface heat gain"
        ],

        "Residence": [
          "Bright double-volume living area enhancing spatial openness",
          "Stone finishes throughout the main living zones",
          "Attic level designed for flexible use such as study, lounge or entertainment",
          "Basement space suitable for home theatre, storage or gym",
          "Timber flooring along bedroom corridors for warmth and acoustic comfort",
          "Dedicated vertical circulation core for seamless movement between levels"
        ],

        "Dry Kitchen": [
          "Thoughtfully planned dry-kitchen layout suitable for hosting and preparation",
          "Equipped with premium branded appliances and efficient storage systems"
        ],

        "Bedroom": [
          "Generously sized bedrooms across all levels, most with ensuite layouts",
          "Master suite designed with walk-in wardrobe and lounge space",
          "Bathrooms finished with stone or high-quality porcelain materials",
          "Natural light introduced through strategic window placement"
        ],

        "Locale": [
          "Located within a tranquil landed neighbourhood ideal for families",
          "Convenient access to nearby amenities, parks and daily necessities",
          "Short drive to major expressways connecting the wider region",
          "Close proximity to reputable schools and community facilities"
        ]
      },

      disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "crowhurst52": {
      slug: "crowhurst52",
      status: "Completed",
      name: "No. 52 Crowhurst Drive",
      district: "District 19",

      hero: "/assets/crowhurst52/hero.jpg",
      blueprintBg: "/assets/crowhurst52/blueprint-bg.svg",

      intro: `This project comprises the erection of a 2-storey envelope-control corner semi-detached dwelling house featuring an attic, a full basement and a private swimming pool. Completed between October 2015 and October 2017, the home is designed by Hiladt Architects LLP (QP) with structural works by Cericon Consultants (PE).`,

      glance: [
        "2-Storey Envelope-Control Corner Semi-Detached",
        "Includes Attic, Basement & Swimming Pool",
        "Contract Duration: 28 Oct 2015 – 28 Oct 2017",
        "QP: Hiladt Architects LLP",
        "PE: Cericon Consultants"
      ],

      layoutTabs: {
        floorplan: ["/assets/crowhurst52/floorplan.jpg"],
        perspective: [
          "/assets/crowhurst52/gallery-1.jpg",
          "/assets/crowhurst52/gallery-2.jpg",
          "/assets/crowhurst52/gallery-3.jpg"
        ]
      },

      features: {
        "Green Features": [
          "Energy-efficient light fittings and eco-friendly material selection",
          "Water-efficient sanitary fixtures installed throughout the home",
          "Envelope-control planning to reduce heat gain from external façade",
          "Large openings introduced to maximise natural ventilation",
          "Sun-shading elements integrated to enhance interior comfort",
          "Covered parking area to minimise outdoor heat exposure"
        ],

        "Residence": [
          "Open and spacious living area with clean architectural lines",
          "Functional basement suitable for entertainment, storage or fitness use",
          "Attic level designed as a versatile additional family or study area",
          "Thoughtfully planned room distribution across all levels",
          "Quality timber and stone materials used in key interior spaces",
          "Well-connected vertical circulation across basement to attic"
        ],

        "Dry Kitchen": [
          "Modern dry kitchen equipped with high-efficiency appliances",
          "Designed with ample worktop and storage space for daily preparation"
        ],

        "Bedroom": [
          "Comfortable bedroom layouts with generous wardrobe space",
          "Master suite designed with lounge/study area options",
          "Bathrooms finished in quality porcelain or stone surfaces",
          "Strategically placed windows to enhance natural lighting"
        ],

        "Locale": [
          "Situated within a peaceful landed housing estate",
          "Convenient access to nearby amenities, eateries and neighbourhood shops",
          "Short drive to schools, parks and community facilities",
          "Well linked to major expressways for easy island-wide travel"
        ]
      },

      disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },
"huddington2": {
    slug: "huddington2",
    status: "Completed",
    name: "No. 2 Huddington Ave",
    district: "District 19",

    hero: "/assets/huddington2/hero.jpg",
    blueprintBg: "/assets/huddington2/blueprint-bg.svg",

    intro: `This project features the erection of a 2-storey corner terrace dwelling house complete with an attic, full basement and a private swimming pool. Designed by Hiladt Architects LLP (QP) with structural works by Cericon Consultants (PE), the home was constructed between January 2016 and October 2017.`,

    glance: [
      "2-Storey Corner Terrace Residence",
      "Includes Attic, Basement & Swimming Pool",
      "Contract Duration: 26 Jan 2016 – 28 Oct 2017",
      "Contract Sum: $1,300,000",
      "QP: Hiladt Architects LLP",
      "PE: Cericon Consultants"
    ],

    layoutTabs: {
      floorplan: ["/assets/huddington2/floorplan.jpg"],
      perspective: [
        "/assets/huddington2/gallery-1.jpg",
        "/assets/huddington2/gallery-2.jpg",
        "/assets/huddington2/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Energy-efficient lighting incorporated throughout the home",
        "Water-saving sanitary fittings supporting sustainable usage",
        "Large openings designed to maximise daylight and ventilation",
        "Use of eco-conscious construction materials where appropriate",
        "Sun-shading elements added to reduce heat gain and improve comfort",
        "Covered car porch designed to minimise exterior heat exposure"
      ],

      "Residence": [
        "Bright and welcoming living area with generous ceiling height",
        "Basement level providing flexible space for entertainment or storage",
        "Attic floor planned for multi-use purposes such as study or family lounge",
        "Functional internal layout supporting efficient circulation",
        "Quality timber and stone finishes across key zones",
        "Well-designed vertical access from basement to attic"
      ],

      "Dry Kitchen": [
        "Equipped with modern appliances suited for daily preparation",
        "Designed with efficient workspace planning and ample cabinetry"
      ],

      "Bedroom": [
        "Comfortably sized bedrooms across both storeys",
        "Master suite with dedicated wardrobe and rest area",
        "Bathrooms finished with premium porcelain or stone surfaces",
        "Windows carefully positioned for natural lighting and privacy"
      ],

      "Locale": [
        "Situated within a serene landed housing enclave",
        "Close to neighbourhood amenities, parks and daily conveniences",
        "Convenient drive to reputable schools and community facilities",
        "Well-connected to major expressways for seamless travel"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
},
  "huddington2": {
      slug: "huddington2",
      status: "Completed",
      name: "No. 2 Huddington Ave",
      district: "District 19",

      hero: "/assets/huddington2/hero.jpg",
      blueprintBg: "/assets/huddington2/blueprint-bg.svg",

      intro: `This project features the erection of a 2-storey corner terrace dwelling house complete with an attic, full basement and a private swimming pool. Designed by Hiladt Architects LLP (QP) with structural works by Cericon Consultants (PE), the home was constructed between January 2016 and October 2017.`,

      glance: [
        "2-Storey Corner Terrace Residence",
        "Includes Attic, Basement & Swimming Pool",
        "Contract Duration: 26 Jan 2016 – 28 Oct 2017",
        "QP: Hiladt Architects LLP",
        "PE: Cericon Consultants"
      ],

      layoutTabs: {
        floorplan: ["/assets/huddington2/floorplan.jpg"],
        perspective: [
          "/assets/huddington2/gallery-1.jpg",
          "/assets/huddington2/gallery-2.jpg",
          "/assets/huddington2/gallery-3.jpg"
        ]
      },

      features: {
        "Green Features": [
          "Energy-efficient lighting incorporated throughout the home",
          "Water-saving sanitary fittings supporting sustainable usage",
          "Large openings designed to maximise daylight and ventilation",
          "Use of eco-conscious construction materials where appropriate",
          "Sun-shading elements added to reduce heat gain and improve comfort",
          "Covered car porch designed to minimise exterior heat exposure"
        ],

        "Residence": [
          "Bright and welcoming living area with generous ceiling height",
          "Basement level providing flexible space for entertainment or storage",
          "Attic floor planned for multi-use purposes such as study or family lounge",
          "Functional internal layout supporting efficient circulation",
          "Quality timber and stone finishes across key zones",
          "Well-designed vertical access from basement to attic"
        ],

        "Dry Kitchen": [
          "Equipped with modern appliances suited for daily preparation",
          "Designed with efficient workspace planning and ample cabinetry"
        ],

        "Bedroom": [
          "Comfortably sized bedrooms across both storeys",
          "Master suite with dedicated wardrobe and rest area",
          "Bathrooms finished with premium porcelain or stone surfaces",
          "Windows carefully positioned for natural lighting and privacy"
        ],

        "Locale": [
          "Situated within a serene landed housing enclave",
          "Close to neighbourhood amenities, parks and daily conveniences",
          "Convenient drive to reputable schools and community facilities",
          "Well-connected to major expressways for seamless travel"
        ]
      },

      disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

       "portchester10": {
    slug: "portchester10",
    status: "Completed",
    name: "No. 10 Portchester Ave",
    district: "District 19",

    hero: "/assets/portchester10/hero.jpg",
    blueprintBg: "/assets/portchester10/blueprint-bg.svg",

    intro: `This project involves the erection of a 5-storey modern landed residence comprising:

  1st Storey  
  Mezzanine Storey  
  2nd Storey  
  3rd Storey  
  Attic Storey

  Designed with expansive glass façades, deep balconies, and a clean modern profile, the dwelling features generous living spaces, private suite-style bedrooms, landscaped terraces, and a rooftop entertainment deck.

  The architecture adopts a contemporary tropical style with sun-shading eaves, full-height windows, and a refined material palette of timber, concrete, and glass.`,

    glance: [
      "5-Storey Modern Landed Residence",
      "Contemporary Tropical Façade",
      "Rooftop Terrace & Deep Balconies",
      "Completion Status: Completed",
      "Architectural Style: Timber / Glass / Concrete Palette"
    ],

    layoutTabs: {
      floorplan: ["/assets/portchester10/floorplan.jpg"],
      perspective: [
        "/assets/portchester10/gallery-1.jpg",
        "/assets/portchester10/gallery-2.jpg",
        "/assets/portchester10/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Use of energy-efficient fittings",
        "Large windows for natural daylight and ventilation",
        "Wide sun-shading eaves and façade fins",
        "Landscaped setbacks and rooftop greenery",
        "Sustainable and low-maintenance material palette"
      ],

      "Residence": [
        "Double-volume living and dining space on 1st Storey",
        "Full-height sliding glass panels to enhance indoor-outdoor flow",
        "Open-plan dining and mezzanine overlooking central void",
        "Family lounge areas on upper storeys",
        "Timber-finish ceilings and façade accents for warmth and texture"
      ],

      "Dry Kitchen": [
        "Dry kitchen adjoining dining area",
        "Wet kitchen positioned at rear service yard",
        "Fitted with premium appliances (owner-spec options available)"
      ],

      "Bedroom": [
        "Multiple spacious bedrooms across all upper floors",
        "Several ensuite configurations",
        "Attic suite with direct access to private roof terrace",
        "Built-in wardrobe provisions",
        "Full-height windows ensuring brightness and cross-ventilation"
      ],

      "Locale": [
        "Convenient access to nearby amenities",
        "Located within a tranquil landed housing enclave",
        "Short driving distance to lifestyle and dining options"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder, and their agents shall not be held responsible for any inaccuracies or omissions. All information including renderings, illustrations, and visual representations are artist’s impressions only and subject to changes as approved by the relevant authorities.`
  },

  "crowhurst57": {
      slug: "crowhurst57",
      status: "Completed",
      name: "No. 57 Crowhurst Drive",
      district: "District 19",

      hero: "/assets/crowhurst57/hero.jpg",
      blueprintBg: "/assets/crowhurst57/blueprint-bg.svg",

      intro: `This project comprises the erection of a 2-storey envelope-control corner semi-detached residence featuring an attic, basement and private swimming pool. Designed by Hiladt Architects LLP (QP) with structural engineering by Cericon Consultants (PE), the home was constructed from August 2017 to August 2019.`,

      glance: [
        "2-Storey Envelope-Control Corner Semi-Detached",
        "Includes Attic, Basement & Swimming Pool",
        "Contract Duration: 15 Aug 2017 – 15 Aug 2019",
        "QP: Hiladt Architects LLP",
        "PE: Cericon Consultants"
      ],

      layoutTabs: {
        floorplan: ["/assets/crowhurst57/floorplan.jpg"],
        perspective: [
          "/assets/crowhurst57/gallery-1.jpg",
          "/assets/crowhurst57/gallery-2.jpg",
          "/assets/crowhurst57/gallery-3.jpg"
        ]
      },

      features: {
        "Green Features": [
          "Energy-efficient lighting and environmentally conscious materials",
          "Water-saving sanitary fixtures installed throughout the residence",
          "Optimised façade design to reduce solar heat gain",
          "Large window openings for improved natural lighting and ventilation",
          "Sun-shading elements enhancing indoor comfort",
          "Covered car porch designed to reduce external heat exposure"
        ],

        "Residence": [
          "Welcoming living area with carefully planned interior proportions",
          "Basement level offering flexible use for entertainment or storage",
          "Attic designed as a multipurpose family or study zone",
          "Spatial layout supporting efficient circulation between floors",
          "Combination of timber and stone finishes adding warmth and elegance",
          "Seamless vertical access from basement to attic"
        ],

        "Dry Kitchen": [
          "Fitted with modern appliances suitable for daily preparation",
          "Thoughtful cabinetry layout for maximum storage efficiency"
        ],

        "Bedroom": [
          "Comfortably sized bedrooms with strategic natural lighting",
          "Master suite with dedicated rest and wardrobe zones",
          "Bathrooms finished with premium porcelain or stone materials",
          "Ventilation-focused window placement ensuring privacy and comfort"
        ],

        "Locale": [
          "Located within a peaceful and established landed estate",
          "Close proximity to everyday amenities, eateries and parks",
          "Convenient access to reputable schools and community facilities",
          "Well-connected via major expressways for easy travel across Singapore"
        ]
      },

      disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "farleigh81": {
      slug: "farleigh81",
      status: "Completed",
      name: "No. 81 Farleigh Ave",
      district: "District 19",

      hero: "/assets/farleigh81/hero.jpg",
      blueprintBg: "/assets/farleigh81/blueprint-bg.svg",

      intro: `This project consists of the erection of a 2-storey envelope-control corner semi-detached residence with an attic, full basement and private swimming pool. Designed by Yeo Aik Koon (QP) with structural engineering by AJ'S Ingenieurs (PE), the works were carried out between August 2017 and August 2019.`,

      glance: [
        "2-Storey Envelope-Control Corner Semi-Detached",
        "Includes Attic, Basement & Swimming Pool",
        "Contract Duration: 30 Aug 2017 – 30 Aug 2019",
        "QP: Yeo Aik Koon",
        "PE: AJ'S Ingenieurs"
      ],

      layoutTabs: {
        floorplan: ["/assets/farleigh81/floorplan.jpg"],
        perspective: [
          "/assets/farleigh81/gallery-1.jpg",
          "/assets/farleigh81/gallery-2.jpg",
          "/assets/farleigh81/gallery-3.jpg"
        ]
      },

      features: {
        "Green Features": [
          "Integration of energy-efficient lighting across the home",
          "Use of water-saving sanitary fittings",
          "Large openings designed for natural light and airflow",
          "Façade planning to mitigate direct heat exposure",
          "Sun-shading devices incorporated for enhanced indoor comfort",
          "Covered car porch reducing external heat gain"
        ],

        "Residence": [
          "Spacious living and dining zones crafted for natural light",
          "Basement level suited for entertainment, recreation or storage",
          "Attic provides additional flexible family or study area",
          "Thoughtfully arranged internal layout supporting smooth circulation",
          "Blend of warm timber and refined stone finishes",
          "Efficient vertical access linking basement, main floors and attic"
        ],

        "Dry Kitchen": [
          "Equipped with contemporary built-in appliances",
          "Designed with ergonomic layout and ample storage options"
        ],

        "Bedroom": [
          "Comfortable bedrooms with well-sized layouts",
          "Master bedroom designed with wardrobe and rest area provisions",
          "Bathrooms fitted with high-quality stone or porcelain finishes",
          "Strategic window placement for natural lighting and privacy"
        ],

        "Locale": [
          "Nestled within a calm and established landed neighbourhood",
          "Close to key amenities, dining options and community facilities",
          "Convenient access to reputable schools within short driving distance",
          "Easily connected to major expressways for smooth islandwide travel"
        ]
      },

      disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "orchard320": {
    slug: "320-orchard-road",
    status: "Completed",
    name: "320 Orchard Road",
    district: "District 9",

    hero: "/assets/orchard320/hero.jpg",
    blueprintBg: "/assets/orchard320/blueprint-bg.svg",

    intro: `This project involves the proposed new erection of an outdoor refreshment kiosk at Tang Plaza, 320 Orchard Road, Singapore 238865. Designed by Hiladt Architects LLP (QP) with structural design by TY Lin International Pte Ltd (PE), the kiosk was constructed within a short programme between January and April 2019.`,

    glance: [
      "Outdoor Refreshment Kiosk at Tang Plaza",
      "Prominent frontage along Orchard Road",
      "Project Type: Retail / F&B Pavilion",
      "Contract Duration: 24 Jan 2019 – 10 Apr 2019",
      "Contract Sum: Not Disclosed",
      "QP: Hiladt Architects LLP",
      "PE: TY Lin International Pte Ltd"
    ],

    layoutTabs: {
      floorplan: ["/assets/orchard320/floorplan.jpg"],
      perspective: [
        "/assets/orchard320/gallery-1.jpg",
        "/assets/orchard320/gallery-2.jpg",
        "/assets/orchard320/gallery-3.jpg"
      ]
    },

    features: {
      "Design & Structure": [
        "Lightweight kiosk structure designed for quick erection and ease of maintenance",
        "Façade treatment coordinated with the overall architectural language of Tang Plaza",
        "Clear and generous kiosk openings for visibility and customer flow",
        "Integrated counters and service areas optimised for F&B operations"
      ],
      "Functionality": [
        "Compact planning to accommodate preparation, serving and storage zones",
        "Dedicated customer-facing counter with weather protection",
        "Provision for power, water and mechanical services to support food and beverage use",
        "Flexible internal layout to suit different kiosk operators"
      ],
      "Green Features": [
        "Energy-efficient lighting to reduce operating costs",
        "Design that maximises natural ventilation where possible",
        "Use of durable finishes to minimise long-term replacement and waste",
        "Canopy elements providing shade to improve thermal comfort"
      ],
      "Locale": [
        "Situated within Tang Plaza along the prime Orchard Road shopping belt",
        "High pedestrian traffic from retail malls, offices and hotels in the vicinity",
        "Excellent accessibility via Orchard MRT station and multiple bus services",
        "Surrounded by a wide variety of shopping, dining and lifestyle amenities"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "geyland582": {
    slug: "geyland582",
    status: "Completed",
    name: "No. 582 Geylang Road",
    district: "District 14",

    hero: "/assets/geyland582/hero.jpg",
    blueprintBg: "/assets/geyland582/blueprint-bg.svg",

    intro: `This project involves additions and alterations to an existing 2-storey terrace shophouse with a new 5-storey rear extension at 582 Geylang Road. Led by Yan Consultants (QP) with structural engineering by AJ'S Ingenieurs (PE), the works were carried out while maintaining operations along the busy Geylang Road frontage.`,

    glance: [
      "Additions & Alterations to Existing 2-Storey Terrace Shophouse",
      "New 5-Storey Rear Extension",
      "Urban Main-Road Frontage at 582 Geylang Road",
      "Contract Duration: 1 Dec 2017 – 25 Nov 2020",
      "QP: Yan Consultants",
      "PE: AJ'S Ingenieurs"
    ],

    layoutTabs: {
      floorplan: ["/assets/geyland582/floorplan.jpg"],
      perspective: [
        "/assets/geyland582/gallery-1.jpg",
        "/assets/geyland582/gallery-2.jpg",
        "/assets/geyland582/gallery-3.jpg"
      ]
    },

    features: {
      "Design & Planning": [
        "Retention and upgrading of the existing 2-storey terrace shophouse façade along Geylang Road",
        "New 5-storey rear extension providing additional floor area for commercial or office use",
        "Careful integration between old shophouse structure and new extension volumes",
        "Internal circulation reconfigured for efficient access between front block and rear extension",
        "Planning to comply with urban street-wall character of Geylang Road"
      ],
      "Structural & A&A Works": [
        "Strengthening of existing structural elements to accommodate new loading requirements",
        "New structural frame designed for the 5-storey rear extension",
        "Construction executed in phases to minimise disruption to surrounding properties",
        "Upgrading of building services including electrical, plumbing and fire protection"
      ],
      "Building Upgrades": [
        "Refurbished internal spaces for improved usability and flexibility",
        "Provision for lift access to upper levels in the extension block (where applicable)",
        "Enhanced fire escape routes and safety provisions to current code requirements",
        "Improved natural lighting and ventilation to internal corridors and rooms"
      ],
      "Locale": [
        "Located along the vibrant Geylang Road corridor",
        "Excellent visibility and frontage to main traffic artery",
        "Surrounded by a mix of F&B, retail and commercial uses",
        "Convenient access via public transport and major expressways"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "kalidasa16": {
    slug: "kalidasa16",
    status: "Completed",
    name: "No. 16 Kalidasa Ave",
    district: "District 26",

    hero: "/assets/kalidasa16/hero.jpg",
    blueprintBg: "/assets/kalidasa16/blueprint-bg.svg",

    intro: `This project involves the erection of a 3-storey envelope-control corner terrace dwelling house with an attic. Designed by Architects Project Group LLP (QP) and structurally engineered by CP Lim & Partner LLP (PE), the residence was constructed between January 2020 and August 2021.`,

    glance: [
      "3-Storey Envelope-Control Corner Terrace",
      "Includes Attic Level",
      "Contract Duration: 13 Jan 2020 – 30 Aug 2021",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP"
    ],

    layoutTabs: {
      floorplan: ["/assets/kalidasa16/floorplan.jpg"],
      perspective: [
        "/assets/kalidasa16/gallery-1.jpg",
        "/assets/kalidasa16/gallery-2.jpg",
        "/assets/kalidasa16/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control massing designed to reduce heat gain",
        "Large openings to maximise natural ventilation and daylight",
        "Energy-efficient lighting throughout the residence",
        "Use of water-saving sanitary fittings",
        "Sun-shading elements incorporated to improve indoor comfort"
      ],

      "Residence": [
        "Three-storey layout providing generous living space",
        "Attic level offering flexible usage such as study, entertainment or lounge",
        "Well-planned spatial zoning for privacy between levels",
        "Quality internal finishes enhancing the overall living experience",
        "Efficient circulation design linking all floors seamlessly"
      ],

      "Dry Kitchen": [
        "Modern dry kitchen fitted with quality appliances",
        "Ample worktop and storage space for daily meal preparation"
      ],

      "Bedroom": [
        "Comfortably sized bedrooms across all levels",
        "Master suite designed with wardrobe and rest area provision",
        "Bathrooms finished with durable and elegant materials",
        "Windows positioned for natural lighting and privacy"
      ],

      "Locale": [
        "Located within a peaceful landed housing enclave in District 26",
        "Close to surrounding nature parks and residential amenities",
        "Convenient access to schools, eateries and neighbourhood facilities",
        "Well-connected to major roads for ease of travel"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "jalanlakum20": {
    slug: "jalanlakum20",
    status: "Completed",
    name: "No. 20 Jalan Lakum",
    district: "District 28",

    hero: "/assets/jalanlakum20/hero.jpg",
    blueprintBg: "/assets/jalanlakum20/blueprint-bg.svg",

    intro: `This project involves the erection of a 2-storey envelope-control intermediate terrace dwelling house featuring a mezzanine level and an attic. Designed by Architects Project Group LLP (QP) with structural engineering by CP Lim & Partner LLP (PE), the residence was constructed between December 2020 and October 2022.`,

    glance: [
      "2-Storey Envelope-Control Intermediate Terrace",
      "With Mezzanine Level & Attic",
      "Contract Duration: 29 Dec 2020 – 30 Oct 2022",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP"
    ],

    layoutTabs: {
      floorplan: ["/assets/jalanlakum20/floorplan.jpg"],
      perspective: [
        "/assets/jalanlakum20/gallery-1.jpg",
        "/assets/jalanlakum20/gallery-2.jpg",
        "/assets/jalanlakum20/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control design ensuring reduced heat gain",
        "Energy-efficient lighting installed throughout the home",
        "Large openings for natural ventilation and daylight",
        "Water-saving sanitary fittings for sustainable usage",
        "Sun-shading elements integrated for improved indoor comfort"
      ],

      "Residence": [
        "2-storey main layout complemented by mezzanine level",
        "Attic floor offering flexible use as study, lounge or entertainment area",
        "Efficient zoning between living, dining and private spaces",
        "Well-planned internal circulation connecting all floors",
        "Quality interior finishes selected for durability and visual warmth"
      ],

      "Dry Kitchen": [
        "Modern dry kitchen fitted with functional cabinetry",
        "Designed with efficient workflow and adequate storage volume"
      ],

      "Bedroom": [
        "Comfortable bedrooms positioned for privacy and natural light",
        "Master bedroom designed with wardrobe and resting area provisions",
        "Bathrooms finished in high-quality stone or porcelain surfaces",
        "Ventilation-minded window placement improving comfort"
      ],

      "Locale": [
        "Located within a quiet landed estate in District 28",
        "Short distance to nearby amenities and neighbourhood facilities",
        "Convenient access to schools, parks and daily necessities",
        "Well-connected to major roads for easy travel across Singapore"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "borthwick29": {
    slug: "borthwick29",
    status: "Completed",
    name: "No. 29 Borthwick Drive",
    district: "District 19",

    hero: "/assets/borthwick29/hero.jpg",
    blueprintBg: "/assets/borthwick29/blueprint-bg.svg",

    intro: `This project involves the erection of a 2-storey envelope-control semi-detached dwelling house incorporating both a mezzanine level and an attic. Designed by Architects Project Group LLP (QP) with structural engineering provided by AJ'S Ingenieurs (PE), the residence was constructed between January 2021 and September 2022.`,

    glance: [
      "2-Storey Envelope-Control Semi-Detached House",
      "Includes Mezzanine Level & Attic",
      "Contract Duration: 15 Jan 2021 – 30 Sep 2022",
      "QP: Architects Project Group LLP",
      "PE: AJ'S Ingenieurs"
    ],

    layoutTabs: {
      floorplan: ["/assets/borthwick29/floorplan.jpg"],
      perspective: [
        "/assets/borthwick29/gallery-1.jpg",
        "/assets/borthwick29/gallery-2.jpg",
        "/assets/borthwick29/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control design minimising heat gain from direct sun exposure",
        "Energy-efficient lighting integrated throughout the residence",
        "Water-saving sanitary fittings supporting sustainable usage",
        "Large windows improving natural daylight and ventilation",
        "Sun-shading devices incorporated to enhance internal comfort"
      ],

      "Residence": [
        "2-storey main layout with additional mezzanine providing valuable intermediate space",
        "Attic level designed for flexible use such as study, lounge or family area",
        "Efficient internal zoning separating communal and private spaces",
        "Quality interior finishes ensuring durability and refined aesthetics",
        "Clear vertical circulation linking all levels seamlessly"
      ],

      "Dry Kitchen": [
        "Well-planned dry kitchen with functional cabinetry",
        "Provision for modern appliances and efficient workflow"
      ],

      "Bedroom": [
        "Comfortably sized bedrooms with strategic natural lighting",
        "Master suite designed with wardrobe and rest area",
        "Bathrooms finished with long-lasting porcelain or stone materials",
        "Window placements optimised for ventilation and privacy"
      ],

      "Locale": [
        "Situated within a mature landed housing estate in District 19",
        "Close to neighbourhood amenities, eateries and convenience stores",
        "Easy access to parks, schools and local community facilities",
        "Well-connected via major roads for convenient islandwide travel"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "blandford50": {
    slug: "blandford50",
    status: "Completed",
    name: "No. 50 Blandford Drive",
    district: "District 19",

    hero: "/assets/blandford50/hero.jpg",
    blueprintBg: "/assets/blandford50/blueprint-bg.svg",

    intro: `This project comprises the erection of a 2-storey envelope-control semi-detached dwelling house featuring a mezzanine level, an attic, and a swimming pool. The development was designed by Architects Project Group LLP (QP) with structural engineering by CP Lim & Partner LLP (PE), and was constructed between September 2021 and December 2022.`,

    glance: [
      "2-Storey Envelope-Control Semi-Detached House",
      "Includes Mezzanine, Attic & Swimming Pool",
      "Contract Duration: 15 Sep 2021 – 15 Dec 2022",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP"
    ],

    layoutTabs: {
      floorplan: ["/assets/blandford50/floorplan.jpg"],
      perspective: [
        "/assets/blandford50/gallery-1.jpg",
        "/assets/blandford50/gallery-2.jpg",
        "/assets/blandford50/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Energy-efficient lighting integrated throughout the residence",
        "Water-saving fittings to reduce long-term consumption",
        "Sun-shading elements designed to reduce heat gain",
        "Large window openings for natural cross-ventilation",
        "Envelope-control design enhancing thermal performance"
      ],

      "Residence": [
        "Spacious 2-storey semi-detached layout with mezzanine level",
        "Attic floor offering flexibility as a family area, study or entertainment room",
        "Swimming pool positioned to complement outdoor living spaces",
        "High-quality finishes selected for durability and comfort",
        "Efficient internal circulation connecting all levels seamlessly"
      ],

      "Dry Kitchen": [
        "Designed with practical storage and cooking efficiency",
        "Provision for modern appliances and functional workspace"
      ],

      "Bedroom": [
        "Comfortably sized bedrooms with ample daylighting",
        "Master suite designed for privacy with wardrobe and rest area",
        "Bathrooms finished with durable stone or porcelain surfaces",
        "Ventilation-driven planning for improved comfort"
      ],

      "Locale": [
        "Located within a quiet landed estate in District 19",
        "Close to neighbourhood amenities and daily conveniences",
        "Short travel distance to schools, parks and recreational facilities",
        "Convenient access to major roads for smooth commuting"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "happyavenue48": {
    slug: "happyavenue48",
    status: "Completed",
    name: "No. 48 Happy Avenue North",
    district: "District 13",

    hero: "/assets/happyavenue48/hero.jpg",
    blueprintBg: "/assets/happyavenue48/blueprint-bg.svg",

    intro: `This project comprises the erection of a 2-storey envelope-control corner terrace dwelling house with an attic. Designed by Architects Project Group LLP (QP) and structurally engineered by CP Lim & Partner LLP (PE), the construction took place between June 2022 and October 2023.`,

    glance: [
      "2-Storey Envelope-Control Corner Terrace",
      "Includes Attic Level",
      "Contract Duration: 6 Jun 2022 – 13 Oct 2023",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP"
    ],

    layoutTabs: {
      floorplan: ["/assets/happyavenue48/floorplan.jpg"],
      perspective: [
        "/assets/happyavenue48/gallery-1.jpg",
        "/assets/happyavenue48/gallery-2.jpg",
        "/assets/happyavenue48/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control design that reduces solar heat gain",
        "Energy-efficient lighting installed throughout the home",
        "Large openings to promote natural ventilation and daylight",
        "Water-saving fittings to reduce long-term consumption",
        "Architectural shading elements to improve indoor comfort"
      ],

      "Residence": [
        "2-storey corner terrace layout optimised for spatial efficiency",
        "Attic level designed as a flexible family, study or entertainment area",
        "Open-plan living and dining areas with good natural lighting",
        "Quality interior finishes for durability and aesthetic refinement",
        "Well-planned circulation connecting all floors seamlessly"
      ],

      "Dry Kitchen": [
        "Functional dry kitchen with cabinetry designed for efficient workflow",
        "Provision for modern appliances and ample storage"
      ],

      "Bedroom": [
        "Comfortably sized bedrooms with natural light and ventilation",
        "Master bedroom features wardrobe space with privacy-focused layout",
        "Bathrooms furnished with durable stone or porcelain surfaces"
      ],

      "Locale": [
        "Located in a peaceful landed neighbourhood in District 13",
        "Close proximity to amenities, eateries and daily conveniences",
        "Short distance to nearby parks and community facilities",
        "Good accessibility via major connecting roads"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "braemer32": {
    slug: "braemer32",
    status: "Completed",
    name: "No. 32 Braemer Dr",
    district: "District 19",

    hero: "/assets/braemer32/hero.jpg",
    blueprintBg: "/assets/braemer32/blueprint-bg.svg",

    intro: `This project comprises the erection of a 2-storey envelope-control corner terrace dwelling house featuring a mezzanine level, an attic and a swimming pool. Designed by Architects Project Group LLP (QP) with structural engineering by CP Lim & Partner LLP (PE), the project was constructed from May 2023 to December 2024.`,

    glance: [
      "2-Storey Envelope-Control Corner Terrace",
      "Includes Mezzanine, Attic & Swimming Pool",
      "Contract Duration: 2 May 2023 – 6 Dec 2024",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP"
    ],

    layoutTabs: {
      floorplan: ["/assets/braemer32/floorplan.jpg"],
      perspective: [
        "/assets/braemer32/gallery-1.jpg",
        "/assets/braemer32/gallery-2.jpg",
        "/assets/braemer32/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control design improving thermal efficiency",
        "Energy-efficient LED lighting across all levels",
        "Large window openings promoting cross-ventilation",
        "Water-saving bathroom fittings for reduced consumption",
        "Sun-shading screens designed to reduce heat gain"
      ],

      "Residence": [
        "2-storey design enhanced with mezzanine-level usable space",
        "Attic floor suitable for study, entertainment or family area",
        "Swimming pool integrated with outdoor living environment",
        "Spacious living and dining zones with abundant daylight",
        "Quality internal finishes selected for durability and comfort"
      ],

      "Dry Kitchen": [
        "Modern dry kitchen with efficient layout and cabinetry",
        "Provision for premium appliances and functional storage"
      ],

      "Bedroom": [
        "Well-proportioned bedrooms designed for natural lighting",
        "Master suite includes wardrobe space and privacy-focused planning",
        "Bathrooms finished with durable stone or porcelain materials",
        "Ventilation-driven planning to enhance indoor comfort"
      ],

      "Locale": [
        "Located in a tranquil landed residential estate in District 19",
        "Convenient access to everyday amenities and neighbourhood services",
        "Close proximity to schools, parks and community facilities",
        "Well-connected to major arterial roads for ease of travel"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "stokesay8": {
    slug: "stokesay8",
    status: "Completed",
    name: "No. 8 Stokesay Dr",
    district: "District 19",

    hero: "/assets/stokesay8/hero.jpg",
    blueprintBg: "/assets/stokesay8/blueprint-bg.svg",

    intro: `This project comprises the erection of a 2-storey envelope-control corner semi-detached dwelling house incorporating a mezzanine, an attic, a basement and a swimming pool. Designed by Hiladt Architects LLP (QP) with structural engineering by TNJ Consultants & Partners Pte Ltd (PE), the construction spanned from November 2022 to August 2024.`,

    glance: [
      "2-Storey Envelope-Control Corner Semi-Detached House",
      "Includes Mezzanine, Attic, Basement & Swimming Pool",
      "Contract Duration: 8 Nov 2022 – 6 Aug 2024",
      "QP: Hiladt Architects LLP",
      "PE: TNJ Consultants & Partners Pte Ltd"
    ],

    layoutTabs: {
      floorplan: ["/assets/stokesay8/floorplan.jpg"],
      perspective: [
        "/assets/stokesay8/gallery-1.jpg",
        "/assets/stokesay8/gallery-2.jpg",
        "/assets/stokesay8/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control design that improves thermal efficiency",
        "Energy-efficient lighting throughout the house",
        "Large openings for enhanced natural ventilation and daylight",
        "Water-efficient bathroom and kitchen fittings",
        "Sun-shading elements to reduce solar heat gain",
        "Covered car porch integrated into the building layout"
      ],

      "Residence": [
        "2-storey main structure complemented by a mezzanine floor",
        "Attic level that can function as a family room, study or entertainment space",
        "Basement level providing additional utility or leisure area",
        "Swimming pool integrated with the rear outdoor space",
        "Spacious living and dining zones designed for comfort and daylight",
        "Quality interior finishes ensuring durability and aesthetic appeal"
      ],

      "Dry Kitchen": [
        "Functional dry kitchen with efficient cabinetry layout",
        "Provision for modern appliances and ample storage"
      ],

      "Bedroom": [
        "Well-sized bedrooms with good access to natural light",
        "Master suite designed with wardrobe and private resting area",
        "Bathrooms finished in durable stone or porcelain materials",
        "Ventilation-focused planning for improved indoor comfort"
      ],

      "Locale": [
        "Located in a quiet landed residential enclave in District 19",
        "Convenient access to amenities and neighbourhood facilities",
        "Close to schools, eateries and community parks",
        "Easy connectivity to major roads for islandwide travel"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "bodmin75": {
    slug: "bodmin75",
    status: "On Going – TOP",
    name: "No. 75 Bodmin Dr",
    district: "District 19",

    hero: "/assets/bodmin75/hero.jpg",
    blueprintBg: "/assets/bodmin75/blueprint-bg.svg",

    intro: `This project involves the erection of a 2-storey envelope-control semi-detached dwelling house featuring a mezzanine level, an attic and a swimming pool. Designed by Architects Project Group LLP (QP) and engineered by CP Lim & Partner LLP (PE), the development commenced in February 2023 and is currently progressing towards TOP.`,

    glance: [
      "2-Storey Envelope-Control Semi-Detached House",
      "Includes Mezzanine, Attic & Swimming Pool",
      "Construction Start: 8 Feb 2023",
      "Status: On Going – TOP",
      "QP: Architects Project Group LLP",
      "PE: CP Lim & Partner LLP"
    ],

    layoutTabs: {
      floorplan: ["/assets/bodmin75/floorplan.jpg"],
      perspective: [
        "/assets/bodmin75/gallery-1.jpg",
        "/assets/bodmin75/gallery-2.jpg",
        "/assets/bodmin75/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Envelope-control design enhancing thermal comfort",
        "Energy-efficient lighting installed across all floors",
        "Large window openings promoting natural airflow and daylight",
        "Water-saving sanitary fittings integrated throughout",
        "Architectural shading to reduce solar heat gain"
      ],

      "Residence": [
        "2-storey semi-detached design supplemented by a mezzanine floor",
        "Attic level providing flexible use for entertainment or study",
        "Swimming pool integrated with outdoor living areas",
        "Spacious living and dining zones designed for natural light",
        "High-quality finishes emphasizing durability and modern aesthetic"
      ],

      "Dry Kitchen": [
        "Functional dry kitchen space with storage-focused cabinetry",
        "Provision for modern appliances and efficient layout"
      ],

      "Bedroom": [
        "Comfortably sized bedrooms with orientated window placements",
        "Master bedroom featuring wardrobe provisions and private retreat space",
        "Bathrooms finished with durable stone or porcelain materials",
        "Ventilation-focused planning for improved indoor airflow"
      ],

      "Locale": [
        "Situated within a quiet landed neighbourhood in District 19",
        "Accessibility to nearby amenities, eateries and shops",
        "Close proximity to schools and community facilities",
        "Convenient links to major roads for easy commuting"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "florissa58": {
    slug: "florissa58",
    status: "Completed",
    name: "No. 58 Florissa Park",
    district: "District 19",

    hero: "/assets/florissa58/hero.jpg",
    blueprintBg: "/assets/florissa58/blueprint-bg.svg",

    intro: `This project involves the reconstruction of a 3-storey envelope-control corner terrace dwelling house at Florissa Park. Working within the existing plot and envelope control guidelines, Newprecinct Architects (QP) and Yan Consultants (PE) reimagined the home as a modern 3-storey family residence with refreshed façades, upgraded structure and improved internal layout.`,

    glance: [
      "Reconstruction of 3-Storey Envelope-Control Corner Terrace Dwelling House",
      "Full façade, layout and structural upgrade to existing house",
      "Contract Duration: 23 Mar 2023 – 30 Oct 2024",
      "QP: Newprecinct Architects",
      "PE: Yan Consultants"
    ],

    layoutTabs: {
      floorplan: ["/assets/florissa58/floorplan.jpg"],
      perspective: [
        "/assets/florissa58/gallery-1.jpg",
        "/assets/florissa58/gallery-2.jpg",
        "/assets/florissa58/gallery-3.jpg"
      ]
    },

    features: {
      "Design Intent": [
        "Reconstruction of an existing corner terrace into a contemporary 3-storey family home",
        "Envelope-control massing designed to respect the neighbourhood scale",
        "Corner-site treatment that enhances street presence and natural light",
        "Simple, clean architectural language with carefully composed openings"
      ],

      "Structural & Reconstruction Works": [
        "Strengthening and partial replacement of existing structural elements",
        "New 3-storey envelope configured to optimise usable floor area",
        "Upgrading of building services including electrical, plumbing and fire protection",
        "Improved floor-to-floor connections for clearer circulation between levels"
      ],

      "Interior & Space Planning": [
        "Reconfigured living and dining zones at lower levels for better openness",
        "Upper floors planned for bedrooms and private family spaces",
        "Provision for study / multi-purpose areas within the 3-storey layout",
        "Interior finishes selected for durability and a warm residential feel"
      ],

      "Green & Comfort Features": [
        "Envelope-control design to manage heat gain while maintaining views",
        "Large windows placed to encourage cross-ventilation and natural daylight",
        "Use of energy-efficient lighting and water-saving sanitary fittings",
        "Sun-shading elements and balconies helping to improve indoor comfort"
      ],

      "Locale": [
        "Located within an established landed housing estate at Florissa Park",
        "Enjoys the greenery and tranquility of a mature residential neighbourhood",
        "Convenient access to nearby amenities, schools and parks",
        "Well-connected to major roads for easy travel across the island"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or the completeness of the information and contents above. All information including renderings, illustrations, pictures, photographs and other graphic representation and references are artist’s impressions only, and asking price(s), are all subject to changes as may be required by the developer or as required or approved by the authorities.`
  },

  "cassia2": {
    slug: "cassia2",
    status: "Completed",
    name: "No. 2 Cassia Dr",
    district: "District 19",

    hero: "/assets/cassia2/hero.jpg",
    blueprintBg: "/assets/cassia2/blueprint-bg.svg",

    intro: `This project involves the erection of a 2-storey envelope control **detached dwelling house** with a basement and an attic.`,

    glance: [
      "2-Storey Envelope Control Detached House",
      "With Basement & Attic",
      "Contract Duration: 14 Apr 2023 – 21 Nov 2023",
      "QP: Edmund Ng Architects",
      "PE: CGM Engineering Consultants"
    ],

    layoutTabs: {
      floorplan: ["/assets/cassia2/floorplan.jpg"],
      perspective: [
        "/assets/cassia2/gallery-1.jpg",
        "/assets/cassia2/gallery-2.jpg",
        "/assets/cassia2/gallery-3.jpg"
      ]
    },

    features: {
      "Green Features": [
        "Use of environmentally conscious building materials",
        "Energy-efficient lighting, air-conditioning systems and pumps",
        "Large openings to maximise natural ventilation and daylight",
        "Optimised façade shading to reduce heat gain",
        "Water-efficient bathroom and kitchen fittings"
      ],
      "Residence": [
        "Spacious living & dining layout designed for natural airflow",
        "Feature staircase connecting basement to attic seamlessly",
        "Private attic room suitable for office, gym or entertainment",
        "High-quality flooring finishes throughout the residence"
      ],
      "Kitchen": [
        "Dry & wet kitchen configuration",
        "Equipped with built-in cabinetry and premium appliances"
      ],
      "Bedrooms": [
        "Well-proportioned bedrooms ensuring privacy & comfort",
        "Ensuite master bedroom with walk-in wardrobe area"
      ],
      "Locale": [
        "Situated in a quiet landed enclave in District 19",
        "Convenient access to amenities, eateries and schools",
        "Short drive to major expressways for smooth connectivity"
      ]
    },

    disclaimer: `While reasonable care has been taken in preparing the above information, the developer, the builder and their agents shall not be held responsible for any inaccuracies or omissions. All illustrations, photographs and renderings are artist impressions only and may be subject to changes required or approved by the authorities.`
  }
};