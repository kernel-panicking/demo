from django.shortcuts import render

# Create your views here.
from .models import Books
from .serializer import BookSerializer
from rest_framework import viewsets


class BookViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerializer