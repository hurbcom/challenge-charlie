# Services Folder

The Services folder contains modules responsible for handling API calls in the application. This separation of concerns helps to keep the application architecture clean, organized and maintainable. 

## Why Services Folder?

Isolating all API calls in the Services folder allows for easier management of the codebase. It is easier to locate all the files responsible for API calls in a single folder, rather than having them scattered throughout the application. 

In addition, having a dedicated Services folder also makes it easier to implement a common SDK for handling API requests across the application. This means that the same SDK can be used for both the web and mobile versions of the application, reducing the amount of duplicated code and simplifying the development process. 

Finally, separating the API calls into a dedicated folder allows for easier integration with third-party APIs or external services, as these can be managed in a separate project if necessary.