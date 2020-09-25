import React, { Component } from 'react'
import { Container, Table, Row, Col } from 'reactstrap'

export default class CartDetails extends Component {
    render() {
        return (
            <Container className="justify-content-center my-4">
                <Row>
                    <Col className="mx-auto" xs="10">
                        <h1 className="text-center mb-4">YOUR CART</h1>
                        <Table striped>
                            <thead>
                                <tr>
                                    <td>Quantity</td>
                                    <td>Price</td>
                                    <td>Product</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}
