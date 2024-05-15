export interface Experience {
    id: number,
    role: string,
    company: string,
    duration: string,
    duties: string[]
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