from django.db import models

from django.db import models
from django.forms import PasswordInput


class form(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    PasswordInput = models.TextField()

    def __str__(self):
        return self.email
