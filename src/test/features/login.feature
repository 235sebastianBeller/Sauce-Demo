Feature:Log into the website
        Background:
            Given  I am on the home page
            
        Scenario Outline:Log in with valid credentials
            Given I enter valid "<userName>" and "<password>"
             When I click on the login button
             Then I should be logged in successfully
        Examples:
                  | userName                | password     |
                  | standard_user           | secret_sauce |
                  | problem_user            | secret_sauce |
                  | performance_glitch_user | secret_sauce |
                  | error_user              | secret_sauce |
                  | visual_user             | secret_sauce |

        Scenario Outline:Log in with blocked credentials
            Given I enter valid "<userName>" and "<password>"
             When I click on the login button
             Then I should see the following message "Sorry, this user has been locked out."
        Examples:
                  | userName        | password     |
                  | locked_out_user | secret_sauce |

        Scenario Outline:Log in with empty credentials
            Given I enter valid "<userName>" and "<password>"
             When I click on the login button
             Then I should see the following message "<errorMessage>"
        Examples:
                  | userName      | password     | errorMessage         |
                  |               | secret_sauce | Username is required |
                  | standard_user |              | Password is required |
                  |               |              | Username is required |


