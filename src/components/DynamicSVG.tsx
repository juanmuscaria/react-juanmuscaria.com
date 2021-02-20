import React from "react";
import PropTypes from "prop-types";

class DynamicSVG extends React.Component<any> {
    static propTypes = {
        url: PropTypes.object.isRequired
    };
    state = {
        svg: null,
        loading: false,
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.text())
            .then(text => this.setState({ svg: text }));
    }

    render() {
        const { loading, svg } = this.state;
        if (loading) {
            return <div>loading</div>;
        } else if(!svg) {
            return <div>error</div>;
        }
        // @ts-ignore
        return <div dangerouslySetInnerHTML={{ __html: this.state.svg}}/>;
    }
}

export default DynamicSVG;