pipeline{
    agent any
        stages{
            stage("build"){
                steps{
                    echo 'building the app...'
                 sh 'npm install'  
                }
            }
                    stage("test"){
                steps{
                    sh '''
                        npm test
                    '''
                }
            }
        }
}

