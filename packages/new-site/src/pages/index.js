import React from 'react';
import Button from 'gatsby-theme-drupal/src/components/atoms/button';
import Index from 'gatsby-theme-drupal/src/components/templates/home';

const Home = () => {
  const settings = {
    field_name: '',
    field_slogan: '',
    field_facebook: '',
    field_twitter: '',
    field_github: '',
    field_linkedin: ''
  };

  return (
    <div className="u-push-top--3x">
      <p> button from theme</p>
      <Button>Hey</Button>
      <Index settings={settings} articles={[]} heroCover={{}} />
    </div>
  );
};

export default Home;
