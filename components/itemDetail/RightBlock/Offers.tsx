import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOffers } from '@services/itemDetail/itemDetailActions'

type Props = {
  currentItem: any,
  offers: any,
  itemDetailActions: {
    getOffers: Function
  }
}
const rate = 1
function Offers (props: Props) {
  const params = {
    name: props.currentItem.data[0].name, skip: props.offers.length
  }

  React.useEffect(() => {
    props.itemDetailActions.getOffers(params)
  }, [])

  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="flex items-center mb-4">
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Purchase orders</div>
        <button className="bg-dark_green rounded-full w-8 h-8 flex items-center justify-center ">
          <Image alt="image" src="/icons/plus-green.svg" width={12} height={12} />
        </button>
      </div>
      {props.offers.length > 0 && props.offers.map((item, index) =>
        <div className="flex items-center bg-gray600 rounded-lg h-12.5 p-4 mb-2" key={index}>
          <div className="flex items-center flex-1">
            <img className="rounded-full" alt="image" src={item.avatar} width={18} height={18} loading="lazy"/>
            <div className="text-gray300 font-poppins font-light text-xs ml-2">{item.by}</div>
          </div>
          <div className="flex items-center">
            <div className="text-almost_white font-poppins font-light text-xs ml-2">${(Math.floor(item.price * rate) / 1000).toFixed(2)}</div>
            <div className="text-gray300 font-poppins font-light text-xs ml-2">{item.amount} items</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem,
    offers: state.default.services.itemDetail.offers
  }),
  dispatch => ({
    itemDetailActions: bindActionCreators({ getOffers }, dispatch)
  })
)(Offers)
