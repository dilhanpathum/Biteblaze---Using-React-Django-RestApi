from django.urls import path, include
from rest_framework import routers
from User import views
from rest_framework.authtoken.views import obtain_auth_token
#api verstoning

router = routers.DefaultRouter()

router.register(r'users', views.CustomUserView, obtain_auth_token)

urlpatterns = [
    path("api/", include(router.urls))
]