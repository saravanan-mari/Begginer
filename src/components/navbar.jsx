import React, { Component } from 'react';

//stateless so use function (stateless fntional components) 
// class NavBar extends Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a href="#" className="navbar-brand">
//                     Counters has atleast one value <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
//                 </a>
//             </nav>



//         );
//     }
// }


const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                Navbar{" "}
                 <span className="badge badge-pill badge-primary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
}

 
export default NavBar;