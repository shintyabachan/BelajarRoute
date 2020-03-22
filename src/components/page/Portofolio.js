import React, {Component} from 'react';
import MyCard from "../MyCard";
import { Row,Col } from 'antd';

class Portofolio extends Component {
    render() {
        return (
            <div>
                <h2>PORTOFOLIO</h2>
                <h5>Basically, I don't know what should I write here, so for now I just wrote my final project...</h5>
                <hr/>
                <br/>
                <Row gutter={16} justify="center" type="flex">
                    <Col lg={7} md={12}>
                        <MyCard 
                            alt="GOCIN" 
                            img="images/portofolio/1.png"
                            title="GOCIN"
                            description="Movie review web, 2019"
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="KADOKU" 
                            img="images/portofolio/2.png"
                            title="KADOKU"
                            description="System Informatio of gift store, 2018"                            
                        />
                    </Col>                    
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="PeTa (Petunjuk Wisata)" 
                            img="images/portofolio/3.png"
                            title="PeTa (PetunukWisata)"
                            description="System Information of Tour, 2018"                            
                        />
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default Portofolio;