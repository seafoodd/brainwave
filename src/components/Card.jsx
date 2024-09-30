import Arrow from "../assets/svg/Arrow.jsx";
import { GradientLight } from "./design/Benefits.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx";

const Card = ({
  title,
  text,
  backgroundUrl,
  iconUrl,
  imageUrl,
  light,
  className,
}) => {
  return (
    <div
      className={`${className} block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
        <h5 className="h5 mb-5">{title}</h5>
        <p className="body-2 mb-6 text-n-3">{text}</p>
        <div className="flex items-center mt-auto">
          <a href="#">
            <img src={iconUrl} alt={iconUrl} width={48} height={48} />
          </a>
          <div className="flex items-center ml-auto">
            <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
              Explore more
            </p>
            <Arrow />
          </div>
        </div>
      </div>

      {light && <GradientLight />}

      <div className='absolute inset-0.5 bg-n-8' style={{ clipPath: "url(#benefits)" }}>
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {imageUrl && (
            <img
              src={imageUrl}
              width={380}
              height={362}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <ClipPath />
    </div>
  );
};

export default Card;
