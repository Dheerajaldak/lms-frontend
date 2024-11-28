import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import review_1 from "../Assets/Images/review_1.png";
import review_2 from "../Assets/Images/review_2.png";
import review_3 from "../Assets/Images/review_3.png";
import onlineimg from "../Assets/Images/sket.jpg";
import weare from "../Assets/Images/improf.png";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white ">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-300">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              stuedents to share there skills, creatively and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));",
              }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>
        {/* //carousel */}

        <div className="carousel w-1/2 m-auto my-16">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={review_1}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Education is the most powerful tool you can use to change the world."
                }
              </p>
              <h3 className="text-2xl font-semibold">Nelson Malle</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={review_2}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Failure will never overtake me if my determination to succeed is strong enough."
                }
              </p>
              <h3 className="text-2xl font-semibold">Gimmi Rae</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={review_3}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {"A person who never made a mistake never tried anything new."}
              </p>
              <h3 className="text-2xl font-semibold">Albert Innea</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={onlineimg} 
                className="w-40 h-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "We don't get a chance to do that many things, and every one should be really excellent."
                }
              </p>
              <h3 className="text-2xl font-semibold">Adrea Joss</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={weare}
                className="w-40  rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "ESuccess is a lousy teacher. It seduces smart people into thinking they can’t lose."
                }
              </p>
              <h3 className="text-2xl font-semibold">Jhon Deo</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;