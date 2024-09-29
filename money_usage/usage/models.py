from django.db import models

# Create your models here.
class Income(models.Model):
    pub_date = models.DateField("published_date")
    income = models.DecimalField(max_digits=16, decimal_places=4)
    desc = models.CharField(max_length=255)
    
    