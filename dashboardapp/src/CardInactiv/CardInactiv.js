import React from 'react';
import * as moment from 'moment';
import {
  Card, CardText, CardBody, CardHeader,
  CardFooter, CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const CardInactiv = (props) => {
  const headerStyle = {fontWeight:'bold',color:'#C62121',fontSize:'20px'};
  const rowStyle = {display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'};
  return (
    <Row style={rowStyle}>
        <Col sm="6">
            <Card>
                <CardHeader style={headerStyle}>Deconectat</CardHeader>
                <CardBody className="text-left">
                    <CardTitle>Parking Code: {props.data.parkingCode}</CardTitle>
                    <CardSubtitle>Adresa: {props.data.adresa}</CardSubtitle>
                    <CardText>Locuri Total: {props.data.locuriTotal}</CardText>
                </CardBody>
                <CardFooter className="text-left">Ultima conectare: {moment(props.data.dateTime).format('YYYY-MM-DDThh:mm:ss')}</CardFooter>
            </Card>
        </Col>
    </Row>
  );
};

export default CardInactiv;