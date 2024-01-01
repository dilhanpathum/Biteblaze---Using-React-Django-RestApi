from django.urls import path, include
from rest_framework import routers
from biteblaze import views
#api verstoning

router = routers.DefaultRouter()
router.register(r'biteblaze', views.TaskView, basename='biteblaze')

urlpatterns = [
    path("api/v1/", include(router.urls))
]

