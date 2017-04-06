/**
 * Created by lihao on 2017/4/6.
 */
import React from 'react'
import {ButtonToolbar, Button} from "react-bootstrap";

export default class ButtonGroup extends React.Component {
    render() {
        return (
            <ButtonToolbar>
                <Button>Default</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
            </ButtonToolbar>
        )
    }
}
