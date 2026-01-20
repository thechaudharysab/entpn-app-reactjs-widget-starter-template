# Entreprenote App: ReactJS Widget Starter Template

Download or just clone and start builing the widget. When finised just submit the required files in the widget submittion template form.

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

There are some required file naming conventions that you need to follow:

- Your main app id will be `components` main files

We advice to not change/modify any of the following files:

- `App.css`, `index.css`, `mian.tsx`, `eslint.config.js`
  `index.html`,
  `package.json`,
  `tsconfig.app.json`,
  `tsconfig.json`,
  `tsconfig.node.json`,
  `vite.config.ts`,

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
