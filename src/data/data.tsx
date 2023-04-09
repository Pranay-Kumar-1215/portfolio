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
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
  achievementItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Site build by Pranay Kumar",
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
      href: '/assets/resume.pdf',
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
  description: `I am currently pursuing a BTech in Computer Science. I have also learneda a lot
  in the area of cloud computing and software development methodologies. In my free time, I have
  working on personal projects help me to further develop my skills and gain hands-on experience 
  in DevOps and software development. I am excited to continue learning and growing`,
  aboutItems: [
    {label: 'Location', text: 'Gurgaon, Haryana', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, PC Games, ', Icon: SparklesIcon},
    {label: 'Study', text: 'Bennett University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student', Icon: OfficeBuildingIcon},
  ],
};


/**
* Resume section -- TODO: Standardize resume contact format or offer MDX
*/
export const education: TimelineItem[] = [
  {
    date: 'June 2020 - Present',
    title: 'Bennett University',
    location: 'Bachelor of Technology in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2018 - 2020',
    title: 'Venkateshwar International School',
    location: 'Senior Secondary School',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'uptil 2018',
    title: 'American Montessori Public School',
    location: 'High School',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];


/**
* Experience section
*/
export const experience: TimelineItem[] = [
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
         • Helped reach out to 10k 15k new people over the tenure.
        </li>
      </ul>
    ),
  },
];

/**
* achievements section
*/
export const achievements: achievementItem[] = [
  {
    content: <p>• Secured 2nd* Position, in BU Smart India Hackathon 2022 among 50+ registered teams at BennettUniversity, where I worked in a team of 6.</p>,
  },
  {
    content: <p>• Secured 3rd* Position, in Compathon 2022 among 100 registered teams at Bennett University, where I worked as team lead in a team of 5.</p>,
  },
  {
    content: <p>• Took part in Techathon 3.0 organised by iNeuron.ai where there was 500+ teams.</p>,
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
    name: 'Cloud Platforms',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Azure',
        level: 5,
      },
      {
        name: 'GCP',
        level: 7,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Cpp',
        level: 8,
      },
      {
        name: 'HTML, CSS, JS',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
];

/**
* Portfolio section
*/
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
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
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Google Cloud',
      text: 'Preparing for Google Cloud Certification: Cloud DevOps Engineer',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'want to get in touch? fill out the form or send me an email',
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
