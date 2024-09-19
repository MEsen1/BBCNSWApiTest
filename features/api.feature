Feature: All API scenarios
    
    As a product tester 
    I want to validate correctness of API

    Background:
      Given I make a GET request to "/media"
      When the response is received
      And the "content-type" header should be "application/json"
      And number of items in the data array should be 14

    Scenario: Verify Status Code and Response Time
      Then the HTTP status code should be 200
      And the response time should be less than 1000 milliseconds

    Scenario: Verify ID Field and Segment Type
      And each track in the data array should have the "id" field that is not null or empty
      And each track in the data array should have the "segment_type" field that is not null or empty
      Then "segment_type" field should be set to "music" for every track

    Scenario: Verify Primary Field in Title List
      And each track in the data array should have the "title_list" field that is not null or empty
      Then each track in the data array should have the "primary" field in "title_list" that is not null or empty

    Scenario: Verify Now Playing Track
      And each track in the data array should have the "offset" field that is not null or empty
      Then only one track should have the “now_playing” field in “offset” set to true

    Scenario: Verify Date in Response Headers
      Then the response headers should contain the "date" field with a valid value



