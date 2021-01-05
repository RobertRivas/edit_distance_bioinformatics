"""edit_distance_web_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.views.generic import TemplateView


from django.urls import include, path
from rest_framework import routers





# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('', TemplateView.as_view(template_name='react.html')),
    path('soft-dev/', TemplateView.as_view(template_name='react.html')),
    path('web-dev/', TemplateView.as_view(template_name='react.html')),
    path('mixing-mastering/', TemplateView.as_view(template_name='react.html')),
    path('music-production/', TemplateView.as_view(template_name='react.html')),
    path('digital-marketing/', TemplateView.as_view(template_name='react.html')),
    path('about/', TemplateView.as_view(template_name='react.html')),
    path('contact/', TemplateView.as_view(template_name='react.html')),
    path('admin/', admin.site.urls),
    # path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('soft-dev/api/editdistance/', include('editdistance.urls')),

]
