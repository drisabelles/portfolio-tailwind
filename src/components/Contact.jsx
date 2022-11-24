import React from 'react'

const Contact = () => {
  return (
    <div name='contato' className='w-full h-screen bg-gradient-to-b from-white to-gray-300 p-4 text-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-old inline border-b-4 border-gray-500'>Contato</p>
          <p className='py-6'>Coloque abaixo suas informações e entre em contato comigo</p>
        </div>
        <div className='flex justify-center items-center py-4'>
          <form 
            action="https://getform.io/f/96ee370c-7385-44e9-99ee-d8c827850334" 
            method='POST'
            className='flex flex-col w-full md:w-1/2'
          >
            <input 
              type="text" 
              name='name' 
              placeholder='Digite seu nome' 
              className='my-4 p-2 bg-transparent border-gray-400 border-2 rounded-md text-black focus:outline-none' 
            />
            <input 
              type="text" 
              name='email' 
              placeholder='Digite seu email' 
              className='my-4 p-2 bg-transparent border-2 border-gray-400 rounded-md text-black focus:outline-none' 
            />
            <textarea 
              name='message' 
              placeholder='Digite a sua mensagem'
              row='10' 
              className='my-4 p-2 bg-transparent border-gray-400 border-2 rounded-md text-black focus:outline-none' 
            ></textarea>
            <button className='text-white bg-gradient-to-b from-red-400 to-rose-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 cursor-pointer'>Vamos conversar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact