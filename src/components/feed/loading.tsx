import Lottie from "react-lottie-player";
import * as animationData from "../../assets/lottier/loading-gray.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="text-center">
        <Lottie
          animationData={animationData}
          play
          loop
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
}

export default Loading;
