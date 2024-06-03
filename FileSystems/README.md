# notes

- Node.js uses libuv for system calls to interact with operating system.
- 3 ways to do same - Promise API, Callback API, Synchronous API
  - Promise API: cleanest, stick with it while learning
  - Callback API: fastest, use when you want to process massive files.
  - Synchronous API: stay away, until you have to load some initial configuration.