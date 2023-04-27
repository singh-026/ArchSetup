# ArchSetup

Requirements:-

- Shopify Restyle (styling)
- Redux Toolkit (state management)
- Redux Logger (logging)
- Babel Transform Remove Console (removing console in prod)
- React Native Size Matters (uniform scaling)



Structure :-
.
├── _app  
      └── hooks                 (global dispatch and selector hooks)
      └── store                 (redux store)
├── _features  
      └── actions               (actions and their async Thunks for state management)
├── _types                      (folder containing all the project's types ...)
├── assets                      (contains assets)
      └──icons
      └──vectors
      └──images
      └──fonts
├── components                  (reusable comps made using the scalingUtils or theme)
├── config
      └──api                    (api end points)
      └──constants              (constants like text, paragraphs ...)
      └──errors                 ( contains custome error types for typesafing errors)
      └──services               (api calling done here)
      └──theme                  (app theme)
├── hooks                       (custom hooks used throughout the project)
├── navigation                  (contains Navigations Stacks)
├── utils                       (utility functions used throughout the project)
      └──scalingUtils           (for uniform scaling)
└── babel.config.js
└── react-native.config.js
└── tsconfig.js
└── README.md
