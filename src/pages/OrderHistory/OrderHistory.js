import React from "react";
import Layout from "../../components/Layouts/Layout";
import Section from "./Section";
import Auth from "../../components/Layouts/Auth";


const orderHistory = () => {
    return (
        <Layout>
            <Auth/>
            <Section/>
        </Layout>
    );
}

export default orderHistory;