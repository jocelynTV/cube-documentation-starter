---
sidebar_position: 1
---

# Overview

## What is Cube?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


![Architecture](https://jocelyntv.github.io/cube-ant-design-dashboard/wallpaper.png)

:::info

The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes.

:::

```tsx title="src/i18n/config.ts"
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationVi from './locales/vi/translation.json';
import translationENG from './locales/en/translation.json';


//translations
const resources = {
  vi: {
    translation: translationVi
  },
  en: {
    translation: translationENG
  }
};

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true
  });

export default i18n;
```

## Why do we use it?

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```shell
    npm run cube
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```shell
    yarn cube
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```shell
    pnpm run cube
    ```
  </TabItem>
</Tabs>