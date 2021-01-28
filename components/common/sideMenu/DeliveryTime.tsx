import React from 'react'
import Image from 'next/image'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTime } from '@services/filter/filterActions'

type Props = {
  filterTime: 'any',
  filterActions: {
    changeTime: Function
  }
}

const times = [
  { name: 'Any', number: '', value: 'any' },
  { name: 'Instant delivery', number: '1123', value: '1m' },
  { name: '12 hours', number: '1123', value: '12h' },
  { name: '5 minutes', number: '1123', value: '5min' }
]
const DeliveryTime = (props: Props) => {
  const [showDelivery, setShowDelivery] = React.useState(false)

  const onChange = (e, value) => {
    props.filterActions.changeTime(value)
  }

  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowDelivery(!showDelivery)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Delivery time</div>
        <button>
          {!showDelivery && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showDelivery && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showDelivery &&
        <div className="-mt-4">
          {times.map((item, index) =>
            <div className="flex items-center mt-4" key={index}>
              <Checkbox className="flex-1" checked={item.value === props.filterTime} onChange={(e) => onChange(e, item.value)}>
                <span className="text-gray300 font-poppins font-normal text-xs">{item.name}</span>
              </Checkbox>
              <span className="text-gray100 font-poppins font-light text-xs">{item.number}</span>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default connect(
  state => ({
    filterTime: state.default.services.filter.filterTime
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeTime }, dispatch)
  })
)(DeliveryTime)
