import React from "react";
import {
  notification1,

} from "../assets/index.js";
import { notificationImages } from "../constants/index.js";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className} xl:flex items-center backdrop-blur border border-n-1/10 rounded-2xl gap-5 p-4 pr-6 bg-n-9/40`}
    >
      <img
        className="rounded-xl"
        src={notification1}
        alt={notification1}
        width={62}
        height={62}
      />

      <div className="flex-1 m-auto">
        <h6 className="font-semibold mb-1 text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item) => (
              <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                <img
                  className="w-full"
                  src={item}
                  alt={item}
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
