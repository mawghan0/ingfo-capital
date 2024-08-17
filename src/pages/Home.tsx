export const Home = () => {
  return (
    <>
      <img src="public\ingfo_capital.gif" alt="My gif" />
      <p className="text-darkText p-4 text-center font- mb-1">
        Ingfo Capital is a Decentralized Autonomous Organization (DAO) that has
        been established since 2021. Initially, we only consisted of seven
        individuals who were enthusiastic about the concept of web3 and
        cryptocurrency. With our sincere passion, we have a big vision to move
        the crypto sector in Indonesia, making it known to all levels of
        society, especially young people.
      </p>
      <div className="flex-col flex px-5 py-3 border border-highlight font-sans items-center">
        <a
          className="text-highlight flex text-lg  hover:text-rose-200 mb-4"
          href="https://twitter.com/ingfo_capital"
        >
          <h1 className="">Join Twitter</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
            className="ml-2 self-center"
          >
            <g fill="none">
              <g clipPath="url(#primeTwitter0)">
                <path
                  fill="currentColor"
                  d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                ></path>
              </g>
              <defs>
                <clipPath id="primeTwitter0">
                  <path fill="#fff" d="M0 0h14v14H0z"></path>
                </clipPath>
              </defs>
            </g>
          </svg>
        </a>
        <a href="https://t.co/Fxb3QoNHuh">
          <div className="text-highlight text-xl font-bold flex hover:text-rose-200 group">
            <h1>Come Join Us Right Now!</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 2 22 22"
              className="ml-3 text-highlight group-hover:text-rose-200"
            >
              <path
                fill="currentColor"
                d="M1 3h10v1h2v1h3V4h1V2h3v3h-2v1h-1v3h1v2h1v10h-2v-2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v1H7v3H6v1H5v1H4v-1H3v-1H2v-1H1v-1h1v-1h1v-1h3v-1h1v-1h1v-2H7v-1H6V9H5V8H4V7H3V5H1zm15 15h1v-6h-1v-2h-1V9h-1v1h-1v1h-1v1h-1v1h1v1h1v1h1v1h1v1h1zM12 7V6h-2V5H4v1h1v1h1v1h1v1h1v1h1v1h1v-1h1V9h1V8h1V7z"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
};
