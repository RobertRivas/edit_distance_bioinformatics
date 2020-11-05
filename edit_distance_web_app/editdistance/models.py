from django.db import models

# Create your models here.


class EditDistanceWords(models.Model):
    word_one = models.CharField(max_length=60)
    word_two = models.CharField(max_length=60)

    # def __str__(self):
    #     return self.word_one, self.word_two
