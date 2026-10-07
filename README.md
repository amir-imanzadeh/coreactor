# Coreactor

**Controlled code execution, analysis, and sandboxing system.**

Coreactor is a WebCreatix project designed to execute and analyze code inside isolated environments while monitoring runtime activity, resource usage, network access, and system interactions.

The goal is to provide a controlled environment for running untrusted or unknown code.

## Features

* 🔒 Docker-based code isolation
* ⚙️ Controlled code execution
* 📊 Runtime activity monitoring
* 🌐 Network activity monitoring and control
* 📁 Filesystem access monitoring
* 🧠 Static and runtime code analysis
* 🚦 Configurable execution policies
* 💻 Resource and process limits
* 🔬 Low-level system monitoring
* 🔗 API integration with other WebCreatix services

## Architecture

```text
                 Coreactor
                    │
              ┌─────┴─────┐
              │            │
           API Layer   Analysis Layer
              │            │
              ▼            ▼
        Execution Manager
              │
              ▼
        Docker Sandbox
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
     Code   Runtime  Resources
              │
              ▼
          Monitoring
              │
              ▼
        Policy Engine
              │
              ▼
           Results
```

## Technology Stack

| Area                | Technology                   |
| ------------------- | ---------------------------- |
| API & Backend       | Node.js, JavaScript, Express |
| Isolation           | Docker                       |
| Systems Programming | C++                          |
| Operating System    | Linux                        |
| Runtime Monitoring  | Linux APIs, eBPF             |
| Database            | PostgreSQL                   |
| Communication       | REST API                     |

## Core Components

### Execution

Receives code, creates an isolated execution environment, applies execution limits, runs the code, and collects the result.

### Sandbox

Uses Docker and Linux security mechanisms to isolate executed code from the host environment.

### Monitoring

Tracks runtime behavior such as:

* Processes
* Filesystem activity
* Network connections
* Resource usage
* Execution events

### Policy Engine

Defines what an executed program is allowed to access or perform.

Example:

```text
Network       → DENY
/workspace    → READ / WRITE
Memory        → 512 MB
Processes     → 32
Execution     → 10 seconds
```

### Analysis

Combines source-level and runtime information to provide a better understanding of program behavior.

## Integration

Coreactor is designed to work as an independent service within the WebCreatix ecosystem.

```text
Softwins
    │
    │ HTTP
    ▼
Coreactor
    │
    ├── Code Analysis
    ├── Validation
    └── Controlled Execution
```

## Development Status

**Active Development**

Current focus:

* [x] Basic execution API
* [x] Docker execution foundation
* [x] WebCreatix service integration
* [ ] Execution limits
* [ ] Runtime monitoring
* [ ] Network monitoring
* [ ] Access control
* [ ] C++ monitoring components
* [ ] Policy engine
* [ ] Static analysis
* [ ] Unified analysis reports

## Security

Coreactor is designed around layered isolation and control.

Docker is only one layer of the security model. The project will progressively integrate additional Linux mechanisms such as:

* Namespaces
* cgroups
* seccomp
* Linux capabilities
* Network restrictions
* Runtime monitoring

Security-related functionality is considered incomplete until it has been implemented and tested.

## WebCreatix

Coreactor is part of the **WebCreatix** ecosystem and is intended to provide controlled code execution and analysis capabilities for Softwins and future WebCreatix applications.

## License

This project is currently under active development and is not distributed under an open-source license.
