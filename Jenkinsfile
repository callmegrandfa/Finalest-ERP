pipeline {
  agent any
  stages {
    stage('Clear Container') {
      steps {
        sh '''#!/bin/sh
docker container prune << EOF
y
EOF
docker container ls -a | grep "web_test"
if [ $? -eq 0 ];then
	docker container stop web_test
	docker container rm web_test
fi
docker image prune << EOF
y
EOF'''
      }
    }
    stage('Build Container') {
      steps {
        sh 'docker build -t web_test .'
      }
    }
    stage('Depoly') {
      steps {
        sh 'docker run -d -p 8086:5000 -v /srv/docker/web_test:/home/node/app/node_modules --name=web_test web_test'
      }
    }
  }
}