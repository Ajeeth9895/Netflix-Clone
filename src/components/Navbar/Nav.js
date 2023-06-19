import React, { useEffect, useState } from "react";
import "./Nav.css";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);

    let navigate = useNavigate()

    //show nav when the page is scrolled
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);


    //function to handle logout
    const handleLogout = () => {
        try {
            sessionStorage.clear()
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <Button className="nav_avatar" variant="danger" onClick={() => handleLogout()}>Sign out</Button>

        </div>
    );

}

export default Nav;