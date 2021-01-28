import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changePrice } from '@services/filter/filterActions'

type Props = {
  filters: any,
  minPrice: 0,
  maxPrice: 0,
  filterActions: {
    changePrice: Function
  }
}

const Price = (props: Props) => {
  const [showPrice, setShowPrice] = React.useState(false)

  React.useEffect(() => {
    props.filterActions.changePrice({
      minPrice: Math.floor(0),
      maxPrice: Math.floor(props.filters.max)
    })
  }, [props.filters])

  const changePrices = (type, e) => {
    if (type === 'min') {
      props.filterActions.changePrice({
        minPrice: e.target.value * 1000,
        maxPrice: props.maxPrice
      })
    } else if (type === 'max') {
      props.filterActions.changePrice({
        minPrice: props.minPrice,
        maxPrice: e.target.value * 1000
      })
    }
  }

  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowPrice(!showPrice)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Price</div>
        <button>
          {!showPrice && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showPrice && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showPrice &&
        <div className="flex items-center flex-wrap">
          <div className="relative flex-1">
            <input value={props.minPrice / 1000} onChange={(e) => changePrices('min', e)} className="h-10 w-34 rounded-lg pl-8 pr-4 py-2 bg-gray600 text-almost_white font-light text-sm" />
            <span className="absolute top-10 left-16 text-gray300 font-medium text-sm">$</span>
          </div>
          {props.filters && props.filters.max && <div className="relative">
            <input value={props.maxPrice / 1000} onChange={(e) => changePrices('max', e)} className="h-10 w-34 rounded-lg pl-8 pr-4 py-2 bg-gray600 text-almost_white font-light text-sm" />
            <span className="absolute top-10 left-16 text-gray300 font-medium text-sm">$</span>
          </div>}
        </div>
      }
    </div>
  )
}

export default connect(
  state => ({
    filters: state.default.services.filter.filters,
    minPrice: state.default.services.filter.minPrice,
    maxPrice: state.default.services.filter.maxPrice
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changePrice }, dispatch)
  })
)(Price)
