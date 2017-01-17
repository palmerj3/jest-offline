# Jest-Offline

Jest-Offline is an addon to your Jest test suite which will fail tests that make network requests.

To install:

```
yarn add jest-offline
```

To use:

```javascript
{
	"jest": {
    	"setupFiles": [
        	"<rootDir>/node_modules/jest-offline"
        ]
    }
}
```

Any tests that make network requests will fail with a thrown exception.

## Why do this?

Fundamentally, unit tests should not make network requests. Unit tests should be as small as possible and test components in isolation whenever possible.

Any tests that rely on the network are inherently flaky and can put a strain on systems.

The best unit tests are tests that give the exact same result every single time you run the test. If they rely on network then that is simply impossible to achieve.

So jest-offline offers a simple way to:
1. Identify what tests are hitting the network
2. Prevent tests from hitting the network

You could either use this locally in order to see what tests are hitting the network. Or you could enable this by default on CI so no new tests can be added that hit the network.
