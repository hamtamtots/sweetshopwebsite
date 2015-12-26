from django.conf.urls import url

from .views.homeview import HomeView

urlpatterns = [
    url(r'^$', HomeView.as_view(), name='home'),
]