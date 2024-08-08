/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Samvardhan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Samvardhan Singh Portfolio",
    type: "website",
   url:"https://samvardhan.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Samvardhan Singh",
  logo_name: "Samvardhan Singh",
  nickname: "",
  subTitle:
    "I am an engineering student due to graduate in 2025,proficient in web development, neural networks and Python,I am Eager to continue pushing boundaries and making meaningful contributions in the tech industry.",
  resumeLink: 
    "https://drive.google.com/file/d/1vJsgMYsQaQEpLBK4Q3cKFRrtDzsfZonj/view",
  portfolio_repository: "https://github.com/samvardhan03",
  githubProfile: "https://github.com/samvardhan03",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/samvardhan03",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samvardhan-singh-731183228/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shekhawatsamvardhan@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/shekhawat_003",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Medium",
    link: "https://medium.com/@shekhawatsamvardhan",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/medium?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡Extensive GitHub portfolio with more than 25 AI/ML projects demonstrating practical skills in implementing algorithms and techniques.",
        "⚡Strong Python skills combined with web development experience providing a solid foundation for data science and AI work",
        "⚡Regular blog writing on Medium simplifying neural network mathematics showcasing effective communication skills and a commitment to knowledge sharing in AI",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
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
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Skilled in HTML, CSS, JavaScript, and React, proficient in developing interactive and responsive web applications.",
        "⚡ Experienced in deploying machine learning models using Flask and Streamlit, ensuring seamless integration into user-friendly web applications for practical use.",
        "⚡ AI/ML proficiency with full-stack development and model deployment, enabling end-to-end solution development from model creation to deployment in user-friendly interfaces.",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      subtitle: "B.Tech. in Computer and Electronics Engineering",
      logo_path: "mozilla_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied Machine Learning, Deep learning,DBMS,Applied programming, General Aptitude, DSA,OOPS in my college curriculum.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science,AI, Data analytics and Web Development.",
      
      ],
      website_link: "https://srmrmp.edu.in/",
    },
    {
      title: "Jayshree Periwal High School",
      subtitle: "Central Board of Secondary Education",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2006 - 2021",
      descriptions: [
        "Class XII: 87% with Physics, Chemistry and Mathematics.",
        "Class X: 91.8%"
      ],
      website_link: "https://jphschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OCI Generative AI Professional",
      subtitle: "- Oracle",
      logo_path: "TVS.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3D8617AEE43AD2BF3DE7EA6328400967B7834753ACEEE98D611B5BA4B8AEC6E5",
      alt_name: "NPTEL",
      color_code: "#FFFFFF",
    },
    {
      title: "IBM DATA SCIENCE ",
      subtitle: "- Rav Ahuja ",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/e8d525a4c1ede5b81dc6a574975a8504",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
     {
      title: "Coders Cave internship program",
      subtitle: "- Coders Cave",
      logo_path: "coderscave.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/afed6472-b825-4673-900f-191c9b69f5cd",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
    {
      title: "Introduction to Data Analytics",
      subtitle: "- Yan Lao",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9X2TT27B8B7Z",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Applied Data Science capstone",
      subtitle: "- Yan Lao",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/TVV3S3PYQ29E",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine learning with python",
      subtitle: "- Saeed Aghabozorgi",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/63a7daa91ab833430fe9e18d0fa7250e",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "ICONSCEPT 2024",
      subtitle: "- NIT Puducherry",
      logo_path: "NIT.png",
      certificate_link:
        "https://www.linkedin.com/posts/samvardhan-singh_authored-and-presented-my-research-paper-activity-7225408441253605376-422K?utm_source=share&utm_medium=member_desktop",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "- Jospeh santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/12b7e5a79479e9d3a681130047c132ad",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Data visualization with python",
      subtitle: "- Saishruti Swaminathan",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/837b06919d7efaf3cbc7554743fdb3e4",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: " Python for AI, Data Science and Development",
      subtitle: "- Jospeh santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/3173e6ff7ce15a461f1b80b5f49e0335",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "ITDECC 2023",
      subtitle: "- SRM",
      logo_path: "mozilla_logo.png",
      certificate_link:
        "https://www.linkedin.com/posts/samvardhan-singh_presented-a-paper-in-the-itdecc-conference-activity-7060262655663435776-mU-q?utm_source=share&utm_medium=member_desktop",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Science methodology",
      subtitle: "- Jogesh Muppala",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/UKY4R2SD67NB",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "What is Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FKULLYNNLLPL",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Acmegrade IOT Internship",
      subtitle: "-Challa Rohit ",
      logo_path: "amg.png",
      certificate_link:
        "https://www.linkedin.com/posts/samvardhan-singh_activity-6956856222310440960-Oljv?utm_source=share&utm_medium=member_desktop",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Tools for Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FQ2Z3DDWAQZK",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
      
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Projects and position of responsibility",
  description:
    "I have made more than 25 projects on machine learning, AI and web development which can be found on my github account.I have also completed a data science internship program where I was asked to make 4 projects using data science and AI, apart from this I was also appointed as the lead of tech and webdev team of SlugNPlug, which is a technical student community of my college .",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        
        {
          title: "Data Science Intern",
          company: "Coder's Cave",
          company_url: "https://certificate.givemycertificate.com/c/afed6472-b825-4673-900f-191c9b69f5cd",
          logo_path: "coderscave.png",
          duration: "July 2023 - Aug 2023",
          location: "Chennai, India",
          description:
            "Phase01: performed exploratory data analysis on of global terrorism dataset and breast cancer classification using regression techniques.Phase02: Used random forest classification for email spam classification model and neural networks for speech emotion recognition model.",
          color: "#ee3c26",
        },
      
      ],
    },
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "Technical Team Lead",
          company: "SlugNPlug",
          company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
          logo_path: "SNP.jpg",
          duration: "April 2023 - April 2024",
          location: "Chennai,India",
          description:
            "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I was responsible for leading it's technical team",
          color: "#4285F4",
        },
        {
          title: "Web development team lead",
          company: "SlugNPlug",
          company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
          logo_path: "SNP.jpg",
          duration: "April 2023 - April 2024",
          location: "Chennai,India",
          description:
            "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I was responsible for leading it's web development team responsible for creating it's website.",
          color: "#D83B01",
        },
        {
          title: "Event Coordinator",
          company: "Elecxa By SRM",
          company_url: "https://srmrmp.edu.in/national-level-symposium-elecxa24/",
          logo_path: "mozilla_logo.png",
          duration: "march 2024",
          location: "Chennai,India",
          description:
            "My responsibility for this program was to organise an event in which participants were asked to present their research and tech projects and the most innovative and practical projects were awarded, more than 100 people participated."
        },
        {
          title: "Member",
          company: "Campus Life",
          company_url:
            "https://www.instagram.com/srmrcampuslife.fet/",
          logo_path: "dsc_logo.png",
          duration: "June 2022 - April 2024",
          location: "Chennai,India",
          description:
            "Campus life is the one of the biggest clubs on SRMIST responsible for conducting cultural events in the college.I have been a part of this community since i was in my 3rd semester",
          color: "#0C9D58",
        },
      ],
    },
    {
      title: "Best Projects",
      work: true,
      experiences: [
        {
          title: "SALES PREDICTION MODEL",
          company: "project link",
          description: "Made a Data science project using Walmart's sales dataset using random forest classifier, ridge regression and RNN with highest accuracy of97.6%. Visualized results through diverse graphs using various different frameworks and libraries and deployed it using streamlit.",
          company_url: "https://github.com/samvardhan03/Sales_prediction.bigmart",
          logo_path: "sales.jpeg",
        
        },
        {
          title: "STOCK PREDICTION NEURAL NETWORK MODEL",
          company: "project link",
          description: "Created a model utilizing a basic neural network to analyze stock data from ten companies, predicting future values through web scraping with the yfinance library. Later created an LSTM network with an accuracy of 98.76% and deployed it on streamlit.",
          company_url: "https://github.com/samvardhan03/Stock_Prediction.Neural_Network/",
          logo_path: "stock.jpeg",
        
        },
        {
          title: "Email classification using RNN",
          company: "project link",
          description: "Made an email classification model using recurrent neural network for classifying emails into 17 different categories.",
          company_url: "https://github.com/samvardhan03/Email.RNN",
          logo_path: "rnn.jpg",
        
        },
        {
          title: "S.A.I.L (Student Assistance and Information Liaison)",
          company: "project link",
          description: " Made a AI powered chatbot for college‘s student portal using NLP and neural networks, deployed the app using streamlit. • Currently working on improving the app by using huggingface api‘s BERT model and deployment using django or flask.",
          company_url: "https://github.com/samvardhan03/sail/",
          logo_path: "chatbot.jpg",
        
        },
        {
          title: "EMOTION PREDICTION USING EEG ANALYSIS",
          company: "project link",
          description: " Researched AI applications for emotional forecasting from EEG scans using fourier transforms, developed an prototype ML model with neural networks with 93.7% accuracy; submitted research paper for publication in a renowned scientific journal",
          company_url: "https://github.com/samvardhan03/EEG_Emotion_prediction",
          logo_path: "eeg.jpg",
        
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research Work",
  description: "Some of my research work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mdp-diffusion",
      name: "Neurobehavioral Analysis Using EEG Readings and Graph Neural Networks",
      createdAt: "",
      description: "Explored AI for predicting emotional fluctuations from EEG scans, built a prototype ML model using neural networks, and submitted the paper for publication. Currently researching about how to use graph neural networks for efficient EEG analysis.",
      
    },
    {
      id: "consistency-models",
      name: "ITDECC-2023",
      createdAt: "",
      description: "Wrote and Presented paper on machine learning and data science in an international conference on Innovations and Technological development in electronics, computers and communication.",
    
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am actively looking for an opportunity to work in the field of engineering and technology, if you wish to work together on a project, please feel free to reach out!",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "I like to talk about the AI, machine learning, mathematical aspects of neural networks and other deep learning models.",
    link: "https://medium.com/@shekhawatsamvardhan",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    
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
