
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [Word,setWord] = useState('Send mail')
  const wordClick = () => setWord('Sent!')
  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('service_r2v8cob', 'template_pd1np2v', form.current, 'poGZa3eJyPcq7FQ8_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });};
  return (
    
    <div className='w-full h-screen bg-slate-900 flex flex-col justify-center p-4 items-center'>
      <div className='text-6xl text-slate-50 inline border-b-4 border-sky-200 hover:text-sky-200 cursor-default'>Contact Us</div>
      <p className='text-xl text-slate-400 p-10'>You can reach out by submitting the form below or mailing me - muditsinghtushir@gmail.com</p>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
      <label className='text-sky-200 text-md pt-2 '>Name</label>
      <input placeholder='Your Name' className='rounded-xl pt-2 pb-2 pl-2' type="text" name="user_name" />
      <label className='text-sky-200 text-md pt-4 '>Email</label>
      <input placeholder='Your Email' className='rounded-xl  pt-2 pb-2 pl-2' type="email" name="user_email" />
      <label className='text-sky-200 text-md pt-4'>Message</label>
      <textarea placeholder='Don&rsquo;t forget to compliment me :)' className='rounded-xl  pt-2 pb-2 pl-2' name="message" />
      <input className='rounded-xl w-40 h-10 font-bold text-slate-50 border-2 border-slate-50 bg-slate-900 mt-8 hover:bg-slate-50 hover:border-2 hover:border-slate-50 hover:text-slate-900 mx-auto' type="submit" value={Word} onClick={wordClick} />
    </form>
    
    </div>
    
   

    
   

    
  )
}

export default Contact