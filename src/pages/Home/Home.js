import React from 'react';
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyles.css";
import Section1 from './Section1';

function Home() {
  return (
    <>
    <Layout>
        {/* {Home Section Banner}} */}
        <Section1/>
    </Layout>
    </>
  )
}

export default Home
