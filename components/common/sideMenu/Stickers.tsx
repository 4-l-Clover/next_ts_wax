import React from 'react'
import Image from 'next/image'
import { Checkbox } from 'antd'

type Props = {
  pack: any
}

const stickers = [
  { name: 'Full sticker packs', number: '5432' }
]

export default function Stickers (props: Props) {
  const [showStickers, setShowStickers] = React.useState(false)

  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowStickers(!showStickers)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Stickers</div>
        <button>
          {!showStickers && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showStickers && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showStickers &&
        <div className="-mt-4 pb-4">
          {stickers.map((item, index) =>
            <div className="flex items-center mt-4" key={index}>
              <Checkbox className="flex-1" onChange={(e) => console.log(e.target.checked)}>
                <span className="text-gray300 font-poppins font-normal text-xs">{item.name}</span>
              </Checkbox>
              <span className="text-gray100 font-poppins font-light text-xs">{item.number}</span>
            </div>
          )}
          <button className="flex items-center px-4 py-2 bg-almost_black rounded-lg w-full mt-4">
            <Image alt='image' src='/icons/plus.svg' width={14} height={14} />
            <span className="flex-1 ml-3 text-almost_white font-poppins font-medium text-sm">Add Sticker</span>
          </button>
        </div>
      }
    </div>
  )
}
