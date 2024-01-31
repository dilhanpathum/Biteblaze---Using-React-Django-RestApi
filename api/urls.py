# api/urls.py

from django.urls import path
from .views import AddToCartView
from .views import MenuItemList, CartItemList, view_cart

urlpatterns = [
    path('menu/', MenuItemList.as_view(), name='menu-list'),
    path('cart/', CartItemList.as_view(), name='cart-list'),
    path('view-cart/', view_cart, name='view-cart'),
   path('add-to-cart/<int:menu_item_id>/', AddToCartView.as_view(), name='add-to-cart'),
]
