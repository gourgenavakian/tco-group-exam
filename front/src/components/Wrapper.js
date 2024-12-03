import React from 'react';
import Header from "./Header";
import LeftSideMenu from "./LeftSideMenu";

function Wrapper(props) {
    return (
        <>
            <Header />
                {props.children}
            <LeftSideMenu/>
        </>
    );
}

export default Wrapper;