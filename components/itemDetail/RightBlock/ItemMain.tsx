import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'

const Rocket = dynamic(() =>
  import('../../../components').then((mod) => mod.Rocket, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const MarketName = dynamic(() =>
  import('../../../components').then((mod) => mod.MarketName, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Discount = dynamic(() =>
  import('../../../components').then((mod) => mod.Discount, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Suggested = dynamic(() =>
  import('../../../components').then((mod) => mod.Suggested, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type Props = {
  currentItem: any,
}

function ItemMain (props: Props) {
  const item = props.currentItem.data[0]

  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="flex mb-6">
        <div className="flex-1">
          <Rocket auto={item.auto} by={item.by} />
        </div>
        <Suggested data={item} />
      </div>
      <div className="text-gray500 font-poppins font-light text-sm mb-2">{item.type}</div>
      <MarketName className="text-almost_white font-poppins font-medium text-2xl mb-4" data={item} />
      {item.full_ex && item.exterior &&
        <div className="text-gray500 font-poppins font-light text-sm mb-6">{item.full_ex}</div>}
      <div className="text-gray300 font-poppins font-medium text-sm mb-4">Stickers applied</div>
      {item.inspect_item && <div className="flex items-center flex-wrap justify-start">
        {item.inspect_item.stickers.map((sticker, index) =>
          < div className="bg-gray600 rounded-lg flex items-center justify-center mr-4" key={index}>
            <img alt="image" src={sticker.steam_price.img.indexOf('http') === -1
              ? `https://steamcommunity-a.akamaihd.net/economy/image/${sticker.steam_price.img}`
              : sticker.steam_price.img} width={48} height={48} loading="lazy" />
          </div>
        )}
      </div>}
      <hr className="text-gray800 w-full my-4" />
      <div className="text-gray300 font-poppins font-medium text-sm mb-4">Seller</div>
      <div className="flex items-center">
        <div className="flex-1 flex items-center">
          <img className="rounded-full" alt="image" src={item.user.avatar} width={18} height={18} loading="lazy" />
          <div className="text-gray300 font-poppins font-light text-xs ml-2">{item.user.name}</div>
        </div>
        <div className="text-gray500 font-poppins font-light text-xs">~5m delivery time</div>
      </div>
      <hr className="text-gray800 w-full my-4" />
      <div className="flex items-center">
        <div className="flex-1">
          <div className="text-almost_white font-poppins font-medium text-2xl mb-3">$ {item.price / 1000}</div>
          <Discount className="bg-dark_green rounded-lg flex items-center justify-center h-6 w-10 text-green font-poppins font-medium text-xs" data={item}/>
        </div>
        <div className="flex items-center">
          <button className="flex items-center justify-center rounded-lg h-12 w-40 bg-dark_green text-green font-poppins font-medium text-sm">
            Buy now
            </button>
          <button className="flex items-center justify-center ml-2 bg-almost_black rounded-lg w-10 h-10">
            <Image alt="image" src="/icons/shopping-add.svg" width={16} height={16} />
          </button>
        </div>
      </div>
      <hr className="text-gray800 w-full my-4" />
      <div className="flex items-center">
        <div className="flex-1 flex items-center">
          <button className="flex items-center">
            <Image alt="image" src="/icons/screenshot.svg" width={18} height={18} />
            <div className="text-almost_white font-poppins font-medium text-xs ml-2 mr-6">Screenshot</div>
          </button>
          <button className="flex items-center">
            <Image alt="image" src="/icons/eye.svg" width={18} height={10} />
            <div className="text-almost_white font-poppins font-medium text-xs ml-2">Inspect ingame</div>
          </button>
        </div>
        <button>
          <Image alt="image" src="/icons/more-horizental.svg" width={22} height={6} />
        </button>
      </div>
    </div >
  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem
  }),
  dispatch => ({})
)(ItemMain)
