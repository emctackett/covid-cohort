import requests


def fetch_by_state_data():
    resp = requests.get('https://www.cdc.gov/coronavirus/2019-ncov/map-cases-us.json')

    if not resp.ok:
        resp.raise_for_status()

    return resp.json()
