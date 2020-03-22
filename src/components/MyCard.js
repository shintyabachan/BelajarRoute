import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;

class MyCard extends React.Component{
    render() {
        return(
            <Card
                style={{ 
                    width: "200px",
                    margin: '16px 0', 
                    borderRadius: '5px',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}  
                cover={<img alt={this.props.alt} src={this.props.img} />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta                    
                    title={this.props.title}
                    description={this.props.description}
                />
            </Card>
        )
    }
}

export default MyCard;