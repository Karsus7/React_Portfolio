import React from 'react';

import Card from '../components/Card';

import dayPlanner from '../assets/images/Day_Planner.png';
import employee from '../assets/images/Employee_Summary.png';
import foodies from '../assets/images/Foodies.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Day Planner',
                    subTitle: 'A useful way to plan your day',
                    imgSrc: dayPlanner,
                    link: 'https://github.com/Karsus7/Day_Planner',
                },
                {
                    id: 1,
                    title: 'Day Planner',
                    subTitle: 'The cookbook for developers',
                    imgSrc: employee,
                    link: 'https://github.com/cjmartin007/Foodies_Recipes',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Day Planner',
                    subTitle: 'The cookbook for developers',
                    imgSrc: foodies,
                    link: 'https://github.com/cjmartin007/Foodies_Recipes',
                    selected: false
                },

            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;