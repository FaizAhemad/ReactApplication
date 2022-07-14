import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Footer() {
    return (
        <Navbar className='footer mainFooter' bg="dark" variant="dark" >
            <Navbar.Text style={{ padding: "2px" }}>
                Developed By: <a href="#login">fshaikh@lockstep.io</a>
            </Navbar.Text>
        </Navbar>
    )
}

export default Footer