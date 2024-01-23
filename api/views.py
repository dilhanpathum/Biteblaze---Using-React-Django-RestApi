from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from .models import MenuItem, CartItem
from .serializers import MenuItemSerializer, CartItemSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
class AddToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, menu_item_id):
        try:
            print(f"Processing request for menu item ID: {menu_item_id}")

            menu_item = get_object_or_404(MenuItem, pk=menu_item_id)
            cart_item, created = CartItem.objects.get_or_create(
                menu_item=menu_item,
                user=request.user,
            )

            if not created:
                cart_item.quantity += 1
                cart_item.save()

            serializer = CartItemSerializer(cart_item)
            print(f"Successfully processed request for menu item ID: {menu_item_id}")
            return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

        except MenuItem.DoesNotExist:
            return Response({"error": "Menu item not found"}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MenuItemList(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class CartItemList(generics.ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_cart(request):
    cart_items = CartItem.objects.filter(user=request.user)
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)