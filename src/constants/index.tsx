
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
        url: 'https://www.linkedin.com/in/chidubem-chuba-nwene-2b6b2a1bb/details/certifications/1705297769536/single-media-viewer?type=DOCUMENT&profileId=ACoAADM_GyoBTTVFFlqT1-hGmUbZisZV9yNSH2U&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B95xz0SrKQnuFvbqilUQ7Pg%3D%3D'
    },
    {
        name: "Microsoft Security, Compliance, and Identity Fundamentals",
        image:'https://images.credly.com/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png',
        url: "https://www.linkedin.com/in/chidubem-chuba-nwene-2b6b2a1bb/details/certifications/1712109096949/single-media-viewer?type=DOCUMENT&profileId=ACoAADM_GyoBTTVFFlqT1-hGmUbZisZV9yNSH2U&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B95xz0SrKQnuFvbqilUQ7Pg%3D%3D"
    },
    {
        name: "Microsoft Azure Fundamentals",
        image:'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
        url: "https://www.linkedin.com/in/chidubem-chuba-nwene-2b6b2a1bb/details/certifications/1635554588223/single-media-viewer?type=DOCUMENT&profileId=ACoAADM_GyoBTTVFFlqT1-hGmUbZisZV9yNSH2U&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B95xz0SrKQnuFvbqilUQ7Pg%3D%3D"
    },
    {
        name: "CompTIA Security +",
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