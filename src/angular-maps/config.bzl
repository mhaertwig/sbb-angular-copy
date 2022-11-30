"""
  Entry points list for maps.
"""

entry_points = [
    # do not sort
    "core",
    "esri-basemap-gallery",
    "esri-config",
    "esri-layer-list",
    "esri-legend",
    "esri-web-map",
    "esri-web-scene",
]

# List of all non-testing entry-points of the Maps package.
MAPS_ENTRYPOINTS = [
    ep
    for ep in entry_points
    if not "/testing" in ep
]

# List of all testing entry-points of the Maps package.
MAPS_TESTING_ENTRYPOINTS = [
    ep
    for ep in entry_points
    if not ep in MAPS_ENTRYPOINTS
]

# List of all non-testing entry-point targets of the Maps package.
MAPS_TARGETS = ["//src/angular-maps"] + \
               ["//src/angular-maps/%s" % ep for ep in MAPS_ENTRYPOINTS]

# List of all testing entry-point targets of the Angular-maps package.
MAPS_TESTING_TARGETS = ["//src/angular-maps/%s" % ep for ep in MAPS_TESTING_ENTRYPOINTS]

MAPS_MARKDOWN_TARGETS = [
    "core",
    "esri-basemap-gallery",
    "esri-config",
    "esri-layer-list",
    "esri-legend",
    "esri-web-map",
    "esri-web-scene",
]
