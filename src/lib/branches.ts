export type Branch = {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  address: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  phone: string;
  phone2?: string;
  email: string;
  whatsapp: string;
  heroImage: string;
  heroVideo?: string;
  accentColor: string;
  accentColorRgb: string;
  establishedYear: number;
  area: string; // area in sq ft
  stats: {
    members: string;
    trainers: string;
    equipment: string;
    experience: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  programs: {
    title: string;
    duration: string;
    level: string;
    description: string;
  }[];
  trainers: {
    name: string;
    specialization: string;
    experience: string;
  }[];
  amenities: string[];
  uniqueHighlights: {
    title: string;
    description: string;
  }[];
  membership: {
    monthly: string;
    quarterly: string;
    yearly: string;
  };
  mapEmbedUrl: string;
  testimonials: {
    name: string;
    review: string;
    rating: number;
    duration: string;
  }[];
  gallery: string[];
  nearbyLandmarks: string[];
};

export const branches: Branch[] = [
  {
    slug: "hirawadi",
    name: "Hirawadi",
    fullName: "SFW Hirawadi Gym",
    tagline: "YOUR JOURNEY STARTS HERE",
    subtitle: "The Original & Flagship Location",
    description:
      "The birthplace of SFW — where champions are built and legends are made. Our flagship Hirawadi branch is the cornerstone of fitness excellence in Ahmedabad.",
    longDescription: [
      "SFW Hirawadi is where the SFW legacy began. Established in 2016, this flagship branch has been a beacon of fitness transformation for thousands of members across Ahmedabad. Spanning over 12,000 sq ft of meticulously designed workout space, it is the most comprehensive fitness facility in the western belt of the city.",
      "The gym features a dedicated powerlifting zone with competition-grade barbells, calibrated plates, and full monolift racks — a rarity in any commercial gym in Gujarat. Whether you're a beginner stepping into the gym for the first time, or a seasoned athlete preparing for a competition, our certified coaches design custom protocols tailored to your exact goals.",
      "Beyond the weights, Hirawadi houses a state-of-the-art cardio theatre with 30+ machines, a functional training arena with battle ropes, turf, and sleds, and a serene yoga & stretching studio. Our certified nutritionist is available in-house five days a week for personalized diet planning.",
      "The Hirawadi branch is more than a gym — it is a community. Monthly transformation challenges, member spotlights, and inter-branch competitions keep the culture alive. We've produced 50+ podium finishes at state and national bodybuilding championships. This is your foundation — join us and build something extraordinary.",
    ],
    address: "Near Hirawadi Circle, Sabarmati, Ahmedabad, Gujarat 380024",
    addressLine1: "Near Hirawadi Circle, Sabarmati",
    addressLine2: "Opposite HP Petrol Pump",
    city: "Ahmedabad, Gujarat",
    pincode: "380024",
    phone: "+91 98250 11111",
    phone2: "+91 98250 22222",
    email: "hirawadi@sfwgym.com",
    whatsapp: "+91 98250 11111",
    heroImage: "/herosection/herobaner.jpg",
    accentColor: "#79B537",
    accentColorRgb: "121,181,55",
    establishedYear: 2016,
    area: "12,000",
    stats: {
      members: "1,200+",
      trainers: "25+",
      equipment: "150+",
      experience: "8+ Yrs",
    },
    hours: {
      weekday: "5:00 AM – 11:00 PM",
      saturday: "5:30 AM – 10:00 PM",
      sunday: "6:00 AM – 8:00 PM",
    },
    features: [
      {
        title: "Powerlifting Zone",
        description:
          "Competition-grade barbells, calibrated plates, monolift racks, and dedicated deadlift platforms for serious strength athletes.",
        icon: "Dumbbell",
      },
      {
        title: "Cardio Theatre",
        description:
          "30+ premium treadmills, ellipticals, and bikes — all equipped with personal screens and AC zones for a comfortable burn.",
        icon: "Activity",
      },
      {
        title: "Yoga & Stretch Studio",
        description:
          "A tranquil space with sprung floors, guided audio sessions, foam rollers, and resistance bands for recovery and mobility.",
        icon: "Leaf",
      },
      {
        title: "In-House Nutritionist",
        description:
          "Certified nutrition counsellor available 5 days a week for personalized meal planning, macro tracking, and supplement guidance.",
        icon: "Salad",
      },
      {
        title: "Functional Training Arena",
        description:
          "Battle ropes, plyometric boxes, turf track, sleds, TRX suspension trainers, and a full crossfit rig for athletic conditioning.",
        icon: "Zap",
      },
      {
        title: "Steam & Sauna",
        description:
          "Premium recovery suite with infrared sauna and steam room — because recovery is as important as the workout itself.",
        icon: "Thermometer",
      },
    ],
    programs: [
      {
        title: "Strength & Powerlifting",
        duration: "12 Weeks",
        level: "Intermediate – Advanced",
        description:
          "A periodized program built around the squat, bench press, and deadlift. Includes programming, coaching, and competition prep.",
      },
      {
        title: "Body Transformation",
        duration: "16 Weeks",
        level: "Beginner – Intermediate",
        description:
          "Combines resistance training, HIIT, and nutritional coaching to deliver dramatic physique changes in 4 months.",
      },
      {
        title: "Athletic Conditioning",
        duration: "8 Weeks",
        level: "All Levels",
        description:
          "Sport-specific conditioning using functional movements, agility drills, and VO2 max training for peak athletic performance.",
      },
      {
        title: "Weight Management",
        duration: "Ongoing",
        level: "Beginner",
        description:
          "A sustainable approach combining low-impact cardio, resistance work, and weekly nutritional check-ins to manage weight effectively.",
      },
    ],
    trainers: [
      {
        name: "Rajan Mehta",
        specialization: "Powerlifting & Strength",
        experience: "10 Years",
      },
      {
        name: "Priya Shah",
        specialization: "Yoga & Mobility",
        experience: "7 Years",
      },
      {
        name: "Karan Patel",
        specialization: "Body Transformation",
        experience: "8 Years",
      },
      {
        name: "Neha Joshi",
        specialization: "Cardio & HIIT",
        experience: "5 Years",
      },
    ],
    amenities: [
      "Air-Conditioned Throughout",
      "Locker Rooms with Showers",
      "Supplements & Protein Bar",
      "Free Wi-Fi",
      "Parking (50+ Vehicles)",
      "CCTV Security 24/7",
      "Vending Machines",
      "In-House Physiotherapist",
    ],
    uniqueHighlights: [
      {
        title: "50+ Championship Podiums",
        description:
          "Our members have represented Gujarat at state and national bodybuilding championships, bringing home 50+ medals since 2016.",
      },
      {
        title: "Monthly Transformation Challenges",
        description:
          "Friendly in-house competitions every month with prizes, recognition, and a culture of accountability that drives real results.",
      },
    ],
    membership: {
      monthly: "₹1,499",
      quarterly: "₹3,999",
      yearly: "₹12,999",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.5714!3d23.0395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzIyLjIiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1617900000000",
    testimonials: [
      {
        name: "Amit Desai",
        review:
          "I've been a member since 2018 and I can say without doubt — SFW Hirawadi changed my life. Lost 22kg in 6 months and ran my first half-marathon. The coaches here genuinely care about your progress.",
        rating: 5,
        duration: "Member since 2018",
      },
      {
        name: "Sonal Trivedi",
        review:
          "The yoga studio is a hidden gem! I come every morning before work and it sets the tone for my entire day. The instructors are knowledgeable, patient, and incredibly motivating.",
        rating: 5,
        duration: "Member since 2020",
      },
      {
        name: "Vishal Rana",
        review:
          "Best powerlifting setup in Ahmedabad, period. Where else will you find calibrated plates and a proper monolift rack in a commercial gym? Rajan bhai's coaching is world-class.",
        rating: 5,
        duration: "Member since 2019",
      },
    ],
    gallery: ["/images/hero.png", "/images/athlete.png"],
    nearbyLandmarks: ["Hirawadi Circle", "Sabarmati River Front", "HP Petrol Pump", "Chandkheda Highway"],
  },
  {
    slug: "maninagar",
    name: "Maninagar",
    fullName: "SFW Maninagar Gym",
    tagline: "STRENGTH IN EVERY CORNER",
    subtitle: "East Ahmedabad's Premier Fitness Hub",
    description:
      "Rising from the heart of East Ahmedabad, SFW Maninagar brings elite fitness infrastructure to one of the city's most vibrant and rapidly growing localities.",
    longDescription: [
      "SFW Maninagar was established in 2019 to bring the flagship SFW experience to the bustling eastern corridor of Ahmedabad. Spread across 10,000 sq ft in a premium ground-floor facility, this branch has quickly grown to become the most popular gym destination between Maninagar Char Rasta and Isanpur.",
      "The facility is especially renowned for its dedicated women's fitness floor — a fully segregated, air-conditioned space with resistance machines, functional training equipment, and a cycling studio. This initiative has made fitness accessible and comfortable for hundreds of women who previously had no premium, women-first space in the area.",
      "Maninagar is home to our flagship CrossFit affiliate program. Certified Level 2 CrossFit coaches run six daily WOD classes catering to all fitness levels, from first-timers to experienced athletes. The open-air rig, Olympic lifting platforms, and rowing machines create an environment unlike any traditional gym.",
      "For the working professional with a tight schedule, Maninagar offers express 45-minute HIIT circuits that run every hour from 6 AM to 9 PM. No appointment needed — show up, sweat, and transform. This branch lives by one motto: no excuses, just results.",
    ],
    address: "Maninagar Char Rasta, Maninagar, Ahmedabad, Gujarat 380008",
    addressLine1: "Maninagar Char Rasta, Near Lake",
    addressLine2: "Opposite Maninagar Railway Station",
    city: "Ahmedabad, Gujarat",
    pincode: "380008",
    phone: "+91 98250 33333",
    phone2: "+91 98250 44444",
    email: "maninagar@sfwgym.com",
    whatsapp: "+91 98250 33333",
    heroImage: "/herosection/herobaner.jpg",
    accentColor: "#FF6B35",
    accentColorRgb: "255,107,53",
    establishedYear: 2019,
    area: "10,000",
    stats: {
      members: "900+",
      trainers: "18+",
      equipment: "120+",
      experience: "5+ Yrs",
    },
    hours: {
      weekday: "5:00 AM – 11:00 PM",
      saturday: "5:30 AM – 10:00 PM",
      sunday: "6:00 AM – 7:00 PM",
    },
    features: [
      {
        title: "Women's Fitness Floor",
        description:
          "A fully segregated, premium space with cable machines, resistance equipment, cycling studio, and female-only trainers for a comfortable and empowering workout environment.",
        icon: "Heart",
      },
      {
        title: "CrossFit Affiliate Box",
        description:
          "Open-air CrossFit rig, Olympic lifting platforms, rowers, and certified Level 2 CrossFit coaches running 6 WOD classes daily at all levels.",
        icon: "Zap",
      },
      {
        title: "Express HIIT Circuit",
        description:
          "45-minute high-intensity sessions running every hour, 6 AM–9 PM. Perfect for busy professionals who need a fast, effective total-body workout.",
        icon: "Timer",
      },
      {
        title: "Olympic Lifting Platform",
        description:
          "Three dedicated platforms with bumper plates, competition barbells, and technical coaching for snatch, clean & jerk, and accessory lifts.",
        icon: "Dumbbell",
      },
      {
        title: "Cycling Studio",
        description:
          "20-bike cycling studio with synchronized music, instructor-led rhythm cycling sessions, and a dedicated spin schedule throughout the week.",
        icon: "Bike",
      },
      {
        title: "Juice & Supplement Bar",
        description:
          "Fresh fruit smoothies, cold-pressed juices, and premium supplement stacks curated by our in-house dietitian for optimal pre and post-workout nutrition.",
        icon: "Coffee",
      },
    ],
    programs: [
      {
        title: "CrossFit Foundations",
        duration: "4 Weeks",
        level: "Beginner",
        description:
          "An introductory course to CrossFit methodology — movement standards, scaling, and community culture before joining the main WOD classes.",
      },
      {
        title: "Women's Strength Program",
        duration: "10 Weeks",
        level: "All Levels",
        description:
          "A progressive strength program specifically engineered for women, focusing on glute development, upper body toning, and metabolic conditioning.",
      },
      {
        title: "Olympic Lifting Mastery",
        duration: "8 Weeks",
        level: "Intermediate – Advanced",
        description:
          "Technical coaching on the snatch and clean & jerk with video analysis, mobility work, and competition preparation for aspiring lifters.",
      },
      {
        title: "Warrior Fat Loss",
        duration: "12 Weeks",
        level: "All Levels",
        description:
          "An aggressive but sustainable fat loss protocol combining CrossFit conditioning, dietary intervention, and daily step tracking for maximum calorie deficit.",
      },
    ],
    trainers: [
      {
        name: "Deepak Chauhan",
        specialization: "CrossFit & Olympic Lifting",
        experience: "9 Years",
      },
      {
        name: "Anita Prajapati",
        specialization: "Women's Fitness & Cycling",
        experience: "6 Years",
      },
      {
        name: "Rahul Solanki",
        specialization: "HIIT & Functional Training",
        experience: "7 Years",
      },
      {
        name: "Mitali Kapoor",
        specialization: "Nutrition & Wellness",
        experience: "5 Years",
      },
    ],
    amenities: [
      "Women's Only Zone",
      "CrossFit Box",
      "Locker Rooms with Showers",
      "Juice & Supplement Bar",
      "Free Wi-Fi",
      "Parking Available",
      "CCTV 24/7",
      "Trained First Aid Staff",
    ],
    uniqueHighlights: [
      {
        title: "Women-First Initiative",
        description:
          "The only gym in East Ahmedabad with a dedicated, fully-equipped women's floor and female-only trainers, making premium fitness truly inclusive.",
      },
      {
        title: "CrossFit Affiliate",
        description:
          "Affiliated CrossFit box running 6 daily WOD classes — one of only three official CrossFit affiliates in the city of Ahmedabad.",
      },
    ],
    membership: {
      monthly: "₹1,299",
      quarterly: "₹3,499",
      yearly: "₹11,499",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.6014!3d23.0025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzA5LjAiTiA3MsKwMzYnMDUuMCJF!5e0!3m2!1sen!2sin!4v1617900000001",
    testimonials: [
      {
        name: "Pooja Sharma",
        review:
          "As a woman, I was always uncomfortable in regular gyms. SFW Maninagar's women's floor completely changed that experience for me. I feel safe, motivated, and genuinely excited to come every day.",
        rating: 5,
        duration: "Member since 2020",
      },
      {
        name: "Jigar Vyas",
        review:
          "CrossFit here is a completely different level. Deepak sir's coaching has transformed not just my fitness but how I approach challenges in life. The community keeps you accountable.",
        rating: 5,
        duration: "Member since 2021",
      },
      {
        name: "Kavya Modi",
        review:
          "The express 45-minute HIIT sessions are a lifesaver! I have a 9-to-5 job and this is the only gym where I can walk in at 7 PM, crush a full workout, and be home by 8. Absolutely love it.",
        rating: 5,
        duration: "Member since 2022",
      },
    ],
    gallery: ["/images/hero.png", "/images/athlete.png"],
    nearbyLandmarks: ["Maninagar Char Rasta", "Maninagar Railway Station", "Kankaria Lake", "Isanpur Junction"],
  },
  {
    slug: "satellite",
    name: "Satellite",
    fullName: "SFW Satellite Gym",
    tagline: "ELITE FITNESS, REFINED",
    subtitle: "West Ahmedabad's Luxury Fitness Flagship",
    description:
      "Designed for the discerning fitness enthusiast, SFW Satellite offers a premium, boutique gym experience with personalized coaching, exclusive member services, and world-class infrastructure.",
    longDescription: [
      "SFW Satellite opened its doors in 2021 in response to the growing demand for a luxury fitness experience in West Ahmedabad. Located in the upscale Satellite-Prahlad Nagar corridor, this branch was conceptualized as a boutique fitness club that blends the rigor of high-performance training with the comfort of a five-star environment.",
      "The facility spans 8,500 sq ft across two floors, thoughtfully divided into specialized zones. The ground floor houses the strength floor, recovery lounge, and the 'SFW Performance Lab' — a space equipped with velocity-based training devices, force plates, and blood-flow restriction cuffs used for member assessments and athlete monitoring. The upper floor features a dedicated Pilates & Yoga studio as well as an executive lounge for premium members.",
      "What sets Satellite apart is the 1-on-1 personal training culture. Every new member begins with a 90-minute onboarding assessment covering posture analysis, movement screening, body composition measurement, and goal mapping. This data feeds into a custom 12-week training and nutrition roadmap delivered by your dedicated coach.",
      "This branch also houses Ahmedabad's only fully operational Cryotherapy chamber and an infrared sauna suite. Post-workout recovery is taken as seriously as the workout itself. The Satellite branch is a destination — for CEOs, athletes, and anyone who refuses to compromise on quality.",
    ],
    address: "Opposite ISCON Temple, Satellite Road, Ahmedabad, Gujarat 380015",
    addressLine1: "Satellite Road, Near Pantaloons",
    addressLine2: "Opposite ISCON Temple",
    city: "Ahmedabad, Gujarat",
    pincode: "380015",
    phone: "+91 98250 55555",
    phone2: "+91 98250 66666",
    email: "satellite@sfwgym.com",
    whatsapp: "+91 98250 55555",
    heroImage: "/herosection/herobaner.jpg",
    accentColor: "#A78BFA",
    accentColorRgb: "167,139,250",
    establishedYear: 2021,
    area: "8,500",
    stats: {
      members: "600+",
      trainers: "15+",
      equipment: "100+",
      experience: "3+ Yrs",
    },
    hours: {
      weekday: "5:30 AM – 10:30 PM",
      saturday: "6:00 AM – 9:30 PM",
      sunday: "6:30 AM – 8:00 PM",
    },
    features: [
      {
        title: "Performance Lab",
        description:
          "Velocity-based training devices, force plates, VO2 max testing, and HRV monitoring for scientifically driven performance optimization.",
        icon: "Flask",
      },
      {
        title: "Cryotherapy Chamber",
        description:
          "Ahmedabad's only whole-body cryotherapy chamber. 3 minutes at -110°C for rapid recovery, reduced inflammation, and enhanced mood.",
        icon: "Snowflake",
      },
      {
        title: "Boutique Pilates Studio",
        description:
          "Reformer Pilates with eight Balanced Body reformers, certified instructors, and small-group classes for core strength, posture, and flexibility.",
        icon: "Leaf",
      },
      {
        title: "Personal Training Only Zone",
        description:
          "A distraction-free training floor reserved exclusively for 1-on-1 personal training sessions — no general access, total focus.",
        icon: "Target",
      },
      {
        title: "Executive Recovery Lounge",
        description:
          "Post-workout lounge with massage chairs, cold plunge pools, infrared sauna, and a curated menu of recovery beverages for premium members.",
        icon: "Armchair",
      },
      {
        title: "Body Composition Lab",
        description:
          "InBody 770 bioelectrical impedance analysis for precise body fat percentage, muscle mass distribution, and hydration tracking monthly.",
        icon: "BarChart",
      },
    ],
    programs: [
      {
        title: "90-Day Elite Transformation",
        duration: "90 Days",
        level: "All Levels",
        description:
          "Our flagship program starting with a full biomechanical assessment. Daily coaching, weekly check-ins, nutrition blueprints, and biometric tracking for guaranteed results.",
      },
      {
        title: "Reformer Pilates Series",
        duration: "6 Weeks",
        level: "All Levels",
        description:
          "Small-group (max 4 per class) reformer Pilates sessions focusing on core stability, postural correction, and functional movement for everyday life.",
      },
      {
        title: "Executive Wellness Program",
        duration: "Ongoing",
        level: "All Levels",
        description:
          "Designed for busy professionals. Flexible scheduling, concierge-style trainer assignments, health journaling, and quarterly performance reviews.",
      },
      {
        title: "Sports Performance Enhancement",
        duration: "8 Weeks",
        level: "Advanced",
        description:
          "Sport-specific periodization using the Performance Lab's VBT and force plate data to optimize power output, speed, and injury resilience.",
      },
    ],
    trainers: [
      {
        name: "Arjun Khanna",
        specialization: "Performance & S&C Coaching",
        experience: "12 Years",
      },
      {
        name: "Ritu Malhotra",
        specialization: "Reformer Pilates & Yoga",
        experience: "9 Years",
      },
      {
        name: "Dev Bhatia",
        specialization: "Personal Training & Biometrics",
        experience: "8 Years",
      },
      {
        name: "Sneha Agarwal",
        specialization: "Nutrition & Lifestyle Coaching",
        experience: "7 Years",
      },
    ],
    amenities: [
      "Cryotherapy Chamber",
      "Infrared Sauna Suite",
      "Cold Plunge Pool",
      "Executive Member Lounge",
      "In-House Physiotherapist",
      "Premium Locker Rooms",
      "Valet Parking",
      "Concierge Scheduling",
    ],
    uniqueHighlights: [
      {
        title: "Ahmedabad's Only Cryotherapy",
        description:
          "Whole-body cryotherapy at -110°C, bringing elite recovery technology previously only found in professional sports clubs to Ahmedabad.",
      },
      {
        title: "Boutique Personalization",
        description:
          "Every member gets a dedicated coach, monthly progress reviews, and concierge scheduling. The ratio here is 1 trainer per 40 members — 3x the industry average.",
      },
    ],
    membership: {
      monthly: "₹2,499",
      quarterly: "₹6,499",
      yearly: "₹21,999",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2!2d72.5014!3d23.0295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzQ2LjIiTiA3MsKwMzAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1617900000002",
    testimonials: [
      {
        name: "Rohan Mehta",
        review:
          "I've trained in gyms across Mumbai, Bangalore, and Dubai — SFW Satellite is genuinely on par with the best I've experienced. The performance lab, cryotherapy, and quality of coaching is exceptional.",
        rating: 5,
        duration: "Member since 2021",
      },
      {
        name: "Sheetal Parikh",
        review:
          "As a Pilates instructor myself, I'm very particular about equipment and technique. The reformers here are top-tier and Ritu ma'am's cues are impeccable. Best Pilates studio in Ahmedabad by a long margin.",
        rating: 5,
        duration: "Member since 2022",
      },
      {
        name: "Nikhil Banker",
        review:
          "The executive wellness program was designed around my 60-hour work week. Flexible slots, monthly body composition reviews, and a trainer who actually follows up. This is what premium should feel like.",
        rating: 5,
        duration: "Member since 2022",
      },
    ],
    gallery: ["/images/hero.png", "/images/athlete.png"],
    nearbyLandmarks: ["ISCON Temple", "Pantaloons Satellite", "Prahlad Nagar Garden", "Jodhpur Cross Roads"],
  },
  {
    slug: "bopal",
    name: "Bopal",
    fullName: "SFW Bopal Gym",
    tagline: "BUILT FOR THE BOLD",
    subtitle: "South-West Ahmedabad's Rising Fitness Hub",
    description:
      "The newest and most modern SFW facility, built from the ground up with cutting-edge equipment, a vibrant community culture, and programs designed for the fast-growing population of Bopal and South Bopal.",
    longDescription: [
      "SFW Bopal is our newest jewel, inaugurated in 2023 to meet the fitness needs of the booming residential and commercial belt of South-West Ahmedabad. Bopal and South Bopal have seen exponential growth in the last five years, with thousands of young professionals and families settling in this area — and SFW is here to be their fitness home.",
      "The facility is built on 9,000 sq ft of brand-new, purpose-built space featuring the latest generation of Technogym equipment — the same brand trusted by Olympic training centers and Formula 1 teams. Every machine in the Bopal branch is smart-connected, meaning members can track reps, resistance, and performance data directly on the SFW app.",
      "A standout offering at Bopal is the Kids & Teen Fitness Academy — a first-of-its-kind initiative within the SFW network. Saturday morning sessions for ages 8–16 introduce children to structured physical activity, coordination training, and healthy lifestyle habits in an energetic and fun environment.",
      "Bopal is also our most digitally integrated branch. AI-powered workout mirrors in the functional zone provide real-time form feedback. The front-desk check-in is fully automated via the SFW app's QR code. Members can book any class, track any session, and communicate with their coach entirely via the app. Welcome to the future of fitness — welcome to SFW Bopal.",
    ],
    address: "Near South Bopal Circle, Bopal, Ahmedabad, Gujarat 380058",
    addressLine1: "South Bopal Circle, Near D-Mart",
    addressLine2: "Above HDFC Bank",
    city: "Ahmedabad, Gujarat",
    pincode: "380058",
    phone: "+91 98250 77777",
    phone2: "+91 98250 88888",
    email: "bopal@sfwgym.com",
    whatsapp: "+91 98250 77777",
    heroImage: "/herosection/herobaner.jpg",
    accentColor: "#F59E0B",
    accentColorRgb: "245,158,11",
    establishedYear: 2023,
    area: "9,000",
    stats: {
      members: "500+",
      trainers: "12+",
      equipment: "110+",
      experience: "1+ Yr",
    },
    hours: {
      weekday: "5:00 AM – 11:00 PM",
      saturday: "5:30 AM – 10:00 PM",
      sunday: "6:00 AM – 8:00 PM",
    },
    features: [
      {
        title: "Technogym Smart Equipment",
        description:
          "Latest-generation Technogym machines with embedded screens and app connectivity, tracking every rep, set, and watt automatically into your fitness profile.",
        icon: "Cpu",
      },
      {
        title: "AI Workout Mirrors",
        description:
          "AI-powered smart mirrors in the functional zone deliver real-time form correction, rep counting, and on-demand workout videos for self-guided sessions.",
        icon: "Monitor",
      },
      {
        title: "Kids & Teen Fitness Academy",
        description:
          "Saturday morning structured fitness programs for ages 8–16 covering coordination, agility, strength basics, and healthy lifestyle education.",
        icon: "Star",
      },
      {
        title: "App-First Experience",
        description:
          "Fully digital: QR code check-in, class booking, coach messaging, workout logging, and progress analytics — all in one seamless SFW app experience.",
        icon: "Smartphone",
      },
      {
        title: "Group Fitness Hall",
        description:
          "A 1,500 sq ft sprung-floor studio accommodating Zumba, BODYPUMP, kickboxing, and step aerobics with live DJ music for 20+ group sessions weekly.",
        icon: "Music",
      },
      {
        title: "Outdoor Turf Zone",
        description:
          "Open-air synthetic turf for bootcamp training, team sports conditioning, sled pushes, and sprint drills — exposed to fresh air for a revitalizing experience.",
        icon: "Sun",
      },
    ],
    programs: [
      {
        title: "Smart Body Composition",
        duration: "12 Weeks",
        level: "All Levels",
        description:
          "Uses Technogym's digital tracking to monitor strength output week-over-week, combined with nutrition coaching for precise body recomposition.",
      },
      {
        title: "Kids Active Foundations",
        duration: "Term-Based (3 months)",
        level: "Ages 8–16",
        description:
          "Saturday academy covering foundational movement patterns, coordination games, team sports, and healthy habit education for the next generation.",
      },
      {
        title: "Dance & Zumba Bootcamp",
        duration: "8 Weeks",
        level: "Beginner – Intermediate",
        description:
          "High-energy group fitness combining Latin dance, aerobics, and toning — the most popular program at the Bopal branch by enrollment.",
      },
      {
        title: "New Member Kickstart",
        duration: "4 Weeks",
        level: "Beginner",
        description:
          "A guided introduction for gym newcomers including equipment orientation, goal setting, beginner workout templates, and weekly check-ins with a dedicated coach.",
      },
    ],
    trainers: [
      {
        name: "Harsh Bhatt",
        specialization: "Strength & Smart Training",
        experience: "6 Years",
      },
      {
        name: "Monika Tiwari",
        specialization: "Zumba & Group Fitness",
        experience: "7 Years",
      },
      {
        name: "Sahil Rajput",
        specialization: "Youth Fitness & Athletics",
        experience: "5 Years",
      },
      {
        name: "Drashti Patel",
        specialization: "Nutrition & App Coaching",
        experience: "4 Years",
      },
    ],
    amenities: [
      "Smart Technogym Equipment",
      "AI Workout Mirrors",
      "Outdoor Turf Zone",
      "Group Fitness Hall",
      "Kids Academy Space",
      "App-Based Check-In",
      "Premium Locker Rooms",
      "Free Parking (60+ Vehicles)",
    ],
    uniqueHighlights: [
      {
        title: "Most Technologically Advanced",
        description:
          "The SFW network's most digitally integrated facility with smart equipment, AI mirrors, and a fully app-driven member experience — the gym of the future, today.",
      },
      {
        title: "Kids & Teen Fitness Academy",
        description:
          "The only gym in the Bopal area with a dedicated, structured fitness program for children aged 8–16, building healthy habits for the next generation.",
      },
    ],
    membership: {
      monthly: "₹1,199",
      quarterly: "₹3,199",
      yearly: "₹10,999",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5!2d72.4714!3d22.9895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzIyLjIiTiA3MsKwMjgnMTcuMCJF!5e0!3m2!1sen!2sin!4v1617900000003",
    testimonials: [
      {
        name: "Dhruv Patel",
        review:
          "The app integration is genuinely impressive. I can see my strength progression week-over-week on graphs, book classes in 2 taps, and my coach sends me adjustments via chat. This is how fitness should work in 2024.",
        rating: 5,
        duration: "Member since 2023",
      },
      {
        name: "Miral Shah",
        review:
          "I enrolled my 12-year-old son in the Saturday Kids Academy and the difference in his energy, posture, and confidence in just 3 months has been remarkable. Sahil sir makes it so much fun for the kids.",
        rating: 5,
        duration: "Member since 2023",
      },
      {
        name: "Priya Kapoor",
        review:
          "Monika ma'am's Zumba classes are the highlight of my week! The group fitness hall has incredible energy, the music is always fire, and the AI mirror for my Thursday strength session is genuinely helpful for form.",
        rating: 5,
        duration: "Member since 2023",
      },
    ],
    gallery: ["/images/hero.png", "/images/athlete.png"],
    nearbyLandmarks: ["South Bopal Circle", "D-Mart Bopal", "HDFC Bank", "Iskcon Circle Bopal"],
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}

export function getAllBranchSlugs(): string[] {
  return branches.map((b) => b.slug);
}
