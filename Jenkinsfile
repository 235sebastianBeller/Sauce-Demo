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
                    build '''
                        test -f reports/index.html
                        npm test
                    '''
                }
            }
        }
}

