import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
      return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/age'>Age</Link></li>
                    <li><Link to='/name'>Name</Link></li>
                </ul>
            </nav>
        </div>
      )
  }
}

export default Header;