import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            veritatis tenetur accusantium vero provident repellat assumenda
            officia inventore, adipisci minus atque quos tempore reprehenderit
            harum ipsum dolorem nihil distinctio labore. Doloribus at error
            repellat nisi ea, sit perferendis aliquid officia itaque quaerat
            illo, suscipit consectetur ex quibusdam minus optio officiis!
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
