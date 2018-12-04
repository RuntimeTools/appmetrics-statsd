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
var appstatsd = require('appmetrics-statsd').StatsD();
```
Configuration of the connection to the StatsD server is possible by passing parameters to the `StatsD()` function. These are passed directly though to the `StatsD` constructor in the `node-statsd` module. Information for that module is available here:
https://www.npmjs.com/package/node-statsd

Additional data may also be sent to StatsD using the standard `node-statsd` module Client APIs, eg.

```sh
var statsd = require('appmetrics-statsd').StatsD();

statsd.gauge('gauge', 10.4);
```

### Data Provided

The connector sends the following data values to StatsD from Node Application Metrics:


#### CPU
**Gauges**

* `cpu.process` the CPU usage of the application as a percentage of total machine CPU
* `cpu.system` the CPU usage of the system as a percentage of total machine CPU

#### System Memory

**Gauges**

* `memory.process.private` the amount of memory used by the Node.js application that cannot be shared with other processes, in bytes.
* `memory.process.physical` the amount of RAM used by the Node.js application in bytes.
* `memory.process.virtual` the memory address space used by Node.js application in bytes.
* `memory.system.used` the total amount of RAM in use on the system in bytes.
* `memory.system.total` the total amount of RAM available on the system in bytes.

####Event Loop

* `eventloop.latency.min` the shortest sampled latency for processing an event
* `eventloop.latency.max` the longest sampled latency for processing an event
* `eventloop.latency.avg` the mean sampled latency for processing an event

####Garbage Collection

**Gauges**

* `gc.size` the size of the JavaScript heap in bytes.
* `gc.used` the amount of memory used on the JavaScript heap in bytes.

**Timers**

* `gc.duration` the duration of the GC cycle in milliseconds.

####HTTP Requests

**Timers**

* `http` the time taken for the HTTP request to be responded to in ms.

####Socket.io

**Timers**

* `socketio.broadcast.<event>` the time taken for the broadcast to all clients of the named socketio event.
* `socketio.emit.<event>` the time taken for the emit to a single client of the named socketio event.
* `socketio.receive.<event>` the time taken for a received named socketio event to be handled.

####MySQL Queries

**Timers**

* `mysql` the time taken for the given MySQL query to be responded to in ms.

####MongoDB Queries

**Timers**

* `mongo` the time taken for the given MongoDB query to be responded to in ms.

####Leveldown Queries

**Timers**

* `levedown.get` the time taken for the Leveldown `get` to be responded to in ms.
* `levedown.put` the time taken for the Leveldown `put` to be responded to in ms.
* `levedown.del` the time taken for the Leveldown `del` to be responded to in ms.
* `levedown.batch` the time taken for the Leveldown `batch` to be run in ms.

####Redis Queries

**Timers**

* `redis.<cmd>` the time taken for the given Redis command to be responded to in ms.

####Memcached Operations

**Timers**

* `memcached.<method>` the time taken for the given Memcached method to be responded to in ms.

####PostgreSQL Queries

**Timers**

* `postgres` the time taken for the given PostgresSQL query to be responded to in ms.

####MQTT Messaging

**Timers**

* `mqtt.<method>.<topic>` the time taken for a MQTT message to handled on a given topic in ms.

####MQLight Messaging

**Timers**

* `mqlight.<method>.<topic>`  the time taken for a MQLight message to handled on a given topic in ms.

### License
The Node Application Metrics to StatsD Connector is licensed using an Apache v2.0 License.

### Version
3.0.0

#### Version History
3.0.0 Remove fixed version of appmetrics in package.json

2.0.0 Update appmetrics version to 3.x.x

1.0.1 Add support for Event Loop, HTTP, Socketio, MongoDB, MySQL, Leveldown, Redis, Memcached, POstgreSQL, MQTT and MQLight  
1.0.0 Initial release  
