import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { CircleSpinner } from "react-spinners-kit";

type buttonTypes = {
  width: string;
  children: any;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: any;
};

export const SolidGreenButton = ({
  onClick,
  disabled,
  children,
  width,
  loading,
  type,
}: buttonTypes) => {
  return (
    <button
      className={`py-[12px] rounded-[8px] bg-brandGreen flex items-center justify-center gap-[10px] text-center text-white text-base font-poppins font-semibold border-none cursor-pointer z-50`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{ width: width }}>
      {!loading ? children : <CircleSpinner />}
    </button>
  );
};

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling 200px down
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div
          className="fixed bottom-[50px] right-[50px] w-8 md:w-10 h-8 md:h-10 bg-brandBlue rounded-full text-white flex justify-center items-center cursor-pointer text-[20px] transition-all duration-500 ease-in-out z-[9999]"
          onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
