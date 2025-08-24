import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/2ndbg.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  TimelineItemEduction,
  achievementItem,
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Site built by Pranay Kumar",
};


/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Certifications',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];


/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Pranay Kumar`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a budding <strong className="text-slate-100">Software Engineer</strong>, currently in my semifinal year at  
         <strong className="text-stone-100"> Bennett University</strong>. I'm passionate about <br></br>
         <strong className="text-stone-100"> DEVOPS, Data Science</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning <strong className="text-stone-200">Data Science</strong>,
        broadening my learnings <br></br><strong className="text-stone-100">MLOPS</strong>, or Playing video games 
        like <strong className="text-stone-100">Valorant, CS:GO</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1c_57pApWapmV9FBrFRcEg98dceR7Wchb/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};


/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Being computer science student I have a passion for technology and innovation,
  I am eager to build a career in DevOps and software development. I am currently pursuing a 
  BTech in Computer Science. I have also completed coursework in cloud computing and software 
  development methodologies. In my free time, I have been working on personal projects that 
  have allowed me to further develop my skills and gain hands-on experience in DevOps and 
  software development. I am excited to continue learning and growing as a professional in 
  this dynamic field`,
  aboutItems: [
    {label: 'Location', text: 'Gurgaon, Haryana', Icon: MapIcon},
  {label: 'Age', text: `${new Date().getFullYear() - 2002 - (new Date().getMonth() < 3 ? 1 : 0)}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, PC Games, ', Icon: SparklesIcon},
    {label: 'Study', text: 'Bennett University', Icon: AcademicCapIcon},
  {label: 'Employment', text: (<a href="https://www.moengage.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline hover:text-orange-400">MoEngage</a>), Icon: OfficeBuildingIcon},
  ],
};


/**
 * Resume section
 */
export const education: TimelineItemEduction[] = [
  {
    date: 'June 2020 - July 2024',
    title: 'Bennett University',
    location: 'Bachelor of Technology in Computer Science',
  },
  {
    date: '2018 - 2020',
    title: 'Venkateshwar International School',
    location: 'Senior Secondary School',
  },
  {
    date: 'uptil 2018',
    title: 'American Montessori Public School',
    location: 'High School',
  },
];


/**
 * Experience section
 */
export const experience: TimelineItem[] = [
  {
    date: 'June 2023 – Present',
    location: 'DevSecOps Engineer, Bangalore, India',
    title: 'MoEngage',
    content: (
      <ul>
        <li>
          • Spearheaded the development and implementation of Kavach, a unified CSPM, SOAR, and SIEM platform, significantly enhancing cloud security and compliance across AWS environments.
        </li>
        <li>
          • Developed 50+ Python-based policies for real-time AWS infrastructure monitoring, ensuring adherence to CIS and ISO compliance standards, improving compliance visibility.
        </li>
        <li>
          • Engineered and deployed automated remediation pipelines utilizing AWS Lambda and Harness to proactively address identified vulnerabilities, reducing mean time to remediation (MTTR) by 50%.
        </li>
        <li>
          • Streamlined alerting and progress tracking by integrating with Slack and Jira, enhancing communication and automating security event documentation.
        </li>
        <li>
          • Implemented robust Python scripts leveraging Boto3 for automating security audits, key rotations, and incident response workflows, boosting operational efficiency and security posture.
        </li>
        <li>
          • Architected and delivered SSP, an internal Application Access Management tool, to centralize and control access to critical platforms for 750+ users/applications.
        </li>
        <li>
          • Built with Django (backend), Next.js (frontend), MongoDB, Nginx, and deployed on AWS EC2 with Route53 and Load Balancers. Established CI/CD pipelines and integrated with enterprise systems (AWS, GitHub, Jira, etc.).
        </li>
        <li>
          • Tech Stack: Python, AWS Lambda, Harness, Boto3, Django, Next.js, MongoDB, Nginx, AWS EC2, Route53, Load Balancers.
        </li>
      </ul>
    ),
  },
  {
    date: 'mid-June 2022 – mid July 2022',
    location: 'Data Analytics Intern, Data Analytics',
    title: 'Hewlett Packard Enterprise in collaboration with National University of Singapore',
    content: (
      <ul>
        <li>
         • Worked under the guidance of Professor Dr Amirhassan Monajemi and Dr Tan Wee Kek for developing
          Gradient descent algorithms, training ANN, CNN, RNN, GANs, SVMs, text mining algo and learning how they
          work in developing facial recognition and deep learning models.
        </li>
        <li>
         • Learned about concepts of Cross-industry standard process for data mining (CRISP-DM), Business Analytic,
          statistical analysis for summarizing data Dr Lek Hsiang Hui.
        </li>
      </ul>
    ),
  },
  {
    date: 'Sept 2021 – Sept 2022',
    location: 'Social Media Head',
    title: 'Indian Blockchain Fraternity',
    content: (
      <ul>
        <li>
         • Have been working in a team of 10 member to spread awareness about blockchain fundamentals in colleges
          and universities.
        </li>
        <li>
         • Helped reach out to 10k - 15k new people over the tenure.
        </li>
      </ul>
    ),
  },
];


/**
 * Achievement section
 */
export const achievements: achievementItem[] = [
  {
    content: <p>• Research Paper: <a href="https://link.springer.com/chapter/10.1007/978-3-031-53082-1_9" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline hover:text-orange-400">Deep Learning Based Bug Detection in Solidity Smart Contracts</a> — Published in Springer (RTIP2R 2023). Authored research on a novel methodology using Convolutional Neural Networks (CNNs) to detect critical security vulnerabilities in Solidity smart contracts, significantly enhancing blockchain security.</p>,
  },
  {
    content: <p>• Rockstar Award from MoEngage for exceptional performance. This was for the development of the SSP (internal Application Access Management tool).</p>,
  },
  {
    content: <p>• AWS Cloud Practitioner Essentials Certificate — Coursera. Demonstrated foundational knowledge of AWS services and concepts, cloud architecture and security.</p>,
  },
  {
    content: <p>• Secured 2nd* Position, in BU Smart India Hackathon 2022 among 50+ registered teams at Bennett University, where I worked in a team of 6.</p>,
  },
  {
    content: <p>• Secured 3rd* Position, in Compathon 2022 among 100 registered teams at Bennett University, where I worked as team lead in a team of 5.</p>,
  },
  {
    content: <p>• Geek For Geeks - 100+ questions, Code Chef - 2-star, Hacker rank - 5-star python.</p>,
  },
];


/**
     * Skills section
     */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', level: 9 },
      { name: 'Shell Scripting', level: 7 },
      { name: 'JavaScript', level: 7 },
      { name: 'HTML/CSS', level: 7 },
      { name: 'Cpp', level: 8 },
    ],
  },
  {
    name: 'DevOps / Cloud',
    skills: [
      { name: 'Git', level: 9 },
      { name: 'Docker', level: 9 },
      { name: 'Kubernetes', level: 7 },
      { name: 'Harness', level: 8 },
      { name: 'AWS', level: 9 },
      { name: 'Terraform', level: 7 },
      { name: 'Ansible', level: 6 },
      { name: 'Jenkins', level: 7 },
      { name: 'Azure', level: 5 },
      { name: 'GCP', level: 7 },
    ],
  },
  {
    name: 'Security',
    skills: [
      { name: 'Hashicorp Vault', level: 7 },
      { name: 'SIEM', level: 7 },
      { name: 'SOAR', level: 7 },
      { name: 'CSPM', level: 7 },
      { name: 'Firewall', level: 6 },
    ],
  },
  {
    name: 'Frameworks / Libraries',
    skills: [
      { name: 'Django', level: 9 },
      { name: 'Next.js', level: 8 },
      { name: 'Boto3', level: 8 },
      { name: 'Librosa', level: 6 },
      { name: 'pyAudioAnalysis', level: 6 },
      { name: 'React Native', level: 3 },
      { name: 'Flutter', level: 4 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', level: 8 },
      { name: 'MySQL', level: 7 },
      { name: 'Redis', level: 7 },
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      { name: 'Linux', level: 9 },
      { name: 'Windows', level: 8 },
    ],
  },
  {
    name: 'Collaboration',
    skills: [
      { name: 'Slack', level: 8 },
      { name: 'Jira', level: 8 },
      { name: 'Trello', level: 7 },
      { name: 'Lucidchart', level: 7 },
      { name: 'Confluence', level: 7 },
    ],
  },
];


// Resume section ends


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Timetable | Web-based Timetable Generation for Teachers',
    description:
      'Developed a web application to automate the creation of timetables for teachers, optimizing scheduling efficiency. Implemented robust RESTful APIs using Django, incorporated Celery and Redis for async tasks, and containerized the app with Docker for portability. Tech Stack: React, Docker, Celery, MongoDB, MySQL, Django, Redis.',
    url: 'https://github.com/Pranay-Kumar-1215/timetable-app',
    image: porfolioImage1,
  },
  {
    title: 'Kavach | Unified Cloud Security Platform (MoEngage)',
    description:
      'Spearheaded the development of Kavach, a unified CSPM, SOAR, and SIEM platform for AWS environments. Developed 50+ Python-based policies for real-time AWS monitoring, automated remediation pipelines with Lambda and Harness, and integrated with Slack/Jira for alerting. Reduced MTTR by 50%. Tech Stack: Python, AWS Lambda, Harness, Boto3.',
    url: 'https://moengage.com',
    image: porfolioImage2,
  },
  {
    title: 'SSP | Internal Application Access Management Tool',
    description:
      'Architected and delivered SSP, an internal tool to centralize and control access to critical platforms for 750+ users. Built with Django (backend), Next.js (frontend), MongoDB, Nginx, and deployed on AWS EC2. Established CI/CD pipelines and integrated with enterprise systems (AWS, GitHub, Jira, etc.). Tech Stack: Django, Next.js, MongoDB, Nginx, AWS EC2, Route53, Load Balancers.',
    url: 'https://moengage.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nvidia',
      text: 'Fundamentals of Accelerated Computing with CUDA Python',
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',
    },
    {
      name: 'Google Cloud',
      text: 'Preparing for Google Cloud Certification: Cloud DevOps Engineer',
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',
    },
  ],
};


/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Reach out to me for collaborations or opportunities !!',
  description: 'Fill out the form or send me an email',
  items: [
    {
      type: ContactType.Email,
      text: 'kumarpranay1215@gmail.com',
      href: 'mailto:kumarpranay1215gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Gurgaon, Haryana, India',
      href: 'https://goo.gl/maps/2ejDRsU2tr6HBPqZ8',
    },
    {
      type: ContactType.Instagram,
      text: '@pip_install_pk',
      href: 'https://www.instagram.com/pip_install_pk/',
    },
    {
      type: ContactType.Github,
      text: 'Pranay-Kumar-1215',
      href: 'https://github.com/Pranay-Kumar-1215',
    },
  ],
};


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Pranay-Kumar-1215'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/19623759/pranay-kumar'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pranay-kumar-87807920a/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/pip_install_pk/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Pranaykumar1215'},
];
