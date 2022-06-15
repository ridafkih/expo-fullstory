import { ConfigPlugin } from "@expo/config-plugins";
import { withGradle, withPods, withCustomPlist } from "prybar";

type FullStoryProps = {
  orgId: string;
  version: string;
};

export const withFullStory: ConfigPlugin<FullStoryProps> = (
  config,
  { orgId, version }
) => {
  if (!version || !orgId)
    throw Error("You must supply both a version, and a orgId for FullStory.");

  withGradle(config, {
    dependencies: [`com.fullstory:gradle-plugin-local:${version}`],
    plugins: [{ name: "fullstory", options: { org: orgId } }],
    repositories: [{ name: "maven", url: "https://maven.fullstory.com" }],
  });

  withPods(config, [
    {
      name: "FullStory",
      url: `https://ios-releases.fullstory.com/fullstory-${version}.tar.gz`,
    },
  ]);

  return withCustomPlist(config, [
    {
      key: "FullStory",
      value: { OrgId: orgId },
    },
  ]);
};
