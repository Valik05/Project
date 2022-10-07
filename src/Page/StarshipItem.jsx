import React from 'react'
import { useParams } from 'react-router-dom';
import Films from '../Components/Films/Films';
import Loader from '../Components/Loader/Loader';
import { useFetchStarsheeps } from "../hooks/useFetchStarsheeps"
// import PropTypes from 'prop-types';
import './starship.css'
const StarshipItem = () => {
    const { id } = useParams();
    const { person, loading } = useFetchStarsheeps(id)
    if (loading) return <Loader />

    const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew } = person;
    return (
        <div className='details'>
            <div className="details__image">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="" />
            </div>
            <div className="details__bar"></div>
            <div className="details__info">
                <h3>{name}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam corrupti itaque! Quidem similique inventore eius nam esse earum voluptate velit molestias officia, fugit possimus omnis recusandae eaque et laborum ducimus beatae officiis pariatur aliquid. Itaque, cupiditate. Voluptas, adipisci ipsam.</p>
                <div className="details__starship">
                    <div>
                        <p>Model: {model}</p>
                        <p>Manufacturer: {manufacturer}</p>
                        <p>Cost in credits: {cost_in_credits}</p>
                    </div>
                    <div>
                        <p>Length: {length}</p>
                        <p>Atmospheric speed: {max_atmosphering_speed}</p>
                        <p>Crew: {crew}</p>
                    </div>
                </div>
            </div>
            <Films person={person}/>
        </div>
    );
};
// Item.propTypes = {
//     children: PropTypes.any,
//     error: PropTypes.object,
// };

export default StarshipItem;