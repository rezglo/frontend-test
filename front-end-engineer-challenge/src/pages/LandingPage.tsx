import React from "react";
import { Link } from "react-router-dom";
import mainImage from "@/assets/img-ia4-hero-trials.png";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen bg-[#f4ede4]">
      <div className="h-full max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-between">
          <Logo />

          <Link className="font-bold hover:underline" to="/signin">
            Sign in
          </Link>
        </div>

        <div className="flex items-center h-full">
          <div className="flex gap-16">
            <div className="max-w-2xl">
              <h1 className="text-6xl/tight font-bold">
                One platform for your team and your work
              </h1>

              <div className="flex flex-col gap-2 text-lg font-semibold mt-8">
                <p>
                  Level up your teamwork with benefits like unlimited app
                  integrations, audio and video capabilities, and more
                </p>
                <p>Save 50% for the first 3 months of Slack Pro </p>
              </div>

              <div className="mt-4">
                <Button className="uppercase" size="lg">
                  Buy now, save 50%
                </Button>
              </div>
            </div>
            <div className="flex-shrink">
              <img
                className="object-contain"
                src={mainImage}
                alt="Main Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
