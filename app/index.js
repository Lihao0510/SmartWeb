import React from 'react';

import {render} from 'react-dom';
import Navibar from './view/NaviBar'
import HelloWorld from './view/HelloWorld'
import ButtonGroup from './view/ButtomGroup'

class Page extends React.Component {
    render() {
        return (
            <div>
                <Navibar/>
                <HelloWorld/>
                <ButtonGroup/>
            </div>
        )
    }
}

render(<Page/>, document.getElementById('app'));