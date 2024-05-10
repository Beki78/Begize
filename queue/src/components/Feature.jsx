import React from 'react';
import { MdAccessTimeFilled } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  
} from "@heroicons/react/20/solid";
import featured from "../assets/featured.png";


const features = [
  {
    name: "Real-time Queue Monitoring: ",
    description:
      "Keep track of queue status and manage customer flow in real-time.",
    icon: MdAccessTimeFilled,
  },
  {
    name: "Comprehensive Branch Overview: ",
    description:
      "Gain insights into queue activities across all branches within your system, ensuring a holistic view of customer flow and service efficiency.",
    icon: MdOutlineSystemSecurityUpdateGood,
  },
];

const Feature = () => {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-11">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover the Key Features of Begize Queue Management
              </p>
              <p className="mt-6 text-lg leading-7 text-gray-600">
                At Begize, we're dedicated to revolutionizing the way you manage
                queues. Our innovative platform offers a range of powerful
                features designed to streamline your queue management process
                and enhance customer satisfaction. Explore the key features
                below to see how Begize can transform your operations.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={featured}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

export default Feature
