export default function Buttons({ htmlToImageConvert, handleLogout }) {
  const handleDownload = () => {
    htmlToImageConvert();
    // notify()
  };
  return (
    <div>
      <button
        onClick={handleDownload}
        className="w-full bg-gray-500 hover:bg-gray-600 transition-colors text-white cursor-pointer p-3 my-2 uppercase font-bold rounded-xl "
      >
        Download
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 float-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>

      <button
        onClick={handleLogout}
        className="w-full bg-gray-500 hover:bg-gray-600 transition-colors text-white cursor-pointer p-3 my-4 uppercase font-bold rounded-xl"
      >
        Create Another
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 float-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
      <button className="w-full bg-gray-500 hover:bg-gray-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-xl">
        <a
          href="https://twitter.com/intent/tweet?text=Happy%20Suga%20day&url=https://twitter.com/bts_bighit&hashtags=VerseForSuga&hashtags=PoetryForSuga&hashtags=intothesugaverse&hashtags=IntoTheSugaVerse&hashtags=verseforsugabyarmy&hashtags=VerseForSuga
        "
          target="_blank"
        >
          Share
        </a>
      </button>
    </div>
  );
}

/*        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20em"
          height="3em"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
          />
        </svg>*/
