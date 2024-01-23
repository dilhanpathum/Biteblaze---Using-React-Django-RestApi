from django.contrib.auth.models import User
from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.URLField()
    # Add other fields as needed

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)  # Set the default value as needed
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, default=1)
    quantity = models.PositiveIntegerField(default=1)
