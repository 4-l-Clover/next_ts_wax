import React from 'react'
import Image from 'next/image'

type Props = {
  data: any
}

export default function Suggested (props: Props) {
  const { data } = props

  function getSuggested (item) {
    item.suggested = item.steam_price ? item.steam_price.average : null
    return item.suggested
  }

  return (
    <div className="flex items-center">
      <Image className="flex-1" alt="image" src="/icons/price.svg" width={10} height={9} />
      <span className="text-gray500 font-poppins font-light text-xs ml-2">{getSuggested(data)}</span>
    </div>
  )
}
