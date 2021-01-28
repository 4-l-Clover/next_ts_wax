import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeGame } from '@services/filter/filterActions'

type Props = {
  filterActions: {
    changeGame: Function
  }
}

const games = [
  // { image: '/img/_game-icon1.svg', name: 'Team Fortress2', value: 'gc' },
  { image: '/img/_game-icon2.svg', name: 'DOTA2', value: 'dota2' },
  { image: '/img/_game-icon3.svg', name: 'CS:GO', value: 'csgo' }
]

const Games = (props: Props) => {
  const [showGames, setShowGames] = React.useState(false)

  const onChange = (value) => {
    props.filterActions.changeGame(value)
  }

  return (
    <div>
      <div className="cursor-pointer flex items-center border-t border-solid border-gray800 mt-4 py-4" onClick={() => setShowGames(!showGames)}>
        <div className="flex-1 text-gray300 font-poppins font-medium text-sm">Games</div>
        <button>
          {!showGames && <Image alt='image' src='/icons/arrow-bottom.svg' width={14} height={7} />}
          {showGames && <Image alt='image' src='/icons/arrow-up.svg' width={14} height={7} />}
        </button>
      </div>
      {
        showGames &&
        <div className="flex items-center flex-wrap">
          {games.map((game, index) =>
            <button key={index} className="flex items-center rounded-lg bg-gray600 px-4 py-3 mr-2 mb-2" onClick={() => onChange(game.value)}>
              <Image alt='image' src={game.image} width={18} height={18} />
              <div className="ml-3 text-gray300 font-poppins font-normal text-xs">{game.name}</div>
            </button>
          )}
        </div>
      }
    </div>
  )
}

export default connect(
  state => ({
    filterGame: state.default.services.filter.filterGame
  }),
  dispatch => ({
    filterActions: bindActionCreators({ changeGame }, dispatch)
  })
)(Games)
