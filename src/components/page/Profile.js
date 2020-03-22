import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Menu, Icon} from 'antd';
import MyCard from "../MyCard";


const { Title } = Typography;
const data = [
    { name:'Name',icons:'contacts',content:"Sally"},
    { name:'Date of birth',icons:'calendar',content:"October 15, 1999"},
    { name:'Address',icons:'environment',content:"Yogyakarta"},
    { name:'Phone',icons:'phone',content:"+62 852-7777-9090"},
    { name:'Email',icons:'mail',content:"sallysally@gmail.com"},
  ];

class Profile extends Component {
    render() {
        return (
            <div>
                 <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        paddingBottom: "50px",
                    }}                 
                 >
                    <Col xs={12}>
                        <Row>
                            <p/>
                            <p/>
                            <p/>
                            <p/>
                            <img src="images/sally1.webp" style={{objectFit:"cover",width:"100%"}} alt="asd"/>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row style={{ margin: '16px 16px' }}>
                            <p/>
                            <Col xs><Title>Sally Line</Title></Col>
                            <List
                                size="large"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                // bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Icon type={item.icons} theme="filled"/> &nbsp;&nbsp; &nbsp;
                                        <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                    </List.Item>
                                )}
                            />
                            <p/>
                        </Row>
                    </Col>

                </Row>
                <Row gutter={16} justify="center" type="flex">
                    <Col lg={7} md={12}>
                        <MyCard 
                            alt="Gadjah Mada University" 
                            img="images/portofolio/1.png"
                            title="Computer Science"
                            description="2017-2021"
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="SMA Ajhskdkjs" 
                            img="images/portofolio/2.png"
                            title="Senior High School"
                            description="2014-2017"                            
                        />
                    </Col>                    
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="SMP Jjksfkjsjk" 
                            img="images/portofolio/3.png"
                            title="Junior High School"
                            description="2011-2014"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="SD SFFHhjkshdfk" 
                            img="images/portofolio/5.png"
                            title="Elementary School"
                            description="2005-2011"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="TK JKjshdfkjs" 
                            img="images/portofolio/6.png"
                            title="Kindergarten"
                            description="2003-2005"                            
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;