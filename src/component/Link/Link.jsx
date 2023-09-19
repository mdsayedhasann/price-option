import React from "react";
import PropTypes from 'prop-types';
const Link = ({ route }) => {
  return (
    <li className=" mr-10 text-xl" key={route.id}>
      <a href={route.path}> {route.name} </a>
    </li>
  );
};

Link.protoTypes = {
    route: PropTypes.object
    // React: PropTypes.func
}

export default Link;
