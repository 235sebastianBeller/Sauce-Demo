pipeline{
    agent any
        stages{
            stage("build"){
                steps{
                    echo 'building the app...'
                }
            }
                    stage("test"){
                steps{
                    sh '''
                        test -f build/index.html
                        npm test
                    '''
                }
            }
        }
}

