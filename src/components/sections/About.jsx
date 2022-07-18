import personalImage from "../../img/personal-photo-bg.jpg" 
import PingButton from "../elements/PingButton"

const AboutSection = () => {
  return (
    <main className="bg-white container py-24 mx-auto" id="about">
    
      <div className="mx-6 text-justify sm:text-l lg:text-xl 2xl:text-2xl lg:leading-relaxed">
        
        <h1 className="text-2xl lg:text-4xl mb-6">About me</h1>
        <p>Since I was a child I dreamed of creating and inventing things. I used to tell my mother that I wanted to be an astronaut. What I truly meant was to work at NASA and be one of those who build equipment to take astronauts into space, because I was afraid of rockets. Over time the focus changed, but the desire to build things stayed with me.</p>
        <p className="mt-5">I am a curious person, who loves to learn. I love programming and finding ways to solve problems more efficiently using tools like Excel or even programming languages like JavaScript or Python. That desire to learn and create also led me to get certified as an AWS Solutions Architect Associate, and I am looking forward to grow my knowledge and gain more certifications.</p>
        <p className="mt-5">Feel free to reach out to me if you have consulting or job opportunities or even if you need support or advice, I am always happy to help.</p>
      </div>

        <div className="relative max-w-fit m-auto mt-3 mb-10">
          <img className="max-h-[32rem]" src={personalImage} alt="Personal Image" />
        
          <PingButton 
            buttonText={'Contact Me'}
            buttonHref='#contact'
          />
        </div>
    </main>
  )
}

export default AboutSection