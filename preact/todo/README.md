ToDo App
===

Flow
---
* `npm start` - run dev server
* `npm build` - build production bundle
* `npm build:dev` - build dev bundle

Size Optimization
---
| package   | size   | libs include                  |
|-----------|--------|-------------------------------|
| full      | 46.7kb | App with Preact + Redux       |
| stateFul  | 47.9kB | with test Statful Component   |
| stateLess | 46.9kB | with test StateLess Component |
| clear     | 19.1kB | Pure Preact without Redux     |

License
---
Copyright (c) [ilia.makarov@me.com](mailto:ilia.makarov@me.com).
Licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
