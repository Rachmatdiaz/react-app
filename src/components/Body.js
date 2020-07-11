import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import './Header.css';
import compas1 from '../assets/compas1.jpg';
import compas2 from '../assets/compas2.jpg';
import compas3 from '../assets/compas3.jpg';


function Body (props) {
  return (
    <CardDeck className="card" >
      <Card>
        <CardImg top width="100%" src={compas1} alt="fotosepatu" />
        <CardBody>
          <CardTitle>Compass Gazelle Hi Red</CardTitle>
          <CardText>Model dengan potongan tinggi ini terinspirasi dari tahun 1950-an, model ini langsung mendapatkan banyak apresiasi dari para penggemar sepatu Compass..</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={compas2} alt="foto sepatu" />
        <CardBody>
          <CardTitle>Compass Gazelle x @darahkubiru </CardTitle>
          <CardText>Sepatu Compass untuk @darahkubiru
            Bentuk apresiasi dari sepatu Compass untuk komunitas denim terbesar di Indonesia.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={compas3} alt="foto sepatu" />
        <CardBody>
          <CardTitle>Sepatu Compass 98 Vintage</CardTitle>
          <CardText>Klasik premium, mungkin dua kata ini yang dapat mewakili dari hasil eksekusi kolaborasi antara sepatu Compass dan Old Blue Co. Terinspirasi dari engineered boots, Old Blue Co mengagas sebuah ide menggabungkan sepatu vulkan yang klasik dengan boots.
        </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Body;