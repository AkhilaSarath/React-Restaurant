import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';



function Restview() {
  const [restList, setRest] = useState([])

  // api to access data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))

  }
  console.log(restList)
    // object create for useParams
    const params = useParams()
    console.log(params.id);

      // find single restaurant data
  const singleRest = restList.find(i => i.id == params.id)
  console.log(singleRest);
  


 



  useEffect(() => {
    getData()
  }, [])



  return (
 
    <>
     {
        singleRest?
            (<Row>
                <Col lg={6} md={6}>
                    <img className='w-75 container p-5' style={{height:'800px'}}src={singleRest.photograph}></img>
                </Col>
                <Col lg={6} md={6}>
                <ListGroup>
          <ListGroup.Item><h1 className='text-warning'>{singleRest.name}</h1></ListGroup.Item>
          <ListGroup.Item>Address <strong>{singleRest.address}</strong></ListGroup.Item>
          <ListGroup.Item>Neighborhood<strong>{singleRest.neighborhood}</strong></ListGroup.Item>
          <ListGroup.Item>Cusine type<strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
          <ListGroup.Item>
            <Operatingtime workingTime={singleRest.operating_hours}/>
            <Review reviewList={singleRest.reviews}/>
          </ListGroup.Item>
        </ListGroup>
                </Col>
            </Row>
     
     ) :" " }
    </>
  )
}

export default Restview