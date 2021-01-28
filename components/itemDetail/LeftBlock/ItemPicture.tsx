import React from 'react'
import { Progress } from 'antd'
import Image from 'next/image'
import { connect } from 'react-redux'

type Props = {
  currentItem: any,
}

function ItemPicture (props: Props) {
  const item = props.currentItem.data[0]
  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="flex justify-center items-center flex-col border-b border-solid border-gray800 mb-4">
        <img className="flex-1" alt="image" src={item.image} width={294} height={186} loading="lazy" />
        <div className="text-gray300 font-poppins font-light text-xs text-center mt-6 mb-2">
          {item.float ? parseFloat(item.float).toFixed(4) : item.inspect_item ? parseFloat(item.inspect_item.floatvalue).toFixed(4) : ''}
        </div>
        <div className="w-40 mb-6">
          {item.float ? <Progress percent={parseFloat(item.float) * 100} /> : (item.inspect_item && item.inspect_item.floatvalue) ? <Progress percent={(item.inspect_item.floatvalue) * 100} /> : <div className="h-5.5"></div>}
        </div>
      </div>
      <div className="flex border-b border-solid border-gray800 mb-4 pb-4">
        <div className="w-70 mr-12">
          <div className="text-gray300 font-poppins font-medium text-sm mb-4">Description</div>
          <div className="text-gray100 font-poppins font-light text-xs">
            {item.steam_price.description || item.steam_price.ch_description || item.steam_price.ru_description}
          </div>
        </div>
        <div>
          <div className="text-gray300 font-poppins font-medium text-sm mb-4">Collection</div>
          <div className="flex">
            <Image alt="image" src="/img/_image3.svg" width={72} height={72} />
            <div className="ml-4">
              <div className="text-gray100 font-poppins font-light text-xs mb-3">The cache collection</div>
              <div className="flex justify-center">
                <button className="flex items-center justify-center h-10 w-30 bg-almost_black rounded-lg text-gray300 font-poppins font-medium text-sm">Browse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray300 font-poppins font-medium text-sm mb-4">Loved by PROs</div>
        <div className="flex">
          <div className="flex flex-col justify-center mr-6">
            <Image alt="image" src='/img/profile-pic.svg' width={53} height={53} />
            <div className="text-gray100 font-poppins font-light text-xs text-center">Evelone</div>
          </div>
          <div className="flex flex-col justify-center mr-6">
            <Image alt="image" src='/img/profile-pic.svg' width={53} height={53} />
            <div className="text-gray100 font-poppins font-light text-xs text-center">Evelone</div>
          </div>
          <div className="flex flex-col justify-center mr-6">
            <Image alt="image" src='/img/profile-pic.svg' width={53} height={53} />
            <div className="text-gray100 font-poppins font-light text-xs text-center">Evelone</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem
  }),
  dispatch => ({})
)(ItemPicture)
