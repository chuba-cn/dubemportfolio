export interface Experience {
    id: number,
    role: string,
    company: string,
    duration: string,
    duties: string[]
}

export interface Certifcation {
    name: string,
    image: string,
    url: string
}

export interface Skill {
    skillGroup: string,
    skillItem: string[]
}

export interface Project{
    title: string,
    description: string,
    url: string
}

export const experiences: Experience[] =[
    {
        id: 0,
        role: 'IT Operations Analyst',
        company: 'Clean Technology Hub',
        duration: 'June 2022 - January 2023',
        duties: [
            'Developed and implemented proactive strategies based on root cause analysis, resulting in a 30% decrease in system-related incidents.',
            'Contributed to the development and enhancement of security policies, procedures, and guidelines, while assisting in conducting security awareness training programs to educate employees and mitigate human-related risks.',
            'Performed proactive system monitoring and analysis to identify and resolve potential issues before they impact operations.',
            'Installed and configured software, systems, and networks to meet customer and organizational requirements, increasing new feature deployment time by 50%.'
        ]

    },
    {
        id: 1,
        role: 'IT Support Intern',
        company: 'Nigerian Communications Commission',
        duration: 'January 2018 - July 2018',
        duties: [
            'Adapted technical support strategies to accommodate a wide range of customer experience levels.',
            'Responded quickly to end-user issues, acknowledging, and resolving user complaints.',
            'Followed pre-determined routines and technical troubleshooting methods to guide users through step by-step fixes.',
            'Provided technical support to over 100+ employees across multiple locations, troubleshooting and resolving issues related to hardware, software, and network connectivity.',
            'Demonstrated strong problem-solving abilities by analyzing customer problems and finding appropriate solutions, resulting in a 20% decrease in escalated complaints.'
        ]

    },
    {
        id: 2,
        role: 'Technical Support Intern',
        company: 'Julius Berger',
        duration: 'June 2015 - August 2015',
        duties: [
            'Provided excellent customer service to clients, resulting in increased customer satisfaction and loyalty.',
            'Developed and delivered training programs to educate employees on IT policies and procedures, reducing the number of support requests and increasing system up-time by 35%.',
            'Performed proactive system monitoring and analysis to identify and resolve potential issues before they impact operations.',
            'Collaborated with cross-functional teams to identify and escalate complex technical issues, ensuring timely resolution and minimal downtime while documenting support requests, troubleshooting steps, and solutions in the ticketing system to maintain accurate and up-to-date records'
        ]

    }
]

export const certifcates: Certifcation[] = [
    {
        name: "ISC2 Certified in Cybersecurity (CC)",
        image:'https://www.cyberquarter.co.uk/wp-content/uploads/2023/12/MicrosoftTeams-image-38-scaled.jpg',
        url: 'https://www.credly.com/badges/f0876474-d6c0-49ec-8e46-4e2d6f0cfe8e/public_url'
    },
    {
        name: "Microsoft Security, Compliance, and Identity Fundamentals",
        image:'https://images.credly.com/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png',
        url: "https://www.credly.com/badges/9a686c3a-32d1-441b-afe6-3aaf5ba3d7af/public_url"
    },
    {
        name: "Microsoft Azure Fundamentals",
        image:'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
        url: "https://www.credly.com/badges/135b3a03-f434-4dd3-b157-14e1481f0382/public_url"
    },
    {
        name: "CompTIA Security+",
        image:'https://images.credly.com/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png',
        url: ""
    },
    {
        name: "Google-Technical Support Fundamentals",
        image:'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BJJ968EMLA7M/CERTIFICATE_LANDING_PAGE~BJJ968EMLA7M.jpeg',
        url: "https://coursera.org/verify/BJJ968EMLA7M"
    },
    {
        name: "Google-The Bits and Bytes of Computer Networking",
        image:'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KYU9YKZRX3YH/CERTIFICATE_LANDING_PAGE~KYU9YKZRX3YH.jpeg',
        url: "https://coursera.org/verify/KYU9YKZRX3YH"
    },
    {
        name: "Pre Security",
        image:'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-UYBNJFQNLD.png',
        url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-UYBNJFQNLD.png"
    },
    {
        name: "Introduction to Cybersecurity",
        image:'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JC4M1XXJVA.png',
        url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JC4M1XXJVA.png"
    },
    {
        name: "Design & Analysis of Secure Networked Systems",
        image:'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8QBE8GLATXHZ/CERTIFICATE_LANDING_PAGE~8QBE8GLATXHZ.jpeg',
        url: "https://coursera.org/share/f5f07f2018aeec0e57f268cf2adb8a5b"
    },
    {
        name: "Embedded Hardware & Operating Systems",
        image:'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LTXRU2DDWDK4/CERTIFICATE_LANDING_PAGE~LTXRU2DDWDK4.jpeg',
        url: "https://coursera.org/share/e0ac3f48377237871139903f9759c427"
    },
    {
        name: "Classical Cryptosystems & Core Concepts",
        image:'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SZWNA4Z5ZP9H/CERTIFICATE_LANDING_PAGE~SZWNA4Z5ZP9H.jpeg',
        url: "https://coursera.org/verify/SZWNA4Z5ZP9H"
    },
];

export const skills: Skill[] = [
    {
        skillGroup: 'Collaboration & Documentation Tools',
        skillItem: ['Confluence', 'SharePoint']
    },
    {
        skillGroup: 'Virtualization Technologies',
        skillItem: ['VMware', 'Hyper-V']
    },
    
    
    {
        skillGroup: 'Network Management Tools',
        skillItem: ['Cisco Prime', 'Wireshark']
    },
    {
        skillGroup: 'Vulnerability Assessment',
        skillItem: ['Nmap', 'Tenable Nesus', 'OpenVAS', 'Burpsuite', 'Wireshark']
    },
    {
        skillGroup: 'SIEM',
        skillItem: ['Microsoft Sentinel', 'Splunk']
    },
    {
        skillGroup: 'Operating Systems',
        skillItem: ['Windows(server)', 'Linux', 'MacOS', 'IOS', 'Android']
    },
    {
        skillGroup: 'SAAS',
        skillItem: ['Visio', 'Office 365', 'Active Directory']
    },
    {
        skillGroup: 'Cloud Computing',
        skillItem: ['Microsoft Azure']
    },
]

export const projects: Project[] = [
    {
        title: "Auditing & Security Review",
        description: "The objective of this project is to create a comprehensive security analysis and improvement plan for a fictional  enterprise-sized company named AldoTech, which employs over 500 people and operates in multiple countries. The project involves detailing the business operations and IT infrastructure of the company, conducting a thorough  risk assessment to identify vulnerabilities and prioritize assets, and evaluating current security measures. Based on this assessment, the project uses COBIT's capability levels to set current and future security goals. It then applies NIST/CIS controls to address identified risks, providing metrics to measure the effectiveness of these controls and ensuring continuous improvement in the company's cybersecurity posture.",
        url: 'https://drive.google.com/drive/folders/1ZguFHPMaKNw9wjr0t6dQkCutjLnLTMIe?usp=drive_link'
    },
    {
        title: "Cloud Implementation Project (Microsoft Azure)",
        description: "The objective of this project is to create a comprehensive presentation that addresses a client's needs and goals for cloud services. The project involves three parts: firstly, identifying and justifying appropriate cloud services based on the client's current situation, needs, and regulatory requirements, including cost estimation and benefits using the Azure Pricing Calculator. Secondly, designing a cloud infrastructure diagram that visualizes the integration and relationships of the selected services. Lastly, discussing the chosen cloud solutions, justifying their selection, highlighting client benefits, and reflecting on project challenges and potential improvements. This project allows new learners to apply their knowledge of Microsoft Azure and cloud services in a practical, client-focused scenario.",
        url: "https://drive.google.com/drive/folders/1wU8kttK_30fGXaB4vLEp1-ToJ5jOO9aa?usp=drive_link"
    },
    {
        title: "Physical Site Assessment",
        description: "The objective of this project is to conduct a comprehensive physical security assessment of a selected site emphasizing the critical role of physical defenses in overall cybersecurity. The project is structured to select and assess a potential site, document existing security controls, and ultimately produce a detailed professional report. The process involves initial site selection and assessment, creating a detailed sketch of the location with noted security features, and compiling a full report that evaluates the site's security strengths and weaknesses, provides risk ratings, offers recommendations for improvements and aims to mirror the standards of a professional security assessment.",
        url: "https://drive.google.com/drive/folders/1_EfwvYYB_Rr1v6fMS8xdAg5U4Bj6DDWQ?usp=drive_link"
    },
    {
        title: "Security Strategy Plan",
        description: "The objective of this project is to develop a comprehensive cyber-security strategic plan for a fictional company over the next three years. This plan outlines the company's current security measures and its desired future state, focusing on efficient use of funding without necessarily requiring the most resources. The strategic plan addresses the unique risks and complexities of the chosen company, incorporating updates to equipment, staff training, and other relevant topics. The project includes creating a company profile, an executive summary, a one-page overview, aligned with a relevant framework and including proposed policies and a timeline. The company's budget will be assigned based on its size and nature.",
        url: "https://drive.google.com/drive/folders/1ewP5PFguhTzGbruT-8yN_eGaTBOiiBbh?usp=drive_link"
    },
    {
        title: "Social Media Policy",
        description: "The objective of this project is to act as a consultant for a fictional company to create and present a comprehensive social media policy. This policy will guide the company's social media use, covering essential aspects such as the policy's purpose, employee guidelines for personal and professional social media engagement, responsibilities for managing the company's social media accounts, crisis response protocols, security measures, and legal compliance.",
        url: "https://drive.google.com/drive/folders/120VgINoamfnmbld84SqMHYXCOtIMgzS8?usp=drive_link"
    }
]