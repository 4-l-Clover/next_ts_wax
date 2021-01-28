import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMoreSameItems } from '@services/itemDetail/itemDetailActions'
import { Skeleton, Progress } from 'antd'
import dynamic from 'next/dynamic'

// const SelectBox = dynamic(() =>
//   import('../..').then((mod) => mod.SelectBox, e => null as never),
//   { loading: function loadSkeleton() { return <Skeleton /> } }
// )

const Rocket = dynamic(() =>
  import('../..').then((mod) => mod.Rocket, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const MarketName = dynamic(() =>
  import('../..').then((mod) => mod.MarketName, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

const Suggested = dynamic(() =>
  import('../..').then((mod) => mod.Suggested, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type Props = {
  currentItem: any,
  moreSameItems: [],
  itemDetailActions: {
    getMoreSameItems: Function
  }
}

function SaleOrders (props: Props) {
  const itemsTemp = props.currentItem.data[1][0]
  const otherEx = props.currentItem.data[6]
  const otherExTemp = []

  const [ex, setEx] = React.useState('')

  // function setExterior(ex) {
  //   if (ex === "BS") ex = "battle scarred";
  //   if (ex === "FN") ex = "factory new";
  //   if (ex === "WW") ex = "well worn";
  //   if (ex === "FT") ex = "field tested";
  //   if (ex === "MW") ex = "minimal wear";
  //   setEx(ex)
  //   loadMore()
  // }
  React.useEffect(() => {
    if (props.currentItem.data[0] && props.currentItem.data[0].exterior) {
      const txEx = props.currentItem.data[0].exterior
      let ex = null
      if (txEx === 'BS') ex = 'battle scarred'
      if (txEx === 'FN') ex = 'factory new'
      if (txEx === 'WW') ex = 'well worn'
      if (txEx === 'FT') ex = 'field tested'
      if (txEx === 'MW') ex = 'minimal wear'
      setEx(ex)
    }
    if (props.currentItem.data[6]) {
      for (let i = 0; i < otherEx.length; i++) {
        otherExTemp.push({
          value: otherEx[i].exterior,
          name: otherEx[i].exterior + '-' + otherEx[i].price / 1000
        })
      }
    }
  }, [])

  const [items, setItems] = React.useState(itemsTemp)
  const [skip, setSkip] = React.useState(items.length)

  async function loadMore () {
    let name = props.currentItem.data[0].name.replace(/[^a-z\d]+/gi, '-')
    if (name.charAt(name.length - 1) === '-') { name = name.substr(0, name.length - 1) }
    if (name.charAt(0) === '-') name = name.substr(1, name.length - 1)
    name = name.toLowerCase()

    const n = name
      .replace('minimal wear', '')
      .replace('factory new', '')
      .replace('battle scarred', '')
      .replace('well worn', '')
      .replace('field tested', '')
    await props.itemDetailActions.getMoreSameItems({
      name: n,
      ex: ex,
      time: '12h',
      skip: skip
    })
  }

  React.useEffect(() => {
    setItems(items.concat(props.moreSameItems))
    setSkip(skip + props.moreSameItems.length)
  }, [props.moreSameItems])

  return (
    <div className="bg-gray700 rounded-lg p-6 mb-2">
      <div className="flex items-center mb-4">
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Sale Orders</div>
        {/* {otherEx && otherEx.length && otherEx[0].exterior &&
          <SelectBox className="text-gray300" value={props.currentItem.data[0].exterior} size={'middle'} options={otherExTemp} nameField='name' valueField='value' onSelect={() => console.log('selected')} />
        } */}
      </div>
      {items.length > 0 &&
        items.map((item, index) =>
          <div className="bg-gray600 rounded-lg px-4 py-3 mb-2" key={index}>
            <div className="flex items-center mb-4">
              <div className="flex items-center flex-1">
                <img alt="image" src={item.image} width={64} height={48} loading="lazy" />
                <div className="flex flex-col justify-center ml-5">
                  <div className="flex w-full">
                    <MarketName className="flex-1 text-gray500 font-poppins font-light text-xs" data={item}/>
                    {
                      (item.float || (item.inspect_item && item.inspect_item.floatvalue)) &&
                      <div className="text-gray300 font-poppins font-medium text-xs">
                        {item.float ? parseFloat(item.float).toFixed(4) : item.inspect_item ? parseFloat(item.inspect_item.floatvalue).toFixed(4) : ''}
                      </div>
                    }
                  </div>
                  <div className="w-40">
                    {item.float ? <Progress percent={parseFloat(item.float) * 100} /> : (item.inspect_item && item.inspect_item.floatvalue) ? <Progress percent={(item.inspect_item.floatvalue) * 100} /> : <div className="h-5.5"></div>}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-almost_white font-poppins font-medium text-sm mr-4">$ {item.price / 1000}</div>
                <Suggested data={item} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1 flex items-center">
                <div className="flex-1 flex items-center">
                  <img className="rounded-full" alt="image" src={item.user.avatar} width={18} height={18} loading="lazy" />
                  <div className="text-gray300 font-poppins font-light text-xs ml-2">{item.user.name}</div>
                </div>
                {item.inspect_item && <div className="flex items-center ml-12">
                  {item.inspect_item.stickers.map((sticker, index) =>
                    < div className="mr-3 h-4.5" key={index}>
                      <img alt="image" src={sticker.steam_price.img.indexOf('http') === -1
                        ? `https://steamcommunity-a.akamaihd.net/economy/image/${sticker.steam_price.img}`
                        : sticker.steam_price.img} width={18} height={18} loading="lazy" />
                    </div>
                  )}
                </div>}
              </div>
              <div className="flex items-center">
                <div className="flex-1 flex items-center">
                  <Rocket auto={item.auto} by={item.by} />
                </div>
                <div className="flex items-center ml-6">
                  <button className="flex items-center justify-center w-24 bg-almost_black rounded-lg text-gray300 font-poppins font-medium text-sm">Buy Now</button>
                  <button className="flex items-center justify-center ml-2 border-2 border-solid border-gray800 rounded-lg w-10 h-10">
                    <Image alt="image" src="/icons/shopping-add.svg" width={16} height={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {items.length < props.currentItem.data[1][1] &&
        <button className="flex items-center w-full px-4 h-12 rounded-lg bg-almost_black" onClick={() => loadMore()}>
          <Image alt="image" src="/icons/more-horizental.svg" width={22} height={6} />
          <div className="text-gray300 font-poppins font-medium text-sm text-center w-full">Load more</div>
        </button>
      }
    </div>
  )
}

export default connect(
  state => ({
    currentItem: state.default.services.itemDetail.currentItem,
    moreSameItems: state.default.services.itemDetail.moreSameItems
  }),
  dispatch => ({
    itemDetailActions: bindActionCreators({ getMoreSameItems }, dispatch)
  })
)(SaleOrders)
