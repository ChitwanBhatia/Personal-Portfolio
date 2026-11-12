# Personal Portfolio

A personal portfolio built with **React + TypeScript + Vite**. Works on phones, tablets and desktops.

## Run it

```bash
cd portfolio
npm install
npm run dev      # open the address it prints
npm run build    # production build into portfolio/dist
```

## Edit your content

Everything you would normally change is in [`portfolio/src/data.ts`](portfolio/src/data.ts):
your name, contact details, social links, skills, experience and projects.

- **Social links:** replace each `"#"` with the real profile URL.
- **Icons:** they come from [react-icons](https://react-icons.github.io/react-icons/). To change one, import
  another icon at the top of `data.ts` and put it in the `icon` field.
- **Photo:** replace `portfolio/public/profile.jpeg`.
- **Project images:** the `image` field of each project (currently placeholders).

## How it adapts to screen size

| Screen | Layout |
| --- | --- |
| Desktop (over 1024px) | Profile card on the left, content on the right with the menu at the top right |
| Tablet (up to 1024px) | Profile card on top, content below |
| Phone (up to 768px) | Compact profile header with a "show contacts" toggle, and a bottom tab bar |

All styling is in [`portfolio/src/styles.css`](portfolio/src/styles.css).
