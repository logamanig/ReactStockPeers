import React from 'react';
import {
    Card,
    CardTitle,
    CardBody,
    CardText,
    Col,
    Button
  } from 'reactstrap';

   
import PeerMetaData from './PeerMetaData';

const PeerCard = ( { symbol, isFetching, peerMetaData } ) => {
    let color = 'top';
    let peer = {
        symbol: symbol,
        isFetching: isFetching,
        peerMetaData: peerMetaData
    }

    return(
        <Col key={ symbol } md={4} sm={4} xs={12} className="mb-3">
            <Card
            inverse
            className={`border-0 bg-gradient-theme${
                !!color ? '-' : ''
            }${color}`}
            style={{
                height: 200,
            }}>
            <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardTitle>{symbol}</CardTitle>
                <PeerMetaData {...peer} />
            </CardBody>

            <CardBody className="d-flex justify-content-between align-items-center">
                <CardText></CardText>
                <Button outline color="light">
                    Click
                </Button>    
            </CardBody>
            </Card>
        </Col>
    );
}

export default PeerCard;