export const locations = {
  // =========================
  // 🟣 PROVINCES (centroid points)
  // =========================
  provinces: {
    koshi: {
      name: "Koshi Province",
      latitude: 26.7,
      longitude: 87.3,
      type: "province",
        areaType: "circle",
  radius: 80000,
    },
    madhesh: {
      name: "Madhesh Province",
      latitude: 26.9,
      longitude: 85.9,
      type: "province",
        areaType: "circle",
  radius: 80000,
    },
bagmati: {
  name: "Bagmati Province",
  latitude: 27.7,
  longitude: 85.3,
  type: "province",
  areaType: "circle",
  radius: 80000, // meters
},
    gandaki: {
      name: "Gandaki Province",
      latitude: 28.3,
      longitude: 84.0,
      type: "province",
        areaType: "circle",
  radius: 80000,
    },
    lumbini: {
      name: "Lumbini Province",
      latitude: 27.5,
      longitude: 83.5,
      type: "province",
        areaType: "circle",
  radius: 80000,
    },
    karnali: {
      name: "Karnali Province",
      latitude: 29.2,
      longitude: 82.2,
      type: "province",
        areaType: "circle",
  radius: 80000,
    },
    sudurpaschim: {
      name: "Sudurpaschim Province",
      latitude: 29.5,
      longitude: 80.9,
      type: "province",
              areaType: "circle",
  radius: 80000,
    },
  },

  // =========================
  // 🏙 MAJOR CITIES
  // =========================
  cities: {
  // 🟡 EAST NEPAL
  biratnagar: {
    name: "Biratnagar",
    latitude: 26.4525,
    longitude: 87.2718,
    type: "city",
  },
  dharan: {
    name: "Dharan",
    latitude: 26.8120,
    longitude: 87.2830,
    type: "city",
  },
  itahari: {
    name: "Itahari",
    latitude: 26.6667,
    longitude: 87.2667,
    type: "city",
  },

  // 🟠 EAST-CENTRAL
  janakpur: {
    name: "Janakpur",
    latitude: 26.7272,
    longitude: 85.9386,
    type: "city",
  },
  birgunj: {
    name: "Birgunj",
    latitude: 27.0104,
    longitude: 84.8773,
    type: "city",
  },
  hetauda: {
    name: "Hetauda",
    latitude: 27.4284,
    longitude: 85.0322,
    type: "city",
  },

  // 🔵 CENTRAL (KATHMANDU VALLEY)
  kathmandu: {
    id: "kathmandu",
    name: "Kathmandu",
    latitude: 27.7172,
    longitude: 85.3240,
    type: "city",
  },
  lalitpur: {
    name: "Lalitpur (Patan)",
    latitude: 27.6667,
    longitude: 85.3206,
    type: "city",
  },
  bhaktapur: {
    name: "Bhaktapur",
    latitude: 27.6710,
    longitude: 85.4298,
    type: "city",
  },
  nagarkot: {
    name: "Nagarkot",
    latitude: 27.7152,
    longitude: 85.5207,
    type: "city",
  },

  // 🟢 WEST-CENTRAL
  pokhara: {
    name: "Pokhara",
    latitude: 28.2096,
    longitude: 83.9856,
    type: "city",
  },
  butwal: {
    name: "Butwal",
    latitude: 27.7000,
    longitude: 83.4483,
    type: "city",
  },
  bhairahawa: {
    name: "Bhairahawa (Siddharthanagar)",
    latitude: 27.5058,
    longitude: 83.4167,
    type: "city",
  },

  // 🟤 FAR WEST
  nepalgunj: {
    name: "Nepalgunj",
    latitude: 28.0500,
    longitude: 81.6167,
    type: "city",
  },
  dhangadhi: {
    name: "Dhangadhi",
    latitude: 28.7056,
    longitude: 80.5771,
    type: "city",
  },
  tikapur: {
    name: "Tikapur",
    latitude: 28.5150,
    longitude: 81.1330,
    type: "city",
  },

  // 🟣 MID-WEST IMPORTANT
  birendranagar: {
    name: "Birendranagar (Surkhet)",
    latitude: 28.6019,
    longitude: 81.6339,
    type: "city",
  },
  tansen: {
    name: "Tansen",
    latitude: 27.8679,
    longitude: 83.5469,
    type: "city",
  },
},

  // =========================
  // 🌊 MAJOR RIVERS
  // =========================
  rivers: {
    koshi: {
      name: "Koshi River",
      latitude: 26.95,
      longitude: 87.15,
      type: "river",
    },
    gandaki: {
      name: "Gandaki River",
      latitude: 27.9,
      longitude: 84.5,
      type: "river",
    },
    bagmati: {
      name: "Bagmati River",
      latitude: 27.6,
      longitude: 85.3,
      type: "river",
    },
    karnali: {
      name: "Karnali River",
      latitude: 28.8,
      longitude: 81.6,
      type: "river",
    },
  },

  // 🏔 PEAKS / MOUNTAINS
  peaks: {
    everest: {
      name: "Mount Everest",
      latitude: 27.9881,
      longitude: 86.9250,
      type: "peak",
    },
    annapurna: {
      name: "Annapurna I",
      latitude: 28.5956,
      longitude: 83.8203,
      type: "peak",
    },
    dhaulagiri: {
      name: "Dhaulagiri",
      latitude: 28.6967,
      longitude: 83.4871,
      type: "peak",
    },
    makalu: {
      name: "Makalu",
      latitude: 27.8897,
      longitude: 87.0883,
      type: "peak",
    },
  },

  // 🌳 NATIONAL PARKS
  parks: {
    chitwan: {
      name: "Chitwan National Park",
      latitude: 27.5291,
      longitude: 84.3542,
      type: "national_park",
    },
    sagarmatha: {
      name: "Sagarmatha National Park",
      latitude: 27.9333,
      longitude: 86.7500,
      type: "national_park",
    },
    bardiya: {
      name: "Bardiya National Park",
      latitude: 28.3984,
      longitude: 81.2719,
      type: "national_park",
    },
  },

  // 🛣 HIGHWAYS (approx center points)
  highways: {
    eastwest: {
      name: "East-West Highway (Mahendra Highway)",
      latitude: 27.5,
      longitude: 84.0,
      type: "highway",
    },
    prithvi: {
      name: "Prithvi Highway",
      latitude: 27.9,
      longitude: 84.5,
      type: "highway",
    },
  },
};