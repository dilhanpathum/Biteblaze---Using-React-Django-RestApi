from django.shortcuts import render
from rest_framework import viewsets


from .models import Order
from. models import Food

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.response import Response
from biteblaze.serializers import OrderSerializer
from rest_framework.views import APIView
from biteblaze.serializers import FoodSerializer






    
class OrderView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
@csrf_exempt
def orderApi(request):

      if request.method=='POST':
        order_data=JSONParser().parse(request)
        order_serializer=OrderSerializer(data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
      
   


class FoodView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = FoodSerializer
    queryset = Food.objects.all()

    
    @csrf_exempt
    def foodApi(request,id=0):

        if request.method=='GET':
            food = Food.objects.all()
            food_serializer=FoodSerializer(food,many=True)
            return JsonResponse(food_serializer.data,safe=False)
        
        elif request.method=='POST':
            food_data=JSONParser().parse(request)
            food_serializer=FoodSerializer(data=food_data)
            if food_serializer.is_valid():
                food_serializer.save()
                return JsonResponse("Food Added Successfully",safe=False)
            return JsonResponse("Failed to Add Food",safe=False)
    
        elif request.method=='DELETE':
            food=Food.objects.get(id=id)
            food.delete()
            return JsonResponse("Food Deleted Successfully",safe=False)

class MenuView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = FoodSerializer
    queryset = Food.objects.all()
    @csrf_exempt
    def foodApi(request,id=0):

        if request.method=='GET':
            food = Food.objects.all()
            food_serializer=FoodSerializer(food,many=True)
            return JsonResponse(food_serializer.data,safe=False)



#orderHistory
class GetOrderView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    @csrf_exempt
    def orderApi(request):

        if request.method=='GET':
            order = Order.objects.all()
            order_serializer=OrderSerializer(Order,many=True)
            return JsonResponse(order_serializer.data,safe=False)
        

#cart Views
class AddToCartView(APIView):

    permission_classes = [IsAuthenticated]




    def post(self, request, menu_item_id):

        try:

            print(f"Processing request for menu item ID: {menu_item_id}")




            menu_item = get_object_or_404(Food, pk=menu_item_id)

            cart_item, created = Food.objects.get_or_create(

                menu_item=menu_item,

                user=request.user,

            )




            if not created:

                cart_item.quantity += 1

                cart_item.save()




            serializer = FoodSerializer(cart_item)

            print(f"Successfully processed request for menu item ID: {menu_item_id}")

            return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)




        except Food.DoesNotExist:

            return Response({"error": "Menu item not found"}, status=status.HTTP_404_NOT_FOUND)




        except Exception as e:

            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




class MenuItemList(generics.ListCreateAPIView):

    queryset = Food.objects.all()

    serializer_class = FoodSerializer








