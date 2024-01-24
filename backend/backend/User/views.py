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


        #get AdminndashBoard details accourding to registration  
class CustomUserDetailsView(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()

class CustomUserDetailsView(APIView):
    def get(self, request):
        # Retrieve all CustomUser objects from the database
        users = CustomUser.objects.all()

        # Serialize the data using CustomUserSerializer with the required fields
        serializer = CustomUserSerializer(users, many=True, fields=['id', 'fullname', 'username', 'email'])

        # Return the serialized data as JSON response without wrapping it in a dictionary
        return Response(serializer.data, status=status.HTTP_200_OK)


# Delete the user
class CustomUserDeleteView(APIView):
    def delete(self, request, user_id):
        try:
            # Retrieve the CustomUser object by ID
            user = CustomUser.objects.get(pk=user_id)
            user.delete()
            return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        
        
