import { Link } from "preact-router/match";
import "./style.css";
import cx from "classnames";

const Header = ({ browser, os, platform, path, score }) => {
  let scoreStr = "";
  Object.keys(score).forEach(k => {
    scoreStr += `${k}:${score[k]}, `;
  });
  scoreStr = scoreStr.slice(0, -2);
  return (
    <header className="header">
      <div className="logo">
	  	<a href="https://zouhir.org" target="_blank" rel="noopener norefferer">
		  <img src="/src/assets/logo.png" />
		</a>
	  </div>
      <div className="hero">
        <ul className="nav">
          <li>
            <Link
              class={cx(
                path === "/" && "active",
                path === "/HTMLMediaElement" && "active"
              )}
              href="/HTMLMediaElement"
            >
              HTMLMediaElement
            </Link>
          </li>
          <li>
            <Link class={path === "/mse" ? "active" : null} href="/mse">
              MSE
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/zouhir/browser-media-support/"
              target="_blank"
              rel="noopener norefferer"
            >
              Github
            </a>
          </li>
        </ul>
        <div class="sys">
          <p>
            OS: <span>{os}</span>{" "}
          </p>
          <p>
            Browser: <span>{browser}</span>
          </p>
          <p>
            Platform: <span>{platform}</span>
          </p>
          <p>
            Score: <span>{scoreStr}</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
