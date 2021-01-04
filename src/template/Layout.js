import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../app.style';
import PropTypes from 'prop-types';

const API_BING = 'https://cors-anywhere.herokuapp.com/http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
const HOST_BING = 'https://cors-anywhere.herokuapp.com/http://www.bing.com';

export default function Layout({ children }) {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch(API_BING, {
      'headers': {
        "X-Requested-With": "XMLHttpRequest"
    }
    }).then((data) =>
      data.json().then((response) => {
        const dataImage = response.images[0];
        setImage(`${HOST_BING}${dataImage.urlbase}${dataImage.url}`);
      })
    );
  }, []);

  return (
    <main>
      <GlobalStyle image={image} />
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
