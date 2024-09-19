 Feature: Manual API scenarios
    # Manul test cases
    Background:
      Given I make a GET request to "/media"
      When the response is received
    
    Scenario: Validate Offset Field Values
      Then each track should have a valid “offset” field with a non-negative “start” and “end” values
      Then each track's "offset" field "start" value should be less than the "end" value
      And each track's "offset" "end" value should be less than the "start" value of the next track
    
    Scenario: Verify the URIs field for each music track
      Then each track's "uris" field should be present
      And each track's "uris" field should be an array
      And if the "uris" field is not empty, each URI object should contain "type", "id", "label", and valid "uri" fields

    Scenario: Verify synopses and image_url fields
      Then each track in the data array should have the "type" field set to "music_track"
      And each track in the data array should have a unique "id" field
    
   