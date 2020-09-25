// Libraries:
import React, { Component } from 'react';

// Components:
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default class ProductCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.price}</CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <Button>Details</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
