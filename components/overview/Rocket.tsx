/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'

type Props = {
  auto: boolean,
  by: string
}

export default function Rocket (props: Props) {
  const { auto, by } = props
  return (
    <div>
      {auto && <div className="flex">
        <Image alt="image" src="/icons/lightning.svg" width={12} height={16} />
        <span className="text-gray500 font-poppins font-light text-xs ml-2" title="This item can take up to 1 minute to send">1</span>
      </div>}
      {by === 'ec369764-6e99-417c-ac4f-8078b2af6827' && !auto && <div className="flex">
        <Image alt="image" src="/icons/lightning.svg" width={12} height={16} />
        <span className="text-gray500 font-poppins font-light text-xs ml-2" title="This item can take up to 12 hour to send">12</span>
      </div>}
      {by !== 'ec369764-6e99-417c-ac4f-8078b2af6827' && !auto && <div className="flex">
        <Image alt="image" src="/icons/lightning.svg" width={12} height={16} />
        <span className="text-gray500 font-poppins font-light text-xs ml-2" title="This item can take up to 5 minutes to send">5</span>
      </div>}
    </div>
  )
}
