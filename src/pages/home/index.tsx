/* eslint-disable @next/next/no-sync-scripts */
import copy from "copy-to-clipboard";
import Script from "next/script";

const Home = () => {
  const handleClick = () => {
    copy("Text", {
      debug: true,
      message: "Press #{key} to copy",
    });
  };
  return (
    <>
      <Script
        crossOrigin="anonymous"
        src="https://cdn.jsdelivr.net/npm/copy-to-clipboard@3.3.3/index.min.js"
      />
      <script type="text/javascript" src="/static/script.js" />
      <div>
        Show home <button onClick={handleClick}>Copy</button>
      </div>
    </>
  );
};

export default Home;
