from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer, CategoryProductSerializer, ProductFullSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductFullSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, *args, **kwargs):
        category = self.get_object()
        serializer = CategoryProductSerializer(instance=category)
        return Response(serializer.data)