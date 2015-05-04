# docker-grafana

Docker image for grafana 2.0+. Configured for InfluxDB.

Data Sources are pre-created in Grafana.

# Environment variables
- ```INFLUXDB_HOST```: InfluxDB hostname
- ```INFLUXDB_PORT```: InfluxDB port
- ```INFLUXDB_NAME```: InfluxDB database name
- ```INFLUXDB_USER```: InfluxDB username
- ```INFLUXDB_PASS```: InfluxDB password