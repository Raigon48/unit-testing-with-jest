-   The following should be the structure of a properly written unit test:
        It should follow AAA principle:
            -   Arrange
            -   Act
            -   Assert

    Setup
    Teardown

-   F.I.R.S.T. principles, not rule that we follow when writing tests:
    -   Fast  -> test should run fast
    -   Independent -> isolated and independent from one another and external environments
    -   Repeatable -> test should be pure avoiding random and date (use mocks)
    -   Self-Validating -> its result should be clear pass/fail
    -   Thorough -> should cover all sunny, rainy and edge case scenario

    Test should be independent
    Reduce code duplication