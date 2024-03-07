/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";
var deselectCurrent = require("toggle-selection");

const Home = () => {
  return (
    <>
      {/* <Script
        crossOrigin="anonymous"
        src="https://cdn.jsdelivr.net/npm/copy-to-clipboard@3.3.3/index.min.js"
      /> */}
      <script type="text/javascript" src="/static/script.js" />
      <div>Show home</div>
    </>
  );
};

export default Home;
