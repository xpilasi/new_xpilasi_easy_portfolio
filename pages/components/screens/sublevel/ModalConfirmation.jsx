import React from 'react'

const ModalConfirmation = ({showModal,setStateModal}) => {

  const handleModal = () =>{
    console.log('Handle modal');
    setStateModal(!showModal)
    console.log(`modal state: ${showModal}`);
    
    
  }  
  return (
    <div className={`${showModal? "bg-black bg-opacity-90 z-50 w-full text-white fixed h-screen flex justify-center items-center pr-80 flex-col gap-5" : "hidden"  }`}>
        <div>
            Thanks for your message!
        </div>
        <div 
        className='bg-green-300 text-black px-5 py-1 hover:bg-green-400 transition-all duration-500 ease-in-out cursor-pointer'
        onClick={()=>handleModal()}
        
        >Close</div>
    </div>
  )
}

export default ModalConfirmation
