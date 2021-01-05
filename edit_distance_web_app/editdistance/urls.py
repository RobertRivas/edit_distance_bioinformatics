from django.urls import include, path
from rest_framework import routers
from django.conf.urls import url

from django.views.generic import TemplateView

from . import views


router = routers.DefaultRouter()
router.register(r'EditDistanceWords', views.EditDistanceWordsViewSet)

urlpatterns = [
    # path('', TemplateView.as_view(template_name='react.html')),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

    # url(r'^$', views.index, name="index"),

]
