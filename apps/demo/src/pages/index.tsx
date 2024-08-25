import { Button } from "@/components/ui/button";
import * as Text from "@/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AutomationCard,
  AutomationCardProps,
  ConditionBlock,
  AutomationCondition,
} from "@/components/ui/automation-card";
import { Layout } from "@/components/layout";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

/**
 * Mock tab views
 */
export const MockViewAutomationsHistory = () => (
  <div>
    <Text.Header size="sm">Automations History</Text.Header>
    <Text.Body>
      Cold-pressed ethical next level tote bag poutine art party hashtag
      affogato polaroid seitan vibecession af bespoke. Humblebrag selfies
      whatever hoodie meggings health goth umami mukbang gastropub fashion axe.
      Blog vaporware echo park, pinterest man bun wayfarers fixie pickled
      jianbing ethical heirloom keytar. Kale chips knausgaard beard master
      cleanse sriracha listicle offal coloring book la croix. Asymmetrical
      kombucha poutine, normcore meggings hella pabst swag bitters kitsch marfa.
      Literally cray seitan hella chambray grailed solarpunk slow-carb ethical.
    </Text.Body>
  </div>
);

export const MockViewAutomationsReview = () => (
  <div>
    <Text.Header size="sm">Automations Review</Text.Header>
    <Text.Body>
      Cold-pressed ethical next level tote bag poutine art party hashtag
      affogato polaroid seitan vibecession af bespoke. Humblebrag selfies
      whatever hoodie meggings health goth umami mukbang gastropub fashion axe.
      Blog vaporware echo park, pinterest man bun wayfarers fixie pickled
      jianbing ethical heirloom keytar. Kale chips knausgaard beard master
      cleanse sriracha listicle offal coloring book la croix. Asymmetrical
      kombucha poutine, normcore meggings hella pabst swag bitters kitsch marfa.
      Literally cray seitan hella chambray grailed solarpunk slow-carb ethical.
    </Text.Body>
  </div>
);

const MockAutomationCondition = () => (
  <AutomationCondition>
    <ConditionBlock block="IF">
      a visit is completed and the customer left a negative review (0 – 3.5
      stars)...
    </ConditionBlock>
    <ConditionBlock block="THEN">
      email customer the template “Response to Negative Review” after 1 day,{" "}
      <span className="font-bold">ADD </span>
      the tag “Dissatisfied” to the customer immediately.
    </ConditionBlock>
  </AutomationCondition>
);

// clean unused parts here
// move mocks to their own file
// move nav wip to its own file

const data: AutomationCardProps[] = [
  {
    title: "Email Customer when Negatively Reviewed",
    description:
      "This is an automation description that can be long but will eventually wrap.",
    isVisible: true,
    isActive: false,
  },
  {
    title: "Keanu Reaves is that dude",
    description:
      "This is an automation description that can be long but will eventually wrap.",
    isActive: true,
    isVisible: false,
    isLocked: true,
  },
  {
    title: "Estimate Follow-up",
    description:
      "Triggers when an estimate is sent and sends the customer four follow-up emails spanning 30 days. This automation stops when the estimate is accepted or declined, or when changes are requested.",
    isVisible: true,
    isActive: true,
  },
  { title: "Collections Warning", isVisible: true, isActive: true },
  { title: "Skipped Visit Notification", isVisible: true, isActive: true },
  { title: "Estimate Accepted", isVisible: true, isActive: true },
  { title: "Scheduled Meeting", isVisible: true, isActive: true },
];

export const automationMockData = data;

export default function Home() {
  // tab state
  return (
    <Layout
      headbar={
        <>
          <Breadcrumbs
            layers={["Marketing", "Mock", "Next", "Automations (2)"]}
          />
          <div className="flex flex-row gap-3">
            <Button variant="outline">New Sequence Automation</Button>
            <Button variant="fill">New +</Button>
          </div>
        </>
      }
    >
      <Tabs defaultValue="automations-index" className="">
        <TabsList>
          <TabsTrigger value="automations-index">Automations</TabsTrigger>
          <TabsTrigger value="automations-history">History</TabsTrigger>
          <TabsTrigger value="automations-review">Review</TabsTrigger>
        </TabsList>
        <TabsContent value="automations-history">
          <div className="max-w-[600px]">
            <MockViewAutomationsHistory />
          </div>
        </TabsContent>
        <TabsContent value="automations-review">
          <div className="max-w-[600px]">
            <MockViewAutomationsReview />
          </div>
        </TabsContent>

        <TabsContent value="automations-index">
          <div className="flex flex-col gap-4">
            {data.map(({ ...cardProps }, i) => (
              <AutomationCard key={i} {...cardProps}>
                <MockAutomationCondition />
              </AutomationCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
