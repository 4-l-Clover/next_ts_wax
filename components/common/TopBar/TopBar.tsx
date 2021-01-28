import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrencies } from '@services/overview/overviewActions'

type Props = {
  currencies: [],
  overviewActions: {
    getCurrencies: Function
  }
}

const LeftNav = dynamic(() =>
  import('../../../components').then((mod) => mod.LeftNav, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

function TopBar (props: Props) {
  // React.useEffect(() => {
  //   props.overviewActions.getCurrencies()
  // }, [])

  // const { currencies } = props;

  // if (currencies.length > 0) {
  //   console.log(currencies)
  // }
  return (
    <div className="w-full bg-gray700">
      <div className='flex items-center w-full h-16 pl-4 pr-10 max-sm:hidden sm:inline-block '>
        <LeftNav />
        <div className="flex items-center">
          <button className="relative mr-6">
            <Image alt='image' src='/icons/shopping.svg' width={20} height={20} />
            <span className="rounded-full w-6 h-6 flex items-center absolute top-min10 left-10 text-green font-poppins font-medium text-xs bg-gray700">10</span>
          </button>
          <button className="relative mr-6">
            <Image alt='image' src='/icons/alarm.svg' width={18} height={20} />
            <span className="rounded-full w-6 h-6 flex items-center absolute top-min10 left-10 text-green font-poppins font-medium text-xs bg-gray700">10</span>
          </button>
          <div className="flex items-center border-2 border-solid px-4 py-2 rounded-lg border-gray800">
            <Image alt='image' src='/icons/cashier.svg' width={18} height={18} />
            <input placeholder="" className="ml-3 w-16 text-gray300 font-medium text-sm bg-transparent" />
          </div>
          <button className="flex items-center ml-4">
            <Image alt='image' src='/img/profile-pic.svg' width={40} height={40} />
            <span className="ml-3"><Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    currencies: state.default.services.overview.currencies
  }),
  dispatch => ({
    overviewActions: bindActionCreators({ getCurrencies }, dispatch)
  })
)(TopBar)
