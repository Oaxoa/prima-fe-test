# Frontend Interview - Design System

## Install and run

```bash
# Install dependencies
# This project use `pnpm` as package manager, but you can use also `npm` or `yarn`.
pnpm install

# And run the project
pnpm dev

# Run Storybook
pnpm storybook
```

## Figma file

The figma file of the home test is available [here](https://www.figma.com/design/OclakAGLSXDoMKLFvwLNMP/%F0%9F%92%BB-Design-System-Home-Test---Tabs-Component?node-id=0-1&t=4pG7NN6HKxgxroDz-1).

## Notes from the author (Pierluigi Pesenti)

Hi, I have implemented the tabs component as per request.
All the components are testable in `Storybook`.

I have followed the same approach I have used in productions many times, based on `atomic-design` principles.
Every component is either an atom or a composition of other components. 
I have implemented and documented every piece individually so to maximize reusability.

Accessibility is baked in and tested with several tools, including `Voice Over` navigation on a Mac.
I have added components test using `testing-library` to those components that have a logic.
FOr more complex components I like to extract the logic complexity as much as possible into units and proceed with 
unit testing (not applicable here).

The task was manually implemented with the help of `Claude` AI (for fixing some TS issues, improve the documentation 
and stub tests).

### For the repository's authors

1. When just cloned the repo does not build because `typescript 7` is incompatible with the listed version of 
`typescript-eslint`. At the time of writing no version of `typescript-eslint` supports TS7 so I have downgraded it to TS6.
1. I have used `npm` to install and manage deps so there is the new `npm` lock file (the `pnpm` lock file may now be out 
   of sync). I have used as I had it already. In a working environment I would stick to what's in place for the team.

### For the design team:

1. Tokens in the `Figma` file follow a not-so-strict naming convention (e.g.: `OnInverse`). Some values in the `Figma` are 
   hardcoded. 
1. In the `Figma` file, the background for the unselected pill button is transparent. This may lead to odd results 
   when the button is placed on a dark background.
1. In the Underline version of the tabs components the tabs are separated by a bigger gap compared to the Pill 
   version. This visually works, however the suggested approach is to keep the same gap but use bigger padding 
   inside the tab itself. This would allow an easier interaction to the user and more pleasant visuals when the 
   focus ring is visible.
1. `Pill` border contrast is 1.49:1. The hover border is 1.72:1. WCAG's non-text contrast rule (1.4.11) asks for 3:1
   when the outline is needed to recognise the control. The text label arguably covers that, so this is a design-team question.
