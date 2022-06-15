FROM node:alpine

# hadolint ignore=DL3017
RUN apk update && apk upgrade

# Install the application
COPY package.json /app/package.json
COPY app.js /app/app.js
COPY utils.js /app/utils.js
COPY emp.js /app/emp.js
WORKDIR /app
RUN npm install

# Support to for arbitrary UserIds
# https://docs.openshift.com/container-platform/3.11/creating_images/guidelines.html#openshift-specific-guidelines
RUN chmod -R u+x /app && \
    chgrp -R 0 /app && \
    chmod -R g=u /app /etc/passwd

ENV PORT 8080
EXPOSE 8080

# Define command to run the application when the container starts
CMD ["node", "app.js"]
