import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { Checkbox } from 'antd'
import { bindActionCreators } from 'redux'
import { changeStickerCount } from '@services/filter/filterActions'

type Props = {
  filters: any,
  filterStickerCount: 'any',
  filterActions: {
    changeStickerCount: Function
  }
}

const StickerCounts = (props: Props) => {
  const [showStickerCount, setShowStickerCount] = React.useState(false)

  function onChange (value) {
    props.filterActions.changeStickerCount(value)
  }

  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowStickerCount(!showStickerCount)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Sticker Count</div>
        <button>
          {!showStickerCount && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showStickerCount && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showStickerCount && props.filters && props.filters.sticker_count &&
        <div className="-mt-4">
          {props.filters.sticker_count.map((item, index) =>
            <div className="flex items-center mt-4" key={index}>
              <Checkbox className="flex-1" checked={item.sticker_count === props.filterStickerCount} onChange={() => onChange(item.sticker_count)}>
                <span className="text-gray300 font-poppins font-normal text-xs">{item.sticker_count}</span>
              </Checkbox>
              <span className="text-gray100 font-poppins font-light text-xs">{item.count}</span>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default connect(
  state => ({
    filterStickerCount: state.default.services.filter.filterStickerCount,
    filters: state.default.services.filter.filters
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeStickerCount }, dispatch)
  })
)(StickerCounts)
