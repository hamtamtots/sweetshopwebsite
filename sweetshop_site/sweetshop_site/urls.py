"""
Definition of urls for sweetshop_site.
"""

from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    url(r'^$', include('home.urls')),
]
