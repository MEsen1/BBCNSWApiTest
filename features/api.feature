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

    # Manul test cases
    Scenario: Validate Offset Field Values
      Given I make a GET request to "/media"
      When the response is received
      Then each track should have a valid “offset” field with a non-negative “start” and “end” values
      Then each track's "offset" field "start" value should be less than the "end" value
      And each track's "offset" "end" value should be less than the "start" value of the next track
    
    Scenario: Verify the URIs field for each music track
      Given I make a GET request to "/media"
      When the response is received
      Then each track's "uris" field should be present
      And each track's "uris" field should be an array
      And if the "uris" field is not empty, each URI object should contain "type", "id", "label", and valid "uri" fields

    Scenario: Verify synopses and image_url fields
      Given I make a GET request to "/media"
      When the response is received
      Then each track in the data array should have the "synopses" field 
      And each track in the data array should have the "image_url" field 


