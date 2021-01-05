from django.contrib.auth.models import User, Group
from rest_framework import serializers
from.models import EditDistanceWords

class EditDistanceWordsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EditDistanceWords
        fields = ('word_one', 'word_two', 'word_one_calc', 'word_two_calc', 'distance')


