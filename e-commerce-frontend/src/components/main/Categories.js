// Libraries:
import React, { Component } from 'react';

// Components:
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export default class Categories extends Component {

    render() {
        return (
            <div class="py-4 text-center" id="categories">
                <h1>CATEGORIES</h1><br />
                <Container>
                    <Row>
                        <Col className="my-3" md="4" sm="6" xs="6">
                            <h3><FontAwesomeIcon className="text-secondary" icon={faBookmark} /><br />Category1</h3>
                        </Col>

                        <Col className="my-3" md="4" sm="6" xs="6">
                            <h3><FontAwesomeIcon className="text-secondary" icon={faBookmark} /><br />Category2</h3>
                        </Col>

                        <Col className="my-3" md="4" sm="6" xs="6">
                            <h3><FontAwesomeIcon className="text-secondary" icon={faBookmark} /><br />Category3</h3>
                        </Col>

                        <Col className="my-3" md="4" sm="6" xs="6">
                            <h3><FontAwesomeIcon className="text-secondary" icon={faBookmark} /><br />Category4</h3>
                        </Col>

                        <Col className="my-3" md="4" sm="6" xs="6">
                            <h3><FontAwesomeIcon className="text-secondary" icon={faBookmark} /><br />Category5</h3>
                        </Col>

                        <Col className="my-3" md="4" sm="6" xs="6">
                            <h3><FontAwesomeIcon className="text-secondary" icon={faBookmark} /><br />Category6</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
