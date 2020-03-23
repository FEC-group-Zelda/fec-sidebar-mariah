import React from 'react';
import Link from './Link.jsx';
import styled from 'styled-components';

import { FaInstagram, FaTwitter, FaFacebookF, FaConnectdevelop} from 'react-icons/fa';
// Website names

var array = ['Instagram', 'Twitter', 'Facebook', 'Website'];

//put social media icons here
var iconArray = ['➜', '♖', '∮', '◐' ];

const Ul = styled.ul`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style: none;
  margin: 0;
`;


const Links = ({links}) => (
  <Ul>
    {links.map((link, index) =>

      <Link
        link={link}
        linkName={array[index]}
        icon={iconArray[index]}
      />
    )}
  </Ul>
);

export default Links;