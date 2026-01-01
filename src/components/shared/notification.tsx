import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge, Bell } from "lucide-react";

export function Notification() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          className=" flex items-center justify-center hover:bg-transparent"
          variant={"ghost"}
          size={"icon"}
        >
          <div className="relative">
            <Badge className="absolute -right-1.5 -top-1.5 h-4 w-4 items-center justify-center  text-10 p-2 text-white bg-red-600 rounded-full">
              8
            </Badge>
            <Bell
              size={24}
              strokeWidth={1.8}
              className=" hover:stroke-maroon-600 transition-colors duration-200"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <p>Width</p>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <p>Max. width</p>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
