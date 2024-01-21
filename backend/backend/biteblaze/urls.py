from django.urls import path, include
from rest_framework import routers
from biteblaze import views

#api verstoning

router = routers.DefaultRouter()
router.register(r'orderform', views.OrderView, basename='biteblaze')
router.register(r'foodform', views.FoodView, basename='biteblaze')



urlpatterns = [
    path("biteblaze/", include(router.urls)),

]

