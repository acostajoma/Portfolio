import { useState } from "react"
import Alert from "../elements/Alert"
import LoadingComponent from "../elements/LoadingComponent"

const ContactSection = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alertObj, setAlertObj] = useState({})
  const [sendingMessage, setSendingMessage] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // Check if the form has been filled correctly, if not show alert in UI
    const msgObj = {name, email, message}
    for (const key in msgObj){
      const v = msgObj[key].trim()
      if (!v) return setAlertObj({message: `The ${key} field must be filled`, error : true})
      else msgObj[key] = v
    }
    // Check with regex if email is valid, if not show alert in UI
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(msgObj["email"])) return setAlertObj({message: 'Invalid Email', error : true})
    //Fetch to API and show loading animation in UI
    setSendingMessage(true)
    sendMsg(msgObj)
    
  }

  const sendMsg = async msgObj =>  {
    try {
      const res = await fetch("https://cvy5x40vhf.execute-api.us-east-1.amazonaws.com/prod", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgObj)
    })
    const data = await res.json()
    var AlertError = true
    if(!res.ok){
      //throw new Error(`HTTP Error: ${data.message}`)
      setAlertObj({message: data.message, error:AlertError})
    } else{
        if (data.statusCode === 200){
          AlertError = !AlertError
          setName('')
          setEmail('')
          setMessage('')
        }
        setAlertObj({message: data.body.message, error:AlertError})
    }
    
    } catch (error) {
      console.log(error);
      setAlertObj({message: 'HTTP Error', error: true})
    }
    setSendingMessage(false)
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
              placeholder="Write your message here."
              className="p-1 mb-8 text-base placeholder-gray-400 text-gray-800 rounded-lg w-full max-w-md h-20"
              value={message}
              onChange={ e => setMessage(e.target.value)}
            />

          {Object.keys(alertObj).length ? <Alert 
            alertObj={alertObj}
            reset={setAlertObj}
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