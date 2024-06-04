---
title: "Python Scrape Google Script"
language: "python"
date: "02-22-2024"
codeLines: 24
modifiedAt: "02-22-2024"
description: "A scrape script to scrape data from google , first 10 result on request"
level: "intermediate"
---
```python
import requests

def google_search(query, api_key, cse_id, num_results=10):
    search_url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": api_key,
        "cx": cse_id,
        "q": query,
        "num": num_results
    }

    response = requests.get(search_url, params=params)
    results = response.json()

    search_results = []
    for item in results.get("items", []):
        search_results.append({
            "title": item.get("title"),
            "link": item.get("link"),
            "snippet": item.get("snippet")
        })

    return search_results

# Replace 'YOUR_API_KEY' and 'YOUR_CSE_ID' with your actual Google API key and Custom Search Engine ID
api_key = "YOUR_API_KEY"
cse_id = "YOUR_CSE_ID"
query = "your search query here"

results = google_search(query, api_key, cse_id)
for idx, result in enumerate(results, start=1):
    print(f"Result {idx}:")
    print(f"Title: {result['title']}")
    print(f"Link: {result['link']}")
    print(f"Snippet: {result['snippet']}
")

```

## Google Search Results Scraper

This Python script allows you to scrape the first 10 search results from Google using the Google Custom Search API. It fetches the title, link, and snippet for each search result.

### Prerequisites

Before you can run this script, you need to have the following:

- Python 3.x installed on your machine.
- `requests` library installed. You can install it using pip:

  ```sh
  pip install requests
