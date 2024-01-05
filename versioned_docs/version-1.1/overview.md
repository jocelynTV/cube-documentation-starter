---
sidebar_position: 1
---

# Overview

### Introduction

Welcome to the Cube API! You can use our API to access Cube API endpoints, which can get information on various users, customers, and clients in our database.

We have language bindings in Shell, Python, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the bellow.


### Base URLs

Use the following base URL when making requests to the API: https://api.cube-example.com/

### Authentication

The Cube API uses Bearer Token. You can generate API keys in [Authentication](/docs/authentication).

You must include your secret API key in the header of all requests, for example:

```powershell
curl
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer api_key' \
```

### HTTP Responses

The API returns standard HTTP response codes [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) on each request to indicate the success or otherwise of API requests. HTTP status codes summary are listed below:

- `200 OK` - The request was successful.
- `201 Created` - The request was successful, and a new resource was created as a result.
- `400 Bad Request` - Bad request, probably due to a syntax error.
- `401 Unauthorized` - Authentication required.
- `403 Forbidden` - The API key doesn't have permissions.
- `500 Internal Server Error` - We had a problem with our server. Try again later.
- `503 Service Unavailable` - We're temporarily offline for maintenance. Please try again later.

### Errors

All errors are returned in the form of JSON.

#### Error Schema

In case of an error, the response object contains the following fields:

- `statusCode` *integer* - The HTTP status code.
- `traceId` *string* - The unique identifier of the failing request.
- `message` *string* - A short, human-readable summary of the error.
- `detail` *string* - A human-readable message giving more details about the error. Not always present.

The following example shows a possible error response:

```js
{
  "message": "One or more validation errors occurred.",
  "statusCode": 400,
  "traceId": "00-a405f077df056a498323ffbcec05923f-aa63e6f4dbbc734a-01",
}
```