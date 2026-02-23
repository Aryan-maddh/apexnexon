import requests
import json
import os

def test_contact_form():
    # Use localhost if testing locally, otherwise use the actual API URL
    url = "https://apexnexon-api.vercel.app/api/contact"
    # url = "http://localhost:8000/api/contact" 
    
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "company": "Test Co",
        "phone": "1234567890",
        "message": "This is a test message with more than 10 characters."
    }
    
    print(f"Testing POST request to {url}...")
    try:
        response = requests.post(url, json=payload, timeout=10.0)
        print(f"Status Code: {response.status_code}")
        print(f"Response Body: {response.text}")
        
        if response.status_code == 201:
            print("SUCCESS: Contact form submitted correctly.")
        elif response.status_code == 422:
            print("FAILURE: Validation error. Check the response body for details.")
        else:
            print(f"FAILURE: Received status code {response.status_code}")
            
    except Exception as e:
        print(f"ERROR: Could not connect to the API: {e}")

if __name__ == "__main__":
    test_contact_form()
