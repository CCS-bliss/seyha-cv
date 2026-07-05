export interface Language {
  name: string;
  proficiency: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface ContactMessage {
  id: string;
  sender: string;
  company: string;
  email: string;
  message: string;
  timestamp: string;
}

export const cvData = {
  name: "CHIV CHANSEYHA",
  title: "Digital Economy Student & Barista",
  location: "Phnom Penh, Cambodia",
  address: "Phnom Penh, Cambodia, B87-B89-B91 199 Khan Chamkarmorn",
  phone: "(+855) 099 675 789",
  email: "chiv.chanseyha@gmail.com",
  profileSummary: "Dedicated and passionate barista with over 1 month of experience in crafting high-quality beverages and providing exceptional customer service. Skilled in maintaining a clean and inviting environment while efficiently managing multiple tasks in a fast-paced setting. Eager to join a dynamic team where I can contribute my expertise in coffee preparation and customer engagement, ensuring every guest leaves with a memorable experience.",
  skills: [
    "Making Drinks",
    "Clean and Tidy",
    "Efficient"
  ],
  languages: [
    { name: "English", proficiency: "Proficient" },
    { name: "Khmer", proficiency: "Native" },
    { name: "Chinese (Mandarin)", proficiency: "Elementary" },
    { name: "French", proficiency: "Elementary" }
  ] as Language[],
  education: [
    {
      degree: "Digital Economy",
      institution: "NUMIC, Veal Sbov",
      period: "Nov 2025 - Current",
      details: [
        "Studying the intersection of technology, commerce, and digital structures.",
        "Developing analytical skills for digital business models and technologies."
      ]
    },
    {
      degree: "BACII State Examination",
      institution: "WIS (Westline International School)",
      period: "2023 - 2025",
      details: [
        "Graduated High School at WIS (2023-2025)",
        "Successfully passed the national BACII examination."
      ]
    },
    {
      degree: "English Language Proficiency",
      institution: "International English Language Testing System (IELTS)",
      period: "Average Score: 6.5",
      details: [
        "Demonstrated proficient professional English communication skills."
      ]
    },
    {
      degree: "Multilingual Language Studies",
      institution: "WIS Language Center",
      period: "2023 - Current",
      details: [
        "Learn Chinese LEVEL 1-3",
        "Learn French LEVEL 1"
      ]
    }
  ] as EducationItem[],
  experience: [
    {
      role: "baristas (Intern)",
      company: "TAZANA Tea & Coffee",
      location: "Phnom Penh, The Olympia Mall Branch, Cambodia",
      period: "Jul 2024 - Aug 2024",
      responsibilities: [
        "Worked for a month as an Intern",
        "Knowledgeable at making lots of different types of drinks/beverages",
        "Likes to clean/tidy up after work hours to maintain a pristine, inviting workspace"
      ]
    }
  ] as ExperienceItem[],
  websites: [
    {
      name: "Green Sip",
      url: "https://green-sip-336732128574.asia-southeast1.run.app",
      description: "An elegant, interactive cafe management & drink visualization website designed for modern tea & coffee shops."
    }
  ],
  hobbies: [
    "Jogging",
    "Exercising",
    "Making Drinks",
    "Coding",
    "Reading"
  ]
};
