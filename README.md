# Entreprenote App: ReactJS Widget Starter Template

Download or just clone this project and start builing the widget. There are examples and guide given in this **README.md**. When you want to submit the template please use [this form](#) to submit your widget for review.

If you plan to download and build locally, download this template then run `yarn`. To see if everything working fine from terminal run `yarn dev` and if this is running succesffully you can start building the widget.

You'll need to keep your project files as decribed in this guide: Read [File structure of IdeaBoard ReactJS Widget](https://entreprenote.com/#) OR read below:

```
public/
src/
eslint.config.js
index.html
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

Any assets you want to show will be stored in `public/` folder and not anywhere inside `src`, In `src/` folder we have:

```
/src
- /api
- /components
- /contexts
- /hooks
- /types
- /lib
-- utils.ts/
```

You might not need to use all of them. But your main component file will be in `components` folder. Any API call your project makes will be stored in `api` folder. Any types defination will be stored in `types` folder.

There are some required file naming conventions that you need to follow. Follow the steps below to create the folders and files required for a widget, please follow the naming conventions as per the step requires.

**STEP 1:**

Create a new folder inside `components` folder, and if applicable then in  `public`, `contexts`, `hooks`, and `types` folder as well *(You can learn more on adding context for in browser storage and hooks below)*. Name this folder in **kebab-case** (no-caps) with `-widget` as prefix. See examples:

- If your widget name is *Charlie AI*, it'll become `charlie-ai-widget` OR if *Ask Charlie* that'll become `ask-charlie-widget`.
- If your widget name is *Notes*, it'll become `notes-widget`.

> ***Important:*** *If the name of your widget is duplicated a unique 5 digit code will be assigned to it during review and you'll be notified accordingly. Names should not use any entity that you do not own. For example you can't make a google search widget if you're not Google*

**STEP 2:**

Next create the main widget file, in `components/your-name-folder-widget` folder. The name must be in **PascalCase**, here are a few examples:
- If your widget name is *Charlie AI*, your component name will become `CharlieAIWidget.tsx`
- If your widget name is *Notes*, it'll become `NotesWidget.tsx`.

> Inside the components folder you'll create you `.css` file if needed.


We advice to not change/modify any of the following files:

- `App.css`, `index.css`, `mian.tsx`, `eslint.config.js`
  `index.html`,
  `package.json`,
  `tsconfig.app.json`,
  `tsconfig.json`,
  `tsconfig.node.json`,
  `vite.config.ts`,

The `package.json` can be edited, but if the developer reputation or the support is solid it can be modified as well. Otherwise we encourage to use the libraries we're using, you can propose other libraries that you think will be helpful by submitting [this form](https://forms.gle/tNuReTGmSbRGmPKCA).