import React from 'react';
import Layout from 'gatsby-theme-drupal/src/components/templates/layout';
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
    <Layout className="u-push-top--3x">
      <p>layout</p>
    </Layout>
  );
};

export default Home;
