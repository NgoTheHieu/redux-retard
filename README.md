# CoderSchool FTW - *Unit Test with TDD integrated*

Created with :blue_heart: by <a href="https://github.com/albertanguyen">Anh</a>

## Required User Stories

More testing integrated TDD (Test-driven development)

## Time Spent and Lessons Learned
Coder School lecture starts at 10am and ends at midnight :kissing_smiling_eyes: ...

## Describe any challenges encountered while coding under TDD cycle.
* How to communicate to the testing utilities that I think my code was great... :cold_sweat:
* <pre>Invariant Violation: Could not find "store" in the context of "Connect(Counter)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Counter) in connect options.</pre>I spent aproximately 6-7 hours to figure out that I probably cannot use jest or rely on npm 100% to test redux app although I received a very nice and user-centered message from npm dev team. Before jumping to the user-friendly message, with the help of my instructor, the test function has to be adjusted by <a href="https://stackoverflow.com/questions/36211739/invariant-violation-could-not-find-store-in-either-the-context-or-props-of-c"> this suggested solution from stackoverflow.</a> The issue was triggered after I installed manually jest package but was not solved even after I uninstalled it and reinstalled *node_modules*
<pre>There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "jest": "24.7.1"

Don't try to install it manually: your package manager does it automatically.
However, a different version of jest was detected higher up in the tree:

  $PATH/redux-tdd.github.io/node_modules/jest (version: 24.8.0) 

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "jest" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /home/jayjay/HCMC/FSW-dev-docs/redux-tdd.github.io/node_modules/jest is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls jest in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed jest.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!</pre>

## License

    Copyright [2019] [Anh Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
