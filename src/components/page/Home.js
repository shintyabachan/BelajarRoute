import React from 'react'
import { Row,Col,Button } from 'antd';
  
class Home extends React.Component{       
    render(){
        return(
            <div>
               <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}                 
                 >
                    <Col xs={10}
                        style={{ 
                            margin: '40px 30px',
                        }}  
                    >
                        <h1 style={{ margin:"0"}}>Hello there! I'am.. </h1>
                        <h1 style={{color:"#ef4b6c"}}> <b>Sally</b></h1>
                        <p/><p/>
                        <h4>"Sally has a pair of tiny black eyes, an orange beak and a body with yellow feathers. She also has a pair of small feet. Although she is naive, Sally can be quite clever sometimes. 
                            Furthermore, she is also a bit cunning because of the lack of attention from her friends, such as intending to steal Brown's heart by sticking by his side."</h4>
                        <p></p>
                        <Button href="profile">Get in touch?</Button>
                    </Col>

                    <Col xs={12}>
                        <Row>
                            <img src="images/sally1.webp" style={{width:"90%"}} alt="asd"/>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;