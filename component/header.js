import react from "react";
import { Hamcontext } from "../context";
export default function Header() {

const data = react.useContext(Hamcontext)

    function hamOn(){
        data.hamOn()
    }

  return (

    <header>
      <nav>
        <div className="logo">LoGo</div>

        <div className="items">
          <div className="item">Home</div>
          <div className="item">Blogs</div>
          <div className="item">Projects</div>
          <div className="email">hello@rohit.in</div>
        </div>

        <div className="hamburger" onClick={hamOn}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

      </nav>
    </header>
  );
}
