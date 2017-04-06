/**
 * Created by lihao on 2017/4/6.
 */
import React from 'react'
import {Navbar} from "react-bootstrap";

export default class NaviBar extends React.Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">你好 What Fuck</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}
