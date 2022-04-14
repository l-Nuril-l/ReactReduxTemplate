import './Menu.css';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="Hub">
      <div>
        <h1>HUB</h1>
        <div>
          <Link to="empty">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Empty
          </Link>
          <Link to="counter">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Counter
          </Link>
          <Link to="sticky">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sticky
          </Link>
          <Link className='rainbow' to="rainbow">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            RAINBOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
