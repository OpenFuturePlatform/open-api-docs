# Errors

> Exception response:

```json
{
    "status": 400,
    "message": "Method Argument Not Valid",
    "errors": [
        {
            "code": "Size"
            "field": "password",
        },
        {
            "code": "PasswordsEqualsConstraint"
        }
    ]
}
```

The OPEN Platform API uses the following error format:

### Exception response:

The attributes:

Attribute | Type | Description
--------- | ---- | -----------
status | Integer | Http code
message | String | Description error
errors | [ErrorDto](#error-dto)[] |  Array error objects

### Error dto:

The attributes:

Attribute | Type | Description
--------- | ---- | -----------
code | String | Description error
field | String | The name of field - *optional*

### Error Statuses:

Error Status | Meaning
---------- | -------
400 | Bad Request -- Your request is invalid.
401 | Unauthorized -- Your API key is wrong.
403 | Forbidden -- You don`t have an appropriate roles.
404 | Not Found -- The specified OPEN Platform could not be found.
405 | Method Not Allowed -- You tried to access a OPEN Platform with an invalid method.
406 | Not Acceptable -- You requested a format that isn't json.
409 | Conflict -- Conflicts are in database
500 | Internal Server Error -- We had a problem with our server. Try again later.
