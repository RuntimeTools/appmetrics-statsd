/*******************************************************************************
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var monitor = function (host, port, prefix, suffix, globalize, cacheDns, mock, global_tags) {
	var appmetrics = require('appmetrics');
    var monitor = appmetrics.monitor();

    var StatsD = require('node-statsd');
    var client = Object.create(StatsD.prototype);
    StatsD.apply(client, arguments);

    monitor.on('cpu', function handleCPU(cpu) {
    	client.gauge('cpu.process', cpu.process);
        client.gauge('cpu.system', cpu.system);
	});

	monitor.on('memory', function handleMem(memory) {
		client.gauge('memory.process.private', memory.private);
		client.gauge('memory.process.physical', memory.physical);
		client.gauge('memory.process.virtual', memory.virtual);
		client.gauge('memory.system.used', memory.physical_used);
		client.gauge('memory.system.total', memory.physical_total);
	});
	
	monitor.on('eventloop', function handleEL(eventloop) {
		client.gauge('eventloop.latency.min', eventloop.latency.min);
		client.gauge('eventloop.latency.max', eventloop.latency.max);
		client.gauge('eventloop.latency.avg', eventloop.latency.avg);
	});

	monitor.on('gc', function handleGC(gc) {
		client.gauge('gc.size', gc.size);
		client.gauge('gc.used', gc.used);
		client.timing('gc.duration', gc.duration);
	});
	
	monitor.on('http', function handleHTTP(http) {
		client.timing('http', http.duration)
	});
	
	monitor.on('socketio', function handleSocketio(socketio) {
		client.timing('socketio.' + socketio.method + '.' + socketio.event, socketio.duration)
	});
	
	monitor.on('mysql', function handleMySQL(mysql) {
		client.timing('mysql', mysql.duration)
	});
	
	monitor.on('mongo', function handleMongo(mongo) {
		client.timing('mongo', mongo.duration)
	});
	
	monitor.on('leveldown', function handleLeveldown(leveldown) {
		client.timing('leveldown', leveldown.duration)
	});
	
	monitor.on('redis', function handleRedis(redis) {
		client.timing('redis.' + redis.cmd, redis.duration)
	});
	
	monitor.on('memcached', function handleMemcached(memcached) {
		client.timing('memcached.' + memcached.method, memcached.duration)
	});
	
	monitor.on('postgres', function handlePostgres(postgres) {
		client.timing('postgres', postgres.duration)
	});
	
	monitor.on('mqtt', function handleMQTT(mqtt) {
		client.timing('mqtt.' + mqtt.method + '.' + mqtt.topic, mqtt.duration)
	});
	
	monitor.on('mqlight', function handleMQLight(mqlight) {
		client.timing('mqlight.' + mqlight.method + '.' + mqlight.topic, mqlight.duration)
	});

	return client;
};

exports.StatsD = monitor;