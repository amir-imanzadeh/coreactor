# Coreactor

Coreactor is a code execution and analysis system developed as part of the WebCreatix ecosystem.

It is designed to execute code in isolated environments, monitor runtime activity, and control access to system resources and network connections.

## Features

* Isolated code execution
* Docker-based sandboxing
* Runtime monitoring
* Network activity monitoring
* Filesystem and process monitoring
* Resource limits
* Execution policies
* Static and runtime analysis
* Structured execution results

## Technology Stack

* Node.js
* JavaScript
* Express
* C++
* Docker
* Linux
* PostgreSQL
* eBPF

## Architecture

Coreactor is divided into several main components:

* API: Handles communication with other applications and services.
* Execution: Manages code execution and execution environments.
* Sandbox: Provides isolation for executed code.
* Monitoring: Collects runtime, process, filesystem, network, and resource activity.
* Analysis: Processes source code and runtime information.
* Policies: Defines and enforces execution and access rules.

## Integration

Coreactor is designed to operate as an independent service within WebCreatix.

It can be integrated with Softwins and other applications that require code analysis or controlled code execution.

## Project Structure

The project is organized around the following areas:

* `src/api` for API functionality
* `src/execution` for execution management
* `src/sandbox` for isolation
* `src/analysis` for code analysis
* `src/monitoring` for runtime monitoring
* `src/policies` for execution policies
* `native/cpp` for native and low-level components
* `tests` for automated tests
* `docs` for project documentation

## Development Status

Coreactor is currently under active development.

Current development areas include:

* Execution management
* Docker isolation
* Runtime monitoring
* Network monitoring
* Resource control
* Access policies
* C++ system monitoring
* Static analysis

## Security

Coreactor uses isolation, resource restrictions, access policies, and runtime monitoring as separate layers of its security model.

Docker provides the primary container environment, while Linux-level mechanisms will be used for more detailed isolation and monitoring.

## WebCreatix

Coreactor is developed as part of WebCreatix and is intended to provide code analysis and controlled execution capabilities for Softwins and future WebCreatix applications.

## License

This project is currently not licensed for open-source distribution.
