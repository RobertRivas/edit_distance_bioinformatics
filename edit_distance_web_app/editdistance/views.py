from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import EditDistanceWordsSerializer
from .models import EditDistanceWords

class EditDistanceWordsViewSet(viewsets.ModelViewSet):
    queryset = EditDistanceWords.objects.all().order_by('word_one')
    serializer_class = EditDistanceWordsSerializer


