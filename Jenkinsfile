pipeline {
    agent {
        label "build"
    }

    environment {
        REGION = 'us-east-1'
        USERNAME = 'AWS'
        ECR_URL = '097531186751.dkr.ecr.us-east-1.amazonaws.com'
        VERSION = "${BUILD_NUMBER}-${new Date().format("yyyyMMdd-HHmmss")}" // Dynamic version combining build number and timestamp
    }

    stages {
        stage('Checkout') {
            steps {
                script {  
                    checkout scm
                }
            }
        }

        // stage('Build docker image') {
        //     steps {
        //         sh 'docker build -t backend_basic .'
        //     }
        // }
        stage('Authenticate to ECR'){
            steps{
              sh "aws ecr get-login-password --region ${REGION} | docker login --username ${USERNAME} --password-stdin ${ECR_URL}"
            }
        }
        stage('Push to ECR'){
            steps{
                sh 'docker build -t backend .'
                sh "docker tag backend:latest ${ECR_URL}/backend:${VERSION}"
                sh "docker push ${ECR_URL}/backend:${VERSION}"
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