import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [active, setActive] = useState("home");
  return (
    <>
      <nav className="lg:h-20 lg:text-2xl md:h-16 md:text-xl sm:h-14 text-sm sm:text-lg relative bg-black h-11 flex gap-3 text-lightText px-4 items-center font-sans">
        <div className="h-full overflow-hidden">
          <img className="w-11 sm:w-14 md:w-16 lg:h-20" src="/logo.jpg" alt="" />
        </div>

        <Link to="/">
          <h1
            onClick={() => {
              setActive("home");
            }}
            className={active === "home" ? "text-darkText underline hover:text-white" : "hover:text-white"}
          >
            Home
          </h1>
        </Link>
        <Link to="/about">
          <h1
            onClick={() => {
              setActive("about");
            }}
            className={active === "about" ? "text-darkText underline hover:text-white" : "hover:text-white"}
          >
            About
          </h1>
        </Link>
        <a
          className="sm:top-[21px] sm:right-5 md:top-6 lg:top-8 lg:right-6 absolute top-3.5 right-4 flex gap-1 cursor-pointer text-accent"
          href="https://t.co/Fxb3QoNHuh"
        >
          <p className="text-xs lg:text-base hover:text-blue-200">Join Discord</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className=""
          >
            <path
              fill="currentColor"
              d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"
            ></path>
          </svg>
        </a>
      </nav>
    </>
  );
};
