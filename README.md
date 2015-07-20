# StatsD Connector for Node Application Metrics

A connector that collects data using 'appmetrics' and sends it to a configured StatsD server using 'node-statsd'.

## Getting Started

### Installation
The StatsD Connector for Node Application Metrics can be installed via `npm`:
```sh
$ npm install appmetrics-statsd
```

### Configuring the StatsD Connector for Node Application Metrics 

The connector can be used in your application by requiring it as the first line of your application:
```sh
var appstatsd = require('appmetrics-statsd').Client();
```
Configuration of the connection to the StatsD server is possible by passing parameters to the `Client()` function. These are passed directly though to the `StatsD` constructor in the `node-statsd` module. Information for that module is available here:
https://www.npmjs.com/package/node-statsd

Additional data may also be sent to StatsD using the standard `node-statsd` module Client APIs, eg.

```sh
var statsd = require('appmetrics-statsd').StatsD();

statsd.guage('gauge', 10.4);
```

### Data Provided

The connector sends the following data values to StatsD from Node Application Metrics:
#### Gauges
* `memory.process.private` the amount of memory used by the Node.js application that cannot be shared with other processes, in bytes.
* `memory.process.physical` the amount of RAM used by the Node.js application in bytes.
* `memory.process.virtual` the memory address space used by Node.js application in bytes.
* `memory.system.used` the total amount of RAM in use on the system in bytes.
* `memory.system.total` the total amount of RAM available on the system in bytes.
* `gc.size` the size of the JavaScript heap in bytes.
* `gc.used` the amount of memory used on the JavaScript heap in bytes.

#### Timers
* `gc.duration` the duration of the GC cycle in milliseconds.

### License
The Node Application Metrics to StatsD Connector is licensed using an Apache v2.0 License.

### Version
1.0.0