import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import './App.css'
import 'animate.css'
export class Menue extends Component {
    state = {
        toggle: false
    }
    show = () => {
        this.setState({ toggle: true })
    }
    close = () => {
        this.refs.nav.style.left = '-300px'
        setTimeout(() => this.setState({ toggle: false }), 1000)
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-toggle" onClick={this.show}><Button type="primary" icon="menu-unfold" ghost></Button></div>
                {
                    this.state.toggle &&
                    <div ref="nav" className="nav-container animated rollIn">
                        <div className="close" onClick={this.close}>
                            <Button type="link" icon="close" ghost></Button>
                        </div>
                        <div className="header"></div>
                        <div className="menu">

                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Menue;
