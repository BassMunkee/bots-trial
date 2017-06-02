# Test the connection to bot service

# Template
curl -k -X POST https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token -d "grant_type=client_credentials&client_id=MICROSOFT_APP_ID&client_secret=PASSWORD&scope=https%3A%2F%2Fapi.botframework.com%2F.default"

# Substituted with credentials
curl -k -X POST https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token -d "grant_type=client_credentials&client_id=4057c402-f61e-41bc-a34a-a309cca4c604&client_secret=r3Phz4rKshp32jz9GneMSaJ&scope=https%3A%2F%2Fapi.botframework.com%2F.default"

Note: Don't get confused by the naming - secret, password. There are a couple of ways to authenticate the app on the BotFramework console. In this case we are using the `password` and this has to be used as the value for the `secret` parameter.