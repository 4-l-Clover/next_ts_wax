import React from 'react'
import Image from 'next/image'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeExterior } from '@services/filter/filterActions'

type Props = {
  filters: any,
  filterExterior: any,
  filterActions: {
    changeExterior: Function
  }
}

function Exterior (props: Props) {
  const [showExterior, setShowExterior] = React.useState(false)

  const onChange = (e, value) => {
    const data = props.filterExterior
    if (e.target.checked) {
      data.push(value)
    } else {
      const index = data.indexOf(value)
      if (index > -1) {
        data.splice(index, 1)
      }
    }
    props.filterActions.changeExterior([...data])
  }

  const getName = (value) => {
    switch (value) {
      case 'FN':
        return 'Factory New'
      case 'MW':
        return 'Minimal Wear'
      case 'FT':
        return 'Field Tested'
      case 'WW':
        return 'Well-Worn'
      case 'BS':
        return 'Battle-Scarred'
      default:
        return value
    }
  }

  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowExterior(!showExterior)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Exterior</div>
        <button>
          {!showExterior && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showExterior && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showExterior && props.filters && props.filters.exterior &&
        <div className="-mt-4">
          {props.filters.exterior.map((item, index) =>
            <div className="flex items-center mt-4" key={index}>
              <Checkbox className="flex-1" checked={props.filterExterior.indexOf(item.exterior) > -1} onChange={(e) => onChange(e, item.exterior)}>
                <span className="text-gray300 font-poppins font-normal text-xs">{getName(item.exterior)}</span>
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
    filterExterior: state.default.services.filter.filterExterior,
    filters: state.default.services.filter.filters
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeExterior }, dispatch)
  })
)(Exterior)
