import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types"

const PrivateRoutes = ({ children }) => {
    const activated = JSON.parse(localStorage.getItem('user'))
    return activated?.name ? children : <Navigate to="/main"/>
};

PrivateRoutes.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default PrivateRoutes;