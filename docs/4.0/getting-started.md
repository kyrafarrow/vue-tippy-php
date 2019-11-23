# Getting Started

## Option1: CDN

```html
<script src="https://unpkg.com/vue-tippy@4/dist/vue-tippy.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-tippy@4/dist/vue-tippy.min.js"></script>
```

## Option 2: Package Manager

```bash
npm install --save vue-tippy
yarn add vue-tippy
```

Then, import the vue-tippy:

```js
import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
// or
Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
});

Vue.component("tippy", TippyComponent);
```

Add additional themes.

```js
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";
```

You can access to tippy library like this:

```js
import { tippy } from "vue-tippy";
```

### TypeScript

You will need to import the ESM directly.

```js
import VueTippy from 'vue-tippy/dist/vue-tippy.esm';
```
