import React from 'react';
import PropTypes from 'prop-types';
import { useFetchFilms } from '../../hooks/useFetchFilms';
import Loader from '../Loader/Loader';

const Films = ({ item }) => {

    const { films, loadingFilms } = useFetchFilms(item);


    if (loadingFilms) return <Loader />
   
    return (
         <div className="section">
            <h3 className='section__header'>Films</h3>
            <ul className='section__list'>
             {films.length ? films.map(({title, episode_id, director, producer, release_date, url}) => (
        <li className="section__item" key={url}>
            <p className="section__title" key={title}>{title}</p>
            <p className="section__episode_id" key={episode_id}>Episode id: {episode_id}</p>
            <p className="section__director" key={director}>Director: {director}</p>
            <p className="section__producer" key={producer}>Producer: {producer}</p>
        <p className="section__release_date" key={release_date}>Release date: {release_date}</p>
        </li>
       )): 'Not Found'} 
       </ul>
        </div>
    );
};
Films.propTypes = {
  children: PropTypes.any,
  item: PropTypes.array,
}

export default Films;