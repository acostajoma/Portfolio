import CertificationCard from "../elements/CertificationCard"
import reStartIMG from "../../img/Certifications/aws-re-start-graduate.jpg"
import cloudPractitionerIMG from "../../img/Certifications/aws-certified-cloud-practitioner.jpg"
import solutionsArchitectIMG from "../../img/Certifications/aws-certified-solutions-architect-associate.jpg"
import lifeLLIMG from "../../img/Certifications/lifelong-learning.jpg"
import scrumIMG from "../../img/Certifications/scrum-foundation.jpg"
import RWVCPCIMG from "../../img/Certifications/rwvcpc.jpg"


const CertificationsSection = () => {
  return (
    <section className="py-24 px-6 m-auto container text-center" id="projects">
      <h2 className="text-2xl lg:text-4xl mb-6">Certifications</h2>
    
      <div className="flex flex-col flex-wrap md:flex-row gap-x-2 gap-y-10 mt-12 items-center justify-center">

        <CertificationCard 
          imageSrc={reStartIMG} 
          title='AWS Re/Start Program' 
          description={'Development and job training program that prepares learners for cloud careers.'}
          certHref={'https://www.credly.com/badges/c6976cce-8bcd-40f2-8b0d-bf8f4fa4f558/public_url'}
        />

      <CertificationCard 
          imageSrc={cloudPractitionerIMG} 
          title='AWS Cloud Practitioner' 
          description={'Fundamental understanding of IT services and their uses in the AWS Cloud.'}
          certHref={'https://www.credly.com/badges/25901acf-e2ae-4dbc-8a48-67c2be6b9fab/public_url'}
        />

      <CertificationCard 
          imageSrc={solutionsArchitectIMG} 
          title='Solutions Architect Associate' 
          description={'Ability to build secure & robust solutions using architectural design principles.'}
          certHref={'https://www.credly.com/badges/97d09da7-ceb2-4208-ba46-ac4034720133/public_url'}
        />

        <CertificationCard 
          imageSrc={lifeLLIMG} 
          title='Lifelong Learning' 
          description={"Unwavering commitment to lifelong learning. "}
          certHref={'https://www.credly.com/badges/4f00f85c-a3e2-44bb-9e48-2b7f864dd5d9/public_url'}
        />

        <CertificationCard 
          imageSrc={scrumIMG} 
          title='Scrum Foundation' 
          description={"Entry-level skills, fundamental knowledge in this framework."}
          certHref={'https://www.credly.com/badges/e95bbaa3-8e85-4929-b7c9-2c8b04acd76d/public_url'}
        />

        <CertificationCard 
          imageSrc={RWVCPCIMG} 
          title={'Remote Work Collaboration'} 
          description={"Best practices for a productive and successful Remote Working."}
          certHref={'https://www.credly.com/badges/78a9969a-edfe-4992-a20a-86b255bd29a5/public_url'}
        />

      </div>
      
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jose-martin-acosta/details/certifications/" className="block mt-10 text-gray-800 hover:text-sky-600 text-lg font-bold">View More Certifications here</a>

    </section>
  )
}

export default CertificationsSection