import React from 'react'
import '../Advertis/advertis.scss'
import AdBlock from '../AdBlock/AdBlock'

function AdPage() {
  return (
    <div className="ad-page">
      <div className="ad-header">
        <h2>Мои объявления</h2>
        <button className="add-new-btn">Добавить новое объявление</button>
      </div>

      <AdBlock />
    </div>
  )
}

export default AdPage
