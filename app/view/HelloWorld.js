/**
 * Created by lihao on 2017/4/6.
 */
import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

@observer
export default class HelloWorld extends React.Component {

    @observable name = "wangnima";

    render() {
        return (
            <div>
                <h2>
                    Hello World!
                </h2>
                <h3>
                    {this.name}
                </h3>
                <h3 onClick={() => this.name="zhaoritian"}>
                    Change Name
                </h3>
            </div>
        )
    }
}