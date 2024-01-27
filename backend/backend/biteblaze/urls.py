from django.urls import path, include
from rest_framework import routers
from biteblaze import views
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import obtain_auth_token
#api verstoning

router = routers.DefaultRouter()

router.register(r'orderform', views.OrderView,basename='biteblaze')
router.register(r'foodform', views.FoodView,basename='biteblaze')
router.register(r'menu', views.MenuView,basename='biteblaze')
router.register(r'getorders', views.GetOrderView,basename='biteblaze')


urlpatterns = [
    path("biteblaze/", include(router.urls)),

]

