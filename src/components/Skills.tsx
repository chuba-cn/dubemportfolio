const Skills = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                My technical expertise and capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">Security Tools</h3>
                <p className="text-gray-500 ">
                  Nmap, Wireshark, Metasploit, Burp Suite
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">Programming Languages</h3>
                <p className="text-gray-500 ">
                  Python, Bash, PowerShell, JavaScript
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">Security Frameworks</h3>
                <p className="text-gray-500 ">
                  OWASP, NIST, ISO 27001, HIPAA
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">Cloud Security</h3>
                <p className="text-gray-500 ">
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
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                My professional certifications.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">
                  Certified Information Systems Security Professional (CISSP)
                </h3>
                <p className="text-gray-500 ">
                  (ISC)², 2020 - Present
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">
                  Certified Ethical Hacker (CEH)
                </h3>
                <p className="text-gray-500 ">
                  EC-Council, 2018 - Present
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">CompTIA Security+</h3>
                <p className="text-gray-500 ">
                  CompTIA, 2016 - Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;