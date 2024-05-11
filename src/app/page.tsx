import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <Wrapper>
      <Hero/>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Work Experience
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A summary of my professional experience.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Cyber Security Analyst</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Acme Cybersecurity, 2018 - Present
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Responsible for conducting vulnerability assessments,
                    implementing security controls, and responding to security
                    incidents.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Security Intern</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Cybersec Solutions, 2016 - 2018
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Assisted in the development and implementation of security
                    policies and procedures.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Education
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My academic background.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">
                    Master of Science in Cybersecurity
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    University of Cyberton, 2016 - 2018
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Specialized in network security, incident response, and
                    security automation.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Cybersec University, 2012 - 2016
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Focused on software development, data structures, and
                    algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Skills
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My technical expertise and capabilities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Security Tools</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nmap, Wireshark, Metasploit, Burp Suite
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Programming Languages</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Python, Bash, PowerShell, JavaScript
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Security Frameworks</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    OWASP, NIST, ISO 27001, HIPAA
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Cloud Security</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    AWS, Azure, GCP, Kubernetes
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Certifications
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My professional certifications.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">
                    Certified Information Systems Security Professional (CISSP)
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    (ISC)², 2020 - Present
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">
                    Certified Ethical Hacker (CEH)
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    EC-Council, 2018 - Present
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">CompTIA Security+</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    CompTIA, 2016 - Present
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Projects
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Some of my personal and professional projects.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">Vulnerability Scanner</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Developed a custom vulnerability scanning tool using Python
                    and Nmap.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">
                    Incident Response Playbook
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Designed and implemented an incident response playbook for a
                    large enterprise.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold">
                    Security Automation Scripts
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Developed a suite of security automation scripts using
                    PowerShell and Bash.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Me
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connect with me on social media or send me an email.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="#" target="_blank">
                  <Image
                    alt="Twitter"
                    className="h-8 w-8 hover:opacity-80"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                </Link>
                <Link href="#" target="_blank">
                  <Image
                    alt="Email"
                    className="h-8 w-8 hover:opacity-80"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                </Link>
                <Link href="#" target="_blank">
                  <Image
                    alt="LinkedIn"
                    className="h-8 w-8 hover:opacity-80"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                </Link>
                <Link href="#" target="_blank">
                  <Image
                    alt="GitHub"
                    className="h-8 w-8 hover:opacity-80"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 John Doe. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            LinkedIn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Email
          </Link>
        </nav>
      </footer>
    </Wrapper>
  );
};

export default Home;