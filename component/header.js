import Link from "next/link";
import { useRouter } from "next/router";
import react from "react";
import { Hamcontext } from "../lib/contextapi/mobile_ham_toggler";
export default function Header() {

const data = react.useContext(Hamcontext)

    function hamOn(){
        data.hamOn()
    }

    const router = useRouter()

    function gohome(){
      router.push('/')
    }

  return (

    <header>
      <nav>
        <div onClick={gohome} className="logo">
          <img className="logoimg" src="/logo.png" alt="logo" width={"60px"}/>
        </div>

        <div className="items">
          <Link href={"/"}>
          <div className="item">Home</div>
          </Link>

          <Link href={"/blogs"}>
          <div className="item">Blogs</div>
          </Link>

          <Link href={"/projects"}>
          <div className="item">Projects</div>
          </Link>

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
