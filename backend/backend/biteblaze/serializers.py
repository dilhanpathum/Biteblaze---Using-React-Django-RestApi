from rest_framework import serializers

from .models import Order
from .models import Food


# class TaskSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Task
#         #fields = ('id', 'title', 'description', 'done')
#         fields = '__all__'

# class BiteblazeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Biteblaze
#         fields = '__all__'


#serializing the orderform 
class OrderSerializer(serializers.ModelSerializer):
    class Meta:    
        model = Order
        fields = '__all__'

#serializing the foodform 
class FoodSerializer(serializers.ModelSerializer):
    class Meta:    
        model = Food
        fields = '__all__'


