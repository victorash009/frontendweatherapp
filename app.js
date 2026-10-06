/**
 * Stratus Aether Weather Application
 * Client Logic & Meteorological State Management
 */

// City Weather Dataset
const weatherDatabase = {
  tuscany: {
    id: "tuscany",
    name: "Tuscany, Italy",
    coords: "43.7711° N, 11.2486° E",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Mostly Sunny & Mild",
    icon: "wb_sunny",
    iconFill: true,
    tempC: 23,
    highC: 26,
    lowC: 15,
    feelsLikeC: 24,
    precip: "12%",
    humidity: "48%",
    windSpeed: "14 km/h",
    windBearing: "285° WNW",
    pressure: "1,014 hPa",
    pressureStatus: "Steady",
    pressureNote: "Optimal high-pressure dome over Chianti",
    uvIndex: 4,
    uvLevel: "Mod",
    visibility: "10 km",
    aqi: 32,
    aqiStatus: "Optimal",
    pm25: "4.8 µg",
    pm10: "12 µg",
    o3: "22 ppb",
    moonPhase: "Waxing Crescent",
    sunrise: "06:14 AM",
    sunset: "19:42 PM",
    sunArcPercent: 68,
    radarLocation: "Florence, Tuscany, Italy",
    hourly: [
      { time: "Now", tempC: 23, icon: "wb_sunny", precip: "12%", active: true },
      { time: "15:00", tempC: 24, icon: "partly_cloudy_day", precip: "10%" },
      { time: "16:00", tempC: 25, icon: "wb_sunny", precip: "0%" },
      { time: "17:00", tempC: 24, icon: "wb_twilight", precip: "5%", peak: true },
      { time: "18:00", tempC: 21, icon: "nights_stay", precip: "15%" },
      { time: "19:00", tempC: 19, icon: "cloud", precip: "25%" },
      { time: "20:00", tempC: 18, icon: "rainy", precip: "55%" },
      { time: "21:00", tempC: 17, icon: "thunderstorm", precip: "70%" },
      { time: "22:00", tempC: 16, icon: "rainy", precip: "60%" },
      { time: "23:00", tempC: 15, icon: "cloud", precip: "30%" },
      { time: "00:00", tempC: 15, icon: "nights_stay", precip: "10%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Sunny", icon: "wb_sunny", iconFill: true, lowC: 15, highC: 26, leftPct: 20, rightPct: 10 },
      { day: "Tuesday", desc: "Partly Cl.", icon: "partly_cloudy_day", lowC: 14, highC: 23, leftPct: 15, rightPct: 20 },
      { day: "Wednesday", desc: "Thunder", icon: "thunderstorm", lowC: 16, highC: 21, leftPct: 30, rightPct: 30 },
      { day: "Thursday", desc: "Showers", icon: "rainy", lowC: 13, highC: 19, leftPct: 10, rightPct: 40 },
      { day: "Friday", desc: "Cloudy", icon: "cloud", lowC: 15, highC: 22, leftPct: 20, rightPct: 25 },
      { day: "Saturday", desc: "Sunny", icon: "wb_sunny", iconFill: true, lowC: 16, highC: 27, leftPct: 25, rightPct: 5 },
      { day: "Sunday", desc: "Clear Dusk", icon: "clear_day", lowC: 17, highC: 26, leftPct: 30, rightPct: 8 }
    ]
  },
  tokyo: {
    id: "tokyo",
    name: "Tokyo, Japan",
    coords: "35.6762° N, 139.6503° E",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv6z2NCS31_OBs3WTn6GPpS_FYK1Vk1lXSmCygNF9ki_A3TxZlJw2DuyFY3_i_io9hEkeAe2cxXG9iZYebhIfwl5VBCecl_gQmBGzGG6FzXfILrdbbSpJ3N1NmyoamkgRfcoAZ4_6tXex60zl16GvsxRINOgWeGuHj8AptxgxddoxBFtj9YwQ5IwOu5kSrn7SrxzU7EHcDSQa60-NCmymcNaUEBVMrDV62wnRXR8NVU3wICwZ61Jd8Qw",
    condition: "Clear Night Sky",
    icon: "clear_night",
    iconFill: true,
    tempC: 19,
    highC: 22,
    lowC: 14,
    feelsLikeC: 19,
    precip: "5%",
    humidity: "62%",
    windSpeed: "9 km/h",
    windBearing: "160° SSE",
    pressure: "1,018 hPa",
    pressureStatus: "Rising",
    pressureNote: "Pacific high keeping skies crisp",
    uvIndex: 0,
    uvLevel: "Low",
    visibility: "16 km",
    aqi: 22,
    aqiStatus: "Excellent",
    pm25: "3.1 µg",
    pm10: "8 µg",
    o3: "18 ppb",
    moonPhase: "Waxing Gibbous",
    sunrise: "05:34 AM",
    sunset: "17:28 PM",
    sunArcPercent: 95,
    radarLocation: "Kanto Plain, Tokyo, Japan",
    hourly: [
      { time: "Now", tempC: 19, icon: "clear_night", precip: "5%", active: true },
      { time: "22:00", tempC: 18, icon: "clear_night", precip: "5%" },
      { time: "23:00", tempC: 17, icon: "nights_stay", precip: "0%" },
      { time: "00:00", tempC: 16, icon: "nights_stay", precip: "0%" },
      { time: "01:00", tempC: 15, icon: "nights_stay", precip: "0%" },
      { time: "02:00", tempC: 14, icon: "cloud", precip: "10%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Clear", icon: "clear_night", lowC: 14, highC: 22, leftPct: 15, rightPct: 20 },
      { day: "Tue", desc: "Sunny", icon: "wb_sunny", lowC: 15, highC: 24, leftPct: 20, rightPct: 15 },
      { day: "Wed", desc: "Rainy", icon: "rainy", lowC: 13, highC: 18, leftPct: 10, rightPct: 35 },
      { day: "Thu", desc: "Cloudy", icon: "cloud", lowC: 14, highC: 20, leftPct: 15, rightPct: 25 },
      { day: "Fri", desc: "Sunny", icon: "wb_sunny", lowC: 16, highC: 25, leftPct: 25, rightPct: 10 }
    ]
  },
  newyork: {
    id: "newyork",
    name: "New York, USA",
    coords: "40.7128° N, 74.0060° W",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Light Coastal Rain",
    icon: "rainy",
    tempC: 14,
    highC: 16,
    lowC: 10,
    feelsLikeC: 13,
    precip: "75%",
    humidity: "82%",
    windSpeed: "22 km/h",
    windBearing: "045° NE",
    pressure: "1,008 hPa",
    pressureStatus: "Falling",
    pressureNote: "Atlantic moisture front approaching Manhattan",
    uvIndex: 2,
    uvLevel: "Low",
    visibility: "6 km",
    aqi: 38,
    aqiStatus: "Good",
    pm25: "6.2 µg",
    pm10: "14 µg",
    o3: "25 ppb",
    moonPhase: "First Quarter",
    sunrise: "06:50 AM",
    sunset: "18:22 PM",
    sunArcPercent: 35,
    radarLocation: "Hudson Valley, New York, USA",
    hourly: [
      { time: "Now", tempC: 14, icon: "rainy", precip: "75%", active: true },
      { time: "10:00", tempC: 14, icon: "rainy", precip: "80%" },
      { time: "11:00", tempC: 15, icon: "rainy", precip: "65%" },
      { time: "12:00", tempC: 16, icon: "cloud", precip: "40%" },
      { time: "13:00", tempC: 16, icon: "partly_cloudy_day", precip: "20%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Rain", icon: "rainy", lowC: 10, highC: 16, leftPct: 10, rightPct: 40 },
      { day: "Tue", desc: "Showers", icon: "rainy", lowC: 9, highC: 15, leftPct: 8, rightPct: 45 },
      { day: "Wed", desc: "Partly Cl.", icon: "partly_cloudy_day", lowC: 11, highC: 18, leftPct: 15, rightPct: 30 },
      { day: "Thu", desc: "Sunny", icon: "wb_sunny", lowC: 12, highC: 21, leftPct: 20, rightPct: 15 },
      { day: "Fri", desc: "Breezy", icon: "air", lowC: 10, highC: 17, leftPct: 10, rightPct: 35 }
    ]
  },
  london: {
    id: "london",
    name: "London, UK",
    coords: "51.5074° N, 0.1278° W",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Overcast Mist & Drizzle",
    icon: "cloud",
    tempC: 11,
    highC: 13,
    lowC: 7,
    feelsLikeC: 10,
    precip: "45%",
    humidity: "86%",
    windSpeed: "18 km/h",
    windBearing: "220° SW",
    pressure: "1,012 hPa",
    pressureStatus: "Steady",
    pressureNote: "Thames basin under standard maritime cloud layer",
    uvIndex: 1,
    uvLevel: "Low",
    visibility: "8 km",
    aqi: 26,
    aqiStatus: "Optimal",
    pm25: "4.0 µg",
    pm10: "10 µg",
    o3: "19 ppb",
    moonPhase: "Waxing Crescent",
    sunrise: "06:58 AM",
    sunset: "18:04 PM",
    sunArcPercent: 50,
    radarLocation: "Greater London, UK",
    hourly: [
      { time: "Now", tempC: 11, icon: "cloud", precip: "45%", active: true },
      { time: "14:00", tempC: 12, icon: "rainy", precip: "50%" },
      { time: "15:00", tempC: 13, icon: "cloud", precip: "30%" },
      { time: "16:00", tempC: 12, icon: "cloud", precip: "20%" },
      { time: "17:00", tempC: 11, icon: "wb_twilight", precip: "10%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Mist", icon: "cloud", lowC: 7, highC: 13, leftPct: 5, rightPct: 50 },
      { day: "Tue", desc: "Rain", icon: "rainy", lowC: 8, highC: 14, leftPct: 8, rightPct: 45 },
      { day: "Wed", desc: "Cloudy", icon: "cloud", lowC: 9, highC: 15, leftPct: 12, rightPct: 40 },
      { day: "Thu", desc: "Sunny", icon: "wb_sunny", lowC: 10, highC: 17, leftPct: 15, rightPct: 30 }
    ]
  },
  reykjavik: {
    id: "reykjavik",
    name: "Reykjavík, Iceland",
    coords: "64.1466° N, 21.9426° W",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Light Auroral Snow",
    icon: "ac_unit",
    tempC: -2,
    highC: 1,
    lowC: -5,
    feelsLikeC: -6,
    precip: "60%",
    humidity: "78%",
    windSpeed: "28 km/h",
    windBearing: "010° N",
    pressure: "998 hPa",
    pressureStatus: "Low",
    pressureNote: "Sub-polar low generating sporadic snow bursts",
    uvIndex: 0,
    uvLevel: "Low",
    visibility: "7 km",
    aqi: 12,
    aqiStatus: "Pristine",
    pm25: "1.2 µg",
    pm10: "3 µg",
    o3: "15 ppb",
    moonPhase: "Waxing Crescent",
    sunrise: "07:42 AM",
    sunset: "17:10 PM",
    sunArcPercent: 80,
    radarLocation: "Faxaflói Bay, Reykjavík, Iceland",
    hourly: [
      { time: "Now", tempC: -2, icon: "ac_unit", precip: "60%", active: true },
      { time: "14:00", tempC: -1, icon: "ac_unit", precip: "70%" },
      { time: "15:00", tempC: 0, icon: "cloud", precip: "40%" },
      { time: "16:00", tempC: -1, icon: "wb_twilight", precip: "30%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Snow", icon: "ac_unit", lowC: -5, highC: 1, leftPct: 5, rightPct: 70 },
      { day: "Tue", desc: "Flurries", icon: "ac_unit", lowC: -6, highC: 0, leftPct: 2, rightPct: 75 },
      { day: "Wed", desc: "Cloudy", icon: "cloud", lowC: -4, highC: 2, leftPct: 8, rightPct: 65 }
    ]
  },
  zurich: {
    id: "zurich",
    name: "Zurich, Switzerland",
    coords: "47.3769° N, 8.5417° E",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Alpine Crisp & Sunny",
    icon: "wb_sunny",
    iconFill: true,
    tempC: 18,
    highC: 21,
    lowC: 9,
    feelsLikeC: 18,
    precip: "0%",
    humidity: "42%",
    windSpeed: "8 km/h",
    windBearing: "120° ESE",
    pressure: "1,022 hPa",
    pressureStatus: "High",
    pressureNote: "Stable Alpine foehn maintaining bright conditions",
    uvIndex: 5,
    uvLevel: "Mod",
    visibility: "25 km",
    aqi: 18,
    aqiStatus: "Optimal",
    pm25: "2.4 µg",
    pm10: "6 µg",
    o3: "24 ppb",
    moonPhase: "Waxing Crescent",
    sunrise: "06:30 AM",
    sunset: "19:15 PM",
    sunArcPercent: 60,
    radarLocation: "Lake Zurich, Switzerland",
    hourly: [
      { time: "Now", tempC: 18, icon: "wb_sunny", precip: "0%", active: true },
      { time: "15:00", tempC: 20, icon: "wb_sunny", precip: "0%" },
      { time: "16:00", tempC: 21, icon: "wb_sunny", precip: "0%" },
      { time: "17:00", tempC: 19, icon: "wb_twilight", precip: "0%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Sunny", icon: "wb_sunny", lowC: 9, highC: 21, leftPct: 15, rightPct: 25 },
      { day: "Tue", desc: "Clear", icon: "wb_sunny", lowC: 10, highC: 22, leftPct: 18, rightPct: 20 }
    ]
  },
  seattle: {
    id: "seattle",
    name: "Seattle, USA",
    coords: "47.6062° N, 122.3321° W",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Pacific Coastal Mist",
    icon: "foggy",
    tempC: 15,
    highC: 18,
    lowC: 11,
    feelsLikeC: 15,
    precip: "35%",
    humidity: "79%",
    windSpeed: "12 km/h",
    windBearing: "260° W",
    pressure: "1,016 hPa",
    pressureStatus: "Steady",
    pressureNote: "Puget Sound Convergence Zone moisture stream",
    uvIndex: 3,
    uvLevel: "Mod",
    visibility: "11 km",
    aqi: 24,
    aqiStatus: "Good",
    pm25: "3.5 µg",
    pm10: "9 µg",
    o3: "18 ppb",
    moonPhase: "First Quarter",
    sunrise: "06:45 AM",
    sunset: "18:35 PM",
    sunArcPercent: 40,
    radarLocation: "Puget Sound, Seattle, WA",
    hourly: [
      { time: "Now", tempC: 15, icon: "foggy", precip: "35%", active: true },
      { time: "11:00", tempC: 16, icon: "cloud", precip: "30%" },
      { time: "12:00", tempC: 17, icon: "partly_cloudy_day", precip: "20%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Mist", icon: "foggy", lowC: 11, highC: 18, leftPct: 15, rightPct: 35 },
      { day: "Tue", desc: "Rain", icon: "rainy", lowC: 10, highC: 16, leftPct: 12, rightPct: 40 }
    ]
  },
  kyoto: {
    id: "kyoto",
    name: "Kyoto, Japan",
    coords: "35.0116° N, 135.7681° E",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv6z2NCS31_OBs3WTn6GPpS_FYK1Vk1lXSmCygNF9ki_A3TxZlJw2DuyFY3_i_io9hEkeAe2cxXG9iZYebhIfwl5VBCecl_gQmBGzGG6FzXfILrdbbSpJ3N1NmyoamkgRfcoAZ4_6tXex60zl16GvsxRINOgWeGuHj8AptxgxddoxBFtj9YwQ5IwOu5kSrn7SrxzU7EHcDSQa60-NCmymcNaUEBVMrDV62wnRXR8NVU3wICwZ61Jd8Qw",
    condition: "Gentle Evening Haze",
    icon: "nights_stay",
    tempC: 17,
    highC: 21,
    lowC: 12,
    feelsLikeC: 17,
    precip: "10%",
    humidity: "68%",
    windSpeed: "7 km/h",
    windBearing: "090° E",
    pressure: "1,019 hPa",
    pressureStatus: "Steady",
    pressureNote: "Mild valley breeze circulating through Higashiyama",
    uvIndex: 0,
    uvLevel: "Low",
    visibility: "14 km",
    aqi: 20,
    aqiStatus: "Optimal",
    pm25: "2.8 µg",
    pm10: "7 µg",
    o3: "16 ppb",
    moonPhase: "Waxing Gibbous",
    sunrise: "05:40 AM",
    sunset: "17:35 PM",
    sunArcPercent: 90,
    radarLocation: "Kansai Basin, Kyoto, Japan",
    hourly: [
      { time: "Now", tempC: 17, icon: "nights_stay", precip: "10%", active: true },
      { time: "22:00", tempC: 16, icon: "nights_stay", precip: "5%" },
      { time: "23:00", tempC: 15, icon: "cloud", precip: "5%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Haze", icon: "nights_stay", lowC: 12, highC: 21, leftPct: 15, rightPct: 25 },
      { day: "Tue", desc: "Sunny", icon: "wb_sunny", lowC: 13, highC: 23, leftPct: 18, rightPct: 20 }
    ]
  },
  sanfrancisco: {
    id: "sanfrancisco",
    name: "San Francisco, USA",
    coords: "37.7749° N, 122.4194° W",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiBJooSS8DULkodR1PrI5P-IG1wwWXdsYbAgPKlJ5uNyvlJmTAe009BOoXP5ght9BiSN6HbwKGiWPirTxLkQckRE8fQozGgX3E8N3CC0m4aIOKgtN1xW3CTYFgq7H-g5FfTyGtcLrxHk85P6UvE1hLuNA_eFqbyiA6TCBMbZKqAKdHWDm1WfuJFBbHQ-QmLJEic6WwSAD75_OluCmNYrATFKjRK8rDHz-oAE0rQXZJ3N-AnIIaxCcXBA",
    condition: "Dense Coastal Fog & Breeze",
    icon: "foggy",
    tempC: 17,
    highC: 20,
    lowC: 12,
    feelsLikeC: 16,
    precip: "15%",
    humidity: "84%",
    windSpeed: "24 km/h",
    windBearing: "310° NW",
    pressure: "1,015 hPa",
    pressureStatus: "Steady",
    pressureNote: "Marine inversion layer streaming through Golden Gate",
    uvIndex: 4,
    uvLevel: "Mod",
    visibility: "5 km",
    aqi: 28,
    aqiStatus: "Good",
    pm25: "3.8 µg",
    pm10: "10 µg",
    o3: "20 ppb",
    moonPhase: "First Quarter",
    sunrise: "06:55 AM",
    sunset: "18:40 PM",
    sunArcPercent: 45,
    radarLocation: "San Francisco Bay Area, CA",
    hourly: [
      { time: "Now", tempC: 17, icon: "foggy", precip: "15%", active: true },
      { time: "11:00", tempC: 18, icon: "partly_cloudy_day", precip: "10%" },
      { time: "12:00", tempC: 20, icon: "wb_sunny", precip: "0%" }
    ],
    forecast7Day: [
      { day: "Today", desc: "Fog", icon: "foggy", lowC: 12, highC: 20, leftPct: 15, rightPct: 30 },
      { day: "Tue", desc: "Sunny", icon: "wb_sunny", lowC: 13, highC: 22, leftPct: 18, rightPct: 22 }
    ]
  },

  abuja: {
    id: "abuja",
    name: "Abuja, Nigeria",
    coords: "9.0765° N, 7.3986° E",
    bgImage: "https://images.unsplash.com/photo-1680458842384-e672e04dd9c1?w=1200&q=80",
    condition: "Hot & Sunny",
    icon: "wb_sunny",
    iconFill: true,
    tempC: 32,
    highC: 35,
    lowC: 24,
    feelsLikeC: 36,
    precip: "5%",
    humidity: "42%",
    windSpeed: "10 km/h",
    windBearing: "070° ENE",
    pressure: "1,008 hPa",
    pressureStatus: "Steady",
    pressureNote: "Dry harmattan influence across FCT",
    uvIndex: 9,
    uvLevel: "Very High",
    visibility: "12 km",
    aqi: 58,
    aqiStatus: "Moderate",
    pm25: "14.2 µg",
    pm10: "28 µg",
    o3: "35 ppb",
    moonPhase: "Waxing Gibbous",
    sunrise: "06:20 AM",
    sunset: "18:35 PM",
    sunArcPercent: 72,
    radarLocation: "Abuja, Federal Capital Territory, Nigeria",
    hourly: [
      { time: "Now", tempC: 32, icon: "wb_sunny", precip: "5%", active: true },
      { time: "12:00", tempC: 34, icon: "wb_sunny", precip: "2%", peak: true },
      { time: "13:00", tempC: 35, icon: "wb_sunny", precip: "2%" },
      { time: "14:00", tempC: 34, icon: "partly_cloudy_day", precip: "8%" },
      { time: "15:00", tempC: 33, icon: "partly_cloudy_day", precip: "10%" },
      { time: "16:00", tempC: 31, icon: "cloud", precip: "15%" },
      { time: "17:00", tempC: 29, icon: "wb_twilight", precip: "10%" },
      { time: "18:00", tempC: 27, icon: "nights_stay", precip: "5%" },
      { time: "19:00", tempC: 26, icon: "nights_stay", precip: "3%" },
      { time: "20:00", tempC: 25, icon: "nights_stay", precip: "2%" },
      { time: "21:00", tempC: 24, icon: "nights_stay", precip: "2%" }
    ],
    forecast7Day: [
      { day: "Today",     desc: "Sunny",       icon: "wb_sunny",          iconFill: true, lowC: 24, highC: 35, leftPct: 5,  rightPct: 5  },
      { day: "Tuesday",   desc: "Sunny",       icon: "wb_sunny",          iconFill: true, lowC: 23, highC: 34, leftPct: 5,  rightPct: 5  },
      { day: "Wednesday", desc: "Pt. Cloudy",  icon: "partly_cloudy_day",                lowC: 24, highC: 33, leftPct: 10, rightPct: 10 },
      { day: "Thursday",  desc: "Pt. Cloudy",  icon: "partly_cloudy_day",                lowC: 23, highC: 33, leftPct: 12, rightPct: 12 },
      { day: "Friday",    desc: "Sunny",       icon: "wb_sunny",          iconFill: true, lowC: 24, highC: 35, leftPct: 5,  rightPct: 5  },
      { day: "Saturday",  desc: "Sunny",       icon: "wb_sunny",          iconFill: true, lowC: 25, highC: 36, leftPct: 5,  rightPct: 5  },
      { day: "Sunday",    desc: "Pt. Cloudy",  icon: "partly_cloudy_day",                lowC: 24, highC: 34, leftPct: 10, rightPct: 10 }
    ]
  }
};

// Global App State
let currentCityId = "tuscany";
let isCelsius = true;
let currentRadarLayer = "rain";
let isRadarLooping = true;
let radarZoomLevel = 1;

// Helper: Convert Celsius to Fahrenheit
function toTemp(celsiusVal) {
  if (isCelsius) {
    return Math.round(celsiusVal);
  }
  return Math.round((celsiusVal * 9) / 5 + 32);
}

function getTempUnitString() {
  return isCelsius ? "°C" : "°F";
}

// Update Hero & Telemetry
function renderCurrentWeather(cityKey) {
  const city = weatherDatabase[cityKey] || weatherDatabase.tuscany;
  currentCityId = city.id;

  // Background Image
  const heroCard = document.getElementById("heroAtmosphericCard");
  if (heroCard && city.bgImage) {
    heroCard.style.backgroundImage = `url('${city.bgImage}')`;
  }

  // City & Location
  const heroLocationName = document.getElementById("heroLocationName");
  if (heroLocationName) heroLocationName.textContent = city.name;

  const heroCoordinates = document.getElementById("heroCoordinates");
  if (heroCoordinates) heroCoordinates.textContent = city.coords;

  // Condition Status & Icon
  const heroStatusText = document.getElementById("heroStatusText");
  if (heroStatusText) heroStatusText.textContent = city.condition;

  const heroConditionIcon = document.getElementById("heroConditionIcon");
  if (heroConditionIcon) {
    heroConditionIcon.textContent = city.icon;
    if (city.iconFill) {
      heroConditionIcon.style.fontVariationSettings = "'FILL' 1";
    } else {
      heroConditionIcon.style.fontVariationSettings = "'FILL' 0";
    }
  }

  // Hero Big Temperature
  const heroMainTemp = document.getElementById("heroMainTemp");
  if (heroMainTemp) heroMainTemp.textContent = toTemp(city.tempC);

  const heroTempUnit = document.getElementById("heroTempUnit");
  if (heroTempUnit) heroTempUnit.textContent = getTempUnitString();

  // High, Low & Feels Like
  const heroHighTemp = document.getElementById("heroHighTemp");
  if (heroHighTemp) heroHighTemp.textContent = `${toTemp(city.highC)}°`;

  const heroLowTemp = document.getElementById("heroLowTemp");
  if (heroLowTemp) heroLowTemp.textContent = `${toTemp(city.lowC)}°`;

  const heroFeelsLike = document.getElementById("heroFeelsLike");
  if (heroFeelsLike) heroFeelsLike.textContent = `Feels like ${toTemp(city.feelsLikeC)}${getTempUnitString()}`;

  // Telemetry Strip
  const telPrecip = document.getElementById("telPrecip");
  if (telPrecip) telPrecip.textContent = city.precip;

  const telHumidity = document.getElementById("telHumidity");
  if (telHumidity) telHumidity.textContent = city.humidity;

  const telWind = document.getElementById("telWind");
  if (telWind) telWind.innerHTML = `${city.windSpeed}`;

  const telPressure = document.getElementById("telPressure");
  if (telPressure) telPressure.innerHTML = `${city.pressure}`;

  const telUv = document.getElementById("telUv");
  if (telUv) telUv.innerHTML = `${city.uvIndex} <span class="text-dim" style="font-size: 11px;">${city.uvLevel}</span>`;

  const telVisibility = document.getElementById("telVisibility");
  if (telVisibility) telVisibility.innerHTML = `${city.visibility}`;

  // Bento: AQI
  const bentoAqiValue = document.getElementById("bentoAqiValue");
  if (bentoAqiValue) bentoAqiValue.textContent = city.aqi;

  const bentoAqiStatus = document.getElementById("bentoAqiStatus");
  if (bentoAqiStatus) bentoAqiStatus.textContent = city.aqiStatus;

  const bentoPm25 = document.getElementById("bentoPm25");
  if (bentoPm25) bentoPm25.textContent = city.pm25;

  const bentoPm10 = document.getElementById("bentoPm10");
  if (bentoPm10) bentoPm10.textContent = city.pm10;

  const bentoO3 = document.getElementById("bentoO3");
  if (bentoO3) bentoO3.textContent = city.o3;

  // Bento: Sun & Moon
  const bentoSunrise = document.getElementById("bentoSunrise");
  if (bentoSunrise) bentoSunrise.textContent = city.sunrise;

  const bentoSunset = document.getElementById("bentoSunset");
  if (bentoSunset) bentoSunset.textContent = city.sunset;

  const bentoMoonPhase = document.getElementById("bentoMoonPhase");
  if (bentoMoonPhase) bentoMoonPhase.textContent = city.moonPhase;

  // Bento: Barometer
  const bentoPressure = document.getElementById("bentoPressure");
  if (bentoPressure) bentoPressure.textContent = city.pressure.split(" ")[0];

  const bentoPressureStatus = document.getElementById("bentoPressureStatus");
  if (bentoPressureStatus) bentoPressureStatus.textContent = city.pressureStatus;

  const bentoWindBearing = document.getElementById("bentoWindBearing");
  if (bentoWindBearing) bentoWindBearing.textContent = city.windBearing;

  const bentoWindSpeedSmall = document.getElementById("bentoWindSpeedSmall");
  if (bentoWindSpeedSmall) bentoWindSpeedSmall.textContent = city.windSpeed;

  const bentoPressureNote = document.getElementById("bentoPressureNote");
  if (bentoPressureNote) bentoPressureNote.textContent = city.pressureNote;

  // Radar location descriptor
  const radarLocationDesc = document.getElementById("radarLocationDesc");
  if (radarLocationDesc) radarLocationDesc.textContent = city.radarLocation;

  // Render Sub-Components
  renderHourlyCarousel(city.hourly);
  renderForecastMatrix(city.forecast7Day);
  renderHubsList();
}

// Render Hourly Carousel
function renderHourlyCarousel(hourlyData) {
  const container = document.getElementById("hourlyCarouselContainer");
  if (!container || !hourlyData) return;

  container.innerHTML = "";

  hourlyData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = `hourly-card ${item.active ? "active" : ""}`;
    card.onclick = () => selectHour(index, hourlyData);

    card.innerHTML = `
      <span class="hour-time font-data" style="font-size: 11px; opacity: 0.85;">${item.time}</span>
      <span class="material-symbols-outlined text-amber" style="font-size: 26px; ${item.icon === 'wb_sunny' ? "font-variation-settings: 'FILL' 1;" : ""}">${item.icon}</span>
      <span class="hour-temp font-data fw-bold" style="font-size: 15px;">${toTemp(item.tempC)}°</span>
      <div class="d-flex align-items-center gap-1 hour-precip font-data" style="font-size: 10px; opacity: 0.8;">
        <span class="material-symbols-outlined" style="font-size: 12px; color: var(--primary);">water_drop</span>
        <span>${item.precip}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

function selectHour(selectedIndex, hourlyData) {
  hourlyData.forEach((item, idx) => {
    item.active = idx === selectedIndex;
  });
  renderHourlyCarousel(hourlyData);

  const sel = hourlyData[selectedIndex];
  showToast(`Hourly view: ${sel.time} — ${toTemp(sel.tempC)}${getTempUnitString()} with ${sel.precip} precip`);
}

// Render 7-Day Forecast Matrix
function renderForecastMatrix(forecastList) {
  const container = document.getElementById("forecastMatrixContainer");
  if (!container || !forecastList) return;

  container.innerHTML = "";

  forecastList.forEach((day, index) => {
    const row = document.createElement("div");
    row.className = `forecast-row ${index === 0 ? "active-day" : ""}`;

    row.innerHTML = `
      <div style="width: 85px;">
        <div class="fw-semibold text-white" style="font-size: 13.5px;">${day.day}</div>
        <div class="text-subtle font-data" style="font-size: 11px;">${day.desc}</div>
      </div>
      <div class="text-center" style="width: 40px;">
        <span class="material-symbols-outlined text-amber" style="font-size: 22px; ${day.iconFill ? "font-variation-settings: 'FILL' 1;" : ""}">${day.icon}</span>
      </div>
      <div class="temp-bar-track">
        <div class="temp-bar-fill" style="left: ${day.leftPct || 15}%; right: ${day.rightPct || 15}%;"></div>
      </div>
      <div class="d-flex align-items-center gap-2 font-data" style="width: 75px; justify-content: flex-end;">
        <span class="text-dim" style="font-size: 12px;">${toTemp(day.lowC)}°</span>
        <span class="text-white fw-semibold" style="font-size: 13px;">${toTemp(day.highC)}°</span>
      </div>
    `;

    container.appendChild(row);
  });
}

// Render Saved Hubs Watchlist
function renderHubsList() {
  const container = document.getElementById("hubsListContainer");
  if (!container) return;

  container.innerHTML = "";

  const hubsKeys = ["newyork", "tokyo", "london", "sanfrancisco"];
  hubsKeys.forEach(key => {
    const hub = weatherDatabase[key];
    if (!hub) return;

    const card = document.createElement("div");
    card.className = "hub-card";
    card.onclick = () => {
      renderCurrentWeather(key);
      showToast(`Switched telemetry to ${hub.name}`);
    };

    card.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <div class="hub-icon-box text-cyan">
          <span class="material-symbols-outlined" style="font-size: 20px;">${hub.icon}</span>
        </div>
        <div>
          <div class="fw-semibold text-white" style="font-size: 13.5px;">${hub.name.split(",")[0]}</div>
          <div class="text-dim font-data" style="font-size: 11px;">${hub.condition}</div>
        </div>
      </div>
      <div class="text-end">
        <div class="font-data fw-bold text-white" style="font-size: 16px;">${toTemp(hub.tempC)}°</div>
        <div class="text-dim font-data" style="font-size: 11px;">H:${toTemp(hub.highC)}° L:${toTemp(hub.lowC)}°</div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Temperature Unit Toggle
function setTempUnit(celsius) {
  isCelsius = celsius;
  const btnC = document.getElementById("btnUnitCelsius");
  const btnF = document.getElementById("btnUnitFahrenheit");

  if (btnC && btnF) {
    if (isCelsius) {
      btnC.classList.add("active");
      btnF.classList.remove("active");
    } else {
      btnF.classList.add("active");
      btnC.classList.remove("active");
    }
  }

  renderCurrentWeather(currentCityId);
  showToast(`Temperature unit updated to ${isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)"}`);
}

// UTC Clock
function startClock() {
  const utcElem = document.getElementById("headerUtcClock");
  function tick() {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, "0");
    const utcMins = String(now.getUTCMinutes()).padStart(2, "0");
    const utcSecs = String(now.getUTCSeconds()).padStart(2, "0");
    if (utcElem) {
      utcElem.textContent = `${utcHours}:${utcMins}:${utcSecs} UTC`;
    }
  }
  tick();
  setInterval(tick, 1000);
}

// City Search
async function searchCity(query) {
  const cleanQ = query.trim();
  if (!cleanQ) return;

  // 1. Check local database first (instant render for known cities)
  const localKey = Object.keys(weatherDatabase).find(k => {
    const item = weatherDatabase[k];
    return item.name.toLowerCase().includes(cleanQ.toLowerCase()) || k.toLowerCase().includes(cleanQ.toLowerCase());
  });

  if (localKey) {
    renderCurrentWeather(localKey);
    showToast(`Loaded: ${weatherDatabase[localKey].name}`);
    return;
  }

  // 2. Fetch from the live API for any other city
  showToast(`Searching for "${cleanQ}"...`, 'info');

  try {
    const response = await fetch(`/api/weather?city=${encodeURIComponent(cleanQ)}`);
    const data = await response.json();

    if (!response.ok) {
      showToast(data.message || `City "${cleanQ}" not found.`, 'warning');
      return;
    }

    // Map API response into the weather condition icon
    const conditionMain = (data.description || '').toLowerCase();
    let icon = 'wb_sunny';
    let iconFill = true;
    if (conditionMain.includes('rain') || conditionMain.includes('drizzle')) { icon = 'rainy'; iconFill = false; }
    else if (conditionMain.includes('thunder')) { icon = 'thunderstorm'; iconFill = false; }
    else if (conditionMain.includes('snow')) { icon = 'ac_unit'; iconFill = false; }
    else if (conditionMain.includes('cloud')) { icon = 'partly_cloudy_day'; iconFill = false; }
    else if (conditionMain.includes('fog') || conditionMain.includes('mist') || conditionMain.includes('haze')) { icon = 'foggy'; iconFill = false; }

    // Update hero section
    const heroLocationName = document.getElementById('heroLocationName');
    if (heroLocationName) heroLocationName.textContent = `${data.city}, ${data.country}`;

    const heroStatusText = document.getElementById('heroStatusText');
    if (heroStatusText) heroStatusText.textContent = data.description
      ? data.description.charAt(0).toUpperCase() + data.description.slice(1)
      : 'Live Data';

    const heroConditionIcon = document.getElementById('heroConditionIcon');
    if (heroConditionIcon) {
      heroConditionIcon.textContent = icon;
      heroConditionIcon.style.fontVariationSettings = iconFill ? "'FILL' 1" : "'FILL' 0";
    }

    const heroMainTemp = document.getElementById('heroMainTemp');
    if (heroMainTemp) heroMainTemp.textContent = isCelsius ? Math.round(data.temp) : Math.round(data.temp * 9/5 + 32);

    const heroTempUnit = document.getElementById('heroTempUnit');
    if (heroTempUnit) heroTempUnit.textContent = getTempUnitString();

    const heroHighTemp = document.getElementById('heroHighTemp');
    if (heroHighTemp) heroHighTemp.textContent = `${isCelsius ? Math.round(data.temp_max ?? data.temp) : Math.round((data.temp_max ?? data.temp) * 9/5 + 32)}°`;

    const heroLowTemp = document.getElementById('heroLowTemp');
    if (heroLowTemp) heroLowTemp.textContent = `${isCelsius ? Math.round(data.temp_min ?? data.temp) : Math.round((data.temp_min ?? data.temp) * 9/5 + 32)}°`;

    const heroFeelsLike = document.getElementById('heroFeelsLike');
    if (heroFeelsLike) {
      const fl = data.feels_like ?? data.temp;
      heroFeelsLike.textContent = `Feels like ${isCelsius ? Math.round(fl) : Math.round(fl * 9/5 + 32)}${getTempUnitString()}`;
    }

    const heroCoordinates = document.getElementById('heroCoordinates');
    if (heroCoordinates && data.lat && data.lon) {
      heroCoordinates.textContent = `${parseFloat(data.lat).toFixed(4)}° N, ${parseFloat(data.lon).toFixed(4)}° E`;
    }

    // Telemetry strip
    const telHumidity = document.getElementById('telHumidity');
    if (telHumidity && data.humidity != null) telHumidity.textContent = `${data.humidity}%`;

    const telWind = document.getElementById('telWind');
    if (telWind && data.wind_speed != null) telWind.textContent = `${Math.round(data.wind_speed * 3.6)} km/h`;

    const telPressure = document.getElementById('telPressure');
    if (telPressure && data.pressure != null) telPressure.textContent = `${data.pressure} hPa`;

    const telVisibility = document.getElementById('telVisibility');
    if (telVisibility && data.visibility != null) telVisibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;

    // Radar location label
    const radarLocationDesc = document.getElementById('radarLocationDesc');
    if (radarLocationDesc) radarLocationDesc.textContent = `${data.city}, ${data.country} — Precipitation density scanner`;

    currentCityId = cleanQ.toLowerCase();
    showToast(`Now showing: ${data.city}, ${data.country} 🌍`);

  } catch (error) {
    console.error(error);
    showToast('Could not reach weather service. Check your connection.', 'warning');
  }
}

// Radar Layer Controls
function setRadarLayer(layerType) {
  currentRadarLayer = layerType;

  const buttons = document.querySelectorAll(".radar-layer-btn");
  buttons.forEach(btn => {
    if (btn.dataset.layer === layerType) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const blipAmber = document.querySelector(".radar-blip-amber");
  const blipCyan = document.querySelector(".radar-blip-cyan");

  if (layerType === "rain") {
    if (blipAmber) blipAmber.style.background = "rgba(245, 158, 11, 0.45)";
    if (blipCyan) blipCyan.style.background = "rgba(56, 189, 248, 0.45)";
  } else if (layerType === "wind") {
    if (blipAmber) blipAmber.style.background = "rgba(56, 189, 248, 0.55)";
    if (blipCyan) blipCyan.style.background = "rgba(168, 85, 247, 0.45)";
  } else if (layerType === "clouds") {
    if (blipAmber) blipAmber.style.background = "rgba(223, 226, 241, 0.35)";
    if (blipCyan) blipCyan.style.background = "rgba(135, 146, 154, 0.45)";
  }

  showToast(`Doppler layer switched to: ${layerType.toUpperCase()}`);
}

// Radar Zoom
function zoomRadar(delta) {
  radarZoomLevel = Math.max(0.8, Math.min(2.0, radarZoomLevel + delta));
  const sweepCenter = document.querySelector(".radar-sweep-center");
  if (sweepCenter) {
    sweepCenter.style.transform = `scale(${radarZoomLevel})`;
  }
  showToast(`Radar zoom: ${Math.round(radarZoomLevel * 100)}%`);
}

// Radar Loop Toggle
function toggleRadarLoop() {
  isRadarLooping = !isRadarLooping;
  const ray = document.querySelector(".radar-sweep-ray");
  const loopStatusText = document.getElementById("radarLoopStatusText");

  if (ray) {
    ray.style.animationPlayState = isRadarLooping ? "running" : "paused";
  }
  if (loopStatusText) {
    loopStatusText.textContent = isRadarLooping ? "Radar Loop: Active (90m)" : "Radar Loop: Paused";
  }

  showToast(isRadarLooping ? "Doppler scanner running" : "Doppler scanner paused");
}

// Toast Helper
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toastId = "toast_" + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center text-white border-0 glass-panel mb-2" role="alert" aria-live="assertive" aria-atomic="true" style="background: rgba(15, 19, 29, 0.95); border-left: 3px solid ${type === 'warning' ? 'var(--secondary)' : 'var(--primary-container)'};">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2 py-2 px-3 font-data" style="font-size: 13px;">
          <span class="material-symbols-outlined text-${type === 'warning' ? 'amber' : 'cyan'}" style="font-size: 18px;">
            ${type === 'warning' ? 'warning' : 'info'}
          </span>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", toastHtml);
  const toastEl = document.getElementById(toastId);
  if (toastEl && window.bootstrap) {
    const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
    bsToast.show();
    toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Start Realtime UTC Clock
  startClock();

  // Render Default City (Tuscany)
  renderCurrentWeather(currentCityId);

  // Search Input & Button Handler
  const searchInput = document.getElementById("globalCitySearch");
  const searchBtn = document.getElementById("searchBtn");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchCity(searchInput.value);
      }
    });
  }
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      searchCity(searchInput.value);
    });
  }

  // Keyboard shortcut: Cmd+K or Ctrl+K
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // Carousel Wheel Scroll
  const carousel = document.getElementById("hourlyCarouselContainer");
  if (carousel) {
    carousel.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
      }
    });
  }
});
