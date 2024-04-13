pipeline {
    agent build
    stages {
        stage('Checkout') {
            steps {
                script { 
                    checkout scm
                }
            }
        }

        stage('Build docker image') {
            steps {
                sh 'docker build -t backend_basic .'
            }
        }
        stage('run docker container') {
            steps {
                sh 'docker container run -p 3001:3001 -d backend_basic'
            }
        }

    }

    post {
        success {
            echo 'Build successful! Send notifications, etc.'
        }

        failure {
            echo 'Build failed! Send notifications, etc.'
        }
    }
}