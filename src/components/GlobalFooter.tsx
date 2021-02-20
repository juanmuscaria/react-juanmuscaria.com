import React from "react";
import {Link} from "react-router-dom";

class GlobalFooter extends React.Component {
    render() {
        return (
            <div>
                <a className='' href='https://juanmuscaria.com/'>
                    juanmuscaria
                </a>
                &nbsp;<Link className="ant-spin-text" to="/duck">&copy;</Link> {new Date().getFullYear()}{' '}
            </div>
        );
    }
}

export default GlobalFooter;