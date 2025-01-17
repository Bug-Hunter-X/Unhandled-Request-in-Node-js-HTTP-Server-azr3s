# Unhandled Request in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: forgetting to send a response to the client.  This can lead to hanging requests and a poor user experience.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides the corrected version.

## Bug

The server logs a message indicating that a request was received, but it doesn't send any response back to the client.  This results in the client waiting indefinitely for a response.

## Solution

The solution involves sending a response using `res.end()` or similar methods, with an appropriate status code and potentially some data.