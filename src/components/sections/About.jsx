const AboutSection = () => {
  return (
    <main className="min-h-screen bg-white container m-auto" id="about">
      <div className="mx-6 mt-10 text-base md:text-lg lg:text-xl text-justify leading-relaxed">
        <h1 className="text-2xl mb-6">About me</h1>
        <p>Since I was a child I dreamed of creating and inventing things. I used to tell my mother that I wanted to be an astronaut. What I truly meant was to work at NASA and be one of those who build equipment to take astronauts into space, because I was afraid of rockets. Over time the focus changed, but the desire to build things stayed with me.</p>
        <p className="mt-3">I am a curious person, who loves to learn. I love programming and finding ways to solve problems more efficiently using tools like Excel or even programming languages like JavaScript or Python. That desire to learn and create also led me to get certified as an AWS Solutions Architect Associate, and I am looking forward for more cloud certifications.</p>
        <p className="mt-3">Feel free to reach out to me if you have consulting or job opportunities or even if you need support or advice, I am always happy to help.</p>
       {/* <button type="button" className="py-1 px-5 mt-2 bg-blue-900 rounded-xl text-white hover:bg-blue-800 hover:cursor-pointer animate-bounce">Contact me</button> */}
       
      </div>
    </main>
  )
}

export default AboutSection