import React, {Component} from 'react';
import './Header.css';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div className='nav-wrap'>
                <div className='links'>
                    <Link to='/write' className="link-a"><CreateIcon/></Link>
                    <Link to='/' className="link-a">My Diary</Link>
                    <Link href=" " className="link-a">Sign Out</Link>
                </div>
            </div>
        )
    }
}

export default Header;