import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="w-full mt-20 md:mt-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Projects
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Some of my personal and professional projects.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">Vulnerability Scanner</h3>
                <p className="text-gray-500 ">
                  Developed a custom vulnerability scanning tool using Python
                  and Nmap.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">
                  Incident Response Playbook
                </h3>
                <p className="text-gray-500 ">
                  Designed and implemented an incident response playbook for a
                  large enterprise.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-bold">
                  Security Automation Scripts
                </h3>
                <p className="text-gray-500 ">
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
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
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
  );
};

export default Projects;