import { BookOpenCheck } from "lucide-react";
import CertificatesList from "./CertificatesList";

const Certifications = () => {
  return (
    <section className="w-full mt-20 md:mt-32" id="certifications">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-wrap text-gray-700 mb-12">
        Certifications <BookOpenCheck className="inline text-primary font-bold h-8 w-8" />
      </h1>
      <CertificatesList />
    </section>
  );
}

export default Certifications