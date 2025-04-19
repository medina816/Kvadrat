import React from 'react'
import uploadIcon from '../../assets/svg/upload.svg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import './modalPage.scss'
function ModalPage() {
  return (
    <div className='modalka'>
               <IoIosArrowBack className='arrow1' />
      <div className='inside'>
        {/* ---- */}
        <div className='top'>
            <div className='top-text'>
            <h2>Заголовок</h2>
            </div>
            <div className='top-icon'>
                <img src={uploadIcon} alt="" />
                </div>
                {/* ---- */}
        </div>

        {/* ---- */}
        <div className='bottom'>
            <h3>Дабавить обзор активности</h3>
            <div className='blocks'>
                <div className='left'>
                    <div className='top-left'>
                        <p>Дабавить заголовок ...</p>
                    </div>
                    <button className='btn1'>Сохранить и опубликовать</button>
                </div>
                {/* ------ */}
                <div className='right'>
                    <button>Загрузите изображение</button>
                    <h2>Допустимые форматы : PNG , GIF , WEBP , 
                    MP3 , and MP4 </h2>
                </div>
                {/* ------- */}
            </div>
        </div>
        {/* ----- */}
      </div>
      <IoIosArrowForward  className='arrow2'/>

    </div>
  )
}

export default ModalPage
