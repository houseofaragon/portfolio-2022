// Original: https://dribbble.com/shots/5708399-Christmas-Collisions
// By: 𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 @bstsrvdbld

import ReactDOM from "react-dom"
import { Suspense } from "react"
import { App } from "./App"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import "./styles.css"

ReactDOM.render(
  <>
    <Header />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Footer />
  </>,
  document.getElementById("root"),
)
