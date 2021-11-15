import React from 'react';
import n from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = ({name, firstBtn, secondBtn, link, linkS, onSecondBtn, onSave, saveDisable, linkSave}) => {

    return (
        <div className={n.navbar}>
            <strong>{name}</strong>
            <div className={n.btns}>
                {onSave
                    ? <Link to={linkSave}>
                        <button disabled={saveDisable} onClick={() => onSave()}>{firstBtn}</button>
                    </Link>
                    : <Link to={link}>
                        <button>{firstBtn}</button>
                    </Link>
                }
                {onSecondBtn
                    ? <Link to={linkS}>
                        <button onClick={() => onSecondBtn()}>{secondBtn}</button>
                    </Link>
                    : <Link to={linkS}>
                        <button>{secondBtn}</button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;