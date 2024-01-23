from django.contrib import admin
from .models import Task
from .models import Order
from .models import Food
# Register your models here.
admin.site.register(Task)
admin.site.register(Order)
admin.site.register(Food)