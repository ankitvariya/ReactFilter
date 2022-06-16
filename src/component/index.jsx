import React, { useState } from "react"
import {Container , Row , Col , Image  , Button } from 'react-bootstrap'
import {FaHotjar} from 'react-icons/fa';
import {MdSlideshow} from 'react-icons/md';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {GiNewBorn , GiByzantinTemple} from 'react-icons/gi';
import ItemsList from './newsdata'

const Tabsapp = () => {
    const [isActive, setIsActive] = useState();
    const handleClick = (event) => {
        setIsActive(event.target.id);
        // console.log(isActive)
        // setIsActive(!isActive);
    };
    const[items, setItems] = useState(ItemsList);

     const filterItem = (catItem) => {
        const updateItems = ItemsList.filter((curElem) => {
            return curElem.category === catItem;
        })
        setItems(updateItems);
     }
    return(
        <>
        <section className="space-section">
            <Container>
                <Row>
                    <Col md={12} className="text-center text-md-left">
                        <h2>Live space</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Col>
                    <Col md={12} className="mt-5">
                        <div className="List-items-live">
                            <Button className={isActive == 1 ? 'active' : ''} id={1} onClick={function(event){setItems(ItemsList);handleClick(event);}} variant="outline-dark"   ><FaHotjar /><span>24h Treding</span></Button>
                            <Button className={isActive == 2 ? 'active' : ''} id={2} onClick={function(event){filterItem('latest');handleClick(event);}} variant="outline-dark"  ><MdSlideshow />Latest Shows</Button>
                            <Button className={isActive == 3 ? 'active' : ''} id={3} onClick={function(event){filterItem('populer');handleClick(event);}} variant="outline-dark"  ><MdSlideshow />Most Populer</Button>
                            <Button className={isActive == 4 ? 'active' : ''} id={4} onClick={function(event){filterItem('genesis');handleClick(event);}} variant="outline-dark" ><GiNewBorn />In Genesis</Button>
                            <Button className={isActive == 5 ? 'active' : ''} id={5} onClick={function(event){filterItem('temple');handleClick(event);}} variant="outline-dark" ><GiByzantinTemple />In Temple</Button>
                            <Button className={isActive == 6 ? 'active' : ''} id={6} onClick={function(event){filterItem('void');handleClick(event);}} variant="outline-dark" ><TiWeatherPartlySunny />In Void</Button>
                            <Button className={isActive == 7 ? 'active' : ''} id={7} onClick={function(event){filterItem('bayc');handleClick(event);}} variant="outline-dark" > In BAYC</Button>
                        </div>
                    </Col>
                    <Col md={12} className="tabs-content">
                        <Row>
                            {
                                items.map((elem) =>{
                                    const {image, title, subtitle, description} = elem;
                                    return( 
                                        <Col md={6} lg={4}>
                                            <div className="nft-card">
                                                <div className="nft-img">
                                                    <Image  src={image} className="img-fluid" alt="img"></Image>  
                                                </div>
                                                <div className="nft-body">
                                                    <h2 className="title">{title}</h2>
                                                    <div className="index-bord">
                                                        <p>{subtitle}</p>
                                                        <span>{description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                                    
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Tabsapp;