import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadGiveway } from '@services/topnav/topnavActions'

type Props = {
  giveway: any,
  loading: boolean,
  topnavActions: {
    loadGiveway: Function
  }
}

let timer = null
let totalTime = 0

const LeftNav = (props: Props) => {
  React.useEffect(() => {
    if (props.loading) return
    props.topnavActions.loadGiveway()
  }, [])

  const [tTime, setTTime] = React.useState(0)

  React.useEffect(() => {
    const { gw } = props.giveway
    if (gw) {
      totalTime = Math.floor((new Date(gw.end).getTime() - new Date(gw.time).getTime()) / 1000)
    }
  }, [props.giveway])

  React.useEffect(() => {
    startTimer()
    return () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }
  }, [])

  function startTimer () {
    if (timer) clearInterval(timer)
    timer = setInterval(() => countdown(), 1000)
  }

  function countdown () {
    if (totalTime >= 1) {
      totalTime--
    } else {
      totalTime = 0
    }
    setTTime(totalTime)
  }

  function getTime () {
    const minutes = Math.floor(tTime / 60)
    const seconds = tTime - minutes * 60

    return {
      minutes: padTime(minutes),
      seconds: padTime(seconds)
    }
  }

  function padTime (time) {
    if (time < 0) time = 0
    return (time < 10 ? '0' : '') + time
  }

  return (
    <div className="flex-1 flex items-center">
      <Link href="/">
        <button className="mr-12"><Image alt='image' src='/img/logo_main.svg' width={32} height={19} /></button>
      </Link>
      <button className="flex items-center mr-10">
        <Image alt='image' src='/icons/nav_market_w.svg' width={16} height={17} />
        <span className="ml-3 text-almost_white font-poppins font-medium">Market</span>
      </button>
      <button className="flex items-center mr-10">
        <Image alt='image' src='/icons/nav_socials.svg' width={16} height={17} />
        <span className="ml-3 text-gray500 font-poppins font-medium text-sm">Socials</span>
      </button>
      <button className="flex items-center mr-3">
        <Image alt='image' src='/icons/nav_giveaway.svg' width={16} height={17} />
        <span className="mx-3 text-gray500 font-poppins font-medium text-sm">Giveaway</span>
        <div className="h-7 w-14 rounded-lg p-2 bg-gray600 text-gray300 font-medium text-xs">{getTime().minutes} : {getTime().seconds}</div>
      </button>
      <button className="flex items-center px-4 py-2 ml-10 border-2 border-solid rounded-lg border-gray800">
        <Image alt='image' src='/icons/plus-circle.svg' width={18} height={18} />
        <span className="ml-3 text-almost_white font-poppins font-medium text-sm">Sell items</span>
      </button>
    </div>
  )
}

export default connect(
  state => ({
    giveway: state.default.services.topnav.giveway,
    loading: state.default.services.topnav.loading
  }),
  dispatch => ({
    topnavActions: bindActionCreators({ loadGiveway }, dispatch)
  })
)(LeftNav)
