from django.shortcuts import render
from rest_framework import viewsets
from .serializer import CustomUserSerializer
from .models import CustomUser
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
class CustomUserView(viewsets.ModelViewSet):

    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()




class GetUserView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user
        # 'user' now contains the User object associated with the token
        return Response({'id':user.id,'username': user.username,'role': user.role})