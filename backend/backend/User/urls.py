from django.urls import path, include
from rest_framework import routers
from User import views
#api verstoning

router = routers.DefaultRouter()

router.register('users', views.CustomUserView, basename='User')
urlpatterns = [
    path("api/", include(router.urls))
]