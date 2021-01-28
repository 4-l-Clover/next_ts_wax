import React from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSortBy } from '@services/filter/filterActions'

const SelectBox = dynamic(() =>
  import('../../components').then((mod) => mod.SelectBox, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type Props = {
  filterActions: {
    changeSortBy: Function
  }
}

const SortBy = (props:Props) => {
  const [sortBy, setSortBy] = React.useState('best_deals')
  const items = [
    { name: 'Best Deal', value: 'best_deals' },
    { name: 'High to Low', value: 'asc' },
    { name: 'Low to High', value: 'desc' },
    { name: 'Discount', value: 'profit' },
    { name: 'Float DESC', value: 'worst_float' },
    { name: 'Float ASC', value: 'best_float' },
    { name: 'Oldest', value: 'old' },
    { name: 'Newest', value: 'new' }
  ]

  const onChange = (value) => {
    setSortBy(value)
    props.filterActions.changeSortBy(value)
  }

  return <SelectBox className="text-gray300 w-32" value={sortBy} size={'middle'} options={items} nameField='name' valueField='value' onSelect={(value) => onChange(value)} />
}

export default connect(
  state => ({
    filterSortBy: state.default.services.filter.filterSortBy
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeSortBy }, dispatch)
  })
)(SortBy)
