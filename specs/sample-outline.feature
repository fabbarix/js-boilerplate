Feature: This is a sample test - using outlines
  This test uses outlines to generate multiple tests.
  Scenario Outline: Add two numbers
    Given that I have <first> as the first number
    And <second> as the second number
    When I add them together
    Then I expect the sum to be <sum>
    Examples:
      | first    | second      | sum     |
      | 1        | 2           | 3       |
      | -1       | 1           | 0       |
      | -2       | 1           | -1      |
      | -2       | 5           | 3       |
