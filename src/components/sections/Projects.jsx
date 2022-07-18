import ProjectCard from "../elements/ProjectCard"
import bienesRaicesIMG from "../../img/Projects/Bienes_Raices.jpg"
import coffeeBlogIMG from "../../img/Projects/Blog_De_Café.jpg"
import wildRydesIMG from "../../img/Projects/Wild_rydes.jpg"
import festivalIMG from "../../img/Projects/Rock_EDM_Festival.jpg"
import citasReactIMG from "../../img/Projects/CitasReact.jpg"


const ProjectsSection = () => {
  return (
    <section className=" bg-gray-800" id="projects">
        <div className="py-24 px-6 m-auto container text-center">
          <h2 className="text-2xl lg:text-4xl mb-6 text-white">Projects</h2>
        
          <div className="flex flex-col flex-wrap md:flex-row gap-x-2 gap-y-10 mt-12 items-center justify-center">

            <ProjectCard 
              imageSrc={bienesRaicesIMG} 
              title='Real State Project' 
              description={'Static Website I developed using pure HTML and CSS. In the future, I might convert this project in a dynamic solution hosted in the cloud'}
              projectHref={'./src/projects/bienesraices/index.html'}
            />

            <ProjectCard 
              imageSrc={coffeeBlogIMG} 
              title='Coffee Blog' 
              description={'This is an Static Website I developed using technologies such as HTML and CSS and is served from an S3 bucket through cloudfront'}
              projectHref={'./src/projects/blogdecafe/index.html'}
            />
            
            <ProjectCard 
              imageSrc={wildRydesIMG} 
              title='Wild Rydes' 
              description={'WS Workshop. The solution was deployed using services such as: DynamoDB, Amazon Cognito and Amplify'}
              projectHref={'https://master.d3twabisgki751.amplifyapp.com/'}
            />

            <ProjectCard 
              imageSrc={festivalIMG} 
              title={'Rock & EDM Festival'}
              description={'This is an Static Website I developed using technologies such as HTML and CSS and is from an S3 bucket through cloudfront'}
              projectHref={'./src/projects/FestivalMusica/index.html'}
            />

            <ProjectCard 
              imageSrc={citasReactIMG} 
              title='Vet Assistant' 
              description={'Static Website, developed using React. The application works with Local Storage. In the future might use DynamoDB as Storage'}
              projectHref={'./src/projects/APV/index.html'}
            />

          </div>
        </div>
    </section>
  )
}

export default ProjectsSection