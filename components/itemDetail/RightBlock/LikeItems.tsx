import React from 'react'
import { connect } from 'react-redux'
import { Progress, Skeleton } from 'antd'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
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
  currentItem: any
}

const rate = 1

function LikeItems (props: Props) {
  const [value, setValue] = React.useState(0)
  function onChange (value) {
    setValue(value)
  }

  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="text-gray300 font-poppins font-medium text-sm mb-4">You might like</div>
      <div className="-mx-3">
        <Carousel
          value={value}
          onChange={onChange}
          arrows
          infinite
          slidesPerPage={2}
        >
          {props.currentItem.data[2] && props.currentItem.data[2].length > 0 && props.currentItem.data[2].map((item, index) =>
            <div className="p-4 bg-gray600 rounded-lg w-full mx-1" key={index}>
              <div className="flex items-center w-full">
                <div className="flex-1">
                  <Rocket auto={item.auto} by={item.by} />
                </div>
                <Suggested data={item} />
              </div>
              <div className="flex justify-center my-2">
                <img className="flex-1" alt="image" src={item.image} width={130} height={90} loading="lazy" />
              </div>
              <div className="text-gray500 font-poppins font-light text-xs mb-2">{item.category}</div>
              <MarketName className="text-almost_white font-poppins font-medium text-xs mb-4 h-4.5 text-ellipsis" data={item} />
              <div className="flex w-full">
                {item.full_ex && item.exterior &&
                  <div className="flex-1 text-gray500 font-poppins font-light text-xs">{item.full_ex}</div>}
                {
                  (item.float || (item.inspect_item && item.inspect_item.floatvalue)) &&
                  <div className="text-gray300 font-poppins font-medium text-xs">
                    {item.float ? parseFloat(item.float).toFixed(4) : item.inspect_item ? parseFloat(item.inspect_item.floatvalue).toFixed(4) : ''}
                  </div>
                }
              </div>
              <div className="w-full">
                {item.float ? <Progress percent={parseFloat(item.float) * 100} /> : (item.inspect_item && item.inspect_item.floatvalue) ? <Progress percent={(item.inspect_item.floatvalue) * 100} /> : <div className="h-5.5"></div>}
              </div>
              <div className="flex">
                <div className="flex-1 text-almost_white font-poppins font-medium text-sm">$ {Math.floor(item.price * rate) / 1000}</div>
                <Discount className="bg-dark_green rounded-lg flex items-center justify-center h-6 w-10 text-green font-poppins font-medium text-xs" data={item} />
              </div>
            </div>
          )}
        </Carousel>
        <Dots value={value} onChange={onChange} number={props.currentItem.data[2].length} />
      </div>
    </div>
  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem
  }),
  dispatch => ({})
)(LikeItems)
