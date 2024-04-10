import React from "react";
import {
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";


const HeroSection16 = () => {
  return (
    <header className="bg-white p-8" >
      <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <Typography className="inline-flex text-md rounded-lg border-[1.5px] border-blue-gray-50 bg-[#00112d] text-white py-1 lg:px-4 px-1 font-medium">
            Welcome to <span>Techlearns</span> Academy
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
          >
            Elevate Your Skills with  <span className="text-[#fea700]">Techlearns</span> Academy
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
          >
            Experience a new level of learning with our cutting-edge courses in web development, data science, graphic design, game development, and more.
          </Typography>
          <div className="mt-8 grid w-full place-items-start md:justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              <Input color="gray" label="Enter your email" size="lg" />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem] bg-[#fea700]"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection16;
