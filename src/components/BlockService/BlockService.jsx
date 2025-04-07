import React from 'react'
import checkIcon from '../../assets/svg/check.svg'
import shakeIcon from '../../assets/svg/shake.svg'
import moneyIcon from '../../assets/svg/money.svg'
import supportIcon from '../../assets/svg/support.svg'
import './service.scss'

function BlockService() {
  return (
    <div className='out container'>
      <h1>Наши услуги</h1>
      <div className='service container'>
        <div className='first'>
          <div className='text'>
            <button className='btn1'>
              <img src={checkIcon} alt="check" />
            </button>
            <h3>Продать недвижимость</h3>
          </div>
          <button className='btn2'>Получить услугу</button>
        </div>
        <div className='second'>
          <div className='text'>
            <button className='btn1'>
              <img src={shakeIcon} alt="shake" />
            </button>
            <h3>Срочный выкуп недвижимости</h3>
          </div>
          <button className='btn2'>Получить услугу</button>
        </div>
        <div className='third'>
          <div className='text'>
            <button className='btn1'>
              <img src={moneyIcon} alt="money" />
            </button>
            <h3>Инвестиции в недвижимость</h3>
          </div>
          <button className='btn2'>Получить услугу</button>
        </div>
        <div className='fourth'>
          <div className='text'>
            <button className='btn1'>
              <img src={moneyIcon} alt="check" />
            </button>
            <h3>Подобрать недвижимость</h3>
          </div>
          <button className='btn2'>Получить услугу</button>
        </div>
        <div className='fifth'>
          <div className='text'>
            <button className='btn1'>
              <img src={supportIcon} alt="shake" />
            </button>
            <h3>Юридическое сопровождение</h3>
          </div>
          <button className='btn2'>Получить услугу</button>
        </div>
      </div>
    </div>
  )
}

export default BlockService
