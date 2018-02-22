[![Build Status](https://travis-ci.org/kaxcode/cloudwatch.svg?branch=master)](https://travis-ci.org/kaxcode/cloudwatch)


Check out the CloudWatch app [here](http://cloudwatch100.s3-website-us-east-1.amazonaws.com/).

## About CloudWatch

- Client asked for a timer to be created with [create-react-app](https://github.com/facebook/create-react-app).
- [React Materialize](https://react-materialize.github.io/#/) was used for styling.
- Deployment was done with [AWS S3](https://aws.amazon.com/s3/).

## Components
- App
- Timer

## Code files
- App.js
- Timer.js
- index.css

## Deployment
This app was deployed using Amazon S3. To deploy yourself, start by navigating to the S3 section of the AWS console. Next, create a new bucket closest to you or your users. While configuring it, make sure to enable static website hosting and set up the correct permissions (public if you would like it to be viewable by others). Navigate to the terminal and `npm run build `.

When complete, navigate to your build folder and upload the contents of that folder into your S3 bucket. To confirm that your app has been successfully deployed, navigate to the `index.html` file and locate the URL in the following format: `<bucket-name>.s3-website.<bucket-region>.amazonaws.com`.

For more detailed instructions, please refer to this [link](https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/).

Thanks for dropping by!
