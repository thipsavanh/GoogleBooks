import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        title: "",
        toResults: false,
        results: []
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        if (this.state.query) {
            const query = this.state.query.trim();
            API.searchBooks(query)
                .then(res => {
                    this.setState({
                        toResults: true,
                        results: res.data.items
                    });
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        if (this.state.toResults) {
            return <Redirect to={{
                pathname: "/results",
                data: { results: this.state.results }
            }} />
        }
        return (
            <div>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Google Books Search</h1>
                            <p>Search For Books and Save The Books That Interest You</p>
                        </Jumbotron>
                        <Container fluid>
                            <form>
                                <Input
                                    value={ this.state.query }
                                    onChange={ this.handleInputChange }
                                    name="title"
                                    placeholder="Title (required)"
                                />
                                <FormBtn
                                    className="btn btn-info"
                                    onClick={ this.handleFormSubmit }
                                >
                                    Search
                               </FormBtn>
                            </form>
                        </Container>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search;