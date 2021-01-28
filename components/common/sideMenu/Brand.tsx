import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { Checkbox } from 'antd'
import { bindActionCreators } from 'redux'
import { changeBrand } from '@services/filter/filterActions'

type Props = {
  filters: {
    brand: any
  },
  filterBrand: any,
  filterActions: {
    changeBrand: Function
  }
}

const Brand = (props: Props) => {
  const [showBrands, setShowBrands] = React.useState(false)
  function onChange (e, value) {
    const data = props.filterBrand
    if (e.target.checked) {
      data.push(value)
    } else {
      const index = data.indexOf(value)
      if (index > -1) {
        data.splice(index, 1)
      }
    }
    props.filterActions.changeBrand([...data])
  }
  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowBrands(!showBrands)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Brand</div>
        <button>
          {!showBrands && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showBrands && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showBrands && props.filters && props.filters.brand &&
        <div className="-mt-4">
          {props.filters.brand.map((item, index) =>
            <div className="flex items-center mt-4" key={index}>
              <Checkbox className="flex-1" checked={ props.filterBrand.indexOf(item.brand) > -1 } onChange={(e) => onChange(e, item.brand)}>
                <span className="text-gray300 font-poppins font-normal text-xs">{(item.brand).toUpperCase()}</span>
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
    filterBrand: state.default.services.filter.filterBrand,
    filters: state.default.services.filter.filters
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeBrand }, dispatch)
  })
)(Brand)
