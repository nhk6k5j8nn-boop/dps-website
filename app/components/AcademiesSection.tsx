"use client";

import { useState } from "react";

const academies = [
  {
    number: "01",
    title: "Health & Medical Sciences",
    description:
      "Clinical training, patient care, diagnostics, and biomedical pathways.",
    highlights: ["Nursing", "Sports Medicine", "Biotechnology"],
    courses: "24 Courses Available",
    fullCourses: [
      "Health Science Foundations",
      "Medical Terminology",
      "Human Anatomy",
      "Anatomy & Physiology",
      "Nursing Foundations",
      "Patient Care",
      "Clinical Skills",
      "Sports Medicine",
      "Kinesiology",
      "Athletic Rehabilitation",
      "Emergency Trauma Care",
      "EMT Foundations",
      "CPR & Lifesaving",
      "Ultrasound Technology",
      "Radiologic Imaging",
      "MRI Foundations",
      "Pediatrics",
      "Cardiology",
      "Neurology",
      "Public Health",
      "Biotechnology",
      "Genetics",
      "Pathophysiology",
      "Biomedical Research"
    ]
  },

  {
    number: "02",
    title: "Technology & Artificial Intelligence",
    description:
      "Future-focused technology, coding, cybersecurity, and AI systems.",
    highlights: ["Cybersecurity", "Machine Learning", "App Development"],
    courses: "28 Courses Available",
    fullCourses: [
      "Intro to Computer Science",
      "Digital Literacy",
      "Computer Systems",
      "Python Programming",
      "Java Development",
      "C++ Engineering",
      "Web Development",
      "Mobile App Development",
      "AI Foundations",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "AI Ethics",
      "Cybersecurity",
      "Ethical Hacking",
      "Network Security",
      "Digital Forensics",
      "Robotics",
      "Automation Systems",
      "Drone Technology",
      "UI/UX Design",
      "Game Development",
      "AR/VR Development",
      "Cloud Computing",
      "Blockchain Systems",
      "Data Science",
      "Software Engineering",
      "Technology Capstone"
    ]
  },

  {
    number: "03",
    title: "Law, Government & Public Service",
    description:
      "Leadership, justice systems, public policy, and civic engagement.",
    highlights: ["Criminal Law", "Political Science", "Debate"],
    courses: "18 Courses Available",
    fullCourses: [
      "Criminal Law",
      "Constitutional Studies",
      "Political Science",
      "Public Administration",
      "Mock Trial",
      "Forensic Investigation",
      "Criminology",
      "Homeland Security",
      "Juvenile Justice",
      "Courtroom Procedures",
      "Legal Research",
      "Debate & Public Speaking",
      "Law Enforcement Foundations",
      "Corrections & Rehabilitation",
      "National Security",
      "Civic Leadership",
      "Government Relations",
      "Public Policy"
    ]
  },

  {
    number: "04",
    title: "Business, Finance & Entrepreneurship",
    description:
      "Executive leadership, investing, startups, and business innovation.",
    highlights: ["Entrepreneurship", "Marketing", "Finance"],
    courses: "22 Courses Available",
    fullCourses: [
      "Entrepreneurship",
      "Startup Development",
      "Financial Literacy",
      "Accounting",
      "Business Law",
      "Marketing",
      "Digital Marketing",
      "Luxury Branding",
      "Social Media Strategy",
      "Sales Psychology",
      "Investment Strategies",
      "Stock Market Fundamentals",
      "Real Estate Investing",
      "Economics",
      "Corporate Leadership",
      "Business Analytics",
      "E-Commerce",
      "Wealth Management",
      "Brand Management",
      "Public Relations",
      "Consumer Behavior",
      "Business Capstone"
    ]
  },

  {
    number: "05",
    title: "Film, Media & Broadcasting",
    description:
      "Digital storytelling, production, media strategy, and broadcasting.",
    highlights: ["Film Production", "Podcasting", "Video Editing"],
    courses: "20 Courses Available",
    fullCourses: [
      "Film Production",
      "Video Editing",
      "Photography",
      "Sports Broadcasting",
      "Podcast Production",
      "Digital Journalism",
      "Content Creation",
      "YouTube Media Strategy",
      "Screenwriting",
      "TV Production",
      "Documentary Filmmaking",
      "Audio Engineering",
      "Live Event Broadcasting",
      "Media Ethics",
      "Visual Storytelling",
      "Social Media Production",
      "News Reporting",
      "Cinematography",
      "Streaming Production",
      "Broadcast Journalism"
    ]
  },

  {
    number: "06",
    title: "Arts, Fashion & Creative Design",
    description:
      "Creative industries including fashion, branding, and visual arts.",
    highlights: ["Fashion Design", "Graphic Design", "Photography"],
    courses: "19 Courses Available",
    fullCourses: [
      "Fashion Design",
      "Graphic Design",
      "Interior Design",
      "Digital Illustration",
      "Luxury Brand Design",
      "Animation",
      "Character Design",
      "Creative Direction",
      "Runway Production",
      "Visual Arts",
      "Photography Design",
      "3D Art",
      "Textile Design",
      "Architecture Sketching",
      "Creative Entrepreneurship",
      "Brand Styling",
      "Art History",
      "Visual Communication",
      "Creative Portfolio"
    ]
  },

  {
    number: "07",
    title: "Engineering & Architecture",
    description:
      "Advanced engineering systems, architecture, and design innovation.",
    highlights: ["Mechanical Engineering", "CAD Design", "Architecture"],
    courses: "21 Courses Available",
    fullCourses: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Architecture Studio",
      "CAD Design",
      "Construction Technology",
      "3D Modeling",
      "Urban Planning",
      "Structural Design",
      "Engineering Mathematics",
      "Renewable Energy Systems",
      "Industrial Engineering",
      "Product Design",
      "Engineering Capstone",
      "Smart Infrastructure",
      "Blueprint Design",
      "Environmental Engineering",
      "Engineering Physics",
      "Technical Drafting",
      "Materials Science",
      "Engineering Research"
    ]
  },

  {
    number: "08",
    title: "Aviation & Aerospace",
    description:
      "Flight systems, aerospace engineering, and aviation leadership.",
    highlights: ["Flight Navigation", "Pilot Foundations", "Aerospace"],
    courses: "15 Courses Available",
    fullCourses: [
      "Drone Flight Systems",
      "Pilot Foundations",
      "Flight Navigation",
      "Aerospace Engineering",
      "Aviation Safety",
      "Aircraft Systems",
      "Airport Operations",
      "Meteorology",
      "Space Technologies",
      "Rocket Engineering",
      "Air Traffic Control",
      "Flight Simulation",
      "Astronomy",
      "Aviation Communications",
      "Aviation Leadership"
    ]
  },

  {
    number: "09",
    title: "Science & Research",
    description:
      "Scientific discovery, laboratory research, and innovation pathways.",
    highlights: ["Genetics", "Marine Biology", "Research Methods"],
    courses: "18 Courses Available",
    fullCourses: [
      "Environmental Science",
      "Marine Biology",
      "Physics Research",
      "Chemistry Lab",
      "Biotechnology",
      "Advanced Genetics",
      "Research Methods",
      "Laboratory Investigations",
      "Climate Science",
      "Quantum Physics",
      "Scientific Innovation",
      "Biomedical Research",
      "Forensic Science",
      "Organic Chemistry",
      "Microbiology",
      "Earth Science",
      "Biostatistics",
      "Scientific Writing"
    ]
  },

  {
    number: "10",
    title: "Psychology & Human Services",
    description:
      "Human behavior, counseling, advocacy, and social impact studies.",
    highlights: ["Psychology", "Social Work", "Conflict Resolution"],
    courses: "17 Courses Available",
    fullCourses: [
      "Child Development",
      "Counseling Foundations",
      "Behavioral Science",
      "Criminal Psychology",
      "Social Work",
      "Family Dynamics",
      "Mental Health Studies",
      "Human Behavior",
      "Conflict Resolution",
      "Community Advocacy",
      "Developmental Psychology",
      "Trauma & Recovery",
      "Peer Counseling",
      "Human Relations",
      "Youth Services",
      "Case Management",
      "Human Services Capstone"
    ]
  },

  {
    number: "11",
    title: "Culinary & Hospitality",
    description:
      "Food sciences, hospitality leadership, and culinary innovation.",
    highlights: ["Culinary Arts", "Hospitality", "Event Planning"],
    courses: "14 Courses Available",
    fullCourses: [
      "Culinary Arts",
      "Baking & Pastry",
      "Restaurant Management",
      "Luxury Hospitality",
      "Food Science",
      "Event Planning",
      "International Cuisine",
      "Hotel Operations",
      "Food Entrepreneurship",
      "Nutrition Studies",
      "Hospitality Marketing",
      "Food Safety",
      "Catering Operations",
      "Hospitality Leadership"
    ]
  },

  {
    number: "12",
    title: "Skilled Trades & Industrial Technology",
    description:
      "Hands-on technical careers and industrial systems training.",
    highlights: ["HVAC", "Welding", "Construction"],
    courses: "16 Courses Available",
    fullCourses: [
      "Electrical Systems",
      "HVAC",
      "Welding",
      "Construction Technology",
      "Industrial Safety",
      "Blueprint Reading",
      "Machinery Operations",
      "Manufacturing Systems",
      "Automotive Welding",
      "Heavy Equipment",
      "Woodworking",
      "Plumbing Foundations",
      "Industrial Maintenance",
      "Power Systems",
      "Construction Management",
      "Trade Apprenticeship"
    ]
  },

  {
    number: "13",
    title: "Automotive & Transportation",
    description:
      "Vehicle systems, diagnostics, and transportation technologies.",
    highlights: ["Automotive Repair", "Diesel Tech", "Engine Systems"],
    courses: "14 Courses Available",
    fullCourses: [
      "Automotive Repair",
      "Electric Vehicles",
      "Diesel Technology",
      "Vehicle Diagnostics",
      "Transportation Systems",
      "Performance Tuning",
      "Engine Rebuilding",
      "Automotive Electronics",
      "Collision Repair",
      "Automotive Painting",
      "Fleet Maintenance",
      "Transportation Safety",
      "Motorsports Engineering",
      "Automotive Business"
    ]
  },

  {
    number: "14",
    title: "Agriculture & Environmental Systems",
    description:
      "Agriculture science, sustainability, and environmental leadership.",
    highlights: ["Agriscience", "Forestry", "Environmental Science"],
    courses: "13 Courses Available",
    fullCourses: [
      "Agriscience",
      "Animal Science",
      "Greenhouse Management",
      "Forestry",
      "Environmental Protection",
      "Sustainability",
      "Agricultural Engineering",
      "Soil Science",
      "Hydroponics",
      "Wildlife Biology",
      "Natural Resources",
      "Agricultural Business",
      "Environmental Leadership"
    ]
  },

  {
    number: "15",
    title: "Military Leadership & JROTC",
    description:
      "Discipline, leadership, service, and national readiness training.",
    highlights: ["Leadership", "National Security", "Preparedness"],
    courses: "12 Courses Available",
    fullCourses: [
      "Leadership Training",
      "Military History",
      "Emergency Preparedness",
      "Physical Conditioning",
      "National Security",
      "ROTC Foundations",
      "Survival Skills",
      "Crisis Response",
      "Drill Team",
      "Military Ethics",
      "Public Service Leadership",
      "Strategic Operations"
    ]
  },

  {
    number: "16",
    title: "Education & Teaching",
    description:
      "Future educators and mentors shaping the next generation.",
    highlights: ["Teaching Foundations", "Child Development", "Mentorship"],
    courses: "12 Courses Available",
    fullCourses: [
      "Teaching Foundations",
      "Child Literacy",
      "Educational Psychology",
      "Early Childhood Education",
      "Student Mentorship",
      "Classroom Leadership",
      "Special Education",
      "Curriculum Design",
      "Educational Technology",
      "Youth Development",
      "Public Speaking",
      "Teaching Internship"
    ]
  },

  {
    number: "17",
    title: "Music & Performing Arts",
    description:
      "Performance, production, music, dance, and theater pathways.",
    highlights: ["Choir", "Dance", "Music Production"],
    courses: "15 Courses Available",
    fullCourses: [
      "Choir",
      "Dance",
      "Theater",
      "Music Production",
      "Instrumental Performance",
      "Stage Design",
      "Performance Arts",
      "Acting",
      "Songwriting",
      "Audio Recording",
      "Music Theory",
      "Broadway Performance",
      "Choreography",
      "Creative Performance",
      "Live Production"
    ]
  },

  {
    number: "18",
    title: "Sports Performance & Athletic Science",
    description:
      "Athletic training, kinesiology, and sports leadership programs.",
    highlights: ["Exercise Science", "Coaching", "Sports Medicine"],
    courses: "14 Courses Available",
    fullCourses: [
      "Exercise Science",
      "Athletic Training",
      "Sports Nutrition",
      "Coaching Leadership",
      "Kinesiology",
      "Sports Analytics",
      "Fitness Conditioning",
      "Strength Training",
      "Sports Psychology",
      "Physical Therapy",
      "Athletic Rehabilitation",
      "Sports Medicine",
      "Sports Leadership",
      "Performance Recovery"
    ]
  },

  {
    number: "19",
    title: "International Studies & Global Leadership",
    description:
      "Global diplomacy, languages, and international relations studies.",
    highlights: ["World Politics", "Foreign Languages", "Diplomacy"],
    courses: "13 Courses Available",
    fullCourses: [
      "International Relations",
      "World Politics",
      "Diplomacy",
      "Foreign Languages",
      "Global Economics",
      "Cultural Studies",
      "International Law",
      "Global Leadership",
      "Human Geography",
      "Comparative Governments",
      "International Business",
      "Global Communications",
      "Model United Nations"
    ]
  },

  {
    number: "20",
    title: "Real Estate & Property Development",
    description:
      "Property investment, development, and urban planning pathways.",
    highlights: ["Real Estate", "Urban Planning", "Investments"],
    courses: "11 Courses Available",
    fullCourses: [
      "Property Management",
      "Urban Development",
      "Commercial Real Estate",
      "Investment Strategy",
      "Architecture Planning",
      "Real Estate Law",
      "Luxury Development",
      "Construction Planning",
      "Housing Markets",
      "Real Estate Finance",
      "Property Entrepreneurship"
    ]
  },

  {
    number: "21",
    title: "Beauty, Wellness & Cosmetology",
    description:
      "Beauty industries, wellness sciences, and cosmetology careers.",
    highlights: ["Cosmetology", "Esthetics", "Nail Technology"],
    courses: "10 Courses Available",
    fullCourses: [
      "Cosmetology",
      "Hair Design",
      "Makeup Artistry",
      "Esthetics",
      "Spa Therapy",
      "Nail Technology",
      "Beauty Branding",
      "Wellness Science",
      "Skin Care",
      "Beauty Entrepreneurship"
    ]
  },

  {
    number: "22",
    title: "Innovation, Leadership & Startup",
    description:
      "Startup culture, innovation systems, and executive leadership.",
    highlights: ["Entrepreneurship", "Innovation Design", "Public Speaking"],
    courses: "16 Courses Available",
    fullCourses: [
      "Entrepreneurship",
      "Startup Incubator",
      "Public Speaking",
      "Innovation Design",
      "Leadership Strategy",
      "Business Pitching",
      "Creative Innovation",
      "Executive Presence",
      "Problem Solving",
      "Startup Finance",
      "Technology Innovation",
      "Leadership Psychology",
      "Business Development",
      "Team Management",
      "Innovation Research",
      "Founder Capstone"
    ]
  }
];

export default function AcademiesSection() {
  const [openAcademy, setOpenAcademy] = useState<string | null>(null);

  return (
    <section id="academie" className="academies-section">
      <div className="academies-header">
        <span>CAREER ACADEMIES</span>

        <h2>Twenty-two pathways built for real-world success.</h2>

        <p>
          DPS academies connect advanced academics with internships,
          certifications, mentorships, competitions, dual enrollment,
          and capstone experiences.
        </p>
      </div>

      <div className="academies-grid">
        {academies.map((academy) => (
          <div className="academy-card" key={academy.number}>
            <span className="academy-number">{academy.number}</span>

            <h3>{academy.title}</h3>

            <p className="academy-description">
              {academy.description}
            </p>

            <div className="academy-count">
              {academy.courses}
            </div>

            <button
              className="academy-button"
              onClick={() =>
                setOpenAcademy(
                  openAcademy === academy.number
                    ? null
                    : academy.number
                )
              }
            >
              {openAcademy === academy.number
                ? "Hide Courses ↑"
                : "Explore Academy →"}
            </button>

            {openAcademy === academy.number && (
              <div className="academy-course-panel">
                {academy.fullCourses.map((course) => (
                  <p key={course}>{course}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}