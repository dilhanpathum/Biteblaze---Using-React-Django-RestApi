from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from biteblaze.serializers import BiteblazeSerializer
from biteblaze.models import Biteblaze




class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
@csrf_exempt
def biteblazeApi(request,id=0):
    if request.method=='GET':
        student = Biteblaze.objects.all()
        student_serializer=BiteblazeSerializer(student,many=True)
        return JsonResponse(student_serializer.data,safe=False)
    elif request.method=='POST':
        student_data=JSONParser().parse(request)
        student_serializer=BiteblazeSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        student_data=JSONParser().parse(request)
        student=Biteblaze.objects.get(id=id)
        student_serializer=BiteblazeSerializer(student,data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        student=Biteblaze.objects.get(id=id)
        student.delete()
        return JsonResponse("Deleted Successfully",safe=False)
# Create your views here.
