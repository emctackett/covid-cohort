import requests


def fetch_by_state_data():
    '''
    Fetches a JSON file containing statistics of US
    COVID-19 cases from the CDC website.
    '''
    url = 'https://www.cdc.gov/coronavirus/2019-ncov/map-cases-us.json'

    resp = requests.get(url)
    # Make sure we got a good response (code < 400)
    # If not, raise the appropriate exception
    if not resp.ok:
        resp.raise_for_status()

    # .json() on a requests Response object converts
    # JSON string to a Python object (e.g., dict or list).
    # For now just returning the whole thing
    return resp.json()


def fetch_by_country_data():
    '''
    Queries the backend database used by the JHU
    COVID-19 map to fetch by-country statistics.
    '''
    url = 'https://services.arcgis.com/5T5nSi527N4F7luB/arcgis/rest/services/Cases_by_country_Plg_V3/FeatureServer/0/query'
    params = {
        'f': 'json',
        'where': '1=1',
        'returnGeometry': False,
        'spatialRel': 'esriSpatialRelIntersects',
        'outFields': '*',
        'orderByFields': 'cum_conf desc',
        'cacheHint': 'true',
    }

    resp = requests.get(url, params=params)
    # Make sure we got a good response (code < 400)
    # If not, raise the appropriate exception
    if not resp.ok:
        resp.raise_for_status()

    # .json() on a requests Response object converts
    # JSON string to a Python object (e.g., dict or list).
    # For now just returning the whole thing
    return resp.json()
