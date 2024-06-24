import { Vortex } from "@/components/ui/vortex";
import { Button } from "./ui/button";
import { GithubIcon } from "./ui/icons";
import { Columns } from "lucide-react";

export function Hero() {
  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col gap-4 justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Custom Code
          <br />
          Playground
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="https://github.com/joseph0926" target="_blank">
            <Button
              variant="outline"
              size="default"
              className="bg-transparent hover:bg-transparent py-6 px-5 flex items-center gap-4"
            >
              <GithubIcon className="w-8 h-8" innerClassName="fill-white" />
              <span className="text-white font-semibold text-xl">Github</span>
            </Button>
          </a>
          <a href="https://joseph0926.tistory.com" target="_blank">
            <Button
              variant="outline"
              size="default"
              className="bg-secondary transition-colors text-black hover:text-white duration-200 hover:bg-transparent py-6 px-5 flex items-center gap-4"
            >
              <Columns className="w-8 h-8" />
              <span className="font-semibold text-xl">Blog</span>
            </Button>
          </a>
        </div>
      </Vortex>
    </div>
  );
}
