import Hero from "@/components/Hero";
import React from "react";
import Photo from "../assets/featured.png";

const Help = () => {
  return (
    <>
      <Hero />
      <div className="mt-40 mx-auto px-5 md:px-32 ">
        <h1 className="text-center text-3xl md:text-4xl font-semibold">
          What is queue system?
        </h1>
        <div className="flex gap-9 mt-10">
          <div>
            <div>
              <p className="mt-10 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] pb-2">
                {/* An online queue system for Ethiopian Electric Utilities is a
                cloud-based service that streamlines the process of managing
                customer visits to service centers. This system ensures
                efficient handling of high volumes of customer requests, such as
                bill payments, new service connections, and complaint
                resolutions. The queue system organizes and prioritizes customer
                visits by allowing them to join a virtual queue via a mobile
                app, website, or SMS. Customers receive real-time updates on
                their queue status and estimated wait times, enhancing their
                overall experience and reducing physical wait times at service
                centers. By controlling and managing customer flow, the queue
                system ensures that customers are attended to in an orderly
                manner, minimizing congestion and optimizing resource
                allocation. This approach helps Ethiopian Electric Utilities
                maintain a smooth and efficient operation, especially during
                peak demand periods. */}
                An online queue system is a cloud-based service that empowers
                businesses to control surges in online traffic to their websites
                or mobile apps.
              </p>
              <p className="md:text-[1.2rem] lg:text-[1.3rem]">
                Website queuing systems keep sites running smoothly during peak
                demand by redirecting visitors to an online queue, before
                flowing them back to the website at the rate you choose.
              </p>
            </div>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/nDRWhKc5Yd4?si=Xtbvv4FPYZC3OkrP"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-center text-3xl font-semibold">
            How do online queues work?
          </h1>
          <div className="flex gap-9 mt-10">
            <div>
              <div>
                <p className="mt-10 text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] pb-2">
                  Online queues work by redirecting online visitors to a queue
                  when they exceed your website's capacity using a HTTP 302
                  redirect. Visitors experience a short, informed wait, then are
                  flowed back to your site or app in a controlled, first-in,
                  first-out order.
                </p>
                <p className="md:text-[1.2rem] lg:text-[1.3rem]">
                  By controlling the rate at which visitors get access to your
                  site, you can prevent issues caused by spikes in traffic, such
                  as site crashes, slowdowns, errors, and overselling.
                </p>
              </div>
            </div>
            <div>
              <img src={Photo} alt="" className="w-[120rem]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
