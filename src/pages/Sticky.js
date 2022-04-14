import './Sticky.css'
import { CSSTransition } from "react-transition-group"
//import { TransitionGroup } from "react-transition-group"
//import { Transition } from 'react-transition-group';
import { useState } from 'react';
import Slide from 'react-reveal';



function Sticky() {
  const [state, setState] = useState(false);


  return (
    <div className=" min-vh-100">
      <header>
        <div className='d-flex gap-2 p-2 container center align-items-center'>
          <div className="logo">
            <h1>MIYULI</h1>
          </div>
          <h5>Login</h5>
          <h5>Register</h5> 
        </div>
      </header>

      <section className="position-relative">
        <CSSTransition
          in={state}
          classNames={`loader`}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
          unmountOnExit
          OnEnter={() => { console.log("OnEnter") }}
          onExit={() => console.log("onExit")}
          onEntered={() => console.log("onEntered")}
          onExited={() => console.log("onExited")}
          onEntering={() => console.log("onEntering")}>
          {state => <div className={`loader ${state}`}></div>}
        </CSSTransition>
      </section>

      <section className="header-section">
        <div>
          <Slide rignt>
            <img alt='' src='https://cdn.discordapp.com/attachments/837367458616311860/955030569891278868/1616431614_23-p-belo-zelenii-fon-23.jpg'></img>
          </Slide>
        </div>
      </section>

      <section className="card-section">
        <div>
          <Slide left>
            <img alt='' src='https://via.placeholder.com/1920x1080'></img>
            <div>
              Adipisicing aliqua commodo ex minim. Aliqua duis aute sit adipisicing voluptate. Ipsum cupidatat nulla laborum sint duis nisi eu nostrud mollit. Et est aliquip aliqua est labore exercitation magna.
            </div>
          </Slide>
        </div>
        <div>
          <Slide right>
            <img alt='' src='https://via.placeholder.com/1920x1080'></img>
            <div>
              Reprehenderit reprehenderit est eiusmod duis do incididunt consectetur culpa exercitation sint mollit proident deserunt sint. Amet labore tempor minim ut. Et velit nulla aute esse duis. Aliqua sit velit id nostrud dolore occaecat ad aute pariatur. Non eu incididunt culpa adipisicing enim anim. Ut aliquip dolor in et ex aliquip occaecat non reprehenderit laborum culpa commodo.
            </div>
          </Slide>
        </div>
        <div>
          <Slide bottom>
            <img alt='' src='https://via.placeholder.com/1920x1080'></img>
            <div>
              Consequat qui voluptate in occaecat cillum elit sunt in ex reprehenderit officia. In Lorem proident fugiat ut cillum pariatur consectetur do minim duis ullamco. Est tempor Lorem consequat sit qui nisi duis ut esse consequat amet exercitation ut. Esse dolore ipsum commodo et culpa officia. Fugiat sunt do laborum ipsum est occaecat exercitation aliqua ea dolor velit commodo incididunt sunt. Laborum velit deserunt ullamco do occaecat ad eiusmod tempor.
            </div>
          </Slide>
        </div>
        <div>
          <Slide bottom>
            <img alt='' src='https://via.placeholder.com/1920x1080'></img>
            <div>
              Cillum deserunt excepteur enim est nisi consectetur ipsum ad. Incididunt minim Lorem quis est. Cupidatat nisi nostrud ullamco nulla dolor laborum aliqua id tempor.
            </div>
          </Slide>
        </div>
      </section>

      <section>
        <button className='btn btn-success m-1' onClick={() => setState(!state)}> {state ? "hide" : "show"} </button>
        <ul id="myList">
          {["Nam sagittis est non enim ultrices elementum. ",
            "Sed id ligula sed mi tempor ornare.",
            "Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus lacinia auctor eget id nisi.",
            "Donec pulvinar nunc feugiat semper consequat.",
            "Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.",
            "In nec sem id libero egestas cursus vel a urna.",
            "Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut urna consectetur, et pellentesque mi molestie.",
            "Aliquam ut felis venenatis, dapibus ante non, gravida nulla.",
            "Donec consectetur quam in urna commodo, sed aliquet metus vehicula.",
            "Mauris eget est sit amet felis eleifend sagittis non id nulla.",
            "Nam sagittis est non enim ultrices elementum. ",
            "Sed id ligula sed mi tempor ornare.",
            "Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus lacinia auctor eget id nisi.",
            "Donec pulvinar nunc feugiat semper consequat.",
            "Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.",
            "In nec sem id libero egestas cursus vel a urna.",
            "Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut urna consectetur, et pellentesque mi molestie.",
            "Aliquam ut felis venenatis, dapibus ante non, gravida nulla.",
            "Donec consectetur quam in urna commodo, sed aliquet metus vehicula.",
            "Mauris eget est sit amet felis eleifend sagittis non id nulla.",
            "Nam sagittis est non enim ultrices elementum. ",
            "Sed id ligula sed mi tempor ornare.",
            "Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus lacinia auctor eget id nisi.",
            "Donec pulvinar nunc feugiat semper consequat.",
            "Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.",
            "In nec sem id libero egestas cursus vel a urna.",
            "Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut urna consectetur, et pellentesque mi molestie.",
            "Aliquam ut felis venenatis, dapibus ante non, gravida nulla.",
            "Donec consectetur quam in urna commodo, sed aliquet metus vehicula.",
            "Mauris eget est sit amet felis eleifend sagittis non id nulla.",
            "Nam sagittis est non enim ultrices elementum. ",
            "Sed id ligula sed mi tempor ornare.",
            "Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus lacinia auctor eget id nisi.",
            "Donec pulvinar nunc feugiat semper consequat.",
            "Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.",
            "In nec sem id libero egestas cursus vel a urna.",
            "Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut urna consectetur, et pellentesque mi molestie.",
            "Aliquam ut felis venenatis, dapibus ante non, gravida nulla.",
            "Donec consectetur quam in urna commodo, sed aliquet metus vehicula.",
            "Mauris eget est sit amet felis eleifend sagittis non id nulla.",
            "Nam sagittis est non enim ultrices elementum. ",
            "Sed id ligula sed mi tempor ornare.",
            "Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus lacinia auctor eget id nisi.",
            "Donec pulvinar nunc feugiat semper consequat.",
            "Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.",
            "In nec sem id libero egestas cursus vel a urna.",
            "Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut urna consectetur, et pellentesque mi molestie.",
            "Aliquam ut felis venenatis, dapibus ante non, gravida nulla.",
            "Donec consectetur quam in urna commodo, sed aliquet metus vehicula.",
            "Mauris eget est sit amet felis eleifend sagittis non id nulla."].map((item, i) =>
              <Slide>
                <li className=" h1">{item}</li>

              </Slide>
            )}

        </ul>


      </section>
      <div className="bg-black min-vh-100 text-white"></div>
      <div className="bg-black min-vh-100 text-white"></div>

    </div>
  );
}



export default Sticky;
