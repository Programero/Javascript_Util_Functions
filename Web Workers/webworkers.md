# Webworkers and Service Workers :

## Usage:

Web workers: to provide parallelism (assigning task to background threads)

Service Workers: Acts as a proxy server that sits between web applications and network. They are intended to enable the creation of effective offline experiences, intercepting network requests and providing access to push notifications and background sync APIs.
Service Workers can redirect requests to a cache, enabling offline access. Service Workers are key components in PWAs (Progressive Web Apps)

## Types of web workers

Web workers are of two types: Dedicated Worker and Shared Worker
We are mainly going to read about Dedicated Workers

## Application of dedicated workers

when you have a long-running synchronous task in your program — the whole window becomes totally unresponsive.
Workers give you the ability to run some tasks in a different thread, so you can start the task, then continue with other processing (such as handling user actions).

## Dedicated Workers have separate context, hence doesn't share variables

if both threads have access to the same variables, it's possible for a variable to change unexpectedly at any time, and this causes bugs that are hard to find.
To avoid these problems in the web, your main code and your worker code never get direct access to each others' variables. Workers and the main code run in completely separate scopes, and only interact by sending each other messages. In particular, this means that workers can't access the DOM (the window, document, page elements, and so on).

Due to their multi-threaded behavior, web workers only has access to a subset of JavaScript's features:

- The navigator object
- The location object (read-only)
- XMLHttpRequest
- setTimeout()/clearTimeout() and setInterval()/clearInterval()
- The Application Cache

Workers do NOT have access to:

- The DOM (it's not thread-safe)
- The window object
- The document object
- The parent object

## Message Passing between main thread and workers

Messages passed between the main page and workers are copied, not shared.

Main Page script and worker thread script communicate using messages

- In main.js to receive messages from worker thread worker.addEventListener(“message”,()=>{})
- In main.js to send messages to worker thread worker.postMessage(“any message”)
- In worker thread, to listen to messages addEventListener(“message”,()=>{})
- In worker thread, to send messages to main thread we use postMessage(“any message”)

## How to stop a web worker

There are two ways to stop a worker: by calling **worker.terminate()** from the main page or by calling **self.close()** inside of the worker itself.
