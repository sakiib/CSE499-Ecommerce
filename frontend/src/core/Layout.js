import React from 'react';
import Menu from './Menu';
import '../styles.css';
import Carousel from './Carousel';

const Layout = ({title='Title', description='Description', className, children}) => (
    <div>
        <Menu />
        {/* <div className="jumbotron mb-0"> 
            <h2> {title} </h2>
            <p className="lead"> {description} </p>
        </div> */}
        {/* <Carousel /> */}
        <div className={className}> {children} </div>
    </div>
);

export default Layout;