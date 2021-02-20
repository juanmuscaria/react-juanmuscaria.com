import React from "react";
import PropTypes from "prop-types";
import DynamicSVG from "./DynamicSVG";
import {Col, Container, Row} from "react-bootstrap";

class GithubProject extends React.Component<any> {
    static propTypes = {
        repo: PropTypes.object.isRequired,
        owner: PropTypes.object.isRequired
    };

    state = {
        repoData: undefined
    }

    componentDidMount() {
        // fetch("https://api.github.com/repos/" + this.props.owner + "/" + this.props.repo)
        //     .then(res => res.json())
        //     .then(json => this.setState({ repoData: json }));
    }

    render() {
        //const repoData:any = this.state.repoData;
        //
        // if(repoData) {
        //     let name = repoData.name;
        //     let description = repoData.description == null ? "No description provided" : repoData.description;
        //
        // }
        // return <div>error</div>;
        return (
            <a href={`https://github.com/${this.props.owner}/${this.props.repo}`}>
                <img className="gh-card" src={`https://gh-card.dev/repos/${this.props.owner}/${this.props.repo}.svg`} alt={`${this.props.owner}/${this.props.repo}`}/>
            </a>
        );
    }
}

export default GithubProject;