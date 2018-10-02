steps:
  - label: ':eslint: Lint'
    command: .buildkite/steps/lint.sh
    agents:
      queue: npm-packages
    plugins:
      docker-compose#v2.5.1:
        config: docker-compose.yml
        run: <%= snakeCaseName %>

  - wait

  - label: ':jest: Tests'
    command: .buildkite/steps/test.sh
    agents:
      queue: npm-packages
    plugins:
      docker-compose#v2.5.1:
        config: docker-compose.yml
        run: <%= snakeCaseName %>

  - wait

  - label: ':rocket: publish'
    command: .buildkite/steps/publish.sh
    agents:
      queue: npm-packages
    branches: master
    concurrency: 1
    concurrency_group: '<%= kebabCaseName %>/publish'
    plugins:
      docker-compose#v2.5.1:
        config: docker-compose.yml
        run: <%= snakeCaseName %>
