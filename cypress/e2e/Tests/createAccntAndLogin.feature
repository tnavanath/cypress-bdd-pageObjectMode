Feature: Account creation process validation

    Scenario: Enter mandatory details on the 'Create Account' page and verify account creation
        Given user is on the Create Account page
        When user fill in the mandatory details
            | FirstName | LastName | EmailId                | Password      |
            | Kapil     | Sharma   | Kapil.Sharma@gmail.com | KapilSharma29 |
        And submit the details
        Then the user should be able to log in with the created credentials

    Scenario: Enter your User ID and Password to log in to the created account
        Given user is on the Log in Account page
        When user fill in the user id and Password details
            | EmailId             | Password   |
            | Raj.Kumar@gmail.com | RajKumar29 |
        Then the user should be able to log in with the entered credentials

