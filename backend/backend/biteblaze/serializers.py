from rest_framework import serializers
from biteblaze.models import Biteblaze
from .models import Task
from .models import Order

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__'

class BiteblazeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Biteblaze
        fields = '__all__'


#serializing the orderform 
class OrderSerializer(serializers.ModelSerializer):
    class Meta:    
        model = Order
        fields = '__all__'
