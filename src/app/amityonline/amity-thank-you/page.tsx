import Button from '@/app/components/button/Button'
import HeaderLayout from '@/app/components/headerLayout/HeaderLayout'
import Link from 'next/link'
import React from 'react' 

const AmitythankYou = () => {
  return (
    <>
    <HeaderLayout>
    <div className="bg-[#e2e8f0]">
      <div className="h-[300px]   relative bg-[url('/65e8a443d3a217849e428432_dhruv-hero-image.png')] bg-no-repeat bg-cover">
        <div className="sm:pr-12 pr-4 lg:pl-32 pl-4 py-8 bg-gradient-to-r from-black to-transparent h-full">
           
          <div className="sm:absolute  mt-[100px] z-[9]"
          style={{
            top: "20%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          
          }}
          >
            <div className="text-white max-w-[720px] lg:px-20 sm:pl-8 pl-2 sm:mt-0 mt-4 grid sm:gap-6 gap-2">
              <h2 className="sm:text-3xl text-xl font-semibold "
             style={{
              textAlign: "center",
             }}
              >
                Amity Online 
                
              </h2>
              
            </div>
             
          </div>
          
        </div>
      </div>
      </div>
      <div className="my-16">
       
        <div className="md:max-w-[1200px] w-[100%] mx-auto px-[15px] ">
          <div className="relative">
          <p className="sm:text-md text-sm"
          style={{
            textAlign: "center",
          }}
          >
            Thanks for submitting your details! We will get back to you soon.
         
              </p>
              <Link href={`/`} 
              style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              
              }}
              >
                              <Button
                                text={"Go to Home"}
                                className={
                                  "   bg-gradient-to-r from-[#ee2c3c] to-[#da202f]   text-white font-medium     min-w-144px"
                                }
                              />
                            </Link>
          </div>
          
 
        </div>
      </div>
    </HeaderLayout>
            </>
  
  )
}

export default AmitythankYou