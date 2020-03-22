import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../App.css';

class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item  key="menu">
                    <p onClick={this.props.showDrawer}>
                        <Icon className="btn-menu-navbar" type="menu-unfold"/>
                    </p>
                </Menu.Item>
            </Menu>
        );
    }
}
export default RightMenu;