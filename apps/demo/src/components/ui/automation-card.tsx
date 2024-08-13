import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Camera,
  ChevronRight,
  Lock,
  LockOpen,
  Eye,
  EyeOff,
} from "lucide-react";
import { StatusChip } from "./status-chip";
import { iconSize } from "./icon-button";

const IconWrap = ({ className = "", ...props }) => (
  <span
    className={cn("p-1 inline-flex justify-center items-center", className)}
    {...props}
  />
);

export type AutomationCardProps = {
  isVisible?: boolean;
  isLocked?: boolean;
  isActive: boolean;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export const AutomationCard = ({
  isVisible = true,
  isLocked = false,
  isActive = false,
  title,
  description,
  children,
  ...props
}: AutomationCardProps) => {
  function onEditAutomation() {
    console.log("🤖 edit automation");
  }

  // tab state
  return (
    <Collapsible>
      {/* items */}
      <div className="p-4 flex flex-row bg-white rounded-lg drop-shadow-md">
        <div className="flex flex-row justify-start items-start gap-3 flex-grow">
          {/* toggle */}
          <CollapsibleTrigger>
            {/* #TODO: Replace with icon button */}
            <IconWrap>
              <ChevronRight size={16} />
            </IconWrap>
          </CollapsibleTrigger>

          {/* main */}
          <div className="flex flex-col flex-1">
            {/* header row */}
            <div className="flex flex-row">
              <div className="flex flex-col flex-1">
                <div className="flex flex-row items-center gap-1.5">
                  <Text.Header size="sm">{title}</Text.Header>
                  {isVisible ? (
                    <Eye size={iconSize.md} />
                  ) : (
                    <EyeOff size={iconSize.md} />
                  )}
                  {isLocked ? (
                    <Lock size={iconSize.md} />
                  ) : (
                    <LockOpen size={iconSize.md} />
                  )}
                </div>
                <Text.Body>{description}</Text.Body>
              </div>
              {/* Right Sice */}
              <div className="flex flex-row justify-start items-center gap-6 ">
                {isActive ? (
                  <StatusChip intent="success">On</StatusChip>
                ) : (
                  <StatusChip intent="danger">Off</StatusChip>
                )}
                <Button variant="outline" onClick={onEditAutomation}>
                  Edit Automation
                </Button>
              </div>
            </div>
            {/* content */}
            <CollapsibleContent className="CollapsibleContent">
              <div className="pt-6 pb-2">{children}</div>
            </CollapsibleContent>
          </div>
        </div>
      </div>
    </Collapsible>
  );
};

// <div>
//   This is an automation description that can be long but
//   will eventually wrap.
// </div>
// {/* description */}
