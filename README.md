<h1 align="center">Expo FullStory</h1>
<p align="center">FullStory, on Expo applications, using Expo/EAS configuration plugins!</p>

> **Warning**
>
> This package has been rendered obsolete by [@fullstory/react-native@1.1.0](https://github.com/fullstorydev/fullstory-react-native). That package is officially supported and maintained by the FullStory team, you should use that instead. This library does not currently a plugin step for asset uploads, and while it would be trivial to add, there is a maintained solution. Consider this library deprecated. 

## Prerequisites

1. You must be on Expo + EAS.
2. Install the `@fullstory/react-native` package.

```bash
npm i @fullstory/react-native
```

3. Add the following snippet to your `index.d.ts` adjacent to your application entry-point.

```ts
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      fsAttribute?: {[key: string]: string};
      fsClass?: string;
      fsTagName?: string;
    }
  }
}
```

4. Add the FullStory Babel Plugin (`.babel.config.js`)
```js
module.exports = {
  ...
  plugins: [
    ...
    '@fullstory/react-native', ['@fullstory/annotate-react', { native: true }],
  ]
};
```

## Installation

Simply install the `expo-fullstory` configuration plugin package.

```bash
npm i expo-fullstory 
```

## Configuration

Once, that's done, you'll need to configure the plugin.
You can get started by heading to your `app.config.json`, or `app.config.js`.

Simply add the `"plugins"` key if it doesn't already exist, then provide a 2D-array with the package name as the first parameter, and an object defining a `version` and `orgId` attribute in the second. If you don't have your organization ID, you can retrieve it from the [FullStory dashboard](https://fullstory.com/).

If you want to find the latest version of the FullStory SDK, you can find that in their ["FullStory for Mobile Apps Release Notes"](https://help.fullstory.com/hc/en-us/articles/4412766845591-FullStory-for-Mobile-Apps-Release-Notes).

```js
{
 // ...
 updates: [
   // ...
 ],
 plugins: [["expo-fullstory", { version: "1.27.1", orgId: "o-XXXXX-xx0 }]]
}
```

Great work, you're done! 🎉
