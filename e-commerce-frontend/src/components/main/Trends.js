// Libraries:
import React, { Component } from 'react';
import ProductCard from '../toolbox/ProductCard';

// Components:
import { Container, Row, Col } from 'reactstrap';

export default class Trends extends Component {
    render() {
        return (
            <div className="py-4 mb-5 text-center">
                <h1>TRENDS</h1><br />
                <Container>
                    <Row>
                        <Col className="my-3" lg="2" md="4" sm="4" xs="6">
                            <ProductCard className="my-1" img="https://www.alchemycorner.com/wp-content/uploads/2018/01/AC_YourProduct2.jpg" title="Sample" price="10$" description="This is a product." />
                        </Col>

                        <Col className="my-3" lg="2" md="4" sm="4" xs="6">
                            <ProductCard className="my-1" img="https://www.alchemycorner.com/wp-content/uploads/2018/01/AC_YourProduct2.jpg" title="Sample" price="10$" description="This is a product." />
                        </Col>

                        <Col className="my-3" lg="2" md="4" sm="4" xs="6">
                            <ProductCard className="my-1" img="https://www.alchemycorner.com/wp-content/uploads/2018/01/AC_YourProduct2.jpg" title="Sample" price="10$" description="This is a product." />
                        </Col>

                        <Col className="my-3" lg="2" md="4" sm="4" xs="6">
                            <ProductCard className="my-1" img="https://www.alchemycorner.com/wp-content/uploads/2018/01/AC_YourProduct2.jpg" title="Sample" price="10$" description="This is a product." />
                        </Col>

                        <Col className="my-3" lg="2" md="4" sm="4" xs="6">
                            <ProductCard className="my-1" img="https://www.alchemycorner.com/wp-content/uploads/2018/01/AC_YourProduct2.jpg" title="Sample" price="10$" description="This is a product." />
                        </Col>

                        <Col className="my-3" lg="2" md="4" sm="4" xs="6">
                            <ProductCard className="my-1" img="https://www.alchemycorner.com/wp-content/uploads/2018/01/AC_YourProduct2.jpg" title="Sample" price="10$" description="This is a product." />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
