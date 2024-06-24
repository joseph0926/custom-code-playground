import { Hero } from "./components/hero";
import { Button } from "./components/ui/button";
import { Grid, GridItem } from "./components/ui/grid";
import { AngularIcon } from "./components/ui/icons";
import { WobbleCard } from "./components/ui/wobble-card";
import { gridItems } from "./lib/contents";

export default function App() {
  return (
    <div className="bg-black h-screen">
      <Hero />
      <Grid className="mx-auto">
        {gridItems.map((item) => (
          <GridItem key={item.title} className="bg-transparent border-gray-500">
            <WobbleCard>
              <div className="grid grid-cols-2 grid-rows-2">
                <div className="flex gap-2 items-center col-span-1">
                  <AngularIcon
                    className="w-10 h-10"
                    innerClassName="fill-white"
                  />
                  <span className="text-lg text-white">Angular</span>
                </div>
                <div className="">
                  <Button>ASdf</Button>
                </div>
              </div>
            </WobbleCard>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
