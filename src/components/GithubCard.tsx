import React from "react";
import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

class GithubCard extends React.Component<any> {
    static propTypes = {
        repo: PropTypes.object.isRequired,
        owner: PropTypes.object.isRequired
    };

    state = {
        repoData: undefined
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/" + this.props.owner + "/" + this.props.repo)
            .then(res => res.json())
            .then(json => this.setState({ repoData: json }));
    }

    render() {
        const repoData:any = this.state.repoData;

        if(repoData) {
            let name = repoData["name"];
            let description = repoData["description"] == null ? "No description provided" : repoData["description"];
            let language = repoData["language"];
            let stars = repoData["stargazers_count"];
            let forks = repoData["forks_count"];
            return <Card bg="secondary">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={`https://github.com/${this.props.owner}/${this.props.repo}`}>GitHub</Card.Link>
                    <Card.Footer>[{language}]  [Stars:{stars}]  [Forks:{forks}]</Card.Footer>
                </Card.Body>
            </Card>;
        }
        return <Card bg="secondary">
            <Card.Body>
                <Card.Title>{this.props.repo}</Card.Title>
                <Card.Text>
                    Unable to contact Github's api :(
                </Card.Text>
                <Card.Link href={`https://github.com/${this.props.owner}/${this.props.repo}`}>GitHub</Card.Link>
            </Card.Body>
        </Card>;
    }
}

export default GithubCard;