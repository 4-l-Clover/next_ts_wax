import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeGame } from '@services/filter/filterActions'

type Props = {
  currentItem: any,
  filterActions: {
    changeGame: Function
  }
}

function Breadcrumb (props: Props) {
  const item = props.currentItem.data[0]
  return (
    <div className="flex mb-4 w-272">
      <Image className="flex-1" alt="image" src={item.game === 'csgo' ? '/img/_game-icon3.svg' : item.game === 'dota2' ? '/img/_game-icon2.svg' : '/img/_game-icon1.svg'} width={18} height={18} loading="lazy"/>
      <Link href="/"><button onClick={() => props.filterActions.changeGame(item.game)} className="text-gray500 font-poppins font-light text-sm mx-3">{item.game === 'csgo' ? 'CS:GO' : 'Dota2'}</button></Link>
      {/* <Image className="flex-1" alt="image" src="/icons/arrow-right.svg" width={7} height={14} />
      <button className="text-gray500 font-poppins font-light text-sm mx-3">{item.category}</button> */}
      <Image className="flex-1" alt="image" src="/icons/arrow-right.svg" width={7} height={14} />
      <button className="text-gray500 font-poppins font-light text-sm mx-3">{item.name}</button>
      {/* <Image className="flex-1" alt="image" src="/icons/arrow-right.svg" width={7} height={14} />
      <button className="text-gray500 font-poppins font-light text-sm mx-3">Redline (Minimal-Wear)</button> */}
    </div>
  )
}

export default connect(
  state => ({
    filterGame: state.default.services.filter.filterGame,
    currentItem: state.default.services.itemDetail.currentItem
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeGame }, dispatch)
  })
)(Breadcrumb)
