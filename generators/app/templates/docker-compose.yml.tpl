version: '3'
services:
  <%= snakeCaseName %>:
    build:
      context: .
      args:
        - NPM_TOKEN
    working_dir: /usr/src/app
    volumes:
      - ./:/usr/src/app
      - /usr/src/app/node_modules
      - ${SSH_AUTH_SOCK}:/ssh-agent
    environment:
      - NPM_TOKEN
      - CI
      - GITHUB_TOKEN
      - BUILDKITE_JOB_ID
      - SSH_AUTH_SOCK=/ssh-agent
      - GIT_TERMINAL_PROMPT=0
      - GIT_ASKPASS=echo
