// This File provides the images and links to the profile page
import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Pictures
import dayPlanner from '../assets/images/Day_Planner.png';
import employee from '../assets/images/Employee_Summary.png';
import foodies from '../assets/images/Foodies.png';
import noteTaker from '../assets/images/Note_Taker.png';
import weather from '../assets/images/Weather_Dashboard.png';
import webOrganizer from '../assets/images/Web_Organizer.png';


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
                    link2: 'https://karsus7.github.io/Day_Planner/',
                },
                {
                    id: 1,
                    title: 'Employee Summary',
                    subTitle: 'A program for keeping track of employees',
                    imgSrc: employee,
                    link: 'https://github.com/Karsus7/Employee_Summary',
                    link2: 'https://github.com/Karsus7/Employee_Summary',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Foodies',
                    subTitle: 'A website for looking up food and recipes',
                    imgSrc: foodies,
                    link: 'https://github.com/cjmartin007/Foodies_Recipes',
                    link2: 'https://cjmartin007.github.io/Foodies_Recipes/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Note Taker',
                    subTitle: 'A website for taking notes',
                    imgSrc: noteTaker,
                    link: 'https://github.com/Karsus7/Note_Taker',
                    link2: 'https://sheltered-spire-02337.Headlinekuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Weather Dashboard',
                    subTitle: 'A custom made weather app',
                    imgSrc: weather,
                    link: 'https://github.com/Karsus7/Weather_Dashboard',
                    link2: 'https://karsus7.github.io/Weather_Dashboard/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Web Organizer',
                    subTitle: 'A website for organizing websites',
                    imgSrc: webOrganizer,
                    link: 'https://github.com/Karsus7/Web_Organizer',
                    link2: 'https://boiling-wave-32724.Headlinekuapp.com/',
                    selected: false
                },

            ]
        }
    }


    handleCardClick = (id) => {

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


    renderItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.renderItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;