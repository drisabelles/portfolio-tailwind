import React from 'react'

const About = () => {
  return (
    <div 
      name='sobre' 
      className='w-full h-screen bg-gradient-to-b from-gray-300 to-white text-black'
    >
      
      <div 
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
      >
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Sobre
          </p>
        </div>
    
        <p className='text-xl mt-20'>
          Meu nome é Isabelle Ribeiro, tenho 21 anos e atualmente estou estudando Desenvolvimento de Software Multiplataforma na FATEC de São José dos Campos, São Paulo. Há 6 anos venho estudando desenvolvimento de software e design, tendo começado essa jornada na ETEC de São José dos Campos, realizando o curso técnico de Informática.  
        </p>

        <br />

        <p className='text-xl'>
          Atualmente estou trabalhando também como estagiária Front-end na Sanar, editora e faculdade de pós-graduações de medicina e saúde, aonde sou responsável pelo desenvolvimento das interfaces dos cursos de pós-graduação e seus módulos de aulas, como também pela conexão do produto com o cliente, resolvendo assim possíveis bugs que possam aparecer durante as utilizações dele.
        </p>
      
      </div>

    </div>
  )
}

export default About