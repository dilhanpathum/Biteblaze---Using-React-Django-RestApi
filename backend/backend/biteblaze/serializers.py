from rest_framework import serializers
from biteblaze.models import Biteblaze
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__'

class BiteblazeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Biteblaze
        fields = '__all__'