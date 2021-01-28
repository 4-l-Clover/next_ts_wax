import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterSearch } from '@services/filter/filterActions'

type Props = {
  filterActions: {
    filterSearch: Function
  }
}

const FilterSearch = (props: Props) => {
  const onChange = (e) => {
    props.filterActions.filterSearch(e.target.value)
  }

  return (
    <div className="flex items-center ml-5 relative">
      <div className="absolute ml-4 mt-1">
        <Image alt="image" src="/icons/search.svg" width={12} height={12} />
      </div>
      <input placeholder="Search.." onChange={(e) => onChange(e)} className="h-9 w-45 bg-transparent text-gray300 rounded-lg border border-gray800 font-light text-sm pl-10 pr-3 py-2" />
    </div>
  )
}

export default connect(
  state => ({
    filterSearchText: state.default.services.filter.filterSearchText
  }),
  dispatch => ({
    filterActions: bindActionCreators({ filterSearch }, dispatch)
  })
)(FilterSearch)
