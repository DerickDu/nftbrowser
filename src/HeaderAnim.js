import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import TextBlock from "./textBlock";
import App from "./App";
import "./style/headeranim.css";
import DarkModeToggle from "./DarkModeToggle";

// const toggle = document.getElementById("dark-mode-toggle");
// const svgElements = document.querySelectorAll(".color-change");

// toggle.addEventListener("change", function () {
//   svgElements.forEach(function (svg) {
//     if (toggle.checked) {
//       svg.classList.add("dark-mode");
//     } else {
//       svg.classList.remove("dark-mode");
//     }
//   });
// });
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log(width, height);

function HeaderAnim() {
  return (
    <div className="App">
      <DarkModeToggle id="darkToggle" />
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div
            class="animation_layer parallax night"
            id="meteor"
            style={{ display: "none" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          <div
            class="animation_layer parallax night"
            id="sun"
            style={{ display: "none" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div
            class="animation_layer parallax night"
            id="nftmusic"
            style={{ display: "none" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div
            class="animation_layer parallax day"
            id="nftcoinl"
            style={{ display: "block" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.3}>
          <div
            class="animation_layer parallax night"
            id="nftexc"
            style={{ display: "none" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <div
            class="animation_layer parallax day"
            id="nfteth"
            style={{ display: "block" }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.35}>
          <div
            class="animation_layer parallax night"
            id="rectdconver"
            style={{ display: "none" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={width / 1500}>
          <div
            class="animation_layer parallax night"
            id="rectd"
            style={{ display: "none" }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.35}>
          <div
            class="animation_layer parallax day"
            id="rect"
            style={{ display: "block" }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={10} speed={-1}>
          <div class="animation_layer parallax" id="nftcoin"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <App />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HeaderAnim;
