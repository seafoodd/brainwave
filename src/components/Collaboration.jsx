import Section from "./Section.jsx";
import Button from "./Button.jsx";
import { collabApps, collabContent, collabText } from "../constants/index.js";
import { brainwaveSymbol, check } from "../assets/index.js";
import { LeftCurve, RightCurve } from "./design/Collaboration.jsx";

const Collaboration = () => {
  return (
    <Section id="#collaboration" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map(({ id, title, text }) => (
              <li key={id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt={check} width={24} height={24} />
                  <h5 className="body-2 ml-5">{title}</h5>
                </div>
                {text && <p className="body-2 mt-3 text-n-4">{text}</p>}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul className="absolute inset-0 flex items-center justify-center animate-spin-slower">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <a href={app.href} target="_blank" rel="noopener noreferrer">
                    <div
                      className={`relative transition-transform hover:scale-125 -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl `}
                    >
                      <div className={`m-auto`}>
                        <img
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
