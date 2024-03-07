/* eslint-disable @next/next/no-sync-scripts */
import copy from "copy-to-clipboard";

const Home = () => {
  const handleClick = () => {
    copy("Text", {
      debug: true,
      message: "Press #{key} to copy",
    });
  };
  return (
    <>
      <script type="text/javascript" src="/static/script.js" />
      <div>
        Show home <button onClick={handleClick}>Copy</button>
      </div>
    </>
  );
};

export default Home;
