/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "ELKAOURI Portfolio",
  description:
    "Hello! I'm ELKAOURI Aissame, a passionate Web Developer in creating dynamic and responsive websites. My expertise lies in crafting user-friendly, visually appealing web applications that meet the unique needs of each client. I am proficient in various web technologies and frameworks, which enables me to deliver robust and scalable solutions.",
  og: {
    title: "ELKAOURI Aissame Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "ELKAOURI Aissame",
  logo_name: "Elkaouriaissame",
  nickname: "mrelkaouri",
  subTitle:
    "Hello! I'm ELKAOURI Aissame, a versatile Full Stack Developer in building and maintaining web applications from front-end to back-end. My passion lies in creating seamless, user-friendly web solutions that meet the specific needs of my clients. With a strong foundation in various programming languages and frameworks, I am equipped to handle all aspects of the development process.",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  

  {
    name: "Github",
    link: "https://github.com/Elkaouri41",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aissame-elkaouri-462851249",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:mrelkaouri41@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
 
  {
    name: "Facebook",
    link: "https://www.facebook.com/aissam.elkaouri.7",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aissame_elkaouri",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "✨ Expertise in statistics, machine learning, and programming to extract meaningful insights from complex datasets",
        "✨ Develop and implement advanced algorithms to solve business problems",
        "✨ Adept at cleaning and preparing data, identifying patterns and trends, and creating predictive models that drive strategic decision-making",
      ],
      softwareSkills: [
        
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scipy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            
            color: "#D00000",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Machine learning",
          fontAwesomeClassname: "carbon:machine-learning-model",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "✨ Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and Laravel, I excel in building dynamic, scalable web applications.",
        "✨ Specializing in using Laravel's MVC architecture to develop clean, maintainable, and efficient back-end systems",
        "✨ Usings React and Vue to develop interactive and responsive user interfaces, ensuring seamless user experiences across devices. Additionally, Nuxt.js enhances to create server-rendered Vue applications for improved performance and SEO.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon-alt",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Nuxt",
          fontAwesomeClassname: "logos:nuxt-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Livewire",
          fontAwesomeClassname: "devicon:livewire",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Bulma",
          fontAwesomeClassname: "logos:bulma",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "devicon:mysql",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "✨ Expertise with Azure to deploy, manage, and scale web applications effectively",
        "✨ DevOps practices, including continuous integration and continuous deployment (CI/CD) pipelines",
        "✨ utilizing tools like Docker for containerization to ensure seamless application deployment and scalability",
       
      ],
      softwareSkills: [
        
  
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
       
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "✨ Using Figma to create user-centric and aesthetically pleasing interfaces",
        "✨ My familiarity with design principles and user experience best practices ensures that the applications I build are not only functional but also intuitive and engaging",
        
      ],
      softwareSkills: [
        
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      
      
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SPECIALIZED INSTITUTE OF APPLIED TECHNOLOGY MIRLEFT",
      subtitle: "Digital development full stack web option",
      logo_path: "ofppt 2.png",
      alt_name: "OFPPT",
      duration: "2021 - 2023",
      descriptions: [
        "✨ Data Base > SQL Server, My SQL, Firebase, MongoDB",
        "✨ Programmation > Python, Html, Css, Javascript, JQuery, PHP, Laravel, Node JS, React JS, Express JS, Tailwind, Bulma, Bootstrap",
        "✨ Conception > UML, Merise ",
        "✨ Web Designe > Figma",
        "✨ project management > Agile (Scrum, Jira, Git, GitLab, Pipeline CI / CD, SonarQube, DevOps)",

      ],
      website_link: "https://www.linkedin.com/school/istam/",
    },
    {
      title: "Sultan Moulay Slimane University",
      subtitle: "License in Data science and information systems security",
      logo_path: "fpbm.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "✨ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable Python for data science, Machine Learning, Feature engineering etc",
        "✨ Creating algorithms in ML, Network Science, Cryptography, Operational research",
        "✨ IOT > Arduino, Raspberry pi, Mosquito, RabbitMQ, Node red",
        "✨ Commitment to cybersecurity is evident in my implementation of robust security measures to protect applications from vulnerabilities and attacks"
             

      ],
      website_link: "https://www.fpbm.ma/new/",
    },
  ],
};

const certifications = {
  certifications: [
  //   {
  //     title: "Machine Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "stanford_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
  //     alt_name: "Stanford University",
  //     color_code: "#8C151599",
  //   },
  //   {
  //     title: "Deep Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "Data Science",
  //     subtitle: "- Alex Aklson",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Big Data",
  //     subtitle: "- Kim Akers",
  //     logo_path: "microsoft_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
  //     alt_name: "Microsoft",
  //     color_code: "#D83B0199",
  //   },
  //   {
  //     title: "Advanced Data Science",
  //     subtitle: "- Romeo Kienzler",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Advanced ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "DL on Tensorflow",
  //     subtitle: "- Laurence Moroney",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "Fullstack Development",
  //     subtitle: "- Jogesh Muppala",
  //     logo_path: "coursera_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
  //     alt_name: "Coursera",
  //     color_code: "#2A73CC",
  //   },
  //   {
  //     title: "Kuberenetes on GCP",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  //   {
  //     title: "Cryptography",
  //     subtitle: "- Saurabh Mukhopadhyay",
  //     logo_path: "nptel_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
  //     alt_name: "NPTEL",
  //     color_code: "#FFBB0099",
  //   },
  //   {
  //     title: "Cloud Architecture",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups as full stack web developer and Designer. passionate about web development and eager to make an impact in a company setting.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Web Developer Intern",
          company: "Storeino Inc.",
          company_url: "https://storeino.com/",
          logo_path: "storeino.png",
          duration: "oct 2023 - nov 2023",
          location: "Technopole 2, Agadir bay, Morocco",
          description:
            "Creating and customizing themes for proprietary CMS - SaaS (Software as a Service) platforms. My internship experience has equipped me with a comprehensive understanding of both front-end and back-end development, enabling me to deliver visually appealing and highly functional web solutions.",
          color: "#000000",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Web Developer Intern",
          company: "Storeino Inc.",
          company_url: "https://storeino.com/",
          logo_path: "storeino.png",
          duration: "May 2022 - Jun 2022",
          location: "Technopole 2, Agadir bay, Morocco",
          description:
            "Creating and customizing themes for proprietary CMS - SaaS (Software as a Service) platforms. My internship experience has equipped me with a comprehensive understanding of both front-end and back-end development, enabling me to deliver visually appealing and highly functional web solutions.",
          color: "#000000",
        },
 
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build dynamic and scalable web applications using the MERN Stack (MongoDB, Express.js, React, and Node.js) and Laravel. My projects leverage the MERN Stack for its robust front-end and back-end capabilities, ensuring smooth user experiences and efficient server-side operations. With Laravel, I focus on creating elegant and maintainable code, enhancing application performance and security. Together, these technologies allow me to deliver full-stack solutions that are both powerful and adaptable to various needs.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Me.png",
    description:
      "I’d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out. You can contact me through the following methods",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hay Aftass, Mirleft, Sidi Ifni, Morocco",
    locality: "Mirleft",
    country: "MAR",
    region: "Guelmim",
    postalCode: "85352",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
