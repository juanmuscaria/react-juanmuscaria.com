import { Button, PageHeader } from "antd";
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";
import '../App.less';

class NavigationBar extends React.Component<any> {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const {location} = this.props;
        return (
            <div className="header-div">
                <PageHeader
                    className="site-page-header"
                    title={<FormattedMessage id="NavigationBar.Title"/>}
                    extra={[
                        <Link to="/">
                            <Button type={
                                location.pathname === "/" ? "primary" : "default"}>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <FormattedMessage id="NavigationBar.Home"/>
                            </Button>
                        </Link>,
                        <Link to="/projects">
                            <Button type={
                                location.pathname === "/projects" ? "primary" : "default"}>
                                <FormattedMessage id="NavigationBar.Projects"/>
                            </Button>
                        </Link>,
                        <Link to="/contact">
                            <Button type={
                                location.pathname === "/contact" ? "primary" : "default"}>
                                <FormattedMessage id="NavigationBar.Contact"/>
                            </Button>
                        </Link>,
                    ]}
                />
            </div>
        );
    }
}

export default NavigationBar;