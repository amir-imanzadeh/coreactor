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


# نسخه فارسی

# Coreactor

Coreactor یک سیستم برای اجرای و تحلیل کد است که به عنوان بخشی از اکوسیستم WebCreatix توسعه داده می‌شود.

این پروژه برای اجرای کد در محیط‌های ایزوله، بررسی فعالیت‌های زمان اجرا و کنترل دسترسی کد به منابع سیستم و ارتباطات شبکه طراحی شده است.

## قابلیت‌ها

* اجرای ایزوله کد
* استفاده از Docker برای ایجاد محیط Sandbox
* پایش فعالیت‌های زمان اجرا
* پایش فعالیت‌های شبکه
* پایش فایل‌ها و پردازش‌ها
* محدودیت منابع
* تعریف و اجرای سیاست‌های دسترسی
* تحلیل ایستا و زمان اجرا
* تولید نتایج ساختاریافته از اجرای کد

## فناوری‌های مورد استفاده

* Node.js
* JavaScript
* Express
* C++
* Docker
* Linux
* PostgreSQL
* eBPF

## معماری

Coreactor از چند بخش اصلی تشکیل می‌شود:

* API: ارتباط با سایر برنامه‌ها و سرویس‌ها را مدیریت می‌کند.
* Execution: اجرای کد و مدیریت محیط‌های اجرا را بر عهده دارد.
* Sandbox: محیط ایزوله برای اجرای کد ایجاد می‌کند.
* Monitoring: فعالیت‌های زمان اجرا، پردازش‌ها، فایل‌ها، شبکه و منابع را بررسی می‌کند.
* Analysis: اطلاعات مربوط به کد و اجرای آن را تحلیل می‌کند.
* Policies: قوانین مربوط به اجرا و دسترسی را تعریف و اعمال می‌کند.

## یکپارچه‌سازی

Coreactor به گونه‌ای طراحی شده است که به عنوان یک سرویس مستقل در WebCreatix فعالیت کند.

این سرویس می‌تواند با Softwins و سایر برنامه‌هایی که به تحلیل کد یا اجرای کنترل‌شده کد نیاز دارند، یکپارچه شود.

## ساختار پروژه

ساختار پروژه بر اساس بخش‌های زیر سازمان‌دهی می‌شود:

* `src/api` برای قابلیت‌های API
* `src/execution` برای مدیریت اجرای کد
* `src/sandbox` برای ایزوله‌سازی
* `src/analysis` برای تحلیل کد
* `src/monitoring` برای پایش زمان اجرا
* `src/policies` برای سیاست‌های اجرا
* `native/cpp` برای اجزای Native و سطح پایین
* `tests` برای تست‌های خودکار
* `docs` برای مستندات پروژه

## وضعیت توسعه

Coreactor در حال توسعه است.

بخش‌های فعلی توسعه شامل موارد زیر هستند:

* مدیریت اجرای کد
* ایزوله‌سازی با Docker
* پایش زمان اجرا
* پایش شبکه
* کنترل منابع
* سیاست‌های دسترسی
* پایش سیستم با C++
* تحلیل ایستای کد

## امنیت

Coreactor از ایزوله‌سازی، محدودیت منابع، سیاست‌های دسترسی و پایش زمان اجرا به عنوان لایه‌های مختلف مدل امنیتی خود استفاده می‌کند.

Docker محیط اصلی اجرای کانتینری را فراهم می‌کند و مکانیزم‌های سطح سیستم‌عامل Linux برای ایزوله‌سازی و پایش دقیق‌تر مورد استفاده قرار خواهند گرفت.

## WebCreatix

Coreactor به عنوان بخشی از WebCreatix توسعه داده می‌شود و قرار است قابلیت‌های تحلیل کد و اجرای کنترل‌شده را برای Softwins و برنامه‌های آینده WebCreatix فراهم کند.

## مجوز

این پروژه در حال حاضر تحت مجوز متن‌باز منتشر نشده است.
