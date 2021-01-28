import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSalesHistory } from '@services/itemDetail/itemDetailActions'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'

const SelectBox = dynamic(() =>
  import('../..').then((mod) => mod.SelectBox, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type Props = {
  currentItem: any,
  salesHistory: any,
  itemDetailActions: {
    getSalesHistory: Function
  }
}

const data = []

function SalesGraph (props: Props) {
  React.useEffect(() => {
    props.itemDetailActions.getSalesHistory({ name: props.currentItem.data[0].name })
  }, [])

  React.useEffect(() => {
    for (let i = 0; i < props.salesHistory.length; i++) {
      data.push({
        time: new Date(props.salesHistory[i].day).toLocaleDateString('en-US'),
        value: parseInt(props.salesHistory[i].avg) / 1000
      })
    }
  }, [props.salesHistory])

  // console.log(props.currentItem.data[7])
  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="flex items-center mb-4">
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Sales</div>
        <SelectBox className="text-gray300" value='Price High to Low' size={'middle'} options={[{ name: 'Price High to Low' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')} />
      </div>
      {data.length > 0 && <div>
        <AreaChart width={390} height={226} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-green)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--color-green)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time"/>
          <YAxis/>
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Area type="monotone" dataKey="value" stroke="var(--color-green)" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>}
    </div>
  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem,
    salesHistory: state.default.services.itemDetail.salesHistory
  }),
  dispatch => ({
    itemDetailActions: bindActionCreators({ getSalesHistory }, dispatch)
  })
)(SalesGraph)
