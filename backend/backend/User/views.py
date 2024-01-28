from django.shortcuts import render
from rest_framework import viewsets,status
from .serializer import CustomUserSerializer
from .models import CustomUser
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import Token
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
    

class userViewSet(APIView):

    def validateToken(self, token):
        if token and token.startswith('Token '):
            token_key = token.split(' ')[1]
            try:
                token_obj = Token.objects.get(key=token_key)
                user = token_obj.user
                return user
            except Token.DoesNotExist:
                return False
        else:
            return False

    def get(self, request, *args, **kwargs):
        provided_token = request.META.get('HTTP_AUTHORIZATION')
        isValidToken = self.validateToken(provided_token)

        if isValidToken:
            userId = isValidToken.id
            userInstance = CustomUserSerializer(instance=isValidToken)
            userData = userInstance.data
            try:
                User = CustomUser.objects.get(userId=userId)

                return Response({"Userdata": userData}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"message": "User Not Found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"message": "Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)


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

        
        
