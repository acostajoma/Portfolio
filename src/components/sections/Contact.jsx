import { useState } from "react"
import Alert from "../elements/Alert"
import LoadingComponent from "../elements/LoadingComponent"

const ContactSection = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alertObj, setAlertObj] = useState({})
  const [sendingMessage, setSendingMessage] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    // Check the form hass been filled
    if ([name, email, message].includes('')){
      setAlertObj({message: 'All fields must be filled', error : true})
      return
    }
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      setAlertObj({message: 'Invalid Email', error : true})
    //   return
    }
    // if (!regex.test(email)){
    //   setAlertObj({message: 'Invalid Email', error : true})
    //   return
    // }
    //Enviar datos al endpoint
    setSendingMessage(true)
    const messageData = JSON.stringify({name , email, message})
    console.log(messageData) 
    sendMessageToApi (messageData)
    //Resetear Datos si se tuvo exito
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => {
      setAlertObj({})
    }, 3000);yo
  }

  const sendMessageToApi = message => {
    fetch("https://j5yvccvh5d.execute-api.us-east-1.amazonaws.com/prod/send-email", {
      method: "POST",
      data: message
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSendingMessage(false)
    })
    .catch(error => console.log(error))
  }

  return (
    <section className="py-24 px-6 bg-gray-800 text-white" id="contact">
      <div className="container m-auto text-center text-xl">
        
        <h2 className="text-2xl lg:text-4xl mb-8"> Contact Me</h2>

        <form className="flex flex-col items-center" onSubmit={handleSubmit}>  
          <label className="mb-2" htmlFor="name">Name:</label>
          <input 
            type="text"
            id="name"
            placeholder="Your Name"
            className="p-1 mb-8 text-base placeholder-gray-400 text-gray-800 rounded-lg w-full max-w-md"
            value={name}
            onChange={ e => setName(e.target.value)}
          />

          <label className="mb-2" htmlFor="email">E-mail:</label>
          <input 
              type="email"
              id="email"
              placeholder="Your E-mail Address"
              className="p-1 mb-8 text-base placeholder-gray-400 text-gray-800 rounded-lg w-full max-w-md"
              value={email}
              onChange={ e => setEmail(e.target.value)}
            />

          <label className="mb-2" htmlFor="message">Message:</label>
          <textarea 
              id="message"
              placeholder="Write your message here. Example: Cool Website :D"
              className="p-1 mb-8 text-base placeholder-gray-400 text-gray-800 rounded-lg w-full max-w-md h-20"
              value={message}
              onChange={ e => setMessage(e.target.value)}
            />

          {Object.keys(alertObj).length ? <Alert 
            message={alertObj.message}
            error={alertObj.error}
            /> : ''}

          {sendingMessage ?  <LoadingComponent /> :
            <input 
              type="submit" 
              value="Enviar" 
              className="bg-sky-600 w-full max-w-md text-white rounded-xl px-4 py-2 mt-2 font-bold hover:cursor-pointer hover:bg-sky-400"
            />  
          }
        </form>
      </div>
    </section>
  )
}

export default ContactSection