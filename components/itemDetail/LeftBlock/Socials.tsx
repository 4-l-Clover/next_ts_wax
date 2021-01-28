import React from 'react'
import Image from 'next/image'

function Socials () {
  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="flex-1 text-gray300 font-poppins font-medium text-sm mb-5">Socials</div>
      <div className="w-full grid grid-cols-2 gap-1">
        <div className="bg-gray600 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <div className="flex-1 flex items-center">
              <Image alt="image" src='/img/profile-pic.svg' width={40} height={40} />
              <div className="ml-2">
                <div className="text-almost_white font-poppins font-medium text-xs mb-1">Madismeh</div>
                <div className="text-gray100 font-poppins font-light text-xs">2 days ago</div>
              </div>
            </div>
            <Image alt="image" src="/icons/more-horizental.svg" width={22} height={6} />
          </div>
          <div className="text-gray300 font-poppins font-normal text-xs mb-4">
            You have been invited to the beta test of an upcoming platform truly connecting streamers w
            </div>
          <Image alt="image" src="/img/_image4.svg" width={260} height={160} />
          <div className="flex mt-4">
            <div className="flex-1 flex">
              <Image alt="image" src="/icons/upload.svg" width={14} height={14} />
              <div className="text-almost_white font-poppins font-normal text-xs mx-4">363</div>
              <Image alt="image" src="/icons/download.svg" width={14} height={14} />
            </div>
            <div className="flex">
              <Image alt="image" src="/icons/message.svg" width={14} height={14} />
              <div className="text-almost_white font-poppins font-normal text-xs ml-4">363</div>
            </div>
          </div>
        </div>
        <div className="bg-gray600 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <div className="flex-1 flex items-center">
              <Image alt="image" src='/img/profile-pic.svg' width={40} height={40} />
              <div className="ml-2">
                <div className="text-almost_white font-poppins font-medium text-xs mb-1">Madismeh</div>
                <div className="text-gray100 font-poppins font-light text-xs">2 days ago</div>
              </div>
            </div>
            <Image alt="image" src="/icons/more-horizental.svg" width={22} height={6} />
          </div>
          <div className="text-gray300 font-poppins font-normal text-xs mb-4">
            You have been invited to the beta test of an upcoming platform truly connecting streamers w
          </div>
          <Image alt="image" src="/img/_image4.svg" width={260} height={160} />
          <div className="flex mt-4">
            <div className="flex-1 flex">
              <Image alt="image" src="/icons/upload.svg" width={14} height={14} />
              <div className="text-almost_white font-poppins font-normal text-xs mx-4">363</div>
              <Image alt="image" src="/icons/download.svg" width={14} height={14} />
            </div>
            <div className="flex">
              <Image alt="image" src="/icons/message.svg" width={14} height={14} />
              <div className="text-almost_white font-poppins font-normal text-xs ml-4">363</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials
