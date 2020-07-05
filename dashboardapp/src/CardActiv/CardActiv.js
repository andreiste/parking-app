import React from 'react';
import * as moment from 'moment';
import {
  Card, CardBody, CardHeader,
  CardFooter, Row, Col} from 'reactstrap';
import GradOcupare from '../GradOcupare/GradOcupare';
import CrestereProcentuala from '../CrestereProcentuala/CrestereProcentuala';
import Info from '../Info/Info';

const CardActiv = (props) => {
  const headerStyle = {fontWeight:'bold',color:'#000',fontSize:'18px'};
  const rowStyle = {display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'};
  const colStyle = {display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}
  return (
    <Row style={rowStyle}>
        <Col sm="6">
            <Card>
                <CardHeader style={headerStyle}>{props.data.parkingCode}</CardHeader>
                <CardBody>
                    <Row>
                        <Col style={colStyle}>
                            <GradOcupare procentOcupare = {props.data.procentOcupare} style={{justifyContent:'center'}}/>
                            <CrestereProcentuala crestereProcentuala = {props.data.crestereProcentuala}/>
                        </Col>
                        <Col style={colStyle}>
                            <Info infoData = {props.data}/>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter className="text-left">Data si timp: {moment(props.data.dateTime).format('YYYY-MM-DDThh:mm:ss')}</CardFooter>
            </Card>
        </Col>
    </Row>
  );
};

export default CardActiv;