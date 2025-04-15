import React from 'react'
import card from "../../assets/images/card.png"
import cardd from "../../assets/svg/cardd.svg"
import carddd from "../../assets/svg/carddd.svg"
import cardddd from "../../assets/svg/cardddd.svg"
// import cardsholpon from "../../assets/svg/cardsholpon.svg"
// import cardshs from "../../assets/svg/cardshs.svg"
import { MdEditCalendar } from "react-icons/md";
import './cardDetails.scss'
import { BiSelection } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { RiBuildingLine } from "react-icons/ri";
import { RiDashboardLine } from "react-icons/ri";
import { TbFridge } from "react-icons/tb";
import { BiBath } from "react-icons/bi";
import { BiSolidCarGarage } from "react-icons/bi";
function CardDetails() {
    return (
        <div className='cardDetails'>
            {/* <div className='container'> */}



                <div className="card-FORSALE">
                    <div className='flex justify-between mb-[30px]'>
                        <h2 className="title">РОСКОШНАЯ ВИЛЛА НА ЗАКАТЕ</h2>
                        <button className="status-btn">
                            <p>ДЛЯ ПРОДАЖИ</p>
                        </button>
                    </div>

                    <div className="info-row mb-[30px]">
                        <div className="location">
                            <i className="fas fa-map-marker-alt" /> город Чолпон-Ата
                        </div>
                        <div className="divider" />
                        <div className="posted">
                            <i className="far fa-clock" /> 11 дней назад
                        </div>
                    </div>

                    <div className="price">
                        $3,98,000 <span>($344,00 / sqft)</span>
                    </div>
                </div>


                <div className='card-img'>
                    <div className="main-img">
                        <img src={card} alt="Main" />
                    </div>
                    <div className="side-imgs">
                        <img src={cardd} alt="Side 1" />
                        <img src={carddd} alt="Side 2" />
                        <img src={cardddd} alt="Side 3" />
                    </div>
                </div>

                <div className='card-ph'>
                    <h2>Описание недвижимости</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Congue malesuada in molestie habitant sodales vitae aliquam leo enim. Ullamcorper quis sed sed velit lectus. Libero quis elit lacus amet cras fermentum vel. Aliquet bibendum nunc morbi quis suspendisse sollicitudin egestas feugiat praesent. Blandit felis ullamcorper et ut sodales in eget aliquam. Turpis pharetra in eget consectetur ut proin posuere urna. Pretium consectetur et in tellus risus eu eget.
                    </p>
                </div>

                <div className='card-review'>
                    <h2>Обзор недвижимости</h2>
                    <div className='review-buttons'>
                        <button>
                            <RiBuildingLine />
                            <div>
                                комнаты

                                <span>2</span>
                            </div>

                        </button>
                        <button>
                            <BiBath />
                            <div>
                                Ванна

                                <span>1</span>
                            </div>
                        </button>
                        <button>
                            <TbFridge />
                            <div>
                                кухня

                                <span>1</span>
                            </div>
                        </button>
                        <button>
                            <RiDashboardLine />
                            <div>
                                Тип

                                <span>Villa</span>
                            </div>
                        </button>
                        <button>
                            <MdEditCalendar />
                            <div>
                                год постройки

                                <span>2023</span>
                            </div>

                        </button>
                        <button>
                            <IoBedOutline />
                            <div>
                                Тип
                                <span>2</span>
                            </div>

                        </button>
                        <button>
                            <BiSelection />
                            <div>
                                кв.фут

                                <span>1,148 </span>
                            </div>
                        </button>
                        <button>
                            <BiSolidCarGarage />
                            <div>
                                Гараж
                                <span>1</span>
                            </div>

                        </button>
                    </div>
                </div>

                <h4 className='header-УДОБСТВА'>УДОБСТВА</h4>
                <div className='card-conveniences'>
                    <div>
                        <div>✔</div>
                        <p>Спортзал</p>
                    </div>

                    <div>
                        <div>✔</div>
                        <p>Гараж</p>
                    </div>
                    <div>
                        <div>✔</div>
                        <p>Сад</p>
                    </div>
                    <div>
                        <div>✔</div>
                        <p>Камин</p>
                    </div>
                    <div>
                        <div>✔</div>
                        <p>Бассейн</p>
                    </div>
                    <div>
                        <div>✔</div>
                        <p>Стоянка</p>
                    </div>
                    <div>
                        <div>✔</div>
                        <p>Площадка</p>
                    </div>
                    <div>
                        <div>✔</div>
                        <p>Клубный дом</p>
                    </div>

                </div>
            </div>
        // </div>
    )
}

export default CardDetails;
