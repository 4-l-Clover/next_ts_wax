import React, { useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFilters, clearFilters } from '../../../services/filter/filterActions'

type Props = {
  filters: any,
  filterActions: {
    getFilters: Function,
    clearFilters: Function
  }
}

const Exterior = dynamic(() =>
  import('../../../components').then((mod) => mod.Exterior, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Price = dynamic(() =>
  import('../../../components').then((mod) => mod.Price, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

// const Stickers = dynamic(() =>
//   import('../../../components').then((mod) => mod.Stickers, e => null as never),
// { loading: function loadSkeleton () { return <Skeleton /> } }
// )

const DeliveryTime = dynamic(() =>
  import('../../../components').then((mod) => mod.DeliveryTime, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Games = dynamic(() =>
  import('../../../components').then((mod) => mod.Games, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Brand = dynamic(() =>
  import('../../../components').then((mod) => mod.Brand, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const StickerCounts = dynamic(() =>
  import('../../../components').then((mod) => mod.StickerCounts, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const SideMenu = (props: Props) => {
  useEffect(() => {
    props.filterActions.getFilters()
  }, [])

  function onClear () {
    props.filterActions.clearFilters()
  }

  const { filters } = props
  return (
    <div className="flex flex-col bg-gray700 mt-1 overflow-auto">
      <div className="flex-1 w-80 h-18 py-4 max-sm:hidden sm:inline-block">
        <div className="px-4">
          <div className="flex items-center">
            <div className="flex-1 text-almost_white font-poppins font-semibold text-17">Filter items</div>
            <button><Image alt='image' src='/icons/refresh.svg' width={20} height={20} onClick={() => onClear()}/></button>
          </div>
          {filters !== {} && <>
            <Games />
            <Price/>
            <DeliveryTime />
            <Exterior/>
            <Brand />
            <StickerCounts />
            {/* <Stickers pack={filters.pack}/> */}
          </>}
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    filters: state.default.services.filter.filters
  }),
  dispatch => ({
    filterActions: bindActionCreators({ getFilters, clearFilters }, dispatch)
  })
)(SideMenu)
