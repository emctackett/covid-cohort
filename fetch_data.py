import requests


def fetch_by_state_data():
    url = 'https://www.cdc.gov/coronavirus/2019-ncov/map-cases-us.json'
    resp = requests.get(url)

    if not resp.ok:
        resp.raise_for_status()

    return resp.json()


def fetch_by_country_data():
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
    return resp.json()