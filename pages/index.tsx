import React, { Component } from 'react'
import Image from 'next/image'
import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getItems } from '@services/overview/overviewActions'

const SelectBox = dynamic(() =>
  import('../components').then((mod) => mod.SelectBox, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const SortBy = dynamic(() =>
  import('../components').then((mod) => mod.SortBy, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const FilterSearch = dynamic(() =>
  import('../components').then((mod) => mod.FilterSearch, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Layout = dynamic(() =>
  import('../components').then((mod) => mod.Layout),
{ loading: () => <Skeleton /> }
)

const Item = dynamic(() => import('../components/overview/Item'),
  { loading: () => <Skeleton /> }
)

type Props = {
  router?: any,
  loading?: boolean,
  error: null,
  items: [],
  filterTime: 'any',
  filterExterior: ['FN', 'MW', 'FT', 'WW', 'BS'],
  filterGame: 'csgo',
  filterSortBy: 'best_deals',
  minPrice: 0,
  maxPrice: 0,
  filters: any,
  filterSearchText: '',
  filterBrand: [],
  filterStickerCount: 'any',
  overviewActions: {
    getItems: Function
  }
}

interface State {
  skip?: number,
  scrolling?: boolean
}

class Overview extends Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      skip: 0,
      scrolling: true
    }
  }

  componentDidMount () {
    this.getAllList()
    setTimeout(() => {
      document.getElementById('shops').addEventListener('scroll', this.onScroll.bind(this), { passive: true })
      document.getElementById('shops').addEventListener('wheel', this.onScroll.bind(this), { passive: true })
    }, 250)
  }

  componentDidUpdate (prevProps) {
    if (this.props.error && !prevProps.error) {
      toastr.error('Error', this.props.error)
    }
    if (
      this.props.filterTime !== prevProps.filterTime ||
      (this.props.filterExterior !== prevProps.filterExterior && this.props.filterExterior.length > 0) ||
      this.props.filterGame !== prevProps.filterGame ||
      this.props.minPrice !== prevProps.minPrice ||
      (this.props.maxPrice !== prevProps.maxPrice) ||
      this.props.filterSortBy !== prevProps.filterSortBy ||
      this.props.filterSearchText !== prevProps.filterSearchText ||
      (this.props.filterBrand !== prevProps.filterBrand && this.props.filterBrand.length > 0) ||
      this.props.filterStickerCount !== prevProps.filterStickerCount
    ) {
      if (prevProps.maxPrice) {
        this.setState({
          skip: 0
        }, () => {
          this.getAllList()
        })
      }
    }
  }

  getAllList () {
    const { filterTime, filterExterior, filterGame, minPrice, maxPrice, filterSortBy, filterSearchText, filters, filterBrand, filterStickerCount } = this.props
    const params = new URLSearchParams()
    params.append('sort', filterSortBy)
    params.append('game', filterGame)
    params.append('all', '0')

    if (filterTime !== 'any') {
      params.append('time', filterTime)
    }
    if (filterStickerCount !== 'any') {
      params.append('sticker_count', filterStickerCount)
    }
    if (filterExterior !== [] && filterExterior) {
      if (filterExterior.length !== 5) {
        for (let i = 0; i < filterExterior.length; i++) {
          params.append('exterior', filterExterior[i])
        }
      }
    }

    if (filterBrand !== [] && filterBrand) {
      for (let i = 0; i < filterBrand.length; i++) {
        params.append('brand', filterBrand[i])
      }
    }

    if (!(minPrice === 0 && maxPrice === filters.max) && maxPrice !== 0 && maxPrice) {
      params.append('max_price', maxPrice)
      params.append('min_price', minPrice.toString())
    }
    if (filterSearchText !== '') {
      params.append('search', filterSearchText)
      params.append('exact', '0')
    } else {
      params.delete('exact')
    }
    // if (params.game !== 'gc') {
    params.append('skip', this.state.skip.toString())
    // }
    this.props.overviewActions.getItems(params)
  }

  onScroll () {
    const wrappedElement = document.getElementById('shops')
    if (wrappedElement.scrollHeight - wrappedElement.scrollTop === wrappedElement.clientHeight && this.state.scrolling === true) {
      this.setState({ scrolling: false })
      this.setState({
        skip: this.state.skip + 50
      }, () => {
        this.getAllList()
      })
    } else if (wrappedElement.scrollHeight - wrappedElement.scrollTop !== wrappedElement.clientHeight && this.state.scrolling === false) {
      this.setState({ scrolling: true })
    }
  }

  render () {
    const { items } = this.props
    return (
      <Layout>
        <div className="flex-1 overflow-auto bg-background h-full" id="shops">
          <div className="px-6 py-5 max-sm:p-2 max-sm:py-4 flex items-start flex-col w-full">
            <div className="flex max-sm:block items-center w-full mb-3 max-sm:mb-2 max-sm:pl-2">
              <div className="flex-1 flex items-center">
                <SelectBox className="text-gray300" value='Items type' size={'middle'} options={[{ name: 'Items type' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')} />
                <FilterSearch />
              </div>
              <div className="flex items-center">
                <SortBy />
                <button className="flex items-center justify-center bg-almost_black rounded-lg ml-5 w-9 h-9"><Image alt="image" src="/icons/help.svg" width={18} height={18} /></button>
              </div>
            </div>
            <div className="w-full grid grid-cols-8 gap-1">
              {items.length > 0 ? items.map((item, index) => <Item data={item} key={index} />) : <></>}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    items: state.default.services.overview.items,
    loading: state.default.services.overview.loading,
    error: state.default.services.overview.error,
    filterTime: state.default.services.filter.filterTime,
    filterExterior: state.default.services.filter.filterExterior,
    filterGame: state.default.services.filter.filterGame,
    minPrice: state.default.services.filter.minPrice,
    maxPrice: state.default.services.filter.maxPrice,
    filterSortBy: state.default.services.filter.filterSortBy,
    filterSearchText: state.default.services.filter.filterSearchText,
    filters: state.default.services.filter.filters,
    filterBrand: state.default.services.filter.filterBrand,
    filterStickerCount: state.default.services.filter.filterStickerCount
  }),
  dispatch => ({
    overviewActions: bindActionCreators({ getItems }, dispatch)
  })
)(Overview)
