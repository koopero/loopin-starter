This is a simple starter project for the [Loopin](https://github.com/koopero/loopin) creative coding system.

## Requirements

*Windows is not supported at this time.* This project should work on a properly configured Intel-based Mac or Linux box. See: [Requirements on the Wiki](https://loopin.tech/Requirements.html)

## Installation

``` sh
git clone https://github.com/koopero/loopin-starter.git YOURPROJECT
cd YOURPROJECT
npm install
npm start
```

## Usage

Once the starter project is running, point your browser at [http://localhost:7004](http://localhost:7004/) to control the application.

## Project Layout

### config/
Contains static configuration files, interpreted by the [config](https://www.npmjs.com/package/config) module. Use the file `default.yaml` to configure the server portion of this project, including the http port and control pages.

### control/
Contains **Markdown** control files. These are documents which contain simple, inline codes to wire control data to the application.

### data/
Used by the application to store runtime generated data.

### data/persist.yaml
This is the data file which the [loopin-server](https://github.com/koopero/loopin-server) module uses to save application state between runs. 

### image/
Contains `.jpg` and `.png` [images](https://loopin.tech/ofxLoopin-image.html), which will be autoloaded by default.

### native/
Used by the [loopin-native](https://github.com/koopero/loopin-native) as storage for binary data.

### node/
Mostly boilerplate code to get everything up and running. `node/loopin.js` contains Loopin setup, with configuration of defaults such as which directories are autoloaded. The file `node/logic/snapshot.js` contains a simple utility to take screenshots of the application, as an example of using javascript logic in Loopin apps.

### preset/
By default, *all* presets in this directory are autoloaded.

### shader/
GLSL shaders. To create a new shader, duplicate `shader/base.vert` and/or `shader/base.vert` with a new name.
